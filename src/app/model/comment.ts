export interface Comentario{
  content: string;
}

export interface ComentarioResponse{
  id: number;
  date_commentary: string;
  postBelong: number;
  user: number;
  content: string;
}
