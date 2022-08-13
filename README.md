# Kontaktanfragenformular mit wählbaren Rückruf-Timeslots - Server side
Da diese App bisher nur auf deutsch existiert, ist auch der erste Part der Readme auf deutsch, eine englische Version finden Sie darunter.
###ENGLISH VERSION BELOW

Willkommen beim Aufsetzen des Backends der 'Kontaktanfragenformular-App'.

Dieses Projekt besteht aus zwei Repositories und wurde mithilfe folgender Tools erstellt: 'React' (javascript), 'express' (API), 'PostgresSQL' (Datenbank) und dem ORM 'Sequelize'.

Zuerst benötigen Sie dieses Repository, welches mit folgendem Befehl in einem Terminal Ihrer Wahl heruntergeladen und geclont werden kann:

```sh
git clone https://github.com/theHirsch/kontaktanfrage_backend.git
```
Nachdem Sie nun das Repository erfolgreich auf Ihren Rechner geladen haben, fehlt noch folgende Software, da diese für eine React-App 
unbedingt notwendig ist: Node.js

- Unter folgendem Link können Sie das notwendige und aktuelle LTS-Package von Node.js finden, herunterladen und installieren: https://nodejs.org/de/download/ .

Nachdem Sie erfolgreich Node.js auf Ihrem System installiert haben, fehlt noch folgende Software für dieses Projekt: PostgresSQL.

- Das Installations-Paket kann unter folgendem Link gefunden, herunterladen und installiert werden: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads .

- Sie sollten alle Komponenten (welche standardmäßig ausgewählt sind) von diesem Paket installieren, da sie für die App notwendig sind.

Nachdem Sie nun die Datenbank zum Laufen bekommen haben, sollten sie mithilfe Ihres Terminals im Ordner des Repositories folgenden Befehl eingeben um alle notwendigen Abhängigkeiten/dependencies für dieses Backend zu installieren: 

```sh
npm install
```

Nach der Intallation aller Abhängigkeiten/dependencies können Sie mit folgendem Befehl in Ihrem Terminal und innerhalb des App-Ordners das Backend der App starten:

```sh
node server.js
```

In Ihrer Konsole erhalten Sie nun die wichtigsten Informationen zum Server und der erstellten Datenbank.
Wenn Sie nun die URL "http://localhost:8080" öffnen, sollte dort die folgende Nachricht lesbar sein: "Willkommen zu Max App / Welcome to max App".
Falls dies der Fall ist, hat das Aufsetzen des Backends erfolgreich geklappt.

Nachdem Sie nun die Datenbank erstellt und den Server gestartet haben, kommen wir nun zum Frontend der App.
Unter folgendem Link ist das Repository und eine weitere READme-Datei zu finden: https://github.com/theHirsch/kontaktanfrage_frontend .


## Contact request form with selectable callback timeslots - server side.

Welcome to the setup of the backend of the 'contact request form app'.

This project consists of two repositories and was built using the following tools: 'React' (javascript), 'express' (API), 'PostgresSQL' (database) and the ORM 'Sequelize'.

At first you need this repository, which can be downloaded and cloned with the following command in a terminal of your choice:

```sh
git clone https://github.com/theHirsch/kontaktanfrage_backend.git
```
Now that you have successfully downloaded the repository to your computer, the following software is still missing, as it is absolutely necessary for a React-App : Node.js

- At the following link you can find, download and install the necessary and current LTS package of Node.js: https://nodejs.org/de/download/ .

After you have successfully installed Node.js on your system, the following software is still missing for this project: PostgresSQL.

- The installation package can be found, downloaded and installed at the following link: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads .

- You should install all components (which are selected by default) from this package, as they are necessary for the app.

Now that you have the database up and running, you should enter the following command in the repository folder using your terminal to install all the necessary dependencies/dependencies for this backend: 

```sh
npm install
```

After installing all dependencies, you can use the following command in your terminal and inside the app folder to start the backend of the app:

```sh
node server.js
```

In your console you will now get the most important information about the server and the created database.
If you now open the URL "http://localhost:8080", the following message should be readable there: "Willkommen zu Max App / Welcome to max App".
If this is the case, the setup of the backend has been successful.

Now that you have created the database and started the server, we come to the frontend of the app.
At the following link you can find the repository and another READme file: https://github.com/theHirsch/kontaktanfrage_frontend .