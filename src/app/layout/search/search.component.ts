import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Item } from 'src/app/models/item';
import { Items } from 'src/app/models/items';
import { DataResponse } from 'src/app/models/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = '';
  itemList: Item[];

  constructor(private appService: AppService,  private router: Router) { }

  ngOnInit() {
  }

  public onSearch() {
    this.router.navigate(['items'], { queryParams: {
      search: this.inputSearch
    }});
  }
}
