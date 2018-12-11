import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Event } from 'src/app/models/event';
import * as Parse from 'parse';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]>;
  loading = true;
  showEmpty = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.products$ = this.route.paramMap.pipe(
      switchMap(params => {
        let id = params.get('id');
        let event = new Event();
        event.id = id;
        let query = new Parse.Query(Product);
        query.equalTo("event", event);
        return from(query.find());
      })
    );
    this.products$.subscribe(items => {
      this.loading = false;
      this.showEmpty = items.length == 0;
    })
  }
  backClicked() {
    this.router.navigate(['event']);
  }
}
