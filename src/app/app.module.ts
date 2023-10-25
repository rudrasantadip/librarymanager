import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { HistorytableComponent } from './dashboard/historytable/historytable.component';
import { DataTablesModule } from 'angular-datatables';
import { ProfileheaderComponent } from './profile/profileheader/profileheader.component';
import { ProfilebodyComponent } from './profile/profilebody/profilebody.component';
import { ProfileservicesComponent } from './profile/profileservices/profileservices.component';
import { AuthenticationComponent } from './authentication/authentication.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    BodyComponent,
    DashboardComponent,
    AdminComponent,
    ProfileComponent,
    HeaderComponent,
    HistorytableComponent,
    ProfileheaderComponent,
    ProfilebodyComponent,
    ProfileservicesComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
