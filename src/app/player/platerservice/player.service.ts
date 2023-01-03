import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http : HttpClient) { }
  
get_players():Observable<any>{
   return this.http.get('http://localhost:4000/player' , {observe:'response'})
}

add_player(){
  return this.http.post('http://localhost:4000/players/post-user' , {observe:'response'})
}

get_player_by_id(id:string){
   return this.http.get('http://localhost:4000/players/'+id , {observe:'response'})
}

delete_player(id:string){
  return this.http.delete('http://localhost:4000/players/delete/'+ id , {observe:'response'})
}



}
