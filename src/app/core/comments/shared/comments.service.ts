import { COMMENT, COMMENTS } from './../models/product-comments';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService {
  private isShown = false;
  constructor() { }

  getComments(): Array<COMMENT> {
    return COMMENTS;
  }

  hasShowComments(): boolean {
    this.isShown = !this.isShown;
    return this.isShown;
  }

}
