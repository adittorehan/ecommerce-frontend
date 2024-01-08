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
import { deleteUser, getUserName } from '../lib/auth';

const User = ({ name, handleUser }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        deleteUser();
        handleUser(null);
        handleClose();
    }

    return (
        <>
            <div className={styles.profile} onClick={handleClick}>
                <p>Hello, {name}</p>
                <a href='#'>Orders & Account</a>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
        </>
    );
};

const Login = ({ user, handleUser }) => {
    return (
        <>
            {
                Boolean(user) ? <User name={user} handleUser={handleUser} /> :
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
    const [user, setUser] = useState(getUserName());
    const handleUser = (value) => {
        setUser(value)
    }

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
                    <Login user={user} handleUser={handleUser} />
                    <div className={styles.loginContainer}>
                        <Link href='/user/register'>Sign Up</Link>
                    </div>
                    <Cart />
                </div>
            </div>
        </div >
    );
};

export default NavBar;