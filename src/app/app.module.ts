import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './view/pages/ka-page/children/main/main.component';
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
import { MainPageMoviesComponent } from './view/pages/ka-page/children/main/children/main-page-movies/main-page-movies.component';
import { MainPageSingleMovieComponent } from './view/pages/ka-page/children/main/children/main-page-movies/children/main-page-single-movie/main-page-single-movie.component';
import { AuthInputBorderFocusDirective } from './shared/directives/auth-input-border-focus.directive';
import { PasswordComponent } from './view/pages/ka-page/children/auth/children/password/password.component';
import { PasswordResetComponent } from './view/pages/ka-page/children/auth/children/password/children/password-reset/password-reset.component';
import { PrivacyAndPolicyModalComponent } from './view/modals/privacy-and-policy-modal/privacy-and-policy-modal.component';
import { BrowseComponent } from './view/pages/ka-page/children/browse/browse.component';
import { VerifyComponent } from './view/pages/ka-page/children/auth/children/verify/verify.component';
import { PlayButtonDesignDirective } from './shared/directives/play-button-design.directive';
import { SubscriptionAuthButtonDesignDirective } from './shared/directives/subscription-auth-button-design.directive';
import { ParticipantComponent } from './view/pages/ka-page/children/participant/participant.component';
import { SingleMovieSeriesPageComponent } from './view/pages/ka-page/children/single-movie-series-page/single-movie-series-page.component';
import { MoviesComponent } from './view/pages/ka-page/children/movies/movies.component';
import { FilterForMoviesAndSeriesComponent } from './shared/components/filter-for-movies-and-series/filter-for-movies-and-series.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
    MainPageMoviesComponent,
    MainPageSingleMovieComponent,
    AuthInputBorderFocusDirective,
    PasswordComponent,
    PasswordResetComponent,
    PrivacyAndPolicyModalComponent,
    BrowseComponent,
    VerifyComponent,
    PlayButtonDesignDirective,
    SubscriptionAuthButtonDesignDirective,
    ParticipantComponent,
    SingleMovieSeriesPageComponent,
    MoviesComponent,
    FilterForMoviesAndSeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSliderModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
