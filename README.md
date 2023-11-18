# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
WordFlash
├─ .env
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ 135a834fa3cde2c82e20558f4ef7b76252c69c
│  │  ├─ 05
│  │  │  └─ 4a4027881d22c46ab263589d95b071817788ec
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 0e
│  │  │  └─ 1e7daf571d45c04400a2ff7e502f3d68aa0a9d
│  │  ├─ 16
│  │  │  └─ 4f87693901417cf214cfab906b8f053e1cd638
│  │  ├─ 1c
│  │  │  └─ 54d6b37921378cabd5296318c340fd31738f10
│  │  ├─ 34
│  │  │  └─ 24391be2b127b8263a476799ee2ea024e2af43
│  │  ├─ 35
│  │  │  └─ 9af23ebbec631f4514a0759001cb0279c18df1
│  │  ├─ 3a
│  │  │  └─ 527c3dd0340fa53c4dc036fdab6355e380ee94
│  │  ├─ 4d
│  │  │  └─ cb43901a687f5fa7e3867d9964a76861973151
│  │  ├─ 54
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 79
│  │  │  └─ 3526b729b9071056777183e74a72b91a8c1a45
│  │  ├─ 8a
│  │  │  └─ ae41db76b36b9a5556e40b36bbdc0dcd7f1fb2
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 99
│  │  │  └─ a52d4e7ac8000bff764e14349fa3e5f3bbf18d
│  │  ├─ 9d
│  │  │  └─ d63ea748ccad9c58bd3b428a130facfa734273
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ b6
│  │  │  └─ 98fe07b03fbd49d71a5bb28963949931936823
│  │  ├─ bd
│  │  │  └─ 2e49203bf3122c839a7b0c048e36cdc9af7e81
│  │  ├─ d7
│  │  │  └─ 22312b00fe7de0683c735acc0cef22f022ec8d
│  │  ├─ da
│  │  │  └─ e48d3d56f1eb73eaf36fb2b0ec80405836090b
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ 31ac14405c3495b975fb57d6c9ba2c268a39b8
│  │  ├─ f4
│  │  │  └─ 2a1560c1e3d477925be912190151c397b52512
│  │  ├─ f7
│  │  │  ├─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  │  └─ 6a7d73c10f49c0e4f970b29a0d074567eb13a7
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  ├─ index.css
│  ├─ main.jsx
│  └─ Pages
│     └─ Chat
│        └─ chat.component.jsx
├─ vite.config.js
└─ yarn.lock

```