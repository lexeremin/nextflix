# Nextflix

### This is Nextflix (Netflix clone) made with NextJS/Hasura/MagicLink/Framer-Motion as a part of ztm NextJS course

## Setup

1. Create Hasura account.
2. Create Heroku Postres DB.
3. Import data from
   file located in `./data` folder: `hasura_metadata.json`
4. Create new db user with name `user`
5. Set custom permissions for each row in `users` table:

```
{"issuer":{"_eq":"X-Hasura-User-Id"}}
```

6. Set custom permissions for each row in `Stats` table:

```
{"userId":{"_eq":"X-Hasura-User-Id"}}
```

Also create hasura JWT secret (write secret phrase with length > 32 chars) and import all secret and api key to `.env.local` file
Same with Magiclink:

1. Create account
2. Import keys (both privite and public)
   there is an example of `.env.local` file:

```
YOUTUBE_API_KEY=<key>
NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY=<key>
MAGIC_SERVER_KEY=<key>
NEXT_PUBLIC_HASURA_ADMIN_URL=<url>
NEXT_PUBLIC_HASURA_ADMIN_SECRET=<key>
JWT_SECRET=<key>

```

To prevent limit of requests in youtube api set this enviromental varible in `.env.local` file:

```
DEVELOPMENT=true
```

This way data will be fetched from `./data/videos.json`

When you done with previous steps run:
`npm init`
to install packages.

Then run `npm run dev` to lauch Nextflix app in dev mode.
