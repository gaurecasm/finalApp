import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FeedRoutingModule } from '@src/app/feed/feed-routing.module.tns';
import { FeedComponent } from '@src/app/feed/feed.component';
import { FeedDetailComponent } from '@src/app/feed/feed-detail/feed-detail.component';



@NgModule({
  declarations: [
    FeedComponent,
    FeedDetailComponent
  ],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    FeedRoutingModule,
  ]
})
export class FeedModule { }
