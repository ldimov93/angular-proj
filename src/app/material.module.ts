import { NgModule } from '@angular/core';

import { MatTableModule, MatTextColumn } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})

export class MaterialModule {}