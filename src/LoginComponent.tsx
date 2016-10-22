/// <reference path="../typings/index.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';

import { LoginService } from './LoginService';

class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {
	public state: ILoginComponentState;
	public loginService: LoginService;

	constructor(props: ILoginComponentProps) {
		super(props);
		this.state = { message: "Not Logged" };
		this.loginService = new LoginService();
	}

	componentDidMount() {
		window.fbAsyncInit = this.loginService.fbLogin;
		window.loginComponent = this;
	}

	// public fbCallback(status: boolean) : void {
	// 	if(status)
	// 		window.loginComponent.updateComponentState(true);
	// 	else
	// 		window.loginComponent.updateComponentState(false);
	// }

	// public fbCallback(response: FB.LoginStatusResponse) : void {
	// 	console.log("In fbCallback");

	// 	response.status ==  "connected" ?  this.updateComponentState(true) : this.updateComponentState(false);
	// }

	public updateComponentState(status: boolean) : void {
		if(status){
			this.setState({
				message: 'Logged In'
			});
		} else {
			this.setState({
				message: 'Not Logged'
			
			});
		}
	}

	public onLogout(response: FB.LoginStatusResponse) {
		this.setState({
			message: 'Logged Out'
		});
	}

	public onStatusChange(response: FB.LoginStatusResponse) {
		if (response.status === "connected") {
			console.log("loggged in");
			this.setState({
				message: 'Logged In'
			});
		}
	}

	public render() {
		return (
			<div>
				<div
					className="fb-login-button"
					data-max-rows="1"
					data-size="xlarge"
					data-show-faces="false"
					data-auto-logout-link="true"
					>
				</div>
				<div> {this.state.message} </div>
			</div>
		);
	}

}

export { LoginComponent };