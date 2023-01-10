# Creation Association

On utilise ici le composant nouvell-association.
Ce composant permet la création d'une nouvelle association en utilisant un formulaire. Lorsque l'utilisateur remplit le formulaire et soumet le formulaire, la fonction "createAssociation" est appelée.

La fonction "createAssociation" utilise d'abord les "HTTPClient" pour vérifier que les ids des membres de l'association correspondent à des utilisateurs existants en utilisant une boucle pour vérifier chaque id. S'il existe des ids qui ne correspondent pas à des utilisateurs, un message d'erreur est affiché. Si tous les ids sont valides, il utilise ensuite l'HTTPClient pour envoyer une requête POST à l'URL de l'API pour créer une nouvelle association.

Une fois la nouvelle association créée avec succès, l'utilisateur est redirigé vers la page d'accueil. Le formulaire est lié à un objet "newAssociation" qui stocke les données saisies par l'utilisateur, les champs "name" et "members" correspondent aux propriétés de cet objet qui seront envoyées à l'API pour la création de l'association. Il y a aussi une interaction avec le composant "app-nav" qui permet de savoir si l'utilisateur est connecté ou non pour gérer l'affichage des différentes parties de l'application en fonction de l'authentification de l'utilisateur.

# Suppression Association

Composant profi-association.
Ce composant affiche les informations de profil d'une association spécifique, avec des informations telles que le nom de l'association, la liste des membres de l'association, avec leurs informations de base et leur rôle au sein de l'association, et les minutes de réunion de l'association. Il y a également un bouton "Supprimer" qui supprime l'association lorsqu'il est cliqué.

Le composant utilise les services HTTP pour récupérer les informations de l'association et des membres de l'association depuis une API backend. Il utilise également des directives comme * ngFor pour itérer sur les membres et les minutes de réunion et * ngIf pour afficher ou masquer certaines parties du formulaire en fonction des actions de l'utilisateur.

Il utilise des propriétés comme isLoggedIn pour savoir si un utilisateur est connecté ou non. Il utilise également des propriétés comme newAssociation pour stocker les données saisies dans le formulaire de création d'une association, et les propriétés comme createMemberVisible pour savoir si un formulaire de création de membre doit être affiché ou non.

Il utilise également des méthodes comme createAssociation pour créer une nouvelle association, AjouterMembre pour afficher un formulaire pour créer un nouveau membre, openUpdateForm pour afficher un formulaire pour mettre à jour un rôle d'un membre et deleteAssoc pour supprimer une association.