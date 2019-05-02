import { Component, OnInit, Input } from '@angular/core';

export interface IBreadcrumb {
  url: string;
  name: string;
}

@Component({
// tslint:disable-next-line: component-selector
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() list: IBreadcrumb[] = [];
  constructor() { }

  ngOnInit() {
  }

}
