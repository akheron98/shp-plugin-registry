# Manuel d'Utilisation : SHP Bass Strip

Bienvenue dans le manuel d'utilisation du **SHP Bass Strip**. Ce plugin est la solution ultime pour le traitement de la basse, combinant égalisation avec compression dynamique par bande, saturation, simulateur d'ampli intégré et limiteur de précision.

## 1. Section Entrée (Input) & Filtres

*   **Input (Entrée)** : Gain du signal entrant de -24 dB à +24 dB.
*   **HPF / LPF** : Boutons d'activation des filtres passe-haut et passe-bas.
*   **Lo Cut (Coupe-Bas)** : Fréquence de coupure (20 Hz à 400 Hz) pour maîtriser l'infra-basse.
*   **Hi Cut (Coupe-Haut)** : Fréquence de coupure (2000 Hz à 22000 Hz) pour retirer le souffle, le bruit des doigts sur les cordes ou la diaphonie de la batterie.

## 2. Bass EQ & Dynamique par Bande

L'égaliseur du Bass Strip est unique : il permet de compresser *dynamiquement* les bandes de graves et de bas-médiums pour assurer une assise solide sans effet "boomy" incontrôlable.

*   **Low (Graves)** : Niveau global de la bande basse (-100 à +100).
*   **Low Comp (Compression des Graves)** : Compresse dynamiquement uniquement les basses fréquences (0 à 100). Idéal pour stabiliser les notes graves d'une basse jouée aux doigts.
*   **Low Mid (Bas-Médiums)** : Niveau de la bande bas-médiums (-100 à +100).
*   **Low Mid Freq (Fréquence Bas-Médium)** : Cible de 200 Hz à 900 Hz. C'est ici que se trouve le "corps" ou le "carton" de la basse.
*   **Low Mid Comp (Compression Bas-Médiums)** : Compresse dynamiquement cette bande spécifique.
*   **Mid (Médiums)** : Niveau des médiums (-100 à +100). C'est ce qui donne l'attaque et la définition au médiator ou au slap.
*   **Mid Freq (Fréquence Médium)** : Cible de 700 Hz à 3200 Hz.
*   **Bright (Brillance)** : Active un boost spécial dans les aigus pour faire ressortir le claquant de l'instrument.

## 3. Dynamique, Enhance & Saturation

*   **Compress (Compression Globale)** : Compresseur large bande optimisé pour lisser le volume global de la basse (0 à 100).
*   **Enhance (Amélioration)** : Processus psychoacoustique ajoutant du sustain, de l'épaisseur ou clarifiant la basse dans le mix (0 à 100).
*   **Saturate (Saturation)** : Niveau de saturation (0 à 100) pour faire percer la basse sur les petits haut-parleurs.
*   **Saturate Mode (Mode)** :
    *   *Smooth* : Lampe subtile.
    *   *Hot* : Saturation chaude et poussée.
    *   *Grit* : Distorsion agressive idéale pour le métal.
    *   *Feather* : Saturation spéciale, "duveteuse" et texturée.

## 4. Simulateur d'Ampli (Amp Sim)

Un simulateur d'amplificateur basse intégré pour donner un son "mix-ready" à une basse enregistrée en DI (Direct Input).

*   **Amp Mode (Modèle d'Ampli)** :
    *   *Bypass* : Désactivé.
    *   *Clean* : Ampli basse moderne et droit.
    *   *Grit* : Ampli type lampes poussées.
    *   *Grind* : Haut niveau de gain, idéal rock lourd.
    *   *Fuzz* : Effet fuzz massif.
*   **Amp Input (Gain d'Entrée Ampli)** : Pousse le signal dans la simulation d'ampli (-12 dB à +12 dB).
*   **Amp Mix (Mixage)** : Mix parallèle entre le signal direct traité (DI) et le simulateur d'ampli (0 % à 100 %).

## 5. Section Sortie (Output) & Global

*   **Output (Sortie)** : Gain final de -24 dB à +24 dB.
*   **Limiter (Limiteur)** : Limiteur transparent pour rattraper les derniers pics (clipping).
*   **Limiter Ceiling (Plafond)** : Règle la limite absolue de sortie (-18 dBFS à 0 dBFS).
*   **8x Oversampling** : Suréchantillonnage interne haute qualité pour la saturation, l'ampli et le compresseur.

## 6. Options de Bypass (Contournement)

*   **Bypass** : Contourne tout le plugin.
*   **Bypass Input/Filter** : Désactive l'entrée/filtres.
*   **Bypass Bass EQ** : Désactive l'égalisation et sa compression multibande.
*   **Bypass Compress/Enhance** : Désactive la compression globale et l'enhancer.
*   **Bypass Saturate** : Désactive l'étage de saturation.
*   **Bypass Amp** : Désactive le simulateur d'ampli.
