# SHP Plugin Registry

Central index of plugins distributed via the **SHP Plugin Manager**.

The `manifest.json` at the root of this repo is fetched by the manager on each Refresh. Each entry points to a GitHub repo whose Releases (tagged `v*.*.*`) provide the Windows VST3 build as a `.zip` asset.

## Adding a new plugin

1. Add an entry to `plugins` in `manifest.json` (see schema below).
2. Optionally drop an icon at `icons/<slug>.png` and update `icon_url`.
3. Commit and push. The manager picks it up on its next Refresh — no app update needed.

## Manifest schema (v1)

```jsonc
{
  "schema_version": 1,
  "min_manager_version": "0.1.0",   // managers older than this should refuse to use
  "plugins": [
    {
      "id":               "shp.vocalstrip",          // unique, stable forever
      "slug":             "vocalstrip",              // short id for paths/filenames
      "name":             "SHP Vocal Strip",         // display name in the manager
      "category":         "channel-strip",
      "github_repo":      "akheron98/shp-vocalstrip",
      "asset_pattern":    "shp-vocalstrip-{version}-win64.zip",
      "vst3_bundle_name": "SHP Vocal Strip.vst3",    // exact folder name to install
      "description":      "…",
      "icon_url":         "https://raw.githubusercontent.com/akheron98/shp-plugin-registry/main/icons/vocalstrip.png"
    }
  ]
}
```

**Critical fields:**

- `asset_pattern` — used to find the right `.zip` among a Release's assets. `{version}` is substituted with the tag minus the leading `v`.
- `vst3_bundle_name` — must match the exact folder name produced by the plugin's CMake build (including spaces). The manager installs/uninstalls by this name.
- `id` — must never change once published. The manager keys its install state by `id`.

## Releasing a plugin

In the plugin's repo, on the `main` branch:

```bash
git tag v0.1.1
git push --tags
```

The plugin's `.github/workflows/release.yml` builds the VST3 on `windows-latest`, zips the bundle as `<repo-name>-<version>-win64.zip`, and attaches it to a GitHub Release. The manager will see the new version on its next Refresh.
