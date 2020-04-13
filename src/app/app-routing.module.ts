import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent},
  { path: 'pokemon-dashboard', component: PokemonDashboardComponent},
  { path: 'pokemon-detail', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PokemonListComponent, PokemonDashboardComponent]
