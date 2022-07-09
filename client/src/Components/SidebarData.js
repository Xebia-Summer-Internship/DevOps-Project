import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
// import NearbyIcon from '@mui/icons-material/LocationOn';
import BookingsIcon from '@mui/icons-material/PlaylistAddCheck';
import ProfileIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
  {
    title: "Home",
    icon:   <HomeIcon />,
    link:   "/dashboard"
  },
  // {
  //   title: "Nearby",
  //   icon:   <NearbyIcon />,
  //   link:   "/Nearby"
  // },
  {
    title: "Bookings",
    icon:   <BookingsIcon />,
    link:   "/bookings"
  },
  {
    title: "Profiles",
    icon:   <ProfileIcon />,
    link:   "/profile"
  },
  {
    title: "Log out",
    icon:   <LogoutIcon />,
    link:   "/"
  },
  
]


