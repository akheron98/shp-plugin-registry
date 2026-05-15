# Manuel d'Utilisation : SHP Double Tracking

Bienvenue dans le manuel d'utilisation du **SHP Double Tracking**. Ce plugin est conçu pour transformer une piste mono (ou stéréo étroite) en une piste stéréo large et épaisse, en simulant l'effet d'un doublement de prise (double tracking). Il utilise la micro-modulation de hauteur (pitch), le délai (tightness) et la diffusion de phase pour créer un effet stéréo naturel, large et sans annulation de phase.

## 1. Section Voices (Voix)

Cette section gère les clones (voix) ajoutés au signal d'origine.

*   **Voices (Voix)** : Définit le nombre de clones générés (de 1 à 4 voix). Plus il y a de voix, plus l'effet est dense.
*   **Tightness (Précision)** : Contrôle le décalage temporel moyen (délai) entre les voix (de 1 ms à 50 ms). Un réglage bas (ex: 5 ms) donne un effet très serré (type flanger/chorus léger), tandis qu'un réglage haut (ex: 30 ms) donne une vraie sensation de double prise.
*   **Drift (Dérive)** : Ajuste la quantité de désaccordage (pitch drift) entre les voix (0 à 30 cents). Crée l'imperfection naturelle d'une seconde prise.
*   **Spread (Écartement)** : Écarte les voix générées dans l'espace stéréo (0 % à 100 %). À 100%, les voix sont panoramiquées à l'extrême gauche et droite.
*   **Bypass Voices** : Désactive uniquement la génération des voix.

## 2. Section Motion (Mouvement)

La section Motion anime le décalage temporel (tightness) et le désaccordage (drift) pour rendre l'effet plus humain et moins statique (évitant l'effet robotique d'un délai fixe).

*   **Rate (Vitesse)** : Vitesse de la modulation (0.05 Hz à 4.0 Hz).
*   **Depth (Profondeur)** : Intensité de la modulation (0 % à 100 %).
*   **Shape (Forme d'onde)** : Définit le type de mouvement :
    *   *Smooth Random* : Aléatoire lissé, imite les variations naturelles d'un musicien.
    *   *Perlin* : Bruit de Perlin, modulation organique et fluide.
    *   *LFO Sine* : Onde sinusoïdale classique (effet type Chorus).
    *   *LFO Tri* : Onde triangulaire (effet type Chorus linéaire).
*   **Sync** : Synchronise la vitesse de modulation au tempo du projet.
*   **Bypass Motion** : Désactive la modulation de mouvement (les voix resteront statiques).

## 3. Section Phase & Diffusion

Afin de garantir une parfaite compatibilité mono (mono-compatibilité) et d'élargir le signal de manière transparente, cette section diffuse la phase des fréquences.

*   **Low Cut (Coupe-Bas)** : Les fréquences en dessous de ce seuil (20 Hz à 300 Hz) ne sont pas affectées par la diffusion et restent fermement au centre (mono). Crucial pour la basse et le kick.
*   **Hi Cut (Coupe-Haut)** : Les fréquences au-dessus de ce seuil (4000 Hz à 20000 Hz) ne sont pas affectées, évitant un son trop diffus ou artificiel dans les extrêmes aigus.
*   **Diffusion** : Règle la quantité d'étalement temporel de la phase (0 % à 100 %). Adoucit l'effet de doublement et limite les problèmes de filtrage en peigne (comb filtering).
*   **Stages (Étages)** : Règle le nombre d'étages du réseau de diffusion (4, 6, 8, ou 12). Plus d'étages = une diffusion plus dense (type réverbération).
*   **Symmetry (Symétrie)** : Ajuste la symétrie de la diffusion entre le canal gauche et droit (0 % à 100 %).
*   **Bypass Phase** : Désactive uniquement le module de diffusion de phase.

## 4. Section Master (Sortie)

*   **Width (Largeur Stéréo)** : Contrôle global de la largeur de l'image stéréo en sortie du plugin (0 % = Mono, 100 % = Normale, 200 % = Extra large).
*   **Mix** : Balance entre le signal original et le signal doublé (0 % à 100 %). Pour un effet d'élargissement pur sur un synthé, 100 % est souvent utilisé. Pour épaissir une voix lead, 30 à 50 % est recommandé.
*   **Drive** : Ajoute une légère saturation au signal traité (0 % à 100 %).
*   **Character (Caractère)** : Définit la couleur de la saturation (Drive) :
    *   *Tube* : Saturation à lampes (harmoniques paires, chaleureux).
    *   *Tape* : Saturation à bande (compression dynamique, doux).
    *   *Solid* : Saturation à transistors (punchy, harmoniques impaires).
*   **Output (Sortie)** : Gain final du plugin (-24 dB à +12 dB).
*   **Mono Check** : Bascule temporairement la sortie en mono. Permet de vérifier rapidement qu'il n'y a pas d'annulation de phase (le son ne doit pas disparaître).
*   **Bypass** : Contourne l'ensemble du plugin.
