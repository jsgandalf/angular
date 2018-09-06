import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class WebService {
    BASE_URL = "http://localhost:63145/api";
    constructor(private http: Http, private snackBar : MatSnackBar, private auth: AuthService) {
        this.getMessages(null);
    }

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    getMessages(user){
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();   
            this.messageSubject.next(this.messageStore);
        }, error =>{
            this.handleError("Unable to get messages");
        });
    }

    postMessage(message){
        
        this.http.post(this.BASE_URL + '/messages', message).subscribe(response => {
            this.messageStore.push(response.json());   
            this.messageSubject.next(this.messageStore);
        }, error =>{
            this.handleError("Unable to get messages");
        });
        
    }

    getUser(){
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader);
    }

    saveUser(userData){
        return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader);
    }
    

    private handleError(message){
        let snackBarRef = this.snackBar.open(message, 'Close', { duration: 3000 });
    }
}