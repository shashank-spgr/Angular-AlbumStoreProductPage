import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";
  constructor(private _http: Http) { }

  getAlbum(id:number){
    var result = this._http.get(this._albumUrl);
    console.log("result:"+result);

    return result;
  }
}
