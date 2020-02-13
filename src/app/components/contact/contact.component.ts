import { Component, OnInit } from '@angular/core';
//
import { DatadbService } from '../../services/datadb.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    })
  }

  contactForm: FormGroup;

  constructor(private dbData: DatadbService) {
    this.contactForm = this.createFormGroup();

  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    }
    else {
      console.log('Not valid');
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
