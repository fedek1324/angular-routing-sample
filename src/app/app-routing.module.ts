import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  // {path:'crisis-center', component: CrisisListComponent},
  {path:'', redirectTo:'/heroes', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} // <-- debuggingpurposes only
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
