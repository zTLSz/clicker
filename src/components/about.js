import React, { Component } from 'react';
import { ui } from '../firebase'
import * as firebase from 'firebase';




export default class AboutPage extends Component {

    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }

    componentDidMount() {
      ui.start(this.myRef.current, {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            console.log('333')
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
        },
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/shop',
      });
    }


    render() {
      return (
        <div>
            Тут будут правила игры
            <div ref={this.myRef}></div>
        </div>
      );
    }
}