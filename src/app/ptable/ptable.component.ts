import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  active = false;


  news;
  scrollableCols: { field: string; header: string; }[];
  cols: { field: string; header: string; }[];
  loading: boolean;
  storyResponseModel: any;

  
  constructor(private carService: CarService) {
    
    this.cols = [
      { field: 'name', header: 'Story Name' },
      { field: 'status', header: 'Status' }
  ];

  this.scrollableCols = [
      { field: 'name', header: 'Story Name' },
      { field: 'status', header: 'Status' },
      
  ];
   }

  ngOnInit() {

  }

  loadDataOnScroll(event) {
    this.loading = true;


        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {

             this.carService.getJSON().subscribe(data => this.storyResponseModel = data);
            this.loading = false;
        }, 1000);
    }
  handleClick(e) {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }
  }

}
