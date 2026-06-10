# Recherche Opérationnelle - Problème de Transport

Ce projet est une application web interactive conçue pour résoudre des **problèmes de transport** (un cas classique de la Recherche Opérationnelle). Elle permet de déterminer une solution de base initiale puis d'optimiser cette solution pour minimiser le coût total de transport.

## 🚀 Fonctionnalités

### 1. Recherche de la solution de base
L'application propose trois méthodes classiques pour trouver une première solution réalisable :
- **MINILI (Minimum Ligne)** : Alloue le maximum possible à la case de coût minimal dans chaque ligne.
- **MINICO (Minimum Colonne)** : Alloue le maximum possible à la case de coût minimal dans chaque colonne.
- **Différence Maximale (Méthode de Vogel)** : Utilise les pénalités (différence entre les deux coûts les plus bas) pour orienter les allocations.

### 2. Optimisation (Solution Optimale)
Une fois la solution de base obtenue, l'outil utilise :
- **Algorithme du Stepping Stone** : Pour identifier les cycles d'amélioration.
- **Méthode des Potentiels (MODI)** : Calcul des variables duales ($V_x$ et $V_y$) pour évaluer l'optimalité via les coûts marginaux $\sigma(i, j)$.

### 3. Visualisation Dynamique
- **Graphe de Transport** : Représentation visuelle via SVG des flux entre les sources (lignes) et les destinations (colonnes).
- **Tableaux Interactifs** : Saisie dynamique des données et affichage des étapes de calcul.

## 🛠️ Technologies utilisées

- **HTML5 / CSS3** : Structure et mise en forme (utilisant Bootstrap pour le responsive).
- **JavaScript (Vanilla)** : Logique algorithmique, manipulation du DOM et génération de SVG.
- **SVG** : Pour la visualisation graphique du réseau de transport.

## 📖 Comment utiliser

1.  **Configuration** : Entrez le nombre de lignes (sources) et de colonnes (destinations), puis cliquez sur **OK**.
2.  **Saisie des données** : 
    - Remplissez la matrice des coûts.
    - Saisissez les quantités disponibles (en rouge à droite) et les quantités demandées (en rouge en bas).
    - *Optionnel* : Utilisez le bouton "Default data" pour charger un exemple pré-configuré (nécessite une grille 4x6).
3.  **Sauvegarde** : Cliquez sur **Save** pour figer les données.
4.  **Choix de la méthode** : Sélectionnez **MINICO**, **MINILI** ou **DIFFERENCE MAXIMALE**.
5.  **Optimisation** : 
    - Le coût total $Z$ s'affiche.
    - Cliquez sur **Actualiser** pour suivre les itérations de l'algorithme de Stepping Stone jusqu'à l'obtention de la solution optimale.

## 📝 Auteur

Projet réalisé dans le cadre d'études en Recherche Opérationnelle.
