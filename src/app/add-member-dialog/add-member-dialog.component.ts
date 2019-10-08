import { Component, OnInit, Inject, Input, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Office } from '../office';
import { Team } from '../team';
import { Member } from '../member';
import { digest } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  
  title: string;
  locations: Office[];
  teams: Team[];
  //fullName = new FormControl('', [Validators.required, Validators.email]);

  /*getErrorMessage() {
    return this.fullName.hasError('required') ? 'You must enter a full name': '';
  }*/

  constructor(public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddMemberDialogModel) {
    // Update view with given values
    this.locations = data.passedData[0];
    this.teams = data.passedData[1];
  }

  ngOnInit() {

  }

  ngAfterInit() {
    
  }

  dateFilter = (d: Date): boolean => {
    // Prevent date < 1/1/2019 from being selected.
    return d.getFullYear() >= 2019;
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}

export class AddMemberDialogModel {

  constructor(public title: string, public passedData: [Office[], Team[]]) {
  }
}
