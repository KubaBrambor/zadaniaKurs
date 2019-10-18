import { Component, OnInit } from '@angular/core';
import { Desser } from '../../model/desser/desser';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-dessers',
  templateUrl: './dessers.component.html',
  styleUrls: ['./dessers.component.scss']
})
export class DessersComponent implements OnInit {

  public dessers:Desser[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getDessers();
  }

  getDessers():void{
    this.dessers = this.service.getDesser();
  }
}
