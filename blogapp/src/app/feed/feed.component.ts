import { Component, OnInit } from '@angular/core';
import { FeedService, DataItem } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  items: Array<DataItem>;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
      this.items = this.feedService.getItems();
  }

}
