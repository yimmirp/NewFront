import { Injectable } from '@angular/core';

const URL = 'http://127.0.0.1:'



@Injectable({
  providedIn: 'root'
})
export class UrlService {

  URL_GET:string = URL+'3002';
  URL_SET:string =  URL+"3000";
  URL_UPDATE:string = URL+"3001";
  constructor() { }
}
