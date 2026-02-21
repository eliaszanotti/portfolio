# Portfolio Muséal - Guide de Contenu

## Concept Global

Votre portfolio est un **musée virtuel** où chaque pièce/œuvre représente un projet, une compétence ou une réalisation. Chaque visiteur "traverse" les salles d'exposition.

---

## Page d'Accueil - "Le Hall d'Entrée"

### À mettre en avant absolument :

1. **Identité claire**
   - Votre nom/prénom
   - Votre titre/profil (ex: "Développeur Full-Stack", "Designer Créatif")
   - Une photo de vous ou un avatar stylisé

2. **Accroche (Hook)**
   - Une phrase courte qui vous définit
   - Ex: *"Je construis des expériences digitales qui marquent les esprits"*
   - Ex: *"Code créatif & design réfléchi"*

3. **Navigation vers les "Salles"**
   - Boutons/cards visuels vers chaque section du musée
   - Icônes ou miniatures évocatrices

---

## Les "Salles" du Musée (Pages)

### Salle 1 - "Le Galerie des Projets" (Portfolio)

**Contenu à mettre en avant :**
- [ ] Vos **3-5 projets les plus forts**
- [ ] Pour chaque projet :
  - Titre accrocheur
  - Image/illustration de couverture
  - Description courte (1-2 phrases)
  - Technologies utilisées (badges)
  - Lien vers la demo/live
  - Lien vers le code source (GitHub)
- [ ] **Projet phare** mis en exergue (plus grand, en premier)

### Salle 2 - "L'Atelier" (Compétences)

**Contenu à mettre en avant :**
- [ ] **Stack technique** principal (front, back, tools)
- [ ] Compétences **transverses** (design, méthodo, soft skills)
- [ ] **Niveau de maîtrise** (années d'expérience, projets réalisés)
- [ ] Certifications ou formations notables

### Salle 3 - "Le Cabinet de Curiosités" (À Propos)

**Contenu à mettre en avant :**
- [ ] **Parcours** rapide (étude, première expérience, aujourd'hui)
- [ ] **Ce qui vous anime** (pourquoi vous codez/créez)
- [ ] **Valeurs** (qualité, innovation, collaboration...)
- [ ] **Centres d'intérêt** hors pro (humanise)

### Salle 4 - "Le Livre d'Or" (Contact)

**Contenu à mettre en avant :**
- [ ] **Email** professionnel
- [ ] **Réseaux** (LinkedIn, GitHub, Twitter/X...)
- [ ] **Disponibilité** (freelance, salariat, CDI...)
- [ ] Formulaire de contact simple
- [ ] **Call-to-action** clair : *"Travaillons ensemble"*

---

## Design & Ambiance Muséale

### Suggestions visuelles :
- **Fond sombre/élégant** type salle d'exposition
- **Typographie serif** pour les titres (aspect classique/musée)
- **Éclairage** spot sur les éléments importants
- **Transitions fluides** entre les "salles"
- **Cartels descriptifs** sous chaque "œuvre" (projet)

### Micro-interactions :
- Hover sur les œuvres = infos supplémentaires
- Audio subtil (optionnel) d'ambiance musée
- Parallax pour donner de la profondeur

---

## Checklist de Lancement

- [ ] Logo/identité visuelle
- [ ] Couleur principale (palette cohérente)
- [ ] Textes rédigés et relus
- [ ] Images de qualité (captures de projets)
- [ ] Liens fonctionnels
- [ ] Mobile responsive
- [ ] SEO basique (meta descriptions)
- [ ] Performance (optimisation images)

---

## Structure Suggérée des Fichiers

```
/app
  /page.tsx          # Page d'accueil (Hall d'entrée)
  /projets
    /page.tsx        # Galerie des projets
  /competences
    /page.tsx        # L'Atelier
  /apropos
    /page.tsx        # Cabinet de curiosités
  /contact
    /page.tsx        # Livre d'or
/components
  /oeuvre-card.tsx   # Carte de projet
  /salle-link.tsx    # Navigation vers salles
  /museum-layout.tsx # Layout commun
```

---

**Prochaine étape :** Choisissez 3 projets à mettre en avant et rédigez votre "accroche" d'accueil.
