import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public apidata=[];

  constructor(private api:DataService) {}
    
      
  

  ngOnInit(): void {
  this.api.getData().subscribe(res=>{
  this.apidata=res["data"];
    
    });
  }

}
