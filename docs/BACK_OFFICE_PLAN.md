# Back-office GoldWen : projet séparé

Hors exécution immédiate de la phase 6. Aucune route admin dans la vitrine ni dans le mobile.

1. Créer un projet Next.js distinct, avec authentification admin sur les routes backend existantes. Aucun secret API embarqué côté navigateur. Vérifier les contrats dans la documentation API et les contrôleurs avant implémentation.
2. Gestion utilisateurs : recherche, consultation minimale, suspension et suppression. Les opérations sensibles demandent une confirmation, la suppression suit les règles RGPD du backend.
3. Modération : file des signalements/photos à réviser, consultation protégée des pièces nécessaires, décision motivée et historique.
4. Support : lecture des demandes de feedback, statut et suivi. Toute réponse externe doit passer par un canal configuré explicitement.
5. Sécurité : JWT avec rôle admin, refus des comptes ordinaires, contrôle serveur sur chaque action, révocation, limitation de débit, journal d’audit sans contenu sensible, contrôle des accès aux photos.
6. Recette/CI : tests du 401/403 et des parcours recherche → suspension, signalement → décision, ticket → traitement ; lint, types, tests et build. Déploiement séparé avec origine CORS dédiée, TLS et secrets serveur.

Préalables : backend Phase 0 déployé et vérifié avec PostgreSQL/Redis, CI backend verte, endpoints de feedback disponibles, admin provisionné et règles de rétention confirmées. Ne pas réintroduire les anciens contournements d’authentification ni une activation premium administrative non contrôlée.
