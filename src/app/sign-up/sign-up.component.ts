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

	username = ""
	password1 = ""
	password2 = ""
	
	constructor() { }

  ngOnInit() {
  }

}
