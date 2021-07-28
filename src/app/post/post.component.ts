import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post, PostRequest} from '../model/post';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {getDateTooltip, isYesterday} from '../model/RelojTest';
import {Comentario} from '../model/comment';
import {NotificationsService} from 'angular2-notifications';
import {CommunicationService} from '../services/communication.service';
import {DatePipe} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private notify: NotificationsService,
    private comm: CommunicationService,
    private datePipe: DatePipe
  ) {
    this.commentario = {
      content: ''
    };
  }

  @ViewChild('comm2') nameField: ElementRef;
  post: PostRequest;
  commentario: Comentario;


  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.getPost();
  }

  focus(): void {
    this.nameField.nativeElement.focus();
  }

  private getPost(): void {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      this.post = this.comm.posts.find(p => p.pk == id);
      this.postService.getComments(this.post.pk).subscribe(res => {
        this.post.comment = res;
        console.log(res);
      }, error => {
        console.log(error);
      });
      console.log(this.post);
    });
  }

  getDaysAgo(): string {
    return isYesterday(new Date(this.post.date_created));
  }

  getDates(): string {
    return getDateTooltip(new Date(this.post.date_created));
  }

  comment(): void {
    if (this.commentario.content.replace(/\s/g, '').length) {
      this.postService.comment(this.post.pk, this.commentario).subscribe(res => {
        console.log(res);
        this.post.comment.push(res);
        this.post.comment.forEach((comment) => {
          comment.date_commentary = this.datePipe.transform(comment.date_commentary, 'yyyy-MM-dd hh:mm:ss');
        });
        this.focus();
      }, error => {
        console.log(error);
      });
    }
  }

  recentOrder(): void {
    this.post.comment.sort((a, b) => {
      return new Date(b.date_commentary).getTime() - new Date(a.date_commentary).getTime();
    });
  }

  onSuccess(message): void {
    this.notify.success('Completado', message, {
      timeOut: 1000,
      animate: 'fade',
      showProgressBar: true
    });
  }

}
