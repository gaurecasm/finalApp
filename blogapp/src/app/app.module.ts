import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
// import { HomeComponent } from '@src/app/home/home.component';
import { FeedComponent } from '@src/app/feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
