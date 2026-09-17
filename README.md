# GoldWen — site vitrine

Next.js 14 Pages Router, React 18, TypeScript, Tailwind CSS, next-i18next. Six langues : français (sans préfixe), anglais, espagnol, allemand, italien et portugais.

## Développement

Node.js 22 et npm. `npm ci`, copier `.env.example` vers `.env.local`, puis `npm run dev`.

## Vérification

`npm run lint`, `npm run typecheck`, `npm test`, `npm run build` puis `npm start`.
La CI exécute les mêmes contrôles. Les tests couvrent la validation du formulaire, l’échappement HTML, le quota et les URL par langue. Le sitemap et robots.txt sont générés avant le build depuis NEXT_PUBLIC_SITE_URL, sans date de modification inventée.

## Production Vercel

Le projet utilise la détection Next.js native. Configurer NEXT_PUBLIC_SITE_URL avec le domaine public. Les liens stores restent vides tant que les fiches ne sont pas publiques. Les analytics sont désactivés par défaut ; NEXT_PUBLIC_ENABLE_ANALYTICS=true les rend disponibles uniquement après consentement. Les choix sont conservés six mois. Le retrait recharge le document pour arrêter les scripts et listeners déjà chargés.

Le formulaire nécessite EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM et CONTACT_EMAIL_TO, ainsi que CONTACT_REDIS_REST_URL et CONTACT_REDIS_REST_TOKEN (API REST Redis compatible Upstash). En production, il renvoie 503 si le limiteur n’est pas configuré ou disponible. Trois demandes par IP hachée et fenêtre de dix minutes ; expiration à onze minutes. Sur Vercel, seul l’en-tête IP réécrit par la plateforme est utilisé. Le destinataire est fixe ; aucune donnée utilisateur n’est utilisée comme destinataire. Envoi TLS obligatoire, JSON limité à 8 Ko, longueurs bornées et honeypot. Ne pas exposer les secrets avec NEXT_PUBLIC_.

## Informations à compléter avant lancement

Adrien Marques est l’éditeur personne physique et le responsable des données, sans société constituée ni DPO séparé. Contact éditeur : marquesadrien.site@gmail.com ; support/données : goldwen.supp.app@gmail.com. L’adresse de publication et le téléphone restent à renseigner via LEGAL_PUBLISHER_ADDRESS et LEGAL_CONTACT_PHONE. Les mentions indiquent les champs manquants explicitement.

Les textes juridiques concernent la vitrine et sont en français de référence, avec titres et avertissement de périmètre dans les six langues. Ils ne remplacent pas les textes contractuels de l’application mobile. Avant activation du formulaire, confirmer les prestataires SMTP/Redis, la rétention réelle de la boîte support et des logs, les régions et garanties de transfert (DPA Vercel). Appliquer les durées retenues puis actualiser la politique. Le site ne prétend pas être juridiquement finalisé.

Aucune capture réelle du mobile n’est versionnée : l’accueil présente le rituel sans fausse capture, témoignage ou statistique de lancement. Ajouter des captures validées après recette mobile.

Le back-office est planifié dans docs/BACK_OFFICE_PLAN.md et sera un projet web distinct.
