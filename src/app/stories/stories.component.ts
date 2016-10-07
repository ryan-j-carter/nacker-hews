import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.less']
})
export class StoriesComponent implements OnInit {
    typeSub: any;
    pageSub: any;
    items;
    storyType;
    pageNum: number;
    listStart: number;

    constructor(
        private _hackerNewsApiService: HackerNewsApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.typeSub = this.route.data.subscribe(
            data => this.storyType = (data as any).storyType
        );

        this.pageSub = this.route.params.subscribe(params => {
            this.pageNum = +params['page'] ? +params['page'] : 1;
            this._hackerNewsApiService.fetchStories(this.storyType, this.pageNum)
                .subscribe(
                    items => this.items = items,
                    error => console.log('Error fetching ' + this.storyType + ' stories'),
                    () => this.listStart = ((this.pageNum - 1) * 30) + 1
                );
        });
    }

}
