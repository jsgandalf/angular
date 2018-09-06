import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = "http://localhost:63145/api";
    constructor(private http: Http, private snackBar : MatSnackBar) {
        this.getMessages('');
    }

    messages = [];

    async getMessages(user){
        try {
            user = (user) ? '/' + user : '';
            var response = await this.http.get(this.BASE_URL + '/messages' + user).toPromise();
            this.messages = response.json();   
        } catch (error) {
            this.handleError("Unable to get messages");
        }
    }

    async postMessage(message){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());   
        } catch (error) {
            this.handleError("Unable to post message");
        }
    }

    private handleError(message){
        let snackBarRef = this.snackBar.open(message, 'Close', { duration: 3000 });
    }
}