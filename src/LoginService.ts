/// <reference path="../typings/index.d.ts"/>

import { Constants } from './constants';

class LoginService {
  private status: boolean;
  private accessToken: string;
  private userID: string;

  constructor() {
    this.status = false;
  }

  // window fbasyncinit 
  public fbLogin(): void {
    let self = this;
    let constants = new Constants();

    FB.init(
      {
        appId: constants.APPID,
        xfbml: constants.XFBML,
        version: constants.VERSION
      }
    );

    FB.Event.subscribe('auth.statusChange', (response: FB.LoginStatusResponse): void => {
      if(response.status == "connected"){
        window.loginComponent.updateComponentState(true);
      } else {
        window.loginComponent.updateComponentState(false);
      }
    });

    FB.login(function (response: FB.LoginStatusResponse): void {
      if (response.status == "connected") {
        window.loginComponent.updateComponentState(true);
        console.log("connected");
        console.log(response.authResponse.accessToken);
        console.log(response.authResponse.expiresIn);
        console.log(response.authResponse.signedRequest);
        console.log(response.authResponse.userID);
      } else {
        window.loginComponent.updateComponentState(false);
        console.log("not connected");
      } 
    });
  
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getUserId(): string {
    return this.userID;
  }

}

export { LoginService };