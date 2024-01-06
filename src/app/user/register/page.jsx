'use client';

import { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

import CustomButton from '../../ui/CutomButton';
import CustomInput from '../../ui/CustomInput';
import styles from './page.module.scss';
import { appName } from '@/app/data';


export default function Register() {

    const [registrationForm, setLoginForm] = useState(null);
    const handleOnChange = (key, value) => {
        setLoginForm({
            ...registrationForm,
            [key]: value
        })
    }

    return (
        <>
            <Box className={styles.container}>
                <Container maxWidth="md">
                    <div className={styles.header}>
                        <h2>Create your {appName} Account</h2>
                        <p style={{ color: 'gray' }}>Already member? <Link href="/user/login" style={{ textDecoration: "none", color: "#1a9cb7" }}>Login</Link> here.</p>
                    </div>
                    <Box className={styles.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <form>
                                    <CustomInput
                                        label="Email*"
                                        id="email"
                                        name="email"
                                        state={registrationForm}
                                        handleOnChange={handleOnChange}
                                        placeHolder="Please enter your Email"
                                        labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                    />
                                    <br />
                                    <CustomInput
                                        label="Verfication Code from SMS*"
                                        id="code"
                                        name="code"
                                        state={registrationForm}
                                        handleOnChange={handleOnChange}
                                        placeHolder="Verfication Code"
                                        labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                    />
                                    <br />
                                    <CustomInput
                                        label="Password*"
                                        id="password"
                                        name="password"
                                        state={registrationForm}
                                        handleOnChange={handleOnChange}
                                        placeHolder="Minimum 6 characters with a number and a letter"
                                        labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                    />
                                </form>
                            </Grid>
                            <Grid item xs={5}>
                                <CustomInput
                                    label="Name*"
                                    id="name"
                                    name="name"
                                    state={registrationForm}
                                    handleOnChange={handleOnChange}
                                    placeHolder="Enter your name"
                                    labelStyle={{ fontSize: 12, lineHeight: 2 }}
                                />
                                <br />
                                <CustomButton
                                    text="SIGN UP"
                                    style={{
                                        backgroundColor: "#F57224",
                                        marginBottom: 10
                                    }}
                                />
                                <p>By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy</p>
                                <p>Or, sign up with</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <CustomButton
                                            text="Facebook"
                                            style={{ backgroundColor: "#3B5998" }}
                                            startIcon={<FacebookIcon />}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomButton
                                            text="Google"
                                            style={{ backgroundColor: "#D34836" }}
                                            startIcon={<GoogleIcon />}
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )

}