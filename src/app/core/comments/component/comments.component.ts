import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { COMMENT } from './../models/product-comments';
import { CommentsService } from './../shared/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<COMMENT>;
  productId: number;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => { this.productId = +params.get('id'); });
    this.comments = this.commentsService.getComments();
  }

  toggleVisibilityCommnets(): void {
    this.router.navigate([{ outlets: { popup: null }}])
  }

}
