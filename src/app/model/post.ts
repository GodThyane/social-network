import {Comentario, ComentarioResponse} from './comment';

export class Post {

  idPost: number;
  titlePost: string;
  contentPost: string;
  datePost: Date;
  comments: Comentario[];
}


export interface Post1 {
  name_post: string;
  post_content: string;
  name_category: string;
}

export interface PostRequest {
  pk: number;
  name_post: string;
  post_content: string;
  date_created: string;
  user: number;
  category: number;
  size: number;
  userName: string;
  date_edited: string;
  name_category: string;
  comment: ComentarioResponse[];
}

