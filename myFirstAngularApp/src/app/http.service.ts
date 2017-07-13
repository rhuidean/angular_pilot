import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

// talk with apps and API
@Injectable()
export class HttpService {

	//inject Http
	constructor(private _http: Http) { }

	//
	retrieveTasks(){
		return this._http.get('/tasks').map(data=>data.json()).toPromise()
	}

}
