import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CarService {

  constructor(private http: HttpClient) {

  }

  // public getStory() {
  //  return this.getJSON().subscribe(data => {
  //     console.log(data);
  // });
  // }
  public getJSON() {
    return this.http.get('../assets/mydata.json');
}

}
