import BookingScreen from "../screens/BookingScreen.vue";
import CommentsScreen from "../screens/CommentsScreen.vue";
import GalleryScreen from "../screens/GalleryScreen.vue";
import HomeScreen from "../screens/HomeScreen.vue";
import InformationScreen from "../screens/InformationScreen.vue";

export const routes = [
  {
    path: "/:locale",
    component: {
      template: "<router-view />", // conteneur
    },
    props: true,
    children: [
      { path: "", component: HomeScreen },
      { path: "information", component: InformationScreen },
      { path: "gallery", component: GalleryScreen },
      { path: "booking", component: BookingScreen },
      { path: "comments", component: CommentsScreen },
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
