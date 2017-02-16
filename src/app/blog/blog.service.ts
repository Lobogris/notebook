import { Injectable } from '@angular/core';
import { Tutorial } from '../tutorial';
//import { TUTORIALES } from './tutoriales';
import { Headers, Http, Response } from '@angular/http';
import { environment} from '../../environments/environment';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BlogService {
    //private tutorialUrl = 'app/json/tutorial/tutorial.json';  // URL to web api
    private tutorialUrl = environment.localhost;  // URL to web api

    constructor(private _http: Http) { }

    getTutoriales(): Observable<Tutorial[]> {
    return this._http.get(this.tutorialUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    /*
    getTutorial(): Promise<Tutorial[]> {
        return Promise.resolve(TUTORIALES);
    }
    getTutorialSlowly(): Promise<Tutorial[]> {
        return new Promise<Tutorial[]>(resolve =>
            setTimeout(resolve, 2000)) // retardo de 2 segundos
            .then(() => this.getTutorial());
    }
    */

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
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

        /*let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);*/
    }

}
