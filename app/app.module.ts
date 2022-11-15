import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DataReviewModule } from './data-review/data-review.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; // Import


import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor, MsalService, } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
 declarations: [
   AppComponent
 ],
 //Note: Make sure you import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.
 //https://stackoverflow.com/questions/56400955/angular-wildcard-route-replacing-child-routes
 imports: [
   BrowserModule,
   DashboardModule,
   BrowserAnimationsModule,
   SharedModule,
   AuthModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatButtonModule,
   MatIconModule,
   MatCardModule,
   MatTableModule,
   MatInputModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatDividerModule,
   ReactiveFormsModule,
   MatNativeDateModule,
   DataReviewModule,
   MatSlideToggleModule,
   FormsModule,
   AppRoutingModule,
   HttpClientModule,
   MsalModule.forRoot( new PublicClientApplication({
     auth: {
       clientId: '3d048475-31b7-4cb8-b49e-d688bb188cf7', // Application (client) ID from the app registration
       authority: 'https://login.microsoftonline.com/common', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
       redirectUri: 'http://localhost:4200'// This is your redirect URI
     },
     cache: {
       cacheLocation: 'localStorage',
       storeAuthStateInCookie: isIE,
     }
   }), {
     interactionType: InteractionType.Redirect,
     authRequest: {
       scopes: ['user.read']
       }
   }, {
     interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
     protectedResourceMap: new Map([
       ['https://graph.microsoft.com/v1.0/me', ['user.read']]
     ])
   })
 ],
 providers: [
  MsalService,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: MsalInterceptor,
     multi: true
   },
   MsalGuard
 ],
 bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
