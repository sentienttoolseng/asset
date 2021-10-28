import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminPage } from './board-admin/board-admin.page';
import { BoardModeratorPage } from './board-moderator/board-moderator.page';
import { BoardUserPage } from './board-user/board-user.page';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { ProfilePage } from './profile/profile.page';
import { RegisterPage } from './register/register.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    RegisterPage,
    HomePage,
    ProfilePage,
    BoardAdminPage,
    BoardModeratorPage,
    BoardUserPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     HttpClientModule

    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
