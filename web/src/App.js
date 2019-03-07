import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { uploadUsers, firebaseSignIn } from './networking/firebase';
import crypto from 'crypto';

const ProtectedRoute = ({ predicate, children, redirectTo, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            predicate ? (
                children(props)
            ) : (
                <Redirect
                    to={{
                        pathname: redirectTo,
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

class App extends Component {
    authListener = null;

    state = {
        isAuthenticated: false,
        loading: true
    };

    async componentDidMount() {
        try {
            // const result = await uploadUsers();
            // console.log('result', result);
            // const signIn = await firebaseSignIn('goku@gmail.com', 'password');
            // console.log('signIn', signIn);
        } catch (e) {
            console.log('error', e);
        }

        this.authListener = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('USER CHANGED');
                this.setState({
                    isAuthenticated: true
                });
            }
        });
    }

    componentWillUnmount() {
        this.authListener();
    }

    render() {
        const { isAuthenticated } = this.state;
        return (
            <Router>
                <Switch>
                    <ProtectedRoute predicate={!isAuthenticated} path={'/login'} redirectTo={'/'}>
                        {props => <LoginPage {...props} />}
                    </ProtectedRoute>
                    <ProtectedRoute predicate={isAuthenticated} exact path={'/'} redirectTo={'/login'}>
                        {props => <WelcomePage {...props} />}
                    </ProtectedRoute>
                    <ProtectedRoute predicate={true}>{props => <h1>Page not found</h1>}</ProtectedRoute>
                </Switch>
            </Router>
        );
    }
}

export default App;
