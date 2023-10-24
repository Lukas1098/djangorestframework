import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  criteria:Criteria = new Criteria("","","");
  constructor(private loginService:LoginService,private service:ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.login();
  }

  public onSubmit(){
    this.service.getFlights(this.criteria).subscribe((res:any)=>{
      this.service.flightData = res;
      console.log(res)
      this.router.navigate(['/displayFlights']);
    })
  }


}
  