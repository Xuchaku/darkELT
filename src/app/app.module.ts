import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ForumComponent } from './forum/forum.component';
import { QuestComponent } from './quest/quest.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule} from '@angular/common/http';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { ProfileComponent } from './profile/profile.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ForumComponent,
    QuestComponent,
    UserComponent,
    AboutComponent,
    PreLoaderComponent,
    FormAuthComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
