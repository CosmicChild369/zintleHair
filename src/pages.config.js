import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import WigCare from "./pages/WigCare";
import Contact from "./pages/Contact";
import __Layout from "./Layout";

export const PAGES = {
  Home,
  Shop,
  About,
  WigCare,
  Contact,
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout: __Layout,
};