import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../services/data-provider.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    constructor(
        private dataProvider:DataProviderService
    ) { }

    ngOnInit(){
        this.fetchDataFromService();
    }

    fetchDataFromService(){
        this.dataProvider.fetchdata()
        .subscribe(
            data =>{
                console.log(data);
            }
        )
    }
}
