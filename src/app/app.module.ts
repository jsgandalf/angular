import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component'
import { NewMessageComponent } from './new-message.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, } from '@angular/material';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';

var routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'messages',
  component: MessagesComponent
},{
  path: 'messages/:name',
  component: MessagesComponent
},{
  path: 'register',
  component: RegisterComponent
},{
  path: 'login',
  component: LoginComponent
},{
    path: 'user',
    component: UserComponent
}]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent, UserComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, FormsModule, ReactiveFormsModule, MatSnackBarModule, RouterModule.forRoot(routes)
  ],
  providers: [ WebService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }