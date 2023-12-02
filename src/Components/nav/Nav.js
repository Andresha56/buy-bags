

import React from 'react'
import "./nav.css";
// ---material--UI--
import { Box } from '@mui/material';
import { Dropdown } from '@mui/base/Dropdown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Nav() {
    return (

        <>
            {/* -----nav--- */}

            <nav>
                <Box sx={{ display: "flex" }}>
                    <ul className="sm-nav-control" >
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li >
                        <li >
                            <Dropdown>
                                <a style={{ display: "flex" }} href="/">Category  <ArrowDropDownIcon /> </a>
                            </Dropdown>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </Box>
            </nav>
            {/* ----icons--- */}
            <Box className="sm-nav-icons-control" sx={{ display: "flex", gap: "30px" }}>
                <FavoriteIcon />
                <ShoppingCartIcon />
            </Box>

         
            



        </>
    )
}

export default Nav