import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ChoresComponent} from './components/parents/chores/chores.component';
import {RewardsComponent} from './components/rewards/rewards.component';
import {AddChoreComponent} from './components/parents/chores/add-chore/add-chore.component';
import {AddRewardComponent} from './components/rewards/add-reward/add-reward.component';
import {ManageComponent} from './components/parents/manage/manage.component';
import { LoginComponent } from './components/landing/login/login.component';
import { ChildSignupComponent } from './components/landing/child-signup/child-signup.component';
import { ParentSignupComponent } from './components/landing/parent-signup/parent-signup.component';
import { ChildChoresComponent } from './components/child/child-chores/child-chores.component';
import { HomeComponent } from './components/parents/home/home.component';
import { ManageThisChildComponent } from './components/parents/manage-this-child/manage-this-child.component';
import { ChildRewardsComponent } from './components/child/child-rewards/child-rewards.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'child-signup', pathMatch: 'full', component: ChildSignupComponent},
  {path: 'parent-signup', pathMatch: 'full', component: ParentSignupComponent},

  {path: 'child-chores', pathMatch: 'full', component: ChildChoresComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},

  {path: 'child/:childID', component: ManageThisChildComponent},


  {path: 'rewards', pathMatch: 'full', component: RewardsComponent},
  {path: 'child-rewards', pathMatch: 'full', component: ChildRewardsComponent},
  {path: 'add-chore', pathMatch: 'full', component: AddChoreComponent},
  {path: 'add-reward', pathMatch: 'full', component: AddRewardComponent},
  {path: 'manage', pathMatch: 'full', component: ManageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
