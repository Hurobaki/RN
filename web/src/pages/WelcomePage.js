import React, { Component } from 'react';

class WelcomePageComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome page</h1>
            </div>
        );
    }
}

export const WelcomePage = WelcomePageComponent;
