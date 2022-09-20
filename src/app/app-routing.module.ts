import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContent1Component } from './home-content1/home-content1.component';

const routes: Routes = [
  {
    path: 'content1',
    component: HomeContent1Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
