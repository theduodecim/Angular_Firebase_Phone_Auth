import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line:component-class-suffix




export class AppComponent {
  title = 'firebase-phone-auth';

  /*
    public phoneAuth() {
      // 'recaptcha-container' is the ID of an element in the DOM.
      var applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container');
      var provider = new firebase.auth.PhoneAuthProvider();
      provider.verifyPhoneNumber('+16505550101', applicationVerifier)
        .then(function (verificationId) {
          var verificationCode = window.prompt('Please enter the verification ' +
            'code that was sent to your mobile device.');
          return firebase.auth.PhoneAuthProvider.credential(verificationId,
            verificationCode);
        })
        .then(function (phoneCredential) {
          return firebase.auth().signInWithCredential(phoneCredential);
        });
    }
  
  */




}
