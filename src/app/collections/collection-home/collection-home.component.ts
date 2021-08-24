import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.scss']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    { name: "Zerintac", age: "78", job: "supurgeci", status: true },
    { name: "Qehreman", age: "67", job: "xalturshik", status: true },
    { name: "Famil", age: "99", job: "deputat", status: false }

  ];
  headers = [
    { key: "name", value: "Name" },
    { key: "age", value: "Age" },
    { key: "job", value: "Job" }, 
    { key: "status", value: "Employee Status" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
