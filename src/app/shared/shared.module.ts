import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { HeroLoadingComponent } from './components/hero-loading/hero-loading.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SpinnerComponent,
    LoadingPlaceholderComponent,
    HeroLoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    SpinnerComponent,
    LoadingPlaceholderComponent,
    HeroLoadingComponent,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
