import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = '';
  itemList: Item[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSearch() {
    this.router.navigate(['items'], { queryParams: {
      search: this.inputSearch
    }});
  }
}
