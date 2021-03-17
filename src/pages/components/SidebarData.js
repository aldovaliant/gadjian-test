import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { BiCalendar } from 'react-icons/bi';


export const SidebarData = [
  {
    title: 'Beranda',
    path: '/beranda',
    icon: <FaHome color='black' size="20px" />,
    cName: 'nav-text'
  },
  {
    title: 'Personnel List',
    path: '/personnel',
    icon: <TiGroup color='black' size="20px" />,
    cName: 'nav-text'
  },
  {
    title: 'Daily Attendance',
    path: '/dailyattendance',
    icon: <BiCalendar color='black' size="20px" />,
    cName: 'nav-text'
  }
];
