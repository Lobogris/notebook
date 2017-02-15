import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { BlogService } from './blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
    /*moduleId: module.id,*/
    selector: 'blog-component',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    tutoriales: Tutorial[];
    errorMessage: any;
    mode = 'Observable';

    constructor(
            private blogService: BlogService,
            private router: Router
    ) { }

    getTutorial(): void {
        //this.blogService.getTutorial().then(tutoriales => this.tutoriales = tutoriales);
        this.blogService.getTutoriales()
            .subscribe(
                tutoriales => this.tutoriales = tutoriales,
                error => this.errorMessage = <any>error);
        /*this.blogService.getTutorial_HTTP()
            .subscribe(tutoriales => this.tutoriales = tutoriales,
            error =>  this.errorMessage = <any>error);*/
    }
    ngOnInit() {
        this.getTutorial();

    }
    onSelect(tutorial: Tutorial) {
        this.router.navigate(['/post', tutorial._id]);
    }
}
