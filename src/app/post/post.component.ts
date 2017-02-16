import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tutorial } from '../tutorial';
import { PostService } from './post.service';

@Component({
    /*moduleId: module.id,*/
    selector: 'post-blog',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {
    post: Tutorial[];

    errorMessage: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            //let id = +params['_id']; // (+) converts string 'id' to a number
            let _id = params['_id'];
            this.postService.getPost(_id)
            .subscribe(
                post => this.post = post.filter((obj) => {
                    if(obj._id===_id) return true;
                    else return false;
                }),
                error => this.errorMessage = <any>error);
        });
    }

    gotoBlog() {
        this.router.navigate(['/blog']);
    }
}
