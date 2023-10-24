import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
  data: any;

  constructor(private service: ReservationService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.service.flightData;
    console.log(this.data);
  }

  // Función para manejar la selección de un vuelo
  onSelect(flightId: number) {
    // Aquí puedes implementar la lógica que se ejecutará cuando se seleccione un vuelo
    console.log(`Se seleccionó el vuelo con ID ${flightId}`);
    // Puedes realizar acciones adicionales aquí, como navegar a otra página o mostrar detalles del vuelo.
  }
}

