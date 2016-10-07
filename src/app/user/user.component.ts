import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import {HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
    sub: any;
    user;
    error: string;

    constructor(
        private _hackerNewsApiService: HackerNewsApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._hackerNewsApiService.fetchUser(params['user'])
                .subscribe(
                    user => this.user = user,
                    error => {
                        this.error = "User '" + params['user'] + "' not found.";
                        console.log('Error fetching ' + params['user']);
                    }
                );
        });
    }

}
