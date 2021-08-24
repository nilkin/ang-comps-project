import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input('class') classNames = ''
  @Input() data = [] as any;
  @Input() headers = [] as any;
  constructor() { }

  ngOnInit(): void {
  }

}
