"use client"

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import Navbar2 from './Navbar2';
import { usePathname } from 'next/navigation';

const Header = (props) => {

  // USING NAVIGATION HOOK
  const pathname = usePathname();

  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    setsidebar(true);

  }

  const close = () => {
    setsidebar(false);
  }

  return (
    <div className="navbarshadow">

      {pathname.split('/').includes('shop') ?
        <Navbar2 openSidebar={toggleSidebar} token={props?.token} userDetails={props?.userDetails} siteDetails={props?.siteDetails} />
        :
        <Navbar openSidebar={toggleSidebar} token={props?.token} path={pathname} userDetails={props?.userDetails} siteDetails={props?.siteDetails} />}
      <Sidebar sidebar={sidebar} closeback={close} path={pathname} userDetails={props?.userDetails} />
      <Backdrop sidebar={sidebar} closeback={close} />
    </div>
  );
};

export default Header;