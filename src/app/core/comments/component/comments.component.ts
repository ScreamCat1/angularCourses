import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { COMMENT, Comments } from './../models/product-comments';
import { CommentsService } from './../shared/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments: Array<Comments>;
  productId: number;

  private sub;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => { this.productId = +params.get('id'); });
    this.sub = this.commentsService.getComments(this.productId)
    .subscribe(comments => { this.comments = (<COMMENT>comments).comments; });
  }

  toggleVisibilityCommnets(): void {
    this.router.navigate([{ outlets: { popup: null }}])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
