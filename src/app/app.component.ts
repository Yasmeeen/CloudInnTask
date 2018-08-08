import { Component } from '@angular/core';
import { CallapiService } from './Services/callapi.service';
import { Subject } from 'rxjs/Subject';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CallapiService]
})


export class AppComponent {
  title = 'app';
  workers=[];
  results: Object;
  searchTerm = new Subject<string>();


  constructor(private callservices:CallapiService ){
 
    this.callservices.search(this.searchTerm).subscribe(
      results=>{
            this.workers = results["results"];   
            console.log(results);     
          },
          error=>{
            console.log(error);
          },
          ()=>{
            console.log("Done")
          }
        )
}
  }
 

 

  

  


