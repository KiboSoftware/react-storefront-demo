import React, { useState, useContext, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SessionContext from 'react-storefront/session/SessionContext'
import { createLazyProps, fetchFromAPI } from 'react-storefront/props';

const useStyles = makeStyles((/* theme */) => ({
    root: {
        minHeight: 100,
        padding: 6,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-between',
        alignItems: 'center'
    },
    signUp: {
        flex: 1,
        textAlign: 'center',
    },
    signIn: {
        flex: 1,
        textAlign: 'center',
    },
    vl: {
        borderLeft: "2px solid black",
        minHeight: "200px",
    },
    spacingBlock: {
        margin: 10,
    },
}));

export default function signIn() {
    const classes = useStyles();

    const { actions, session } = useContext(SessionContext);

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signInError, setSignInError] = useState('');

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstName, setSignUpFirstName] = useState('');
    const [signUpLastName, setSignUpLastName] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const signIn = async () => {
        setSignInError('');
        await actions.signIn({
            email: signInEmail,
            password: signInPassword
        })
    };

    const signOut = async () => {
        await actions.signOut();
    };

    const signUp = async () => {
        setSignUpError('');
        const firstName = signUpFirstName;
        const lastName = signUpLastName;
        const email = signUpEmail;
        const password = signUpPassword;
        await actions.signUp({
            firstName,
            lastName,
            email,
            password
        })
    };

    return (
        <>
            <Container className={classes.root}>
                {!session.signedIn ? (
                    <>
                        <div className={classes.signUp}>
                            <div className={classes.spacingBlock}>
                                <h3>SIGN UP</h3>
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    value={signUpFirstName}
                                    label="First Name"
                                    onChange={(event) => setSignUpFirstName(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    value={signUpLastName}
                                    label="Last Name"
                                    onChange={(event) => setSignUpLastName(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    value={signUpEmail}
                                    label="Email"
                                    onChange={(event) => setSignUpEmail(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    type="password"
                                    value={signUpPassword}
                                    label="Password"
                                    onChange={(event) => setSignUpPassword(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <Button variant="outlined" onClick={() => signUp()}>Sign Up</Button>
                            </div>
                            {signUpError && (
                                <div className={classes.spacingBlock}>
                                    <b style={{ color: '#f00' }}>{signUpError}</b>
                                </div>
                            )}
                        </div>
                        <div className={classes.vl}></div>
                        <div className={classes.signIn}>
                            <div className={classes.spacingBlock}>
                                <h3>SIGN IN</h3>
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    value={signInEmail}
                                    label="Email"
                                    onChange={(event) => setSignInEmail(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <TextField
                                    type="password"
                                    value={signInPassword}
                                    label="Password"
                                    onChange={(event) => setSignInPassword(event.target.value)}
                                />
                            </div>
                            <div className={classes.spacingBlock}>
                                <Button variant="outlined" onClick={() => signIn()}>Sign In</Button>
                            </div>
                            {signInError && (
                                <div className={classes.spacingBlock}>
                                    <b style={{ color: '#f00' }}>{signInError}</b>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Box className={classes.spacingBlock} width="100%">
                            <Box display="flex" justifyContent="space-between" width="100%">
                                <div>
                                    <Typography variant="h5">{session.name}</Typography>
                                    <Typography variant="h6">{session.email}</Typography>
                                </div>
                                <div>
                                    <Button variant="outlined" onClick={() => signOut()}>Sign Out</Button>
                                </div>
                            </Box>
                        </Box>
                    </>
                )}
            </Container>
        </>
    );
}

signIn.getInitialProps = createLazyProps(fetchFromAPI)