## Entorn predefinit per a començar a treballar amb A-Frame.

Compila i transpila el codi del projecte, i crea un servidor local per interactuar amb el projecte d'A-Frame amb el navegador.
Quan hi hagi canvis en el codi els aplica de manera immediata (live reload)

Per començar, cal instal·lar Node (https://nodejs.org/es/). Aquesta instal·lació es recomana fer-la amb NVM,
(Node Version Manager) el que permetrà mantenir Node al dia.

Passos a la consola en Linux:

#### curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

Amb això s'instal·la NVM. Un cop fet això, a la consola escrivim:

#### nvm install --lts
#### nvm use --lts

Amb això instal·larem i farem servir l'última versió LTS (Long Term Support) de node.

Ara anem a la carpeta on heu copiat els arxius de github. Un cop sigueu a la carpeta inicial (Aframetesting en teoria) escrivim:

#### npm install
#### npm start

Amb això s'instal·laran les dependències del projecte (que podeu trobar a package.json) i començarà l'script que
començarà l'entorn de treball.
