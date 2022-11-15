import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringComponent } from './data-review/filtering/filtering.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ComposeMessagComponent } from './shared/compose-messag/compose-messag.component';
import { AuthGuard } from './auth/auth.guard';
import { PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategyService } from './shared/selective-preloading-strategy.service';
import { LoggingComponent } from './user-management/logging/logging.component';
import { BrowserUtils } from '@azure/msal-browser';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  //{path: 'compose', component: ComposeMessagComponent, outlet: 'popup'},
  {
    path: 'DataReview',
    loadChildren: () => import('./data-review/data-review.module').then(m => m.DataReviewModule),
    canLoad: [AuthGuard],
    canActivate: [MsalGuard]
  },
  {
    path: 'UserManagement',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
    canLoad: [AuthGuard],
    canActivate: [MsalGuard],
    data: { preload: true }
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [MsalGuard]
  },
  {path: '', redirectTo:'Dashboard', pathMatch: 'full', canLoad: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot( appRoutes,
    { enableTracing: false , // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategyService,
      // Don't perform initial navigation in iframes or popups
     initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
