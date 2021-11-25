import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseSevice } from "./couse.service";

@Component({
    templateUrl: './courses-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course!: Course;
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseSevice) { }

    ngOnInit(): void{ 
     this.courseService.retrieveById(+this.activatedRoute.snapshot.params['id']).subscribe({
         next: course => this.course = course,
         error: err => console.log('Error', err)
     });
    }
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }
}
    
