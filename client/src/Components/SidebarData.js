import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
  {
    title: "Home",
    icon:   <HomeIcon />,
    link:   "/home"
  },
  {
    title: "Mailbox",
    icon:   <EmailIcon />,
    link:   "/mailbox"
  },
  {
    title: "Dashboard",
    icon:   <DashboardIcon />,
    link:   "/dashboard"
  },
  {
    title: "Log out",
    icon:   <LogoutIcon />,
    link:   "/logout"
  },
  
]


