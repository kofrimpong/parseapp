import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  items = [];
  loading = true;
  showEmpty = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    let query = new Parse.Query(Event);
    query.find().then(items => {
      this.items = items;
      this.loading = false;
      if (!this.items.length) {
        this.showEmpty = true;
      }
    }).catch(err => {
      this.loading = false;
    });
  }

  itemClicked(event: Event) {
    this.router.navigate(['product', { id: event.id }]);
  }

}
