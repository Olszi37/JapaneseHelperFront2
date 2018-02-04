import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsComponent]
})
export class MainModule { }
