import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core-module";
import { Error404Component } from "./core/error-404/error-404.component";
import { CourseModule } from "./courses/course-module";


@NgModule({
  declarations: [
  AppComponent,
  Error404Component
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      { 
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
      path: '**', component: Error404Component
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
