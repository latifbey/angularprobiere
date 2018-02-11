import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRouteModule } from './app.route';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PersonService } from './services/person.service';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [MainComponent]
})
export class AppModule { }
