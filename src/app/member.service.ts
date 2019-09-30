import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';

import { Member } from './member';
import { Office } from './office';
import { Team } from './team';

import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '
  })
};

/*const ELEMENT_DATA: Member[] = [
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
  {name: "TestName1", email: 'test@gmail.com', image: "none", createdAt: new Date("23-9-2019"), team: "NewTeam", startDate: new Date("23-9-2019"), office: "NewOffice", calculatedStatus: "Status"},
];*/

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  //displayedColumns: string[] = ['select', 'name'];
  //dataSource = new MatTableDataSource<Member>(ELEMENT_DATA);
  //selection = new SelectionModel<Member>(true, []);  
  
  url = 'https://staging.officernd.com/i/organizations/assignment-demo';
  constructor(private http: HttpClient) { }

  public ping() {
    this.http.get(this.url)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }  
  /*getAllMembers() {
    return this.http.get(this.url + "/members", httpOptions).subscribe(data => console.log(data));
  }*/
  /*getAllMembers(): Observable<Member[]> {  
    return this.http.get<Member[]>(this.url + '/members', httpOptions);  
  }  */  
}
