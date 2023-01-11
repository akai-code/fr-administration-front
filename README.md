# Projet de numérisation de la gestion des associations par les services publics

Ce projet vise à réaliser un frontend en Angular pour l'application de gestion des associations et des utilisateurs développée dans le module de JXT

## Fonctionnalités

L'application web proposera les fonctionnalités suivantes :
- 1 - [S'authentifier en tant qu'utilisateur](doc/autentification.md)
- 2 - [Gérer un utilisateur](doc/manageUser.md)
- 3 - [Gérer une association](doc/manageAssociation.md)
- 4 - [Lister les utilisateurs et les associations](doc/listUsersAndAssociations.md)
- 5 - [Rechercher un utilisateur ou une association](doc/searchUserOrAssociation.md)

Il sera également possible de :

    - Accéder à son profil et mettre à jour ses informations (changement de nom et de mot de passe)
    - Lister les utilisateurs
    - Lister les associations
    - Accéder à la fiche d'un utilisateur (informations personnelles et liste des associations - auxquelles il appartient)
    - Accéder à la fiche d'une association (informations sur l'association, ses membres et ses minutes)
    - Rechercher un utilisateur ou une association par son id
    - Supprimer une association ou un utilisateur
    - Ajouter un utilisateur
    - Ajouter une association
    - Modifier une association (par exemple en modifiant les rôles des membres).

## Procédure de communication avec le backend

La procédure de communication avec le backend est faite avec api-helper. Nous avons vu comment réaliser des requêtes avec le backend et comment s'authentifier (avec un token et la mise en place d'une guarde). Ce principe est repris pour toutes les fonctionnalitées

## Comment lancer le projet
 
    - Cloner le projet : git clone git@github.com:akai-code/fr-administration-front.git
    - Lancer la commande : npm install 
    - Lancer le backend : cd backend/numerisation-gestion-des-associations && npm run start 
    - Lancer la commande: ng serve

## Les composants de l'application

    • nouveau-user : ce composant est utilisé pour créer un nouvel utilisateur. Il peut demander à l'utilisateur de saisir des informations telles que son nom, son adresse e-mail,
Un composant en Angular est un élément de l'interface utilisateur (UI) qui permet de gérer une vue particulière dans une application web développée avec Angular. 
    • login : ce composant est utilisé pour l'écran de connexion de l'application. Il demander à l'utilisateur de saisir son nom d'utilisateur et son mot de passe, et vérifier ces informations d'identification auprès de notre serveur.
    • home : ce composant est utilisé pour la page d'accueil de l'application. Il affiche deux boutons ( manage user, manage association )
    • user-list : ce composant est utilisé pour afficher une liste d'utilisateurs. Il peut afficher des informations telles que le nom de l'utilisateur et son id
    • association-list : ce composant est utilisé pour afficher une liste d'associations. Il peut afficher des informations telles que le nom de l'association et son id.
    • guards : les guards sont utilisés pour protéger les routes de l'application. Ils peuvent vérifier si l'utilisateur est authentifié ou possède les autorisations appropriées pour accéder à une route donnée.
    • interceptors : Les intercepteurs sont utilisés pour manipuler les requêtes et les réponses HTTP de l'application. Ils sont utilisés pour ajouter des en-têtes à toutes les requêtes, pour gérer les erreurs de réponse.
    • nav : ce composant est utilisé pour la barre de navigation de l'application. Il afficher des liens vers différentes sections de l'application, tels que "Accueil", "Profil", "Rechercher", etc.
    • nouveau-user : ce composant est utilisé pour créer un nouvel utilisateur. Il peut demander à l'utilisateur de saisir des informations telles que son nom, son adresse e-mail, Un composant en Angular est un élément de l'interface utilisateur (UI) qui permet de gérer une vue particulière dans une application web développée avec Angular. 
    • login : ce composant est utilisé pour l'écran de connexion de l'application. Il demander à l'utilisateur de saisir son nom d'utilisateur et son mot de passe, et vérifier ces informations d'identification auprès de notre serveur.
    • home : ce composant est utilisé pour la page d'accueil de l'application. Il affiche deux boutons ( manage user, manage association )
    • user-list : ce composant est utilisé pour afficher une liste d'utilisateurs. Il peut afficher des informations telles que le nom de l'utilisateur et son id
    • association-list : ce composant est utilisé pour afficher une liste d'associations. Il peut afficher des informations telles que le nom de l'association et son id.
    • guards : les guards sont utilisés pour protéger les routes de l'application. Ils peuvent vérifier si l'utilisateur est authentifié ou possède les autorisations appropriées pour accéder à une route donnée.
    • interceptors : Les intercepteurs sont utilisés pour manipuler les requêtes et les réponses HTTP de l'application. Ils sont utilisés pour ajouter des en-têtes à toutes les requêtes, pour gérer les erreurs de réponse.
    • nav : ce composant est utilisé pour la barre de navigation de l'application. Il afficher des liens vers différentes sections de l'application, tels que "Accueil", "Profil", "Rechercher", etc.
    • nouveau-user : ce composant est utilisé pour créer un nouvel utilisateur. Il peut demander à l'utilisateur de saisir des informations telles que son nom, son adresse e-mail, etc., et de créer un compte avec ces informations.
    • nouvelle-association : ce composant est utilisé pour créer une nouvelle association. Il peut demander à l'utilisateur de saisir des informations telles que le nom de l'association, sa description, son adresse, etc.
    • profil-assoc : ce composant est utilisé pour afficher le profil d'une association spécifique. Il peut afficher des informations telles que le nom de l'association, sa description, son adresse, etc., ainsi que des informations sur les utilisateurs qui font partie de l'association.
    • profil : ce composant est utilisé pour afficher le profil d'un utilisateur spécifique. Il peut afficher des informations telles que le nom de l'utilisateur, etc
    • service : ce composant est un service qui regroupe un ensemble de fonctionnalité ou les méthodes pour faire des appels réseaux, manipuler des données, etc. Il peut être utilisé pour effectuer des appels HTTP pour récupérer des données du serveur, pour stocker des données localement, etc.
      etc., et de créer un compte avec ces informations.
    • nouvelle-association : ce composant est utilisé pour créer une nouvelle association. Il peut demander à l'utilisateur de saisir des informations telles que le nom de l'association, sa description, son adresse, etc.
    • profil-assoc : ce composant est utilisé pour afficher le profil d'une association spécifique. Il peut afficher des informations telles que le nom de l'association, sa description, son adresse, etc., ainsi que des informations sur les utilisateurs qui font partie de l'association.
    • profil : ce composant est utilisé pour afficher le profil d'un utilisateur spécifique. Il peut afficher des informations telles que le nom de l'utilisateur, etc
    • service : ce composant est un service qui regroupe un ensemble de fonctionnalité ou les méthodes pour faire des appels réseaux, manipuler des données, etc. Il peut être utilisé pour effectuer des appels HTTP pour récupérer des données du serveur, pour stocker des données localement, etc.
      
    