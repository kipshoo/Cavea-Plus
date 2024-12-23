import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './view/pages/ka-page/children/main/main.component';
import { MoviesComponent } from './view/pages/ka-page/children/movies/movies.component';
import { TvShowsComponent } from './view/pages/ka-page/children/tv-shows/tv-shows.component';
import { KaPageComponent } from './view/pages/ka-page/ka-page/ka-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthComponent } from './view/pages/ka-page/children/auth/auth.component';
import { LoginComponent } from './view/pages/ka-page/children/auth/children/login/login.component';
import { RegisterComponent } from './view/pages/ka-page/children/auth/children/register/register.component';
import { UserComponent } from './view/pages/ka-page/children/user/user.component';
import { WathchlistComponent } from './view/pages/ka-page/children/user/children/wathchlist/wathchlist.component';
import { MainPageSliderComponent } from './view/pages/ka-page/children/main/children/main-page-slider/main-page-slider.component';
import { MovieComponent } from './view/pages/ka-page/children/movies/children/movie/movie.component';
import { MainPageMoviesComponent } from './view/pages/ka-page/children/main/children/main-page-movies/main-page-movies.component';
import { MainPageSingleMovieComponent } from './view/pages/ka-page/children/main/children/main-page-movies/children/main-page-single-movie/main-page-single-movie.component';
import { AuthInputBorderFocusDirective } from './shared/directives/auth-input-border-focus.directive';
import { PasswordComponent } from './view/pages/ka-page/children/auth/children/password/password.component';
import { PasswordResetComponent } from './view/pages/ka-page/children/auth/children/password/children/password-reset/password-reset.component';
import { PrivacyAndPolicyModalComponent } from './view/modals/privacy-and-policy-modal/privacy-and-policy-modal.component';
import { BrowseComponent } from './view/pages/ka-page/children/browse/browse.component';
import { GeorgianDubbedMoviesComponent } from './view/pages/ka-page/children/browse/children/georgian-dubbed-movies/georgian-dubbed-movies.component';
import { EuropeancinemaComponent } from './view/pages/ka-page/children/browse/children/europeancinema/europeancinema.component';
import { WhenNostalgyHitsComponent } from './view/pages/ka-page/children/browse/children/when-nostalgy-hits/when-nostalgy-hits.component';
import { TrendingComponent } from './view/pages/ka-page/children/browse/children/trending/trending.component';
import { KidsComponent } from './view/pages/ka-page/children/browse/children/kids/kids.component';
import { RecentlyAddedComponent } from './view/pages/ka-page/children/browse/children/recently-added/recently-added.component';
import { GeoBlockComponent } from './view/pages/ka-page/children/browse/children/geo-block/geo-block.component';
import { WatchBeforeChangingSignsSeason3Component } from './view/pages/ka-page/children/browse/children/watch-before-changing-signs-season3/watch-before-changing-signs-season3.component';
import { PremiereComponent } from './view/pages/ka-page/children/browse/children/premiere/premiere.component';
import { StoriesOfApkhaziaComponent } from './view/pages/ka-page/children/browse/children/stories-of-apkhazia/stories-of-apkhazia.component';
import { GeorgianTvShowsComponent } from './view/pages/ka-page/children/browse/children/georgian-tv-shows/georgian-tv-shows.component';
import { ModernGeorgianCinemaComponent } from './view/pages/ka-page/children/browse/children/modern-georgian-cinema/modern-georgian-cinema.component';
import { ComingsoonComponent } from './view/pages/ka-page/children/browse/children/comingsoon/comingsoon.component';
import { A24Component } from './view/pages/ka-page/children/browse/children/a24/a24.component';
import { EducationalDocumentariesComponent } from './view/pages/ka-page/children/browse/children/educational-documentaries/educational-documentaries.component';
import { GeorgianShortFilmsComponent } from './view/pages/ka-page/children/browse/children/georgian-short-films/georgian-short-films.component';
import { AnimationMovieComponent } from './view/pages/ka-page/children/browse/children/animation-movie/animation-movie.component';
import { GeorgianfilmheritageComponent } from './view/pages/ka-page/children/browse/children/georgianfilmheritage/georgianfilmheritage.component';
import { ArthouseComponent } from './view/pages/ka-page/children/browse/children/arthouse/arthouse.component';
import { GeorgianDocumentariesComponent } from './view/pages/ka-page/children/browse/children/georgian-documentaries/georgian-documentaries.component';
import { DetectivesComponent } from './view/pages/ka-page/children/browse/children/detectives/detectives.component';
import { NewyearComponent } from './view/pages/ka-page/children/browse/children/newyear/newyear.component';
import { VerifyComponent } from './view/pages/ka-page/children/auth/children/verify/verify.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MoviesComponent,
    TvShowsComponent,
    KaPageComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    WathchlistComponent,
    MainPageSliderComponent,
    MovieComponent,
    MainPageMoviesComponent,
    MainPageSingleMovieComponent,
    AuthInputBorderFocusDirective,
    PasswordComponent,
    PasswordResetComponent,
    PrivacyAndPolicyModalComponent,
    BrowseComponent,
    GeorgianDubbedMoviesComponent,
    EuropeancinemaComponent,
    WhenNostalgyHitsComponent,
    TrendingComponent,
    KidsComponent,
    RecentlyAddedComponent,
    GeoBlockComponent,
    WatchBeforeChangingSignsSeason3Component,
    PremiereComponent,
    StoriesOfApkhaziaComponent,
    GeorgianTvShowsComponent,
    ModernGeorgianCinemaComponent,
    ComingsoonComponent,
    A24Component,
    EducationalDocumentariesComponent,
    GeorgianShortFilmsComponent,
    AnimationMovieComponent,
    GeorgianfilmheritageComponent,
    ArthouseComponent,
    GeorgianDocumentariesComponent,
    DetectivesComponent,
    NewyearComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
