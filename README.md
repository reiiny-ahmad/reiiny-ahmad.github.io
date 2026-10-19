# Portfolio — Ahmed JABRI

Site statique (HTML, CSS, JavaScript), bilingue FR/EN, sans étape de compilation.

## Structure

```
index.html          Structure de la page
css/style.css       Styles, thèmes clair/sombre, responsive
js/data.js          TOUT le contenu (FR + EN) et la configuration
js/main.js          Interactions : réseau neuronal animé, langue, thème, filtres, modale, formulaire
assets/favicon.svg  Icône de l'onglet
```

## Fonctionnalités

- Fond animé « réseau de neurones » avec des signaux qui se propagent et réagissent à la souris
- Bascule **FR / EN** (détection automatique de la langue du navigateur) et thème **clair / sombre** (mémorisés)
- Rôles tapés au clavier, compteurs animés, apparitions au défilement, barre de progression
- Parcours en double frise (expérience / formation)
- Projets filtrables par catégorie, effet 3D au survol, fenêtre de détails par projet
- Section recherche (objectif doctorat, centres d'intérêt, domaines d'application)
- Contact **sans afficher l'email ni le téléphone** (voir plus bas)
- Accessible (navigation clavier, `prefers-reduced-motion`), responsive mobile, SEO (balises meta + JSON-LD)

## Modifier le contenu

Tout se trouve dans `js/data.js`, avec une section `fr` et une section `en`.
Pensez à mettre à jour les deux langues.

## Ajouter la photo et le CV

| Fichier | Emplacement |
|---|---|
| Photo de profil (carrée, ~600×600) | `assets/photo.jpg` |
| CV en PDF | `assets/CV-Ahmed-Jabri.pdf` |

Sans photo, les initiales « AJ » s'affichent. Le bouton « Télécharger le CV » n'apparaît en ligne que si le PDF existe.

## Contact protégé

- L'email et le numéro **ne sont jamais affichés** sur la page et ne figurent pas en clair dans le code :
  ils sont encodés dans `config.contact` et reconstitués seulement au clic.
- Boutons directs : **Email** (ouvre la messagerie), **WhatsApp**, **Appeler** (sur mobile)
  ou **Être rappelé** (sur ordinateur, pré-remplit le formulaire).
- Formulaire : le visiteur choisit d'être recontacté par email, téléphone ou WhatsApp (le numéro devient alors obligatoire).
  Anti-spam : champ piège invisible et délai d'une minute entre deux envois.

> L'encodage protège des robots de collecte d'adresses, mais une personne déterminée pourrait le décoder.
> Pour une confidentialité totale, supprimez les boutons Email/WhatsApp/Appeler et gardez uniquement le formulaire.

### Activer l'envoi direct du formulaire (recommandé, gratuit)

Sans configuration, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
Pour recevoir les messages directement dans votre boîte mail :

1. Allez sur <https://web3forms.com>, saisissez votre adresse email et validez.
2. Copiez la clé d'accès (« Access Key ») reçue par email.
3. Collez-la dans `js/data.js` : `web3formsKey: "votre-clé"`.

La clé n'expose pas votre adresse email.

### Changer l'email ou le numéro

Dans la console du navigateur (F12) :

```js
btoa("nouvelle@adresse.com".split("").reverse().join(""))
btoa("212600000000".split("").reverse().join(""))   // chiffres + indicatif, sans "+"
```

Collez les résultats dans `config.contact.e` et `config.contact.p`.

## Prévisualiser en local

```bash
python -m http.server 5500
```

Puis ouvrez <http://localhost:5500>.

## Mettre en ligne (gratuit)

- **Netlify Drop** : glissez le dossier sur <https://app.netlify.com/drop>.
- **GitHub Pages** : poussez le dossier dans un dépôt, puis *Settings → Pages → Deploy from branch*.
- **Vercel** : importez le dépôt, aucun réglage nécessaire.

Après la mise en ligne, ajoutez le lien du portfolio dans la section « Coordonnées » de LinkedIn.
