# Manuel d'Utilisation : SHP Guitar Strip

Bienvenue dans le manuel d'utilisation du **SHP Guitar Strip**. Ce plugin est spécialement conçu pour le mixage des guitares (électriques et acoustiques), offrant des filtres de nettoyage, un égaliseur adapté, une gestion de la dynamique ("Chug" et Compression) et une saturation polyvalente.

## 1. Section Entrée (Input) & Filtres

Cette section prépare le signal de la guitare avant le traitement principal.

*   **Input (Entrée)** : Ajuste le gain du signal entrant de -18 dB à +18 dB.
*   **HPF (High Pass Filter)** : Active le filtre passe-haut.
*   **LPF (Low Pass Filter)** : Active le filtre passe-bas.
*   **Lo Cut (Coupe-Bas)** : Ajuste la fréquence de coupure du passe-haut (50 Hz à 400 Hz) pour nettoyer le bas du spectre (rumble).
*   **Hi Cut (Coupe-Haut)** : Ajuste la fréquence de coupure du passe-bas (4000 Hz à 16000 Hz). Très utile pour supprimer le "fizz" typique des simulations d'amplis saturés (généralement autour de 6 kHz - 10 kHz).

## 2. Égalisation Guitare (Guitar EQ)

*   **Low (Graves)** : Contrôle du niveau des graves (-100 à +100).
*   **Low Mode (Mode Grave)** : Alterne entre *Shelf* (étagère) et *Peak* (cloche).
*   **Low Freq (Fréquence Grave)** : Règle la fréquence cible des graves (60 Hz à 250 Hz).
*   **Mid (Médiums)** : Contrôle du niveau des médiums (-100 à +100). Crucial pour la place de la guitare dans le mix.
*   **Mid Tone (Tonalité Médium)** : Règle la fréquence cible des médiums (350 Hz à 4000 Hz).
*   **High (Aigus)** : Contrôle du niveau des aigus (-100 à +100).
*   **High Focus (Focus Aigu)** : Choix de la zone d'action (*Presence* pour trancher dans le mix, *Top* pour la brillance pure).
*   **De-Harsh** : Outil dynamique spécialisé pour réduire les fréquences agressives ou stridentes (souvent dans les haut-médiums) de 0 à 100.

## 3. Dynamique (Chug & Compress)

Le SHP Guitar Strip possède deux outils de dynamique : un compresseur standard et un contrôleur de "Chug" (étouffement des cordes/palm mute).

### Chug Control (Contrôle des Palm Mutes)
Outil dynamique qui compresse spécifiquement les basses fréquences gonflées lors des techniques de "Palm Mute" (Chug).
*   **Chug Control** : Intensité de l'effet (0 à 100).
*   **Chug Attack (Attaque)** : Vitesse de réaction sur les palm mutes (1 ms à 30 ms).
*   **Chug Release (Relâchement)** : Temps de relâchement (40 ms à 260 ms).

### Compresseur Global
*   **Compress (Intensité)** : Niveau de compression globale du signal (0 à 100).
*   **Comp Attack (Attaque)** : Temps d'attaque (1 ms à 40 ms).
*   **Comp Release (Relâchement)** : Temps de relâchement (30 ms à 250 ms).
*   **Comp Ratio (Ratio)** : Taux de compression de 1.2:1 (léger) à 10.0:1 (limitation lourde).
*   **Comp Mix (Mixage)** : Mixage wet/dry pour de la compression parallèle (0 % à 100 %).

## 4. Saturation

*   **Saturate (Saturation)** : Quantité d'harmoniques ajoutée au signal (0 à 100).
*   **Saturate Mode (Mode)** :
    *   *Smooth* : Saturation chaude et transparente.
    *   *Character* : Saturation plus typée, avec une coloration prononcée.

## 5. Section Sortie (Output) & Global

*   **Output (Sortie)** : Gain final du plugin (-12 dB à +12 dB).
*   **Limiter (Limiteur)** : Active un limiteur en bout de chaîne.
*   **Limiter Ceiling (Plafond)** : Niveau de sortie maximum (-48 dBFS à 0 dBFS).

## 6. Options de Bypass (Contournement)

*   **Bypass** : Contourne l'ensemble du plugin.
*   **Bypass Input/Filter** : Désactive l'entrée et les filtres passe-haut/bas.
*   **Bypass Equaliser** : Désactive l'EQ et le De-Harsh.
*   **Bypass Chug/Compress** : Désactive les contrôles de dynamique.
*   **Bypass Saturate** : Désactive la saturation.
