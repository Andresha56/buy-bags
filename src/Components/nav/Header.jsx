import * as React from 'react';

import WidgetsIcon from '@mui/icons-material/Widgets';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {Container } from '@mui/material';



function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [ showNavItems, setShowNavItems ] = useState(false);
  const MenuRef=React.useRef(null);

// ------control----nav---view----
  const controlNavbar = () => {
    setIsMobile(window.innerWidth <= 640);
    setShowMenuIcon(window.innerWidth <= 640);
  };
  useEffect(() => {
    if(isMobile) MenuRef.current.style.top="-1000px";
    controlNavbar();

    window.addEventListener("resize", controlNavbar);
    return () => {
      window.removeEventListener("resize", controlNavbar);
    };
  }, [isMobile]);


  //-----show---nav---iteams--for--sm--divices---

  const handelSmNav =() => {
    setShowNavItems(prevShowNavItems => !prevShowNavItems);
  }

// ------check---the---menu--icon---is--clicked--or--not--to--response----
  useEffect(()=>{
    const menuElement = MenuRef.current;
    if (menuElement) {
      menuElement.style.top = showNavItems ? "40px" : "-1000px";
    }
  },[showNavItems])

   
  return (
    <Container style={{border:"1px solid red"}}>
    <header style={{position:"fixed",top:"0", zIndex:"10000",backgroundColor:"#f2f3f4",width:"100%",right:0}}>
      <Box
        className="sm-nav"
        sx={{
          width:"80%",
          display:"flex",
          alignItems:"center",
          maxWidth:"1200px",
          height:"80px",
          margin:"auto",
          justifyContent:"space-between",
          minWidth:"90%",
        }}>
        {/* ----logo--- */}
        <Box className="show-nav-menu" sx={{ display: "flex", justifyContent: "space-between" }}>

          <img src="./logo.svg" style={{ objectFit: "cover", height: "40px" }} alt="louis vuitton" />
          <div>
            {
              showMenuIcon && <WidgetsIcon onClick={handelSmNav} />
            }
          </div>
        </Box>

        {isMobile ? (
          <>
            <div className='sm-nav-icon-control' ref={MenuRef}>

              <Nav />
            </div>
          </>
        ) : (
          <Nav />
        )}
      </Box>

    </header>
    </Container>
  );
}

export default Header;
