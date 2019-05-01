import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';
import { AppService } from 'src/app/services/app.service';
import { DataResponse } from 'src/app/models/data';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itbreadcrumb: IBreadcrumb[] = [];
  itemList: Item[];
  query = '';
  loading = false;
  error = '';

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.itbreadcrumb.push({
      name: 'items',
      url: 'items'
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.loading = true;
      this.getItems(params.params.search);
    });
  }

  private getItems(request: string): any {
    this.appService.getItems(request).subscribe(
      (result: DataResponse<Items>) => {
        this.itemList = result.data.items;
        this.loading = false;
        this.itbreadcrumb.push({
          name: result.data.breadcrumb[0],
          url: ''
        });
      },
      error => {
       console.log(error);
      }
    );
  }

  public getDecimals(value){
    const decimals = value.toString().length === 1 ? value + '0' : value.toFixed(2);
    return decimals;
  }

}
