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

Nachdem Sie erfolgreich Node.js auf Ihrem System installiert haben, fehlt eigentlich noch folgende Software für dieses Projekt: PostgresSQL.

Da die Installation von PostgreSQL und dem dazugehörigen Interface (PGAdmin4) eine weitere Hürde für das Projekt darstellen würde, wird dies hier über 'Docker'
gelöst.
Eine DOCKERFILE, welche dafür notwendig ist, finden Sie in dem Projektordner.

- Um diese Datei nutzen zu können benötigen Sie Docker auf Ihrem System, dieses können Sie unter folgendem Link downloaden und installieren: 
https://docs.docker.com/get-docker/ (Weitere Informationen und die Documentation zu Docker finden Sie auch unter diesem Link)

Sobald Docker auf Ihrem System läuft, folgen einige Befehle, welche Sie mithilfe Ihres Terminal im Repository-Ordner ausführen müssen.

```sh
docker build -t postgres_image .
```
```sh
docker run --name postgres_container -e POSTGRES_PASSWORD=MadMax12 -d -p 5432:5432 postgres_image
```
```sh
docker exec -it postgres_container bash
```
```sh
psql -U postgres
```
```sh
create database testdb;
```
Der letzte Befehl erstellt eine Datenbank in dem Docker-Container mit PostgreSQL.
Um diese Datenbank einsehen zu können und gleichzeitig testen zu können, ob die Installation geklappt hat, können Sie mit folgendem Befehl auf die Datenbank zugreifen:

```sh
\c testdb
```
Und wiederrum mit dem folgenden Befehl den Table "tests" aufrufen, auf welchem Sie die später aufkommenden Daten dieses Projekts einsehen können:
```sh
\c testdb
```
```sh
SELECT*FROM public.tests
```

Nachdem Sie nun die Datenbank zum Laufen bekommen haben, sollten sie mithilfe einer neuen Instanz Ihres Terminals im Ordner des Repositories folgenden Befehl eingeben um alle notwendigen Abhängigkeiten/dependencies für dieses Backend zu installieren: 

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

After you have successfully installed Node.js on your system, the following software is actually still missing for this project: PostgresSQL.

Since installing PostgreSQL and its interface (PGAdmin4) would be another hurdle for the project, this is solved here via 'Docker'.
solved.
A DOCKERFILE, which is necessary for this, can be found in the project folder.

- To use this file you need Docker on your system, you can download and install it at the following link: 
https://docs.docker.com/get-docker/ (More information and the documentation for Docker can also be found at this link).

Once Docker is running on your system, the following are some commands that you need to execute using your terminal in the repository folder.

```sh
docker build -t postgres_image .
```
```sh
docker run --name postgres_container -e POSTGRES_PASSWORD=MadMax12 -d -p 5432:5432 postgres_image
```
```sh
docker exec -it postgres_container bash
```
```sh
psql -U postgres
```
```sh
create database testdb;
```
The last command creates a database in the Docker container with PostgreSQL.
To be able to view this database and at the same time test if the installation worked, you can access the database with the following command:

``sh
\c testdb
```

And again with the following command you can access the table "tests", where you can see the later data of this project:

```sh
\c testdb
```

```sh
SELECT*FROM public.tests
```

Now that you have the database up and running, you should use a new instance of your terminal in the repository folder to enter the following command to install all the necessary dependencies for this backend:

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