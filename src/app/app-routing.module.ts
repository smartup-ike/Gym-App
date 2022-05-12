import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { MembersComponent } from './views/members/members.component';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent
      },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
