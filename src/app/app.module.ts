import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ForumComponent } from './forum/forum.component';
import { QuestComponent } from './quest/quest.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { ProfileComponent } from './profile/profile.component'
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormQuestComponent } from './form-quest/form-quest.component';
import { SocketTestComponent } from './socket-test/socket-test.component'
//import {AuthInterceptor} from "./auth.interceptor"

/*const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}*/
// providers : INTERCEPTOR_PROVIDER
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
    ProfileComponent,
    LoginComponent,
    FormQuestComponent,
    SocketTestComponent
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
