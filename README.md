# Projet de numérisation de la gestion des associations par les services publics

Ce projet vise à réaliser un frontend en Angular pour l'application de gestion des associations et des utilisateurs développée dans le module de JXT

## Fonctionnalités

L'application web proposera les fonctionnalités suivantes :

    - S'authentifier en tant qu'utilisateur
    - Gérer un utilisateur : création, mise à jour et suppression
    - Gérer une association : création, mise à jour et suppression
    - Lister les utilisateurs et les associations
    - Rechercher un utilisateur ou une association

Il sera également possible de :

    Accéder à son profil et mettre à jour ses informations (changement de nom et de mot de passe)
    Lister les utilisateurs
    Lister les associations
    Accéder à la fiche d'un utilisateur (informations personnelles et liste des associations auxquelles il appartient)
    Accéder à la fiche d'une association (informations sur l'association, ses membres et ses minutes)
    Rechercher un utilisateur ou une association par son id
    Supprimer une association ou un utilisateur
    Ajouter un utilisateur
    Ajouter une association
    Modifier une association (par exemple en modifiant les rôles des membres).

## Procédure de communication avec le backend

La procédure de communication avec le backend est faite avec api-helper. Nous avons vu comment réaliser des requêtes avec le backend et comment s'authentifier (avec un token et la mise en place d'une guarde). Ce principe est repris pour toutes les fonctionnalitées

## Bibliothèques utilisées

Angular Version 11.2.3
Node Version 

## Comment lancer le projet
 
    - Cloner le projet : git clone git@github.com:akai-code/fr-administration-front.git
    - Lancer la commande : npm install 
    - Lancer le backend : cd backend/numerisation-gestion-des-associations && npm run start 
    - Lancer la commande: ng serve

## Schema explicatif des liens entre les composants

    