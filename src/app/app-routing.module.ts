import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/pages/ka-page/children/main/main.component';
import { AuthComponent } from './view/pages/ka-page/children/auth/auth.component';
import { LoginComponent } from './view/pages/ka-page/children/auth/children/login/login.component';
import { RegisterComponent } from './view/pages/ka-page/children/auth/children/register/register.component';
import { TvShowsComponent } from './view/pages/ka-page/children/tv-shows/tv-shows.component';
import { UserComponent } from './view/pages/ka-page/children/user/user.component';
import { WathchlistComponent } from './view/pages/ka-page/children/user/children/wathchlist/wathchlist.component';
import { PasswordComponent } from './view/pages/ka-page/children/auth/children/password/password.component';
import { PasswordResetComponent } from './view/pages/ka-page/children/auth/children/password/children/password-reset/password-reset.component';
import { BrowseComponent } from './view/pages/ka-page/children/browse/browse.component';
import { VerifyComponent } from './view/pages/ka-page/children/auth/children/verify/verify.component';
import { ParticipantComponent } from './view/pages/ka-page/children/participant/participant.component';
import { SingleMovieSeriesPageComponent } from './view/pages/ka-page/children/single-movie-series-page/single-movie-series-page.component';
import { MoviesComponent } from './view/pages/ka-page/children/movies/movies.component';
import { AuthGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'movies', component:MoviesComponent},
  {path: 'movies/:slugName', component:SingleMovieSeriesPageComponent},
  {path: 'tv-shows', component:TvShowsComponent},
  {path: 'auth', component:AuthComponent,
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'verify', component:VerifyComponent},
      {path: 'password', component:PasswordComponent,
        children: [
          {path: 'reset', component:PasswordResetComponent}
        ]
      }
    ]
  },
  {path: 'user', component:UserComponent, canActivate:[AuthGuard],
    children: [
      {path: 'watchlist', component:WathchlistComponent}
    ]
  },
  {path: 'browse/:slugName', component:BrowseComponent},
  {path: 'participant/:slugName', component:ParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
