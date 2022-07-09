import { ScoresheetService } from './scoresheet.service';
import { Scoresheet } from './scoresheet';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public scoresheets: Scoresheet;
  public editScoresheet: Scoresheet;
  public deleteScoresheet: Scoresheet;
  result!:number;
  val_1!:number;
  val_2!:number;



  constructor(private scoresheetService: ScoresheetService){ }
  Calculate(){
    this.result= this.val_1 + this.val_2;
  }
  Calculatev2(val1:string, val2:string){
    this.result=parseInt(val1) + parseInt(val2);
  }
  ngOnInit(): void {
    this.getScoresheets();
  }

  public getScoresheets(): void{
    this.scoresheetService.getScoresheets().subscribe(
      (response:Scoresheet[]) => {
        this.scoresheets = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onOpenModal(scoresheet: Scoresheet, mode: string): void{
    const container = document.getElementById('maincontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-toggle','modal');
    if(mode === 'edit'){
      button.setAttribute('data-target','modal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target','modal');
    }
    if(mode === 'edit'){
    button.setAttribute('data-target','modal');
    }
  }

}
