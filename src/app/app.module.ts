import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {  HttpModule } from '@angular/http';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import {UserDetailsPage } from '../pages/user-details/user-details';
@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    OrganisationsPage,
    ReposPage,
    UserDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    OrganisationsPage,
    ReposPage,
    UserDetailsPage
  ],
  providers: [GithubUsersProvider,HttpModule]
})
export class AppModule {}
