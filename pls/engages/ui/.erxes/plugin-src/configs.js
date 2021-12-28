module.exports = {
  name: "engages",
  port: 3001,
  exposes: {
    "./routes": "./src/routes.tsx",
    "./settings": "./src/Settings.tsx",
  },
  routes: {
    url: "http://localhost:3001/remoteEntry.js",
    scope: "engages",
    module: "./routes",
  },
  menus: [
    {
      text: "Campaigns",
      url: "/campaigns",
      icon: "icon-megaphone",
      location: "mainNavigation",
    },
    {
      text: "Campaigns settings",
      icon: "icon-megaphone",
      location: "settings",
      scope: "engages",
      component: './settings'
    },
  ],
};