import { Component } from "@angular/core";

@Component({
    selector: 'app-buscarlibro',
    templateUrl: './buscarlibro.component.html',
    styleUrls: ['./buscarlibro.component.css']
  })
  export class buscarlibroComponent  {
    libros = [
        { titulo: 'La culpa es de la vaca', id: '1', copiasDisponibles: 3 },
        { titulo: 'Odisea', id: '2', copiasDisponibles: 1 },
        { titulo: 'Cien anos de soledad', id: '3', copiasDisponibles: 2 },
        { titulo: 'Romeo y julieta', id: '4', copiasDisponibles: 0 },
        { titulo: 'Don Quijote', id: '5', copiasDisponibles: 5 },
        { titulo: 'El principito', id: '6', copiasDisponibles: 4 },
        { titulo: 'El senor de los anillos', id: '7', copiasDisponibles: 6 },
        { titulo: 'Harry Potter y la piedra filosofal', id: '8', copiasDisponibles: 7 },
        { titulo: 'Harry Potter y la camara secreta', id: '9', copiasDisponibles: 8 },
        { titulo: 'Harry Potter y el prisionero de Azkaban', id: '10', copiasDisponibles: 9 },
        { titulo: 'Harry Potter y las reliquias de la muerte', id: '11', copiasDisponibles: 10 },
        { titulo: 'El senor de los anillos 2', id: '12', copiasDisponibles: 11 }
      ];
      prestar(libro:any) {
        
        console.log(`Prestar ${libro.titulo}`);
        
      }
      cancelarPrestamo(libro:any) {
       
        console.log(`Cancelar préstamo de ${libro.titulo}`);
        
    }
   
    
    }
  