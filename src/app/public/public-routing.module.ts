import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'home',
    component: HomeContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
