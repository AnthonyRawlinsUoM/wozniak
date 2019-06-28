import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ObservableAPIService {
  private url = 'http://localhost:3333';  
  private socket;
  constructor() { }
  
  sendQuery(){
    this.socket.emit('query', {start: '2019-01-01',finish: '2019-01-01', models:'DFMC,JASMIN', geo_json:'{}'});
  }
  
  getMessages() {
    console.log('Creating Observable Results');
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('results', (data) => {
        console.log(data);
        observer.next(data);    
      });
      
      this.socket.on('welcome', (data) => {
        console.log(data);
        observer.next(data);
      });
      
      this.socket.on('Server Awakes', (data) => {
          console.log(data.data);
          observer.next(data);
      });
      
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
}
