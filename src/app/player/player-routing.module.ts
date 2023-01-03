import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerDataComponent } from './components/add-player-data/add-player-data.component';

const routes: Routes = [

  {path:'' , pathMatch:'full' , redirectTo:'add-player'},
  {path : 'add-player' , component : AddPlayerDataComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
