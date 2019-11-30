import { Component, OnInit } from '@angular/core';
import { PostService } from '../servicios/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  formulario: FormGroup;
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.formulario = new FormGroup({
      _id: new FormControl(''),
      titular: new FormControl(''),
      descripcion: new FormControl(''),
      texto: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.postService.getById(params.idPost)
        .then(response => {
          this.formulario = new FormGroup({
            _id: new FormControl(response._id),
            titular: new FormControl(response.titular),
            descripcion: new FormControl(response.descripcion),
            texto: new FormControl(response.texto),
            categoria: new FormControl(response.categoria)
          });
        }).catch(err => {
          alert("No se ha recuperado correctamente");
        });
    });
  }

  onSubmit() {
    this.postService.editar(this.formulario.value)
      .then(response => {
        alert('Se ha guardado correctamente');
      }).catch(err => {
        alert('No se ha guardado correctamente');
      });
  }

}
