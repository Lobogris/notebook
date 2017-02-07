import { Injectable } from '@angular/core';
import { Tutorial } from '../tutorial';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PostService {
    private postUrl = 'app/json/tutorial/post.json';  // URL to web api
   
    constructor(private _http: Http) { }

    /*getPost(): Observable<Tutorial[]> {
    return this._http.get(this.postUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }*/

    getPost(identificador: number | string): Observable<Tutorial[]> {
        return this._http.get(this.postUrl)
                    .map(this.extractData)
                    .catch(this.handleError); 
    }
    
    private extractData(res: Response) {
        let body = res.json();
        //console.log(body.data)
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}