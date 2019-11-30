import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../servicios/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  arrPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll()
      .then(response => {
        console.log(response);
        this.arrPosts = response;
      }).catch(err => {
        console.log(err);
      });
  }

  borrarPost(idPost) {
    this.postService.borrar(idPost)
      .then(response => {
        this.postService.getAll()
          .then(response => {
            console.log(response);
            this.arrPosts = response;
          }).catch(err => {
            console.log(err);
          });
      }).catch(err => {
        alert('No se ha borrado correctamente.');
      });
  }

}
