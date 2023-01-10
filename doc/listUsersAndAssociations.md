# Users List

Ce composant de liste d'utilisateurs affiche une liste d'utilisateurs en utilisant une boucle *ngFor pour itérer sur un tableau users et afficher les propriétés firstname, lastname et id de chaque utilisateur. Il utilise également une directive [style.max-width] pour définir une largeur maximale pour chaque case contenant les informations d'un utilisateur. Il y a également un bouton pour créer un nouvel utilisateur qui redirige vers un formulaire de création d'utilisateur.

Il y a également un composant app-nav qui est utilisé pour afficher un menu de navigation. Il reçoit une propriété isLogged qui lui indique l'état de connexion de l'utilisateur. Cela permet de définir des règles de navigations pour les utilisateurs connectés et déconnectés.

Il utilise des services pour obtenir les utilisateurs. Il a également un service TokenStorageService pour vérifier si l'utilisateur est connecté. Il a une méthode goToUserProfile qui est utilisée pour rediriger vers le profil de l'utilisateur en cliquant sur une case d'utilisateur. Il utilise également un service de routing pour rediriger l'utilisateur vers les différentes pages de l'application.

Les styles utilisées sont définies dans le fichier .scss et ont pour but de rendre l'affichage plus attractif, en utilisant des styles de bordures, de couleurs, de polices etc.

# Associations List

Meme principe
