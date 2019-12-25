import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankRoutingModule } from './rank-routing.module';
import { RankComponent } from './rank.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RankComponent],
  imports: [
    CommonModule,
    RankRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class RankModule { }
