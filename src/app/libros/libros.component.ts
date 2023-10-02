//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  
  myForm: FormGroup = this.fb.group({
   
  });
  constructor(private fb: FormBuilder) {}

  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      id: ['', Validators.required],
      numeroCopias: ['', Validators.required],
    });
}
guardar() {
}

cancelar() {
}

}

