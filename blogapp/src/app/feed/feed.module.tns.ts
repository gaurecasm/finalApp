import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FeedDetailComponent } from '@src/app/feed/feed-detail/feed-detail.component';



@NgModule({
  declarations: [FeedDetailComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeedModule { }
