import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'https://kol2tai.herokuapp.com/api/shop/items';
  private url2 = 'https://kol2tai.herokuapp.com/api/shop/items/:id';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  getEach() {
    return this.http.get(this.url2);
  }


}

export class AKDataService {
}
