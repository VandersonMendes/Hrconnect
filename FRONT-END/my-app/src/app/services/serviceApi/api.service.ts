import { Injectable } from '@angular/core';
import { DataAvance } from '../../interfaces/dataLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from 'src/app/interfaces/dataUser';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
   urlBaseAuth = 'http://localhost:4000/auth'

     async createUser(user: DataAvance) {
    return  this.http.post<DataAvance>(`${this.urlBaseAuth}/registerCompany`, user);
  }
  // teste(){
  //   return this.http.get(`localhost:4000/`)
  // }
    verificEmailExist(email: string): any{
    return this.http.post(`${this.urlBaseAuth}/existEmail`,{email});
   }
   async login(email: string, password: string): Promise<any> {
    return this.http.post(`${this.urlBaseAuth}/login`,{ email, password } )
   }
    async validate_token(token: string) {
    const tokenString = JSON.parse(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });
    return   this.http.get(`${this.urlBaseAuth}/token`, { headers });
  }


  urlBaseHome = 'http://localhost:4000/home'
   async getCompany(id: string) {
    return  this.http.get(`${this.urlBaseHome}/company/${id}`);
  }
   async getStatus(id: string) {
    console.log(id)
    return  this.http.get(`${this.urlBaseHome}/statusEmployee/${id}`);
  }
  async createTask(idCompany: string, taks: string) {
    return  this.http.put(`${this.urlBaseHome}/create_taks`, {idCompany, taks});
  }
  getTask(idCompany: string) {
    return  this.http.get(`${this.urlBaseHome}/get_task/${idCompany}`);
  }
  deleteTask(idT: string, idC: string) {
    return  this.http.delete(`${this.urlBaseHome}/delete_task/${idT}/${idC}`);
  }
  completedTask(idTask: string, idCompany: string, completed: boolean) {
    console.log(idCompany, completed, idTask)
    return  this.http.put(`${this.urlBaseHome}/completedTask`, {completed, idTask, idCompany });
  }
    getCollaborator(idCompany: string) {
    return  this.http.get(`${this.urlBaseHome}/getCollaborator/${idCompany}`);
  }

  async createCollaborator(newColaborator: any) {
    console.log(newColaborator)
    return  this.http.put(`${this.urlBaseHome}/create_collaborator`, newColaborator);
  }
    deleteCollaborator(idCollaborator: string, idCompany: string) {
    return this.http.delete(`${this.urlBaseHome}/delete_collaborator/${idCollaborator}/${idCompany}`);
  }
   updateCompany(dataCompany: UserData, idCompany: string) {
    return this.http.put(`${this.urlBaseHome}/update_company/${idCompany}`, dataCompany);
  }
}
