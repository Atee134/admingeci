import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserForListDto, UserDetailDto, Role, UserForEditDto, ColorDto, ColorChangeDto } from '../_models/generatedDtos';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(role?: Role): Observable<UserForListDto[]> {
    if (role) {
      const params = new HttpParams()
      .set('role', role);

      return this.http.get<UserForListDto[]>(this.baseUrl + 'users', {params: params});
    } else {
      return this.http.get<UserForListDto[]>(this.baseUrl + 'users');
    }
  }

  getUser(userId: number): Observable<UserDetailDto> {
    return this.http.get<UserDetailDto>(this.baseUrl + 'users/' + userId);
  }

  updateUser(userForEdit: UserForEditDto) {
    return this.http.put(`${this.baseUrl}users`, userForEdit);
  }

  getColleagues(userId: number): Observable<UserForListDto[]> {
    return this.http.get<UserForListDto[]>(this.baseUrl + 'users/' + userId + '/colleagues');
  }

  addPerformer(operatorId: number, performerId: number) {
    return this.http.put(`${this.baseUrl}users/${operatorId}/performer/${performerId}`, {});
  }

  removePerformer(operatorId: number, performerId: number) {
    return this.http.delete(`${this.baseUrl}users/${operatorId}/performer/${performerId}`, {});
  }

  getColor(operatorId: number, performerId: number): Observable<ColorDto> {
    return this.http.get<ColorDto>(`${this.baseUrl}users/${operatorId}/performer/${performerId}/color`);
  }

  changeColor(operatorId: number, performerId: number, color: string) {
    return this.http.post(`${this.baseUrl}users/color`, new ColorChangeDto({operatorId, performerId, color}));
  }
}
