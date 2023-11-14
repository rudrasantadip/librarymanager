import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER , NgxUiLoaderRouterModule} from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { HistorytableComponent } from './dashboard/historytable/historytable.component';
import { DataTablesModule } from 'angular-datatables';
import { ProfileheaderComponent } from './profile/profileheader/profileheader.component';
import { ProfilebodyComponent } from './profile/profilebody/profilebody.component';
import { ProfileservicesComponent } from './profile/profileservices/profileservices.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BodyComponent } from './body/body.component';
import { IssuebookComponent } from './books/issuebook/issuebook.component';
import { ReturnedbooksComponent } from './books/returnedbooks/returnedbooks.component';
import { IssuedbooksComponent } from './books/issuedbooks/issuedbooks.component';
import { LoadingComponent } from './loading/loading.component';
import { CredshareService } from './services/credshare.service';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmincatalogComponent } from './admin/admincatalog/admincatalog.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AdminborrowsComponent } from './admin/adminborrows/adminborrows.component';
import { AdminchecksComponent } from './admin/adminchecks/adminchecks.component';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { AdminlogoutComponent } from './admin/adminlogout/adminlogout.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { RemovebookComponent } from './admin/removebook/removebook.component';





const ngxuiLoaderConfig:NgxUiLoaderConfig ={
  bgsColor: 'red',
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize:80,
  fgsColor: 'white',
  pbColor: 'blue',
  masterLoaderId: 'master'
}


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    HistorytableComponent,
    ProfileheaderComponent,
    ProfilebodyComponent,
    ProfileservicesComponent,
    AuthenticationComponent,
    IssuebookComponent,
    ReturnedbooksComponent,
    IssuedbooksComponent,
    LoadingComponent,
    AdminComponent,
    AdminhomeComponent,
    AdmincatalogComponent,
    AdminprofileComponent,
    AdminborrowsComponent,
    AdminchecksComponent,
    AdminsettingsComponent,
    AdminlogoutComponent,
    AdminloginComponent,
    AddbooksComponent,
    RemovebookComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxuiLoaderConfig),
    NgxUiLoaderRouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
  ],
  providers: [CredshareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
