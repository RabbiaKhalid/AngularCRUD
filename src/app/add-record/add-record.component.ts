import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor(private api:DataService) { }
  addEmployee=new FormGroup({
    name: new FormControl(''),
    salary :new FormControl(''),
    age: new FormControl('')

   });

  SaveData(){
   // console.log(this.addEmployee.value);
    this.api.saveEmployeeData(this.addEmployee.value).subscribe((result)=>{
      console.log(result);
    });
  }
  ngOnInit(): void {
  }

}
