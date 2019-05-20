import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NextGameComponent } from './next-game/next-game.component';
import { GamePlayedComponent } from './game-played/game-played.component';
import { NextFiveMatchComponent } from './next-five-match/next-five-match.component';
import { ResultSoFarComponent } from './result-so-far/result-so-far.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MainNavComponent} from './main-nav/main-nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { InfoComponent } from './home/info/info.component';
import { NewsComponent } from './home/news/news.component';
import { SloganComponent } from './home/slogan/slogan.component';
import { GetInTouchComponent } from './home/get-in-touch/get-in-touch.component';
import { ContactFormComponent } from './about-us/contact-form/contact-form.component';
import { TextComponent } from './about-us/text/text.component';
import { LocationComponent } from './contact-us/location/location.component';
import { TestimonialComponent } from './contact-us/testimonial/testimonial.component';
import { IframeComponent } from './contact-us/location/iframe/iframe.component';
import { AddressComponent } from './contact-us/location/address/address.component';
import { TestinfoComponent } from './contact-us/testimonial/testinfo/testinfo.component';
import { TestiComponent } from './contact-us/testimonial/testi/testi.component';
import { from } from 'rxjs';
import { ListTeamComponent } from './list-team/list-team.component';
import { SourcesComponent } from './sources/sources.component';
import { DetailParentComponent } from './team-detail/detail-parent/detail-parent.component';
import { DetailChildComponent } from './team-detail/detail-child/detail-child.component';
import { DataServiceService } from './data-service.service';
import { DisplayHeadToHeadComponent } from './display-head-to-head/display-head-to-head.component';



@NgModule({
  declarations: [
    AppComponent,
    NextGameComponent,
    GamePlayedComponent,
    NextFiveMatchComponent,
    ResultSoFarComponent,
    HeadToHeadComponent,
    TeamDetailComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    MainNavComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    CarouselComponent,
    InfoComponent,
    NewsComponent,
    SloganComponent,
    GetInTouchComponent,
    ContactFormComponent,
    TextComponent,
    LocationComponent,
    TestimonialComponent,
    IframeComponent,
    AddressComponent,
    TestinfoComponent,
    TestiComponent,
    ListTeamComponent,
    SourcesComponent,
    DetailParentComponent,
    DetailChildComponent,
    DisplayHeadToHeadComponent,   
  ],
  // must to be import RouterModule
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule,
     MatSidenavModule, 
     MatIconModule, 
     MatListModule,
     FormsModule,
     NgbModule.forRoot()

     
  ],
  providers: [DataServiceService],
  // this is show on stART UP PAGE
  bootstrap: [AppComponent]
})
export class AppModule { }
