import React, { Component } from 'react';
import UserCard from './UserCard';
import Spinner from './Spinner';
import LoginButton from './LoginButton';

class App extends Component {
    state = {
        user: null,
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '21593431685-lic7r7e75d6du2ore52udm9v2ab7o7up.apps.googleusercontent.com',
                scope: 'profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get(),
                    user: this.getCurrentUser()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    getCurrentUser() {
        if (!this.auth.isSignedIn.get())
            return null;

        const profile = this.auth.currentUser.get().getBasicProfile();
        const user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            image: profile.getImageUrl(),
        };
        return user;
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get(), user: this.getCurrentUser() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };


    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col col-3 offset-6 text-center">
                            <br /><br />
                            {this.state.isSignedIn === null ? <Spinner></Spinner> : null}
                            {this.state.user != null ? <UserCard user={this.state.user} onSignOut={this.onSignOut}></UserCard> : null}
                            {this.state.isSignedIn === false ? <LoginButton onSignIn={this.onSignIn}></LoginButton> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;