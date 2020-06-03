import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NSEmptyOutletComponent } from 'nativescript-angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { FeedComponent } from './feed/feed.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/(feedTab:feed)',
    pathMatch: 'full'
  },

  {
      path: 'feed',
      component: NSEmptyOutletComponent,
      loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule),
      outlet: 'feedTab'
  },
  // {
  //     path: 'browse',
  //     component: NSEmptyOutletComponent,
  //     loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
  //     outlet: 'browseTab'
  // },
  // {
  //     path: 'search',
  //     component: NSEmptyOutletComponent,
  //     loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  //     outlet: 'searchTab'
  // }
];
