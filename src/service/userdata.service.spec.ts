import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserData } from './userdata.service';

describe('User Data Service', () => {
    let injector: TestBed;
    let service: UserData;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserData]
        });
        injector = getTestBed();
        service = injector.get(UserData);
        httpMock = injector.get(HttpTestingController);
    });
    it('should return an Observable<UserDataModel[]>', () => {
    const dummyUsers = [
      { 
      "name": "Leanne Graham",
      "username": "Bret"
      },
      { 
      "name": "Ervin Howell",
      "username": "Antonette", 
      }
    ];

    service.getData().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(`${service.ROOT_URl}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);
  });
});
