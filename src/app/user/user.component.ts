import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = '';
  secretParagraphList: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  logClick() {
    var date = new Date();
    this.secretParagraphList.push("click at " + date.getDate() + " " + date.toTimeString());
  }
}
