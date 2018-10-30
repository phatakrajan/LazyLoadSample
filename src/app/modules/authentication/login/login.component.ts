import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    constructor(
        private router: Router
    ) {
    }

    login() {

            this.getMyInformation();

    }

    //get my user info
    getMyInformation() {

                this.router.navigate(['login', 'legal-check']);

    }


}