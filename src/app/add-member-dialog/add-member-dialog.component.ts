import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Input, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Office } from '../office';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  
  @Input() locations: Office[];
  title: string;
  message: string;
  fullName = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.fullName.hasError('required') ? 'You must enter a full name': '';
  }

  constructor(public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddMemberDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  ngAfterInit() {
    //console.log(this.locations);
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

  constructor(public title: string, public message: string) {
  }
}
