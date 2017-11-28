import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  login(){
    this._router.navigate(['/java/hibernate']);
  }

}
