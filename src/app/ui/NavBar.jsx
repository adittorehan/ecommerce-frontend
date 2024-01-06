'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';

import styles from './NavBar.module.scss';
import { getUserName } from '../lib/auth';

const User = ({ name }) => {
    return (
        <div className={styles.profile}>
            <p>Hello, {name}</p>
            <a href='#'>Orders & Account</a>
        </div>
    )
}

const Login = ({ user }) => {
    return (
        <>
            {
                Boolean(user) ? <User name={user} /> :
                    <div className={styles.loginContainer}>
                        <PersonOutlineOutlinedIcon style={{ color: 'white' }} />
                        <Link href='/user/login'>Login</Link>
                    </div>
            }
        </>


    );
};

const Cart = () => {
    return (
        <div>
            <IconButton>
                <ShoppingCartOutlinedIcon style={{ color: 'white' }} />
            </IconButton>
        </div>
    );
};

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className={styles.container}>
            <div className={styles.navItemContainer}>
                <Image
                    src={"/logo.png"}
                    width={120}
                    height={48}
                    style={{ verticalAlign: 'middle' }}
                    alt='App logo'
                />
                <div className={styles.searchbarContainer}>
                    <input
                        className={styles.searchbar}
                        placeholder='Search in Daraz'
                    />
                    <IconButton
                        className={styles.searchButton}
                        onClick={() => console.log("I am clicked")}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>

                <div style={{
                    display: "flex"
                }}>
                    <Login user={getUserName()} />
                    <div className={styles.loginContainer}>
                        <Link href='/user/register'>Sign Up</Link>
                    </div>
                    <Cart />
                    <div>
                        <Tooltip title="Open Menu" arrow>
                            <IconButton onClick={handleClick}>
                                {/* Your icon, e.g., <MenuIcon /> */}
                                <span>Icon</span>
                            </IconButton>
                        </Tooltip>

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
                            <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
                            <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
                        </Popover>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;