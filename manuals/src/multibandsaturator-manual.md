# Manuel d'Utilisation : SHP Multiband Tube Saturator

Bienvenue dans le manuel d'utilisation du **SHP Multiband Tube Saturator**. Ce plugin est un outil de saturation à lampes avancé, divisant le spectre audio en quatre bandes distinctes. Cela vous permet d'ajouter de la chaleur, du gras ou du tranchant exactement là où c'est nécessaire, sans affecter le reste du spectre. Idéal pour le traitement de bus, le mastering, ou la conception sonore créative.

## 1. Section Globale

*   **Master Output (Sortie Générale)** : Ajuste le niveau de sortie final de -24 dB à +24 dB.
*   **Oversampling (Suréchantillonnage)** : Le traitement de saturation non linéaire génère des harmoniques qui peuvent causer de l'aliasing (repliement de spectre) numérique. L'oversampling prévient ce phénomène.
    *   Options disponibles : *1x (Désactivé), 2x, 4x, 8x, 16x*.
    *   *Note : Des valeurs élevées augmenteront de manière significative l'utilisation du processeur (CPU).*

## 2. Crossovers (Points de Croisement)

Le signal est divisé en 4 bandes (Graves, Bas-Médiums, Haut-Médiums, Aigus) à l'aide de filtres séparateurs (crossovers) très transparents.

*   **Crossover 1 (Grave / Bas-Médium)** : Règle la limite entre la bande 1 et la bande 2 (20 Hz à 500 Hz).
*   **Crossover 2 (Bas-Médium / Haut-Médium)** : Règle la limite entre la bande 2 et la bande 3 (100 Hz à 5000 Hz).
*   **Crossover 3 (Haut-Médium / Aigu)** : Règle la limite entre la bande 3 et la bande 4 (500 Hz à 20000 Hz).

## 3. Contrôles par Bande

Le plugin propose 4 bandes de traitement, chacune offrant les mêmes paramètres pour un contrôle précis.

*   **Bande 1 : Bass (Graves)**
*   **Bande 2 : Lower Mid (Bas-Médiums)**
*   **Bande 3 : Upper Mid (Haut-Médiums)**
*   **Bande 4 : Top End (Aigus)**

Pour chacune de ces bandes, vous disposez des réglages suivants :

*   **Saturation (Niveau de Saturation)** : Contrôle la quantité de "drive" et d'harmoniques injectée dans le circuit à lampes pour cette plage de fréquences (0 % à 100 %).
*   **Intensity (Intensité / Mix)** : Agit comme un réglage *Wet/Dry* spécifique à la bande. À 100%, vous n'entendez que le signal saturé de cette bande. En baissant ce paramètre, vous réintégrez le signal sec original de cette même bande pour une saturation parallèle.
*   **Output (Volume de la Bande)** : Permet d'ajuster le gain de la bande après la saturation (-12 dB à +12 dB). Vous pouvez ainsi utiliser le plugin comme un égaliseur multibande de couleur.
*   **Solo** : Coupe toutes les autres bandes pour vous permettre d'écouter et de régler précisément uniquement la bande sélectionnée.
*   **Solo Saturation (Écoute Delta)** : Permet d'écouter *uniquement le signal de saturation généré* par le plugin, en soustrayant le signal original. Utile pour entendre exactement ce que l'algorithme à lampes ajoute au son.
*   **Bypass (Contournement)** : Désactive le traitement de saturation pour cette bande spécifique, laissant passer le signal pur.
