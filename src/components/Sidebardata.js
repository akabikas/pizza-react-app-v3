//This file will contain errays of objects with 3 properties: the title, icon and link within diffent objects.
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Sidebardata = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Past Order",
    icon: <ShoppingCartIcon />,
    link: "/past-orders",
  },

  {
    title: "Favourites",
    icon: <FavoriteIcon />,
    link: "/favorites",
  },
];
