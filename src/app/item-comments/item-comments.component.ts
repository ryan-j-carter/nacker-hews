import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.less']
})
export class ItemCommentsComponent implements OnInit {
    sub: any;
    item;

    constructor(
        private _hackerNewsApiService: HackerNewsApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let itemID = +params['id'];
            this._hackerNewsApiService.fetchComments(itemID)
                .subscribe(
                    data => this.item = data,
                    error => console.log('Could not load item ' + itemID)
                );
        });
    }

}
