# [NextJS](https://nextjs.org/) Steam Authentication using [`iron-session`](https://github.com/vvo/iron-session)

## 📖 Table of Contents

- [NextJS Steam Authentication using `iron-session`](#nextjs-steam-authentication-using-iron-session)
  - [📖 Table of Contents](#-table-of-contents)
  - [👋 Introduction](#-introduction)
  - [🔌 Getting Started](#-getting-started)
  - [💡 What to do next](#-what-to-do-next)
  - [📚 Helpful Resources](#-helpful-resources)

## 👋 Introduction

NextJS is a React-based web framework that aims to deliver websites as statically as possible.

Setting up authentication using Steam can be tricky, especially with OpenID login. This repository is an example of how one may go about injecting Steam user authentication into their React-based application and are looking to migrate to a framework like NextJS.

Iron Session is also utilised here to have a signed and encrypted cookie to store session data.

## 🔌 Getting Started

After downloading the project, you should install all of the required dependencies.

    npm install

Fill in a `.env` file with the following keys filled, following `.env.example`. You can get your Steam API Key [from here](https://steamcommunity.com/dev/apikey).

    DOMAIN=http://localhost:3000 # Where this app will run
    STEAM_API_KEY= # Your Steam API Key
    SESSION_SECRET= # 32+ char random string

You can run the web application in `development` mode.

    npm run dev

You can also test the web application for `production` if you feel the need.

    npm run build
    npm start

## 💡 What to do next

- You should have a database where you would store the users of your app.
- Depending on how you have your system setup, when a user authenticates via steam, you should handle this accordingly e.g. creating a user in your database if a user with their `steamid64` doesn't exist already (refer to the TODO in `api/auth/authenticate.ts`).
- You should have a call that you can make to your database, where you are able to retrieve the user in your system, when passing in their `steamid64` which you would retrieve via the current session of the user (refer to the TODO in `api/auth/user.ts`).

## 📚 Helpful Resources

- ### [nextjs-steam-auth](https://github.com/HilliamT/nextjs-steam-auth)

  This repo inspired me to make this one. Whilst it does work, the packages it used are outdated, and the improvements listed in the README have been improved upon here.

- ### [node-steam-openid](https://github.com/LeeviHalme/node-steam-openid)

  This is what is used to handle the Steam Authentication API (see the `SteamAuth` object in `lib/auth/steamAuth.ts`).

- ### [nextjs-with-iron-session](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session)
  This repo essentially is a copy of this nextjs template, swapping out their 'fake' github login with actual steam login.
