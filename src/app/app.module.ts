import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/landing/login/login.component';
import { ChoresComponent } from './components/parents/chores/chores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RewardsComponent } from './components/parents/rewards/rewards.component';
import { AddChoreComponent } from './components/parents/chores/add-chore/add-chore.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AddRewardComponent } from './components/parents/rewards/add-reward/add-reward.component';
import { RewardsService } from './services/rewards.service';
import { ChoresService } from './services/chores.service';
import { ManageComponent } from './components/parents/manage/manage.component';
import { AuthService } from './services/auth.service';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { ChildChoresComponent } from './components/child/child-chores/child-chores.component';
import { ChildSignupComponent } from './components/landing/child-signup/child-signup.component';
import { ParentSignupComponent } from './components/landing/parent-signup/parent-signup.component';
import { HomeComponent } from './components/parents/home/home.component';
import { ManageThisChildComponent } from './components/parents/manage-this-child/manage-this-child.component';
import { ChildRewardsComponent } from './components/child/child-rewards/child-rewards.component';
import {PointsService} from './services/points.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    ChoresComponent,
    NavbarComponent,
    RewardsComponent,
    AddChoreComponent,
    AddRewardComponent,
    ManageComponent,
    ChildChoresComponent,
    ChildSignupComponent,
    ParentSignupComponent,
    HomeComponent,
    ManageThisChildComponent,
    ChildRewardsComponent
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
