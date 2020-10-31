
# Tweak

Exemple d'utilisation : http://jval.alwaysdata.net/?firstname=Camille&lastname=Dupont&birthday=01%2F01%2F1970&placeofbirth=Paris&address=999+avenue+de+France&city=Paris&zipcode=75001&reasons=travail

Modifiez les paramètres pour que ça corresponde à vos informations, et voilà, attestation instantanée. Si vous ne voyez que "slip de bain", c'est que c'est mal configuré.

Readme original ci-dessous.

# Générateur de certificat de déplacement

## Développer

### Installer le projet

```console
git clone https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020.git
cd attestation-deplacement-derogatoire-q4-2020
npm i
npm start
```

## Générer et tester le code de production

### Tester le code de production en local

#### Générer le code de production pour tester que le build fonctionne en entier

```console
npm run build:dev
```

#### Tester le code de production en local

```console
npx serve dist
```

Et visiter http://localhost:5000

Le code à déployer sera le contenu du dossier `dist`

## Crédits

Ce projet a été réalisé à partir d'un fork du dépôt [attestation-deplacement-derogatoire-q4-2020](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020) lui-même réalisé à partir d'un fork du dépôt [deplacement-covid-19](https://github.com/nesk/deplacement-covid-19) lui-même réalisé à partir d'un fork du dépôt [covid-19-certificate](https://github.com/nesk/covid-19-certificate) de [Johann Pardanaud](https://github.com/nesk).

Les projets open source suivants ont été utilisés pour le développement de ce
service :

- [PDF-LIB](https://pdf-lib.js.org/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/license)
