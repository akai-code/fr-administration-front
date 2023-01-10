# Creation user

Ce composant de recherche permet à l'administarteur de créé de nouveaux utilisateurs en saisissant son prénom, son âge et son mot de passe. Il utilise un formulaires pour cette création avec des champs de saisie de texte et un bouton de soumission.

Il utilise la directive [(ngModel)] pour associer les valeurs saisies dans les champs de saisie à des propriétés newUser déclarées dans le composant.

Il y a une méthode createUser qui est appelée lorsque l'utilisateur soumet le formulaire de création. Cette méthode utilise l'objet HttpClient pour envoyer une requête POST à l'URL http://localhost:3000/users/. Si la création réussit, les données de l'utilisateur sont stockées dans la base de donnée et l'utilisateur est redirigé vers la page de liste des users

# Suppression user

Tout d'abord on doit se trouver sur la page de profil de l'utilisateur qu'un souhaite supprimer.
Pour ce faire j'ai créé un composant profil-utilisateur.

Ce composant permet d'afficher le profil d'un utilisateur spécifique en utilisant l'ID de l'utilisateur passé en paramètre dans l'URL. Il utilise l'objet ActivatedRoute pour récupérer l'ID de l'utilisateur, puis effectue une requête HTTP pour récupérer les données de l'utilisateur et les informations sur les rôles de l'utilisateur dans les associations à partir d'une API back-end.

Les données récupérées sont stockées dans les propriétés de composant 'user' et 'roles'. Ces données sont ensuite utilisées pour remplir les balises HTML avec les informations appropriées. Il y a aussi un bouton pour supprimer un utilisateur et une requête HTTP pour supprimer l'utilisateur ciblé lorsque ce bouton est cliqué

Il utilise également le service TokenStorageService pour vérifier si l'utilisateur est connecté ou non afin de rendre le bouton de suppression visible ou invisible en conséquence.