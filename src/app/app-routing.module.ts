import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { NotfoundComponent } from './components/not-found/notfound.component';

const routes: Routes = [
    {path:"",component:GameListComponent},
    {path:"gameform",component:GameFormComponent},
    {path: '404', component:NotfoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
