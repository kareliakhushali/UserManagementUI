import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = "https://localhost:44377";

  constructor(private http:HttpClient) { }
  getAllUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.baseApiUrl + '/api/User')
  }

  addUser(addUserRequest :User) : Observable<User[]>
  {
    addUserRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User[]>(this.baseApiUrl + '/api/User',addUserRequest);
  }
  getUser(id : string):Observable<User>
  {
   return this.http.get<User>(this.baseApiUrl+'/api/User'+ id)
  }
  updateUser(id:string,updateUserRequest:User):Observable<User>
  {
    return this.http.put<User>(this.baseApiUrl + '/api/User' + id, updateUserRequest);
  }
  deleteUser(id:string) : Observable<User>
{
  return this.http.delete<User>(this.baseApiUrl + '/api/User' + id)
}

}
