//This file will contain errays of objects with 3 properties: the title, icon and link within diffent objects.
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Sidebardata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/homepage",
  },

  {
    title: "Login",
    icon: <LoginIcon />,
    link: "/Login",
  },

  {
    title: "Register",
    icon: <AppRegistrationIcon />,
    link: "/Login",
  },

  {
    title: "Order",
    icon: <ShoppingCartIcon />,
    link: "/OrderPage",
  },

  {
    title: "Favourites",
    icon: <FavoriteIcon />,
    link: "/Favouritestabs",
  },
];
