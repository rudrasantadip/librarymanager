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
import { authGuard } from './routeguards/auth.guard';
import { dashGuard } from './routeguards/dash.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmincatalogComponent } from './admin/admincatalog/admincatalog.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AdminborrowsComponent } from './admin/adminborrows/adminborrows.component';
import { AdminchecksComponent } from './admin/adminchecks/adminchecks.component';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { RemovebookComponent } from './admin/removebook/removebook.component';


const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path:'admin',
    component:AdminComponent,
    data:{openInNewTab:true},
    children:[
      {path:'home',component:AdminhomeComponent},
      {path:'catalog',component:AdmincatalogComponent},
      {path:'myaccount',component:AdminprofileComponent},
      {path:'borrows',component:AdminborrowsComponent},
      {path:'checks',component:AdminchecksComponent},
      {path:'settings',component:AdminsettingsComponent},
      {path:'login',component:AdminloginComponent},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'addbooks',component:AddbooksComponent},
      {path:'removebooks',component:RemovebookComponent}
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  { path: 'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  },

  { path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },

  { path: 'profile',
   component: ProfileComponent,
   canActivate:[authGuard] 
  },

  {
    path: 'issuebook',
    component: IssuebookComponent,
  },
  {
    path: 'returnedbooks',
    component: ReturnedbooksComponent,
  },
  {
    path: 'issuedbooks',
    component: IssuedbooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,{onSameUrlNavigation:"reload"}
    )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
