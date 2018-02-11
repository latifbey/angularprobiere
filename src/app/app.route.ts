import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    
    { path: 'about', component: AboutComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class AppRouteModule { }