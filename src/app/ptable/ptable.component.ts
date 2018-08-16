import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  active = false;

  cols: any[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    const cars = this.carService.getCarsSmall();
    console.log(cars);

    this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }

  handleClick(e) {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }
  }

}
