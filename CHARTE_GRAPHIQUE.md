# SkillSwap — Charte Graphique

> Document de référence pour le design system de la plateforme SkillSwap.
> Toute nouvelle interface doit respecter les tokens et règles définis ici.

---

## 1. Identité de la marque

### Concept
SkillSwap est une plateforme d'échange de compétences entre étudiants, sans argent. Le design reflète trois valeurs fondamentales :

- **Clarté** — l'information est lisible, hiérarchisée, sans encombrement visuel.
- **Confiance** — le teal principal inspire sérieux et accessibilité.
- **Énergie** — l'orange CTA donne de la vie et incite à l'action.

### Nom & symbole
| Élément | Valeur |
|---------|--------|
| Nom officiel | **SkillSwap** |
| Symbole | `⇄` (double flèche horizontale) |
| Tagline | *Échangez vos compétences avec d'autres étudiants, sans argent.* |

### Logo
Le logo-icône est un carré arrondi (`border-radius: 10px`) avec un dégradé du primaire au secondaire :

```
background: linear-gradient(135deg, #0d9488 0%, #0e7490 100%)
box-shadow: 0 3px 8px rgba(13, 148, 136, 0.35)
```

Le nom « SkillSwap » est composé en **Syne 700**, `letter-spacing: -0.5px`.

---

## 2. Palette de couleurs

### Arrière-plans

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--bg` | `#f0f5f5` | Fond de page global |
| `--bg-warm` | `#e4eded` | Hover sur fond, zones secondaires |
| `--surface` | `#ffffff` | Cards, modales, navbar |
| `--surface-raised` | `#fafefe` | Surfaces légèrement surélevées |

### Typographie / Encre

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--ink` | `#0d1f1f` | Titres, texte principal |
| `--ink-2` | `#213838` | Texte secondaire fort |
| `--ink-3` | `#5a7272` | Labels, métadonnées |
| `--ink-4` | `#92acac` | Placeholders, hints |
| `--ink-5` | `#cddcdc` | Séparateurs, désactivé |

### Couleur primaire — Teal

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--accent` | `#0d9488` | Boutons primaires, focus ring, liens actifs |
| `--accent-hover` | `#0f766e` | État hover sur éléments teal |
| `--accent-muted` | `#f0fdfa` | Fond de sections recommandées, toasts info |
| `--accent-border` | `#99f6e4` | Bordures sur fonds teal |

### Couleur d'action — Orange

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--cta` | `#f97316` | Bouton principal (login, échange) |
| `--cta-hover` | `#ea6c0a` | État hover |
| `--cta-muted` | `#fff7ed` | Fond informatif orange |
| `--cta-border` | `#fed7aa` | Bordures orange |

### États sémantiques

| Rôle | Couleur | Background | Bordure |
|------|---------|-----------|---------|
| **Succès** (offre) | `#047857` | `#ecfdf5` | `#6ee7b7` |
| **Info** (cherche) | `#0e7490` | `#ecfeff` | `#67e8f9` |
| **Erreur** | `#b91c1c` | `#fef2f2` | `#fca5a5` |

### Bordures

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--border` | `rgba(13,30,30, 0.07)` | Séparateur discret |
| `--border-md` | `rgba(13,30,30, 0.13)` | Contour de composants |

---

## 3. Typographie

### Polices

| Rôle | Famille | Token |
|------|---------|-------|
| Affichage (titres, marque) | **Syne** | `--font-display` |
| Corps (tout le reste) | **Outfit** | `--font-body` |

Source : Google Fonts
```
https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800
&family=Outfit:wght@300;400;500;600;700
```

### Échelle typographique

| Élément | Taille | Poids | Police | Notes |
|---------|--------|-------|--------|-------|
| Titre de page | `26px` | `700` | Syne | `letter-spacing: -0.8px` |
| Nom de profil | `22px` | `700` | Syne | `letter-spacing: -0.6px` |
| Login title | `30px` | `700` | Syne | `letter-spacing: -1px` |
| Brand name | `19px` | `700` | Syne | `letter-spacing: -0.5px` |
| Nom étudiant (card) | `15.5px` | `600` | Outfit | — |
| Corps de texte | `15px` | `400` | Outfit | `line-height: 1.6` |
| Bio | `15px` | `400` | Outfit | `line-height: 1.75` |
| Sous-titre | `14.5px` | `400` | Outfit | — |
| Email / métadonnée | `13.5px` | `400` | Outfit | — |
| Label de section | `10.5px` | `700` | Outfit | `uppercase`, `letter-spacing: 0.8px` |
| Badge / tag | `12px` | `500` | Outfit | — |
| Hint / footer | `12.5px` | `400` | Outfit | — |

### Règle
- **Syne** uniquement pour les titres, la marque et les noms propres de sections.
- **Outfit** pour tout contenu de données, labels, boutons, formulaires.
- Ne jamais descendre sous `10.5px`.

---

## 4. Rayons (Border Radius)

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--radius-sm` | `5px` | Micro-éléments (boutons inline, confirmations) |
| `--radius` | `10px` | Inputs, boutons standards, navbar tabs |
| `--radius-lg` | `14px` | Cards étudiants, sections, logo |
| `--radius-xl` | `22px` | Login card, profil hero, recommended section |
| `--radius-full` | `9999px` | Pills (tags, toasts, badges) |

---

## 5. Ombres (Shadows)

Toutes les ombres sont basées sur la teinte encre `rgba(13,30,30, …)`.

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--shadow-xs` | `0 1px 2px rgba(13,30,30, 0.05)` | Éléments plats (inputs, petits boutons) |
| `--shadow-sm` | `0 1px 3px … / 0 1px 2px …` | Navbar, profil hero |
| `--shadow` | `0 4px 6px -1px … / 0 2px 4px …` | Cards en repos |
| `--shadow-md` | `0 10px 15px -3px … / 0 4px 6px …` | Cards au survol, toasts |
| `--shadow-lg` | `0 20px 25px -5px … / 0 10px 10px …` | Login card |

**Règle d'élévation :**
```
Fond ──── xs ──── sm ──── md ──── lg
 0          1      2       3       4   (niveaux)
```
Ne pas sauter plus d'un niveau entre un état repos et hover.

---

## 6. Espacement & Layout

| Contexte | Valeur |
|----------|--------|
| Largeur max du contenu | `740px` |
| Padding horizontal (desktop) | `1.25rem` |
| Padding horizontal (mobile) | `1rem` |
| Padding vertical | `2.5rem` (desktop) / `1.5rem` (mobile) |
| Hauteur navbar | `60px` |
| Gap entre sections | `1.25rem` |

L'interface est mono-colonne centrée. Il n'y a pas de grille multi-colonnes sur cette application.

---

## 7. Composants

### 7.1 Boutons

#### Bouton CTA (action principale)
```css
background: #f97316;
color: #fff;
padding: 12px 20px;
border-radius: var(--radius);
font-size: 15px; font-weight: 600;
box-shadow: 0 4px 14px rgba(249,115,22, 0.30);
/* hover: translateY(-1px), shadow +8px */
```
Utilisé pour : rejoindre la plateforme, échange principal.

#### Bouton Primaire (accent teal)
```css
background: #0d9488;
color: #fff;
padding: 7–9px 16–20px;
border-radius: var(--radius);
box-shadow: 0 2px 6–8px rgba(13,148,136, 0.22–0.24);
```
Utilisé pour : voir profil, sauvegarder.

#### Bouton Ghost
```css
background: none;
border: 1.5px solid var(--border-md);
color: var(--ink-3);
/* hover: bg var(--bg), border var(--ink-4), color var(--ink) */
```
Utilisé pour : annuler, réinitialiser.

#### Bouton Succès (ajout)
```css
background: #ecfdf5;
color: #047857;
border: 1.5px solid #6ee7b7;
```
Utilisé pour : ajouter une compétence.

#### Bouton Retour
```css
background: none; border: none;
color: var(--ink-3); font-size: 13.5px;
/* hover: color var(--ink) */
```
Utilisé pour : revenir à la liste.

**Règle transitions :** Tous les boutons ont `transition: 0.15s`. Les boutons avec `transform: translateY(-1px)` sur hover reviennent à `translateY(0)` sur `:active`.

---

### 7.2 Inputs / Formulaires

```css
/* Input standard */
border: 1.5px solid var(--border-md);
border-radius: var(--radius);
padding: 10px 14px;
font-size: 15px;
background: var(--surface);
box-shadow: var(--shadow-xs);

/* Focus */
border-color: #0d9488;
box-shadow: 0 0 0 3px rgba(13,148,136, 0.12);

/* Erreur */
border-color: #b91c1c;
box-shadow: 0 0 0 3px rgba(153,27,27, 0.10);
```

Labels : `10.5–11.5px`, `font-weight: 600`, `uppercase`, `letter-spacing: 0.6–0.8px`, couleur `--ink-3`.

Messages d'erreur : `12px`, couleur `--red`, affichés sous le champ.

---

### 7.3 Cards

#### Card étudiant (liste)
```
background: var(--surface)
border: 1px solid var(--border)
border-radius: var(--radius-lg)   /* 14px */
padding: 1.25rem 1.5rem
box-shadow: var(--shadow-xs)
hover → box-shadow: var(--shadow-md), translateY(-1px)
```

#### Card recommandée
```
background: var(--surface)
border: 1px solid var(--accent-border)
border-radius: var(--radius-lg)
```
Contenue dans une section avec `background: linear-gradient(135deg, #f0fdfa, #ecfeff)`.

#### Card login
```
border-radius: var(--radius-xl)   /* 22px */
padding: 3rem 2.5rem
box-shadow: var(--shadow-lg)
```

#### Card profil
```
border-radius: var(--radius-xl)
padding: 1.75rem
box-shadow: var(--shadow-sm)
```

---

### 7.4 Tags de compétences

Les tags sont des pills (`border-radius: 9999px`), `padding: 4px 11px`.

| Type | Fond | Texte | Bordure |
|------|------|-------|---------|
| `offre` (je propose) | `#ecfdf5` | `#047857` | `#6ee7b7` |
| `cherche` (je recherche) | `#ecfeff` | `#0e7490` | `#67e8f9` |

Taille : `12px`, `font-weight: 500`.
Les tags supprimables ont une croix avec `opacity: 0.45` → `0.9` au survol.

---

### 7.5 Avatars

Les avatars sont des cercles (`border-radius: 50%`) affichant les initiales du prénom.

| Taille | Classe | Dimensions | Font |
|--------|--------|-----------|------|
| Petite | `avatar--sm` | `36×36px` | `11px` |
| Moyenne | `avatar--md` | `48×48px` | `15px` |
| Grande | `avatar--lg` | `68×68px` | `22px` + `box-shadow` |

**Palette d'avatars** (assignée par index utilisateur) :

| Fond | Texte |
|------|-------|
| `#e8e4ff` | `#4a3fa0` |
| `#d4f0e8` | `#0d6e4f` |
| `#fde8c8` | `#7a4510` |
| `#d6eaf8` | `#1a5f8a` |
| `#fde2e8` | `#8a1a35` |

L'avatar de profil possède un bouton caméra superposé (`24×24px`, `border-radius: 50%`), positionné en bas à droite.

---

### 7.6 Toasts / Notifications

Positionnement : `fixed`, `top: 72px`, centré horizontalement, `border-radius: 9999px`.
Apparition : `opacity 0.2s + translateY(-4px → 0)`.
Durée d'affichage : **3 secondes**.

| Variante | Fond | Texte | Bordure |
|----------|------|-------|---------|
| `success` | `#ecfdf5` | `#047857` | `#6ee7b7` |
| `info` | `#f0fdfa` | `#0d9488` | `#99f6e4` |
| `error` | `#fef2f2` | `#b91c1c` | `#fca5a5` |

---

### 7.7 Barre de navigation

- Hauteur fixe : `60px`, `position: sticky; top: 0; z-index: 100`.
- Logo à gauche, tabs au centre, avatar+déconnexion à droite.
- Tabs dans un conteneur `bg: var(--bg)`, `border-radius: var(--radius)`.
- Tab active : `bg: var(--surface)`, `color: var(--accent)`, `font-weight: 600`.

---

### 7.8 Barre de recherche

```css
background: var(--surface)
border: 1.5px solid var(--border-md)
border-radius: var(--radius-lg)   /* 14px */
padding: 11px 16px
box-shadow: var(--shadow-sm)

/* Focus-within */
border-color: #0d9488;
box-shadow: 0 0 0 3px rgba(13,148,136, 0.10), var(--shadow-sm);
```

---

### 7.9 Section "Recommandés"

Section à fond dégradé teal léger, affichée uniquement quand la recherche est vide.

```css
background: linear-gradient(135deg, #f0fdfa 0%, #ecfeff 100%);
border: 1.5px solid var(--accent-border);
border-radius: var(--radius-xl);
padding: 1.5rem;
```

---

## 8. Mouvements & Transitions

| Usage | Propriété | Durée |
|-------|-----------|-------|
| Couleurs, bordures, ombres | `transition: 0.15s` | 150ms |
| Hover cards (transform) | `transition: 0.2s` | 200ms |
| Toast (apparition) | `opacity + transform` | 200ms |
| Bouton actif (press) | `transform: translateY(0)` | instantané |

Tous les éléments interactifs reviennent à leur position naturelle sur `:active`.
Aucune animation de chargement (skeleton, spinner) n'est définie à ce stade.

---

## 9. Accessibilité

- **Focus visible** : contour `2px solid #0d9488`, `outline-offset: 2px` sur tous les éléments focusables via clavier.
- Les boutons natifs (`<button>`) n'ont pas d'outline au clic souris (`button:focus:not(:focus-visible)`).
- Contraste texte / fond : tous les couples `--ink` / `--bg` respectent un ratio ≥ 4.5:1.
- Les labels de formulaires sont toujours visibles (jamais remplacés par des placeholders seuls).

---

## 10. Responsive

Un seul breakpoint défini : **600px**.

| Propriété | Desktop | Mobile (≤ 600px) |
|-----------|---------|------------------|
| Navbar padding | `0 2rem` | `0 1rem` |
| Brand name | `19px` | `17px` |
| Nav tab padding | `6px 16px` | `5px 10px` |
| Page title | `26px` | `24px` |
| Profile name | `22px` | `20px` |
| Login card padding | `3rem 2.5rem` | `2rem 1.5rem` |
| Main content padding | `2.5rem 1.25rem` | `1.5rem 1rem` |
| Profile hero | flex row | flex column + centré |
| Student card header | flex row | flex wrap |
| Bouton "voir profil" | inline | `width: 100%` |

---

## 11. Tokens de référence rapide

```css
/* Copier-coller dans tout nouveau fichier CSS */

--font-display: 'Syne', sans-serif;
--font-body:    'Outfit', sans-serif;

--bg:           #f0f5f5;
--surface:      #ffffff;
--ink:          #0d1f1f;
--ink-3:        #5a7272;

--accent:       #0d9488;
--accent-hover: #0f766e;
--cta:          #f97316;
--cta-hover:    #ea6c0a;

--green:        #047857;
--green-bg:     #ecfdf5;
--green-border: #6ee7b7;

--radius:       10px;
--radius-lg:    14px;
--radius-xl:    22px;
--radius-full:  9999px;

--border:       rgba(13,30,30, 0.07);
--border-md:    rgba(13,30,30, 0.13);

--shadow-sm:    0 1px 3px rgba(13,30,30, 0.07), 0 1px 2px rgba(13,30,30, 0.04);
--shadow-md:    0 10px 15px -3px rgba(13,30,30, 0.09), 0 4px 6px -2px rgba(13,30,30, 0.04);
```

---

*Dernière mise à jour : juin 2026*
