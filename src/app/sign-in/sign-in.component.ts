import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

	changeUsername(event) {
		// console.log(event.target.value);
		this.username = event.target.value;
	}

	changePassword(event){
		this.password = event.target.value;
	}

	username = ""
	password = ""
	constructor() { }

	ngOnInit() {
	}

}
