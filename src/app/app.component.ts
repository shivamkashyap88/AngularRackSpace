import { Component,OnInit } from '@angular/core';
import {UserData} from './../service/userdata.service';
import {UserModel} from './../model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public userDataModel: Array<UserModel>;
  constructor(private userData :UserData) {
    
  }
  ngOnInit(){
    this.userData.getData().subscribe((resp : UserModel[])=>{
      this.userDataModel = resp;
    });
  }
}
