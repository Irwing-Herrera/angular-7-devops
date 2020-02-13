import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// RUTAS
import { APP_ROUTING } from './app.routes';
// PAGES
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AboutComponent } from './pages/about/about.component';
// COMPONENTS
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
// SERVICES
import { HeroesService } from './services/heroes.service';
import { UserService } from './services/user.service';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    ScrollingModule,
    DragDropModule,
  ],
  providers: [
    HeroesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
