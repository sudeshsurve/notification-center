import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification-center/notification/notification.component';

const routes: Routes = [
  {path: "" , pathMatch:"full" , redirectTo:"/auth"},
  {path:"notification" , component:NotificationComponent},
  
  {path:"auth" , loadChildren : () => import('./auth/auth/auth.module').then(x => x.AuthModule)},

  {path:"player" , loadChildren : () => import('./player/player.module').then(x => x.PlayerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
