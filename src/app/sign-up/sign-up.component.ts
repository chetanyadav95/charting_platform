import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  	changeUsername(event) {
		// console.log(event.target.value);
		this.username = event.target.value;
	}

	changePassword(event){
		this.password1 = event.target.value;
	}

	changeConfirmPassword(event){
		this.password2 = event.target.value;
	}	

	validateEmail(email){
		var re = /\S+@\S+\.\S+/;
        return re.test(email);
	}

  	changeEmail(event) {
		console.log(event.target.value);
		this.email = event.target.value;
		if(this.validateEmail(event.target.value)===false)
		{
			this.emailError = "Email is not valid";
		}
		else{
			this.emailError = "";	
		}
		this.emailTouched=true;
	}


	username = ""
	password1 = ""
	password2 = ""
	email = "";
	emailTouched = false;
	emailError = "Email should be not empty"

	constructor() { }

  ngOnInit() {
  }

}
