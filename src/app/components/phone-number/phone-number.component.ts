import { Component, OnInit, AfterViewInit, } from '@angular/core';
import * as firebase from 'firebase';



// tslint:disable-next-line:component-class-suffix
export class NumberComponent {
  country: string;
  area: string;
  prefix: string;
  line: string;
  get el64() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],

})
export class PhoneNumberComponent implements OnInit, AfterViewInit {
  public phoneNumber = new NumberComponent();
  public phoneRecaptchaVerifier: firebase.auth.RecaptchaVerifier;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const tmp = document.createElement('div');
    tmp.id = 'recaptcha-container';
    console.log(tmp);
    document.getElementById('captcha').append(tmp);
    setTimeout(() => {
      this.phoneRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function (response) {
          console.log(response);
          // reCAPTCHA solved - will proceed with submit function
        },
        'expired-callback': function () {
          // Reset reCAPTCHA?
        }
      });
    }, 100);
  }

  SignInWithPhoneNumber() {
    const num = this.phoneNumber.el64;
    firebase.auth().signInWithPhoneNumber(num, this.phoneRecaptchaVerifier).then((confirmationResult) => {
      var code = prompt(`We have send a code to ${num}, please enter it here`, "");
      if (code) {
        confirmationResult.confirm(code).then((result) => {
          console.log(result);
          // User signed in successfully.
          // Reset reCAPTCHA?
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // Reset reCAPTCHA?
          // ...
        });
      }
    }).catch((error) => {
      console.log(error.message);
    });
  }


}
