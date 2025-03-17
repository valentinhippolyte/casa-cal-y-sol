import BookingScreen from "../screens/BookingScreen.vue";
import CommentsScreen from "../screens/CommentsScreen.vue";
import GalleryScreen from "../screens/GalleryScreen.vue";
import HomeScreen from "../screens/HomeScreen.vue";
import InformationScreen from "../screens/InformationScreen.vue";

export const routes = [
  { path: "/", component: HomeScreen },
  { path: "/information", component: InformationScreen },
  { path: "/gallery", component: GalleryScreen },
  { path: "/booking", component: BookingScreen },
  { path: "/comments", component: CommentsScreen },
];
