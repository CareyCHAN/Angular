import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ExploreModule { }
