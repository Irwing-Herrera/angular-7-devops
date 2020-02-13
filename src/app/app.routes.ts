import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'about' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);