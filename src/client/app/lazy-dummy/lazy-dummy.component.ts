import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * To test the modules included only in lazy modules
 */
@Component({
  moduleId: module.id,
  selector: 'sd-lazy',
  template:  `<app-header title="lazy2" ></app-header>
              {{form.value | json}}
              <form [formGroup]="form">
               <input type="text" class="form-control" formControlName="name">
              </form>
              `
})
export class LazyDummyComponent implements OnInit  {

 public form: FormGroup;

 constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(5)]]
    });
  }
}
