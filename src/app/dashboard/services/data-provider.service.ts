import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {

    constructor(
        private http: HttpClient
    ) { }

    fetchdata() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(
                map(
                    data => {
                        console.log(data);
                        return data;
                    }
                )
            )
    }
}
