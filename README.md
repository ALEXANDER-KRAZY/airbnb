# AIRBNB CLONE
Created using NEXT.JS 14, TS, JS, TailwindCSS, React, MongoDB, Node.JS

## Setup  the environment
```bash
npx create-next-app --typescript
```

/*and name the name of your project*/
/*or you can use the following command instead*/
npx create-next-app@latest ./

## Run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Installing packages
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-icons
npm istall zustand
npm install axios
npm install react-hook-form
npm install react-hot-toast
npm install -D prisma
npx prisma init
```
## Using MOngoDB
in mongodb add ip add 0.0.0.0/0 /*--add entry for easy access from anywhere*/

```bash
npx prisma db push
npm install next-auth @prisma/client @next-auth/prisma-adapter
npm install bcrypt mongodb mongoose next-auth
npm install bcrypt
npm istall -D @types/bcrypt
```

## add more packages
```bash
npm install query-string
npm install react-select
npm install leaflet
npm install next-cloudinary
npm install react-date-range
npm install -D @types/react-date-range
```

## add more packages
```bash
npm install world-countries
npm install -D @types/leaflet
npm install react-leaflet
```
## Social Logins
* Github
settings/Devsettings/OAuthapps/NewAuthApp

* google
googledeveloperconsole/newproject/api/enableapiandservices/oauthconsentscreen/external/credentials/oauthclientid/authorisedredircturl will be http://localhost:3000/api/auth/callback/google~

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
