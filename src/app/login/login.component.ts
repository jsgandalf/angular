import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
        
            <div>
                <mat-form-field>
                    <input class="registerInput"  matInput placeholder="Email" type="email" [(ngModel)]="loginData.email" />
                </mat-form-field>
            </div>
            <div>
                <mat-form-field>
                    <input class="registerInput"  matInput placeholder="Password" type="password" [(ngModel)]="loginData.password"/>
                </mat-form-field>
            </div>
            <button mat-raised-button color="primary" (click)="login()">Login</button>
        
    </mat-card>
    `
})
export class LoginComponent {
    constructor(private auth: AuthService){}

    loginData = {
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData);
    }
}