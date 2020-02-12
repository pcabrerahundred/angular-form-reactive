import { Component, OnInit } from '@angular/core';
//
import { DatadbService } from '../../services/datadb.service'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //
  createFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
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
    //console.log('Saved', this.contactForm.value);
    this.dbData.saveMessage(this.contactForm.value)
  }

}
