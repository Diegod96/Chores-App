import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ChoresComponent} from './components/chores/chores.component';
import {RewardsComponent} from './components/rewards/rewards.component';
import {AddChoreComponent} from './components/chores/add-chore/add-chore.component';
import {AddRewardComponent} from './components/rewards/add-reward/add-reward.component';
import {ManageComponent} from './components/manage/manage.component';
import {SignUpChildComponent} from './components/manage/sign-up-child/sign-up-child.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'chores', pathMatch: 'full', component: ChoresComponent},
  {path: 'rewards', pathMatch: 'full', component: RewardsComponent},
  {path: 'add-chore', pathMatch: 'full', component: AddChoreComponent},
  {path: 'add-reward', pathMatch: 'full', component: AddRewardComponent},
  {path: 'manage', pathMatch: 'full', component: ManageComponent},
  {path: 'manage/child-sign-up', pathMatch: 'full', component: SignUpChildComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
