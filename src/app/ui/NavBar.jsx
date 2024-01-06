'use client';

import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';

import styles from './NavBar.module.scss';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <PersonOutlineOutlinedIcon style={{ color: 'white' }} />
            <Link href='/user/login'>Login</Link>
        </div>
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
                <div style={{ marginRight: -50 }}>
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
                    <Login />
                    <div className={styles.loginContainer}>
                        <Link href='/user/register'>Sign Up</Link>
                    </div>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default NavBar;