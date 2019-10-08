import { NgModule } from '@angular/core';

import { 
  MatTableModule, 
  MatTextColumn,
  MatCheckboxModule,
  MatSortModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule
  ]
})

export class MaterialModule {}