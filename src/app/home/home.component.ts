import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

class Datos {
    id: number;
    name: string;
}

@Component({
    /*moduleId: module.id,*/
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    title:any;
    nombre:any;
    constructor(private route: ActivatedRoute) {
        /*ActivatedRoute sirve para poder escoger param en el route*/ 
    }

    ngOnInit() {
        /*Carga de Información desde padre*/
        this.route.data.forEach( (params: Params) => {
            this.title = params['title'];
            this.nombre = params['nombre'];
            }
        );
    }
}