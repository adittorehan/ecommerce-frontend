'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import styles from './page.module.scss';
import CustomButton from '../../ui/CutomButton';
import CustomInput from '../../ui/CustomInput';
import { BASE_URL } from '@/app/data';
import { getUserName, setUser } from '@/app/lib/auth';


export default function Login() {
    console.log("name", getUserName());
    const [loginForm, setLoginForm] = useState(null);
    const [alert, setAlert] = useState(null);
    const handleOnChange = (key, value) => {
        setLoginForm({
            ...loginForm,
            [key]: value
        })
    }
    const router = useRouter();
    const [openAlert, setAlertStatus] = useState(false);

    const handleClose = () => {
        setAlertStatus(false)
    }

    const handleSubmit = (form) => {
        axios.post(`${BASE_URL}/login`, form).then(res => {
            setAlert(< Alert severity="success" color="success" onClose={handleClose}>
                Successfully Logged In
            </Alert >)
            setAlertStatus(true)
            setUser(res.data);
            router.push('/');
        }).catch(err => {
            setAlert(<Alert severity="warning" color="warning" onClose={handleClose}>
                Failed to login
            </Alert>)
            console.log(err);
            setAlertStatus(true)
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
                                    onClick={e => handleSubmit(loginForm)}
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
                    {alert && <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                        {alert}
                    </Snackbar>}
                </Container>
            </Box>
        </>
    )

}