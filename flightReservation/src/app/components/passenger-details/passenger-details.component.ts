
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  public flightData: any;
  public reservation: Reservation = {
    flightId: 0,
    passengerName: '',
    passengerEmail: '',
    // Otras propiedades de la reserva
  };

  constructor(
    private service: ReservationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const flightId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getFlight(flightId).subscribe((res: any) => {
      this.flightData = res;
    });
  }

  public onSubmit() {
    this.reservation.flightId = this.flightData.id;
    this.service.saveReservation(this.reservation).subscribe((res: any) => {
      // Supongamos que la API devuelve un objeto de respuesta con una propiedad 'id'
      const reservationId = res.id;
      this.router.navigate(['/confirm', reservationId]);
    });
  }
}

