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



const ngxuiLoaderConfig:NgxUiLoaderConfig ={
  bgsColor: 'red',
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize:80,
  fgsColor: 'white',
  pbColor: 'blue',
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
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxuiLoaderConfig),
    NgxUiLoaderRouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
