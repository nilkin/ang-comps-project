import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module')
  .then(m => m.ElementsModule) },
  { path: 'collections', loadChildren: () => import('./collections/collections.module')
  .then(m => m.CollectionsModule) },
  { path: 'mods', loadChildren: () => import('./mods/mods.module')
  .then(m => m.ModsModule) },
  { path: 'views', loadChildren: () => import('./view/view.module')
  .then(m => m.ViewModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
