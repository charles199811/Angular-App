import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() teacher:any;
  TeacherId:string;
  TeacherName:string;

  ngOnInit(): void {

  }

  addTeacher(){
    var val = {TeacherId:this.TeacherId,
              TeacherName:this.TeacherName};
    this.service.addTeacher(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTeacher(){
    var val = {TeacherId:this.TeacherId,
      TeacherName:this.TeacherName};
    this.service.updateTeacher(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
