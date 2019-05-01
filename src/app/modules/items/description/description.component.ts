import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from 'src/app/models/data';
import { DetailItem } from 'src/app/models/detailItem';
import { IBreadcrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  itbreadcrumb: IBreadcrumb[] = [];
  itemData: Item;
  itemId: string;
  loading: boolean;
  error = '';

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.itbreadcrumb.push({
      name: 'items',
      url: 'items'
    });
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.itemId = params.id;
      this.itbreadcrumb.push({
        name: 'descripción',
        url: 'description'
      });
      this.getItemById(this.itemId);
    });
  }

  private getItemById(id: string): any {
    this.appService.getItemById(id).subscribe(
      (result: DataResponse<DetailItem>) => {
        this.itemData = result.data.item;
        this.loading = false;
        this.itbreadcrumb.push({
          name: this.itemData.category_id,
          url: ''
        });
      },
      error => {
        this.loading = false;
        if (error.status === 404) {
          this.error = '404';
        }
      }
    );
  }

  public getDecimals(value) {
    const decimals = value.toString().length === 1 ? value + '0' : value.toFixed(2);
    return decimals;
  }

}
