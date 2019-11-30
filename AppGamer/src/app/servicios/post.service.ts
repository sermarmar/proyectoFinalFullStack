import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/posts';
  }

  getAll(): Promise<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).toPromise();
  }

  post(body): Promise<Post> {
    return this.http.post<Post>(this.baseUrl, body).toPromise();
  }

  getById(id): Promise<Post> {
    return this.http.get<Post>(this.baseUrl + '/' + id).toPromise();
  }

  editar(body): Promise<Post> {
    return this.http.put<Post>(this.baseUrl, body).toPromise();
  }

  borrar(idPost) {
    return this.http.delete(this.baseUrl + '/' + idPost).toPromise();
  }
}
