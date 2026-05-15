# Manuel d'Utilisation : SHP Vocal Strip

Bienvenue dans le manuel d'utilisation du **SHP Vocal Strip**. Ce plugin est conçu pour offrir un flux de travail complet et intuitif pour le traitement des voix, intégrant des filtres, une égalisation dédiée, des contrôles de dynamique (compression), un de-esseur, de la saturation et un limiteur final.

## 1. Section Entrée (Input) & Filtres

Cette section vous permet de gérer le niveau de votre signal entrant et de nettoyer les fréquences indésirables avant tout autre traitement.

*   **Input (Entrée)** : Ajuste le gain du signal entrant de -24 dB à +24 dB. Idéal pour compenser un enregistrement trop faible ou trop fort.
*   **HPF (High Pass Filter - Filtre Passe-Haut)** : Bouton d'activation du filtre passe-haut.
*   **LPF (Low Pass Filter - Filtre Passe-Bas)** : Bouton d'activation du filtre passe-bas.
*   **Lo Cut (Coupe-Bas)** : Règle la fréquence de coupure du filtre passe-haut (de 0 Hz à 400 Hz). Utile pour supprimer les bruits de pas ou les grondements (rumble).
*   **Hi Cut (Coupe-Haut)** : Règle la fréquence de coupure du filtre passe-bas (de 8000 Hz à 22000 Hz). Permet d'atténuer les sifflements aigus extrêmes.

## 2. Égalisation Vocale (Vocal EQ)

Une section d'égalisation (EQ) taillée sur mesure pour les voix, permettant de sculpter le corps, la présence et l'air du signal.

*   **Low (Graves)** : Contrôle l'atténuation ou l'amplification des fréquences graves (-100 à +100).
*   **Low Freq (Fréquence Grave)** : Définit la fréquence d'action pour la bande des graves (80 Hz à 240 Hz).
*   **Mid (Médiums)** : Contrôle l'atténuation ou l'amplification des fréquences médiums (-100 à +100).
*   **Mid Freq (Fréquence Médium)** : Définit la fréquence d'action pour la bande des médiums (250 Hz à 2200 Hz).
*   **High (Aigus)** : Ajuste le niveau des hautes fréquences (-100 à +100).
*   **Tone (Tonalité)** : Contrôle d'inclinaison tonale globale (tilt EQ) pour rendre la voix instantanément plus sombre ou plus brillante.
*   **High Mode (Mode Aigu)** : Modifie le comportement de la bande des aigus. Options disponibles :
    *   *Top* : Agit sur les fréquences d'air et de brillance extrêmes.
    *   *Presence* : Met en avant l'intelligibilité de la voix.
    *   *Air* : Ajoute une ouverture douce dans les très hautes fréquences.

## 3. Dynamique (Dynamics : Control & Push)

Le SHP Vocal Strip possède deux étages de compression distincts pour un contrôle total de la dynamique vocale.

### Compresseur "Control"
Ce compresseur est conçu pour lisser les écarts de volume généraux.
*   **Control (Intensité)** : Gère le niveau de compression appliqué (0 à 100).
*   **Control Attack (Attaque)** : Définit la rapidité d'enclenchement de la compression (1 ms à 80 ms).
*   **Control Release (Relâchement)** : Définit la vitesse à laquelle la compression se relâche (10 ms à 500 ms).

### Compresseur "Push"
Ce compresseur est plus agressif, conçu pour "pousser" la voix en avant dans le mix (souvent utilisé en parallèle).
*   **Push (Intensité)** : Gère le niveau de compression appliqué (0 à 100).
*   **Push Attack (Attaque)** : Temps d'attaque (1 ms à 80 ms).
*   **Push Release (Relâchement)** : Temps de relâchement (10 ms à 500 ms).
*   **Push Mix (Mixage)** : Permet de mixer le signal compressé avec le signal sec (compression parallèle) de 0 % à 100 %.
*   **Push Mode (Mode)** : Définit le caractère du compresseur.
    *   *Smooth* : Compression douce et transparente.
    *   *Aggro* : Compression agressive, idéale pour le rock, métal ou le rap.

## 4. De-Esser & Saturation

*   **De-Esser** : Contrôle l'intensité de la réduction des sibilances (sons "S", "Ch", etc.).
*   **Ess Freq (Fréquence du De-Esser)** : Cible la fréquence exacte des sibilances à atténuer (4200 Hz à 9500 Hz).
*   **Saturate (Saturation)** : Ajoute des harmoniques et du caractère au son (0 à 100).
*   **Saturate Mode (Mode de Saturation)** :
    *   *Smooth* : Ajout harmonique léger (type lampe douce).
    *   *Rich* : Saturation plus épaisse et chaleureuse.
    *   *Aggro* : Distorsion prononcée pour des effets créatifs.

## 5. Section Sortie (Output) & Global

*   **Output (Sortie)** : Gain final du plugin (-24 dB à +24 dB).
*   **Limiter (Limiteur)** : Active un limiteur final en bout de chaîne pour éviter de saturer (clipping) la piste.
*   **Limiter Ceiling (Plafond du Limiteur)** : Définit le niveau maximum que le signal ne dépassera pas (-18 dBFS à 0 dBFS).
*   **8x Oversampling (Suréchantillonnage)** : Active le suréchantillonnage x8 interne pour réduire l'aliasing (repliement de spectre) généré par la compression et la saturation. Améliore la qualité sonore au prix d'une légère consommation CPU supplémentaire.

## 6. Options de Bypass (Contournement)

Le plugin permet de contourner spécifiquement certaines sections pour écouter rapidement la différence Avant/Après.

*   **Bypass** : Contourne l'ensemble du plugin.
*   **Bypass Input/Filter** : Désactive uniquement la section gain d'entrée et filtres.
*   **Bypass Vocal EQ** : Désactive l'égaliseur.
*   **Bypass Control/Push** : Désactive les deux étages de compression.
*   **Bypass De-Ess/Saturate** : Désactive le de-esseur et la saturation.
