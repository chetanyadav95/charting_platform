import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

	validateEmail(email){
		var re = /\S+@\S+\.\S+/;
        return re.test(email);
	}

  	changeEmail(event) {
		console.log(event.target.value);
		this.email = event.target.value;
		if(this.validateEmail(event.target.value)===false)
		{
			this.error = "Email is not valid";
		}
		else{
			this.error = "";	
		}
		this.touched=true;
	}


	email = "";
	touched = false;
	error = "Email should be not empty"
  constructor() { }

  ngOnInit() {
  }

}
