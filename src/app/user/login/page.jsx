'use client';

import { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';

import styles from './page.module.scss';
import Link from 'next/link';
import CustomButton from '../../ui/CutomButton';
import CustomInput from '../../ui/CustomInput';


export default function Login() {

    const [loginForm, setLoginForm] = useState(null);
    const handleOnChange = (key, value) => {
        setLoginForm({
            ...loginForm,
            [key]: value
        })
    }

    return (
        <>
            <Box className={styles.container}>
                <Container maxWidth="md">
                    <div className={styles.header}>
                        <h2>Welcome to Daraz! Please login.</h2>
                        <p style={{ color: 'gray' }}>New member? <Link href="/user/register" style={{ textDecoration: "none", color: "#1a9cb7" }}>Register</Link> here.</p>
                    </div>
                    <Box className={styles.loginForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <form>
                                    <CustomInput
                                        label="Email*"
                                        id="email"
                                        name="email"
                                        state={loginForm}
                                        handleOnChange={handleOnChange}
                                        placeHolder="Please enter your Email"
                                        labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                    />
                                    <br />
                                    <CustomInput
                                        label="Password*"
                                        id="password"
                                        name="password"
                                        state={loginForm}
                                        handleOnChange={handleOnChange}
                                        placeHolder="Please enter your password"
                                        labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                    />
                                </form>
                            </Grid>
                            <Grid item xs={5}>
                                <CustomButton
                                    text="LOGIN"
                                    style={{
                                        backgroundColor: "#f57224",
                                        height: 48
                                    }}
                                />
                                <p>Or, login with</p>
                                <CustomButton
                                    text="Facebook"
                                    style={{
                                        backgroundColor: "#3B5998",
                                        marginBottom: 10
                                    }}
                                />
                                <CustomButton
                                    text="Google"
                                    style={{ backgroundColor: "#D34836" }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )

}