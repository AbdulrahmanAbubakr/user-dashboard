import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../dataTypes/ApiResult';
import { IUser } from '../dataTypes/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) 
  {}
    getAllUsers(page:number){
      return this.http.get<ApiResult<IUser[]>>(`https://reqres.in/api/users?page=${page} }`)
    }
   getUserById(id:number){
    return this.http.get<ApiResult<IUser>>(`https://reqres.in/api/users/${id}`)
   }
}


