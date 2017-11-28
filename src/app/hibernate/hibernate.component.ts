import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hibernate',
  templateUrl: './hibernate.component.html',
  styleUrls: ['./hibernate.component.css']
})
export class HibernateComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logout(){
    this._router.navigate(['/java/spring']);
  }


}
