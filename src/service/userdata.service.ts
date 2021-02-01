import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    public ROOT_URl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private  http: HttpClient) {
    }

    getData() {
        return this.http.get<UserModel[]>(`${this.ROOT_URl}`);
    }
}