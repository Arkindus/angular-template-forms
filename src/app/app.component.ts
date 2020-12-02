import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-template-forms';
  clearances = ['admin', 'student', 'teacher'];
  @ViewChild('formData', {static: true}) signInForm: NgForm;
  submitted: boolean = false;

  onFormSubmitted(formData: NgForm) {
    console.log(formData);
    console.log(this.signInForm);
    this.submitted = true;
    setTimeout(() => {
      this.signInForm.reset();
    }, 2000);
  }
}
