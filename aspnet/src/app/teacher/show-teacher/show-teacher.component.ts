import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrls: ['./show-teacher.component.css']
})
export class ShowTeacherComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeacherList:any=[];
  ModalTitle:string;
  ActivateAddEditTeacherComp:boolean=false;
  teacher:any;

  TeacherListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshTeacherList();
  }

  addClick(){
    this.teacher={
      TeacherId:0,
      TeacherName:"",
    }
    this.ModalTitle="Add Teacher";
    this.ActivateAddEditTeacherComp=true;
  }

  closeClick(){
    this.ActivateAddEditTeacherComp=false;
    this.refreshTeacherList();
  }

  editClick(item: any){
    console.log(item);
    this.teacher=item;
    this.ModalTitle="Edit Teacher";
    this.ActivateAddEditTeacherComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteTeacher(item.TeacherId).subscribe(data=>{
        alert(data.toString());
      this.refreshTeacherList();
    });
    }
  }


  refreshTeacherList(){
    this.service.getTeacherList().subscribe(data=>{
      this.TeacherList=data;
      this.TeacherListWithoutFilter=data;
    });
  }



}
