export interface COMMENT {
  id: number;
  comments: Array<Comments>;
}

export interface Comments {
  name: string;
  text: string;
  rate: number;
}
