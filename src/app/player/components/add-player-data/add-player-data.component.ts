import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlayerService } from '../../platerservice/player.service';
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-add-player-data',
  templateUrl: './add-player-data.component.html',
  styleUrls: ['./add-player-data.component.css']
})
export class AddPlayerDataComponent implements OnInit {

  playerdata : any[] = [] 
  tableEmptyData : boolean = false
content : string = ''
error : Error | null = null
  constructor(private playerservice : PlayerService) { }

  ngOnInit(): void {
this.get_all_players()
  }


  get_all_players(){ 

    try { 
      // ({} as any).someMethod() 
    this.playerservice.get_players().pipe(map((x:any)=>{
     let  options :any =[
        {label : "message" ,  value : "SMS"} ,
        {label : "Phone" ,  value : "whatsaap"} ,
        {label : "email" ,  value : "email"} ,  
    ]
         if(x.status == 204){
        this.tableEmptyData = false
        throw new Error(x.statusText);        
         }
      if(x.status == 200){
        this.tableEmptyData = true
        let res = x.body.allplayers.map((x:any)=> {return {...x , options}})
        return res
      }
    } 
    )).subscribe((res)=>{
      if(res == 'No data Avilable'){
        console.log(res);
      }
      this.playerdata = res })
    } catch (error) {
      if(error instanceof Error){
        console.log(error); 
          this.error = error
          throw error
      }
    }
  } 
  view_player(id: string){
    this.playerservice.get_player_by_id(id).subscribe((res) => {
      if(res.status == 200){
        console.log(res.body);
      }
    } ,((err)=> {
      console.log(err.message);
    }))
  }
  remove(id:string){
    console.log(id);
  this.playerservice.delete_player(id).subscribe((res)=>{
   if(res.status == 200){
    this.get_all_players()
      // console.log(res.body);
   }  
    }, (err)=> console.log(err.message)
    )
  }

}
  

