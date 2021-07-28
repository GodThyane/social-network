import {Component, Input, OnInit} from '@angular/core';
import {Comentario, ComentarioResponse} from '../model/comment';
import {getDateTooltip, isYesterday} from '../model/RelojTest';

declare var $: any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('comment') comment: ComentarioResponse;

  constructor() { }

  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  getDaysAgo(): string {
    console.log(this.comment.date_commentary);
    return isYesterday(new Date(this.comment.date_commentary));
  }

  getDates(): string {
    return getDateTooltip(new Date(this.comment.date_commentary));
  }

}
