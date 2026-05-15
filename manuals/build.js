const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { marked } = require('marked');

const srcDir = path.join(__dirname, 'src');
const templateStr = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// Config mapping for each plugin
const pluginConfigs = {
  'vocalstrip': {
    title: 'Vocal<br/>Strip',
    fulltitle: 'VOCAL STRIP',
    subtitle: 'VOCAL FRY / GROWL — 500-SERIES RACK',
    code: 'SHP-VS-500',
    sn: 'VS'
  },
  'guitarstrip': {
    title: 'Guitar<br/>Strip',
    fulltitle: 'GUITAR STRIP',
    subtitle: 'GUITAR EQ / CHUG / SATURATION — 500-SERIES RACK',
    code: 'SHP-GS-500',
    sn: 'GS'
  },
  'bassstrip': {
    title: 'Bass<br/>Strip',
    fulltitle: 'BASS STRIP',
    subtitle: 'BASS EQ / DYNAMICS / AMP — 500-SERIES RACK',
    code: 'SHP-BS-500',
    sn: 'BS'
  },
  'multibandsaturator': {
    title: 'Multiband<br/>Saturator',
    fulltitle: 'MULTIBAND SATURATOR',
    subtitle: 'TUBE SATURATION — 500-SERIES RACK',
    code: 'SHP-MB-500',
    sn: 'MB'
  },
  'doubletracking': {
    title: 'Double<br/>Tracking',
    fulltitle: 'DOUBLE TRACKING',
    subtitle: 'STEREO WIDENER — 500-SERIES RACK',
    code: 'SHP-DT-500',
    sn: 'DT'
  }
};

async function buildPDFs() {
  const browser = await puppeteer.launch();

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('-manual.md'));

  for (const file of files) {
    const slug = file.replace('-manual.md', '');
    const config = pluginConfigs[slug];
    if (!config) continue;

    console.log(`Processing ${slug}...`);

    const mdPath = path.join(srcDir, file);
    const mdContent = fs.readFileSync(mdPath, 'utf8');

    // Parse Markdown to HTML tokens, but let's just do a basic split by H2
    const sections = mdContent.split(/^## /m).filter(s => s.trim().length > 0);
    
    // First section is usually title + intro
    let contentHtml = '';
    let pageNum = 3;

    for (let i = 1; i < sections.length; i++) {
      let section = '## ' + sections[i];
      let html = marked.parse(section);
      
      // Clean up lists to match SHP table style or just simple lists
      // For simplicity, we just inject it into a page container
      
      let sectionMatch = section.match(/^## (.*)/);
      let sectionTitle = sectionMatch ? sectionMatch[1].toUpperCase() : `MOD-0${i}`;

      let pageHtml = `
      <section class="page page--inside">
        <div class="r-head">
          <span><span class="blood">SHP</span> · ${config.fulltitle} · MANUEL</span>
          <span>${sectionTitle} · CH. 0${i}</span>
        </div>

        <div style="margin-top: 5mm;">
          ${html}
        </div>

        <div class="r-foot">
          <span>${config.code} · v1.0</span>
          <span class="pageno">0${pageNum}</span>
        </div>
      </section>
      `;
      contentHtml += pageHtml;
      pageNum++;
    }

    // Apply template
    let finalHtml = templateStr
      .replace(/\{\{TITLE\}\}/g, config.title)
      .replace(/\{\{FULLTITLE\}\}/g, config.fulltitle)
      .replace(/\{\{SUBTITLE\}\}/g, config.subtitle)
      .replace(/\{\{CODE\}\}/g, config.code)
      .replace(/\{\{SN\}\}/g, config.sn)
      .replace('{{CONTENT}}', contentHtml);

    // To ensure the CSS and images load correctly, we write a temp html file
    const tempHtmlPath = path.join(__dirname, `${slug}.html`);
    fs.writeFileSync(tempHtmlPath, finalHtml);

    const pdfPath = path.join(__dirname, `${slug}.pdf`);
    
    const page = await browser.newPage();
    await page.goto(`file:///${tempHtmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true
    });

    // Cleanup temp HTML
    fs.unlinkSync(tempHtmlPath);
    console.log(`Generated ${pdfPath}`);
  }

  await browser.close();
}

buildPDFs().catch(console.error);
