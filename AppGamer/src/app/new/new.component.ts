import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../servicios/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      titular: new FormControl(''),
      descripcion: new FormControl(''),
      texto: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.postService.post(this.formulario.value)
      .then(response => {
        alert('Se ha añadido correctamente');
        this.router.navigate(['/']);
      }).catch(err => {
        alert("No se ha añadido correctamente");
      })
  }

}
