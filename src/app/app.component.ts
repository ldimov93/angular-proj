import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Member } from './member';
import { Office } from './office';
import { MatTableDataSource } from '@angular/material/table';

import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';

import { MemberService } from './member.service';
  
import { Observable } from 'rxjs';
import { MatTab } from '@angular/material/tabs';

import { ConfirmDialogModel, ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AddMemberDialogModel, AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import {FormBuilder, FormGroup} from '@angular/forms';

const ELEMENT_DATA: Member[] = [
  {name: "TestName1", email: 'test1@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-9-23"), team: "Hoonigan Racing", startDate: new Date("23-9-2019"), office: "1e", calculatedStatus: "active"},
  {name: "TestName2", email: 'test2@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-9-23"), team: "NewTeam2", startDate: new Date("23-9-2019"), office: "2d", calculatedStatus: "active"},
  {name: "TestName3", email: 'test3@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-8-23"), team: "NewTeam3", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "drop_in"},
  {name: "TestName4", email: 'test4@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-8-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "former"},
  {name: "TestName5", email: 'test5@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-7-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "contact"},
  {name: "TestName6", email: 'test6@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-7-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "lead"},
  {name: "TestName7", email: 'test7@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-7-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "2d", calculatedStatus: "lead"},
  {name: "TestName8", email: 'test8@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-6-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "lead"},
  {name: "TestName9", email: 'test9@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-6-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "contact"},
  {name: "TestName10", email: 'test10@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-5-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "contact"},
  {name: "TestName11", email: 'test11@gmail.com', image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png", createdAt: new Date("2019-3-23"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "3c", calculatedStatus: "contact"},
];

const OFFICE_DATA: Office[] = [
  {_id: "1e", name: "Seattle"},
  {_id: "2d", name: "London"},
  {_id: "3c", name: "Paris"}
];

let STATUSES = [
  {key: "lead", value: "Lead"},
  {key: "drop_in", value: "Drop-In"},
  {key: "active", value: "Active"},
  {key: "former", value: "Former"},
  {key: "contact", value: "Contact"}
];

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'assignment-officernd-ld';
  displayedColumns: string[] = ['select', 'name', 'team', 'calculatedStatus', 'createdAt', 'location']; 

  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Member>(ELEMENT_DATA);
  selection = new SelectionModel<Member>(true, []);

  //myJSON = JSON.stringify(ELEMENT_DATA);

  locations: Office[] = OFFICE_DATA;
  statuses = STATUSES;
  
  sortedData: Member[];

  tabFilter = "";
  result: string = '';
 
  constructor(public dialog: MatDialog) {}
 
  confirmDialog(): void {
    const message = `Are you sure you want to delete the selected member(s)?`;
 
    const dialogData = new ConfirmDialogModel("Delete Member(s)", message);
 
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "60px",
      data: dialogData
    });
 
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (dialogResult) {
        this.deleteMembers();
      }
    });
  }

  addMemberDialog() {
    const message = `Are you sure you want to add the selected member(s)?`;
 
    const dialogData = new AddMemberDialogModel("Add Member", message);
 
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      maxWidth: "600px",
      data: dialogData
    });
 
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (dialogResult) {
        //this.deleteMembers();
      }
    });  
  }
  /* Sorting */
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.statuses.unshift({key: "all", value: "All"});
    this.dataSource.sort = this.sort;

    //this.dataSource.filterPredicate = function(data, filter: string): boolean {
    //  return data.name.toLowerCase().includes(filter) || data.office.toLowerCase().includes(filter) || data.team.toString().includes(filter);
    //};        
  }

  ngOnAfterViewInit() {
    
  }
  getMemberLocationById(id: string) {
    //console.log(id);
    //debugger
    return this.locations.filter(x => x._id == id)[0].name;
  }

  getStatusesById(id: string) {
    return this.statuses.filter(x => x.key == id)[0].value;
  }

  getStatusesByVal(val: string) {
    return this.statuses.filter(x => x.value == val)[0].key;
  }

  ngAfterViewInit() {
    
  }

  tabClick(event) {
    // filter table data 
    var textLabel = this.getStatusesByVal(event.tab.textLabel);
    if (textLabel == 'all') {
      this.applyFilter("");
    } else { 
      this.applyFilter(textLabel);
    }
    this.tabFilter = textLabel;
    //console.log(this.tabFilter);
  }

  tblRow(row: Member, event) {
    //console.log(row);
    event.stopPropagation();
    //this.selection.toggle(row);
  }

  getFilteredDataLength() {
    return this.dataSource.filteredData.length;
  }

  getTblDataLength() {
    return this.dataSource.data.length;
  }

  getDataLength(calcStatus) {
    let countNum = 0;
    switch (calcStatus) {
      case 'all':
          countNum = this.dataSource.data.length;
        break;
      default:
        countNum = this.dataSource.data.filter(x => x.calculatedStatus == calcStatus).length;
    }
    return countNum;
    //console.log(this.dataSource.data.filter(x => x.calculatedStatus == calcStatus));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  deleteMembers() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      //console.log(this.data.findIndex(d => d === item));
      this.data.splice(index, 1)
      this.dataSource = new MatTableDataSource<Member>(this.data);
    });
    this.selection = new SelectionModel<Member>(true, []);
    // Refresh current tab filter
    this.applyFilter(this.tabFilter);
  }

  // If created at is within current month, show "New" label
  createdAtCompareDate(createdAt: Date) {
    var month = new Date().getMonth();
    return month == createdAt.getMonth();
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Member): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  /* Filtering */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  
  
}
