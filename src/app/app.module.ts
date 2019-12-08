import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardResultsComponent } from './pages/card-results/card-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    HomeComponent,
    PageNotFoundComponent,
    CardResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
