import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import averageLogo from '../../assets/images/averageLogo.png';

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <Typography
                color={'goldenrod'}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, my: 2 }}
            >
                <img
                    src={averageLogo}
                    alt="Logo"
                    height={'70'}
                    width="200"
                />
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                <li>
                    <NavLink
                        activeClassName="active"
                        to={'/'}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar
                    component={'nav'}
                    sx={{ bgcolor: 'black' }}
                >
                    <Toolbar>
                        <Typography
                            color={'goldenrod'}
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <img
                                src={averageLogo}
                                alt="logo"
                                height={'70'}
                                width="auto"
                                display="flex"
                                id="averageLogo"
                            />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink
                                        activeClassName="active"
                                        to={'/'}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: '240px',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
}
