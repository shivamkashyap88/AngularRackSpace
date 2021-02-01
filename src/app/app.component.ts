import { Component,OnInit } from '@angular/core';
import {UserData} from './../service/userdata.service';
import {UserModel} from './../model/user.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public userDataModel: UserModel[] ;
  public showData : any[] = [];
  constructor(private userData :UserData) {
    
  }
  ngOnInit(){
    this.userData.getData().pipe(map(res=> res)).subscribe((resp : UserModel[])=>{
      this.userDataModel = resp;
	  console.log('sds',typeof resp); 
    });
  }
}
