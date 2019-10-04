import { NgModule } from '@angular/core';

import { 
  MatTableModule, 
  MatTextColumn,
  MatCheckboxModule,
  MatSortModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule
 } from '@angular/material';

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