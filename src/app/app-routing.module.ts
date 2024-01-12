import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'signin'},
  
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent},
  {path:'signin',component:SigninComponent},
  {path:'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
