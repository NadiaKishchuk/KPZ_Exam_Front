import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddRecordInfo, RecordInfo } from '../interfaces/RecordInfo';
import { UpdateDate } from '../interfaces/UpdateDate';

@Injectable({
  providedIn: 'root'
})
export class RecordService {


  baseUrl:string="https://localhost:7096/api/v1/Record";


  constructor( private http: HttpClient) { }
 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'my-auth-token',
      'Access-Control': 'Allow-Origin',
       observe:  'response',
    })
  };

  public getRoomRecords(roomId:number):Observable<RecordInfo[]>{
    return this.http.get<RecordInfo[]>(this.baseUrl+"?roomId="+roomId, this.httpOptions);
  }

  public deleteRecord(id:number):any{
    console.log()
    return this.http.delete(this.baseUrl+"/"+id, this.httpOptions);
  }
  public updateDate(updateDate:UpdateDate):any{
    return this.http.put<UpdateDate>(this.baseUrl,JSON.stringify(updateDate), this.httpOptions);
  }

  public Add(newItem:AddRecordInfo):any{
    return this.http.post(this.baseUrl,JSON.stringify(newItem), this.httpOptions);
  }


}
