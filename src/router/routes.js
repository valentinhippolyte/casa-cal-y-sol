export const routes = [
  {
    path: "/:locale",
    component: {
      template: "<router-view />", // conteneur
    },
    props: true,
    children: [
      { path: "", component: () => import("../screens/HomeScreen.vue") },
      {
        path: "information",
        component: () => import("../screens/InformationScreen.vue"),
      },
      {
        path: "gallery",
        component: () => import("../screens/GalleryScreen.vue"),
      },
      {
        path: "booking",
        component: () => import("../screens/BookingScreen.vue"),
      },
      {
        path: "comments",
        component: () => import("../screens/CommentsScreen.vue"),
      },
    ],
  },
  // Redirection de `/` vers `/fr`
  {
    path: "/",
    redirect: () => {
      const userLang = navigator.language.split("-")[0]; // ex: "fr-FR" => "fr"
      const supported = ["fr", "en", "es"];
      return supported.includes(userLang) ? `/${userLang}` : "/fr";
    },
  },
];
