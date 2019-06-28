import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableAPIService } from '../observable-api.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
  providers: [ObservableAPIService]
})
export class ResultComponent implements OnInit, OnDestroy {
  results = [];
  result;
  connection;
  
  constructor(private obsAPI:ObservableAPIService) { }

  ngOnInit() {
      console.log('Subscribing');
      this.connection = this.obsAPI.getMessages().subscribe(results => {
      this.results = [results];
    });
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  sendQuery() {
      this.obsAPI.sendQuery();
  }
}
