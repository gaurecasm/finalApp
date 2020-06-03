import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { FeedComponent } from './feed.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';

const routes: Routes = [
    { path: 'default', component: FeedComponent },
    { path: 'feed/:id', component: FeedDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeedRoutingModule { }
