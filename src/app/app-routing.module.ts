import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/pages/ka-page/children/main/main.component';
import { AuthComponent } from './view/pages/ka-page/children/auth/auth.component';
import { MoviesComponent } from './view/pages/ka-page/children/movies/movies.component';
import { LoginComponent } from './view/pages/ka-page/children/auth/children/login/login.component';
import { RegisterComponent } from './view/pages/ka-page/children/auth/children/register/register.component';
import { TvShowsComponent } from './view/pages/ka-page/children/tv-shows/tv-shows.component';
import { UserComponent } from './view/pages/ka-page/children/user/user.component';
import { WathchlistComponent } from './view/pages/ka-page/children/user/children/wathchlist/wathchlist.component';
import { PasswordComponent } from './view/pages/ka-page/children/auth/children/password/password.component';
import { PasswordResetComponent } from './view/pages/ka-page/children/auth/children/password/children/password-reset/password-reset.component';
import { BrowseComponent } from './view/pages/ka-page/children/browse/browse.component';
import { A24Component } from './view/pages/ka-page/children/browse/children/a24/a24.component';
import { AnimationMovieComponent } from './view/pages/ka-page/children/browse/children/animation-movie/animation-movie.component';
import { ArthouseComponent } from './view/pages/ka-page/children/browse/children/arthouse/arthouse.component';
import { ComingsoonComponent } from './view/pages/ka-page/children/browse/children/comingsoon/comingsoon.component';
import { DetectivesComponent } from './view/pages/ka-page/children/browse/children/detectives/detectives.component';
import { EducationalDocumentariesComponent } from './view/pages/ka-page/children/browse/children/educational-documentaries/educational-documentaries.component';
import { EuropeancinemaComponent } from './view/pages/ka-page/children/browse/children/europeancinema/europeancinema.component';
import { GeoBlockComponent } from './view/pages/ka-page/children/browse/children/geo-block/geo-block.component';
import { GeorgianDocumentariesComponent } from './view/pages/ka-page/children/browse/children/georgian-documentaries/georgian-documentaries.component';
import { GeorgianDubbedMoviesComponent } from './view/pages/ka-page/children/browse/children/georgian-dubbed-movies/georgian-dubbed-movies.component';
import { GeorgianShortFilmsComponent } from './view/pages/ka-page/children/browse/children/georgian-short-films/georgian-short-films.component';
import { GeorgianTvShowsComponent } from './view/pages/ka-page/children/browse/children/georgian-tv-shows/georgian-tv-shows.component';
import { GeorgianfilmheritageComponent } from './view/pages/ka-page/children/browse/children/georgianfilmheritage/georgianfilmheritage.component';
import { KidsComponent } from './view/pages/ka-page/children/browse/children/kids/kids.component';
import { ModernGeorgianCinemaComponent } from './view/pages/ka-page/children/browse/children/modern-georgian-cinema/modern-georgian-cinema.component';
import { NewyearComponent } from './view/pages/ka-page/children/browse/children/newyear/newyear.component';
import { PremiereComponent } from './view/pages/ka-page/children/browse/children/premiere/premiere.component';
import { RecentlyAddedComponent } from './view/pages/ka-page/children/browse/children/recently-added/recently-added.component';
import { StoriesOfApkhaziaComponent } from './view/pages/ka-page/children/browse/children/stories-of-apkhazia/stories-of-apkhazia.component';
import { TrendingComponent } from './view/pages/ka-page/children/browse/children/trending/trending.component';
import { WatchBeforeChangingSignsSeason3Component } from './view/pages/ka-page/children/browse/children/watch-before-changing-signs-season3/watch-before-changing-signs-season3.component';
import { WhenNostalgyHitsComponent } from './view/pages/ka-page/children/browse/children/when-nostalgy-hits/when-nostalgy-hits.component';
import { VerifyComponent } from './view/pages/ka-page/children/auth/children/verify/verify.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'movies', component:MoviesComponent},
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
  {path: 'user', component:UserComponent,
    children: [
      {path: 'watchlist', component:WathchlistComponent}
    ]
  },
  {path: 'browse', component:BrowseComponent,
    children: [
      {path: 'A24', component:A24Component},
      {path: 'animation-movie', component:AnimationMovieComponent},
      {path: 'arthouse', component:ArthouseComponent},
      {path: 'comingsoon', component:ComingsoonComponent},
      {path: 'detectives', component:DetectivesComponent},
      {path: 'educational_documentaries', component:EducationalDocumentariesComponent},
      {path: 'europeancinema', component:EuropeancinemaComponent},
      {path: 'geo-block', component:GeoBlockComponent},
      {path: 'georgian_documentaries', component:GeorgianDocumentariesComponent},
      {path: 'georgian-dubbed-movies', component:GeorgianDubbedMoviesComponent},
      {path: 'Georgian_Short_Films', component:GeorgianShortFilmsComponent},
      {path: 'Georgian_tv_shows', component:GeorgianTvShowsComponent},
      {path: 'georgianfilmheritage', component:GeorgianfilmheritageComponent},
      {path: 'kids', component:KidsComponent},
      {path: 'modern-georgian-cinema', component:ModernGeorgianCinemaComponent},
      {path: 'newyear', component:NewyearComponent},
      {path: 'Premiere', component:PremiereComponent},
      {path: 'recently_added', component:RecentlyAddedComponent},
      {path: 'stories_of_apkhazia', component:StoriesOfApkhaziaComponent},
      {path: 'trending', component:TrendingComponent},
      {path: 'watch_before_changing_signs_season3', component:WatchBeforeChangingSignsSeason3Component},
      {path: 'when-nostalgy-hits', component:WhenNostalgyHitsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
