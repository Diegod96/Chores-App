import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ParentLandingComponent } from './components/landing/parent-landing/parent-landing.component';
import { ChildLandingComponent } from './components/landing/child-landing/child-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/landing/parent-landing/parent-login/login.component';
import { ChoresComponent } from './components/chores/chores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { AddChoreComponent } from './components/chores/add-chore/add-chore.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AddRewardComponent } from './components/rewards/add-reward/add-reward.component';
import { RewardsService } from './services/rewards.service';
import { ChoresService } from './services/chores.service';
import { ManageComponent } from './components/manage/manage.component';
import { SignUpChildComponent } from './components/manage/sign-up-child/sign-up-child.component';
import { AuthService } from './services/auth.service';
import { PointsService } from './services/points.service';
import {SignUpParentComponent} from './components/landing/parent-landing/sign-up/sign-up-parent.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ParentLandingComponent,
    ChildLandingComponent,
    SignUpParentComponent,
    LoginComponent,
    ChoresComponent,
    NavbarComponent,
    RewardsComponent,
    AddChoreComponent,
    AddRewardComponent,
    ManageComponent,
    SignUpChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [RewardsService, ChoresService, AuthService, PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
