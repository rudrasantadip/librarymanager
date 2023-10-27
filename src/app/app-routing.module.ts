import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { IssuebookComponent } from './books/issuebook/issuebook.component';
import { ReturnedbooksComponent } from './books/returnedbooks/returnedbooks.component';
import { IssuedbooksComponent } from './books/issuedbooks/issuedbooks.component';
import { LoadingComponent } from './loading/loading.component';



const routes: Routes = [
  {path:'app', component:AppComponent},
  {path:"", redirectTo:'register', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'loading',component:LoadingComponent},
  {path:'profile',component:ProfileComponent},
  {path:'issuebook', component:IssuebookComponent},
  {path:'returnedbooks', component:ReturnedbooksComponent},
  {path:'issuedbooks', component:IssuedbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
