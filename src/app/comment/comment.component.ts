import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comment',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
    @Input() comment;
    collapse: boolean;

    constructor() {}

    ngOnInit() {
        this.collapse = false;
    }
}
