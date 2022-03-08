import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateDto } from 'src/assets/types';

@Component({
  selector: 'app-manage-card',
  templateUrl: './manage-card.component.html',
  styleUrls: ['./manage-card.component.css']
})
export class ManageCardComponent implements OnInit {

  public cardForm: FormGroup;
  public selectedStep = '';
  public steps = ['Contact', 'Dialog', 'Interview', 'Accepted', 'Rejected'];

  // @ViewChild('formDirective')
  // public formDirective?: NgForm;

  @Output() public candidateSave = new EventEmitter<{ candidate: CandidateDto }>();

  constructor(
    formBuilder: FormBuilder,
    private router: Router) {
    this.cardForm = formBuilder.group({
      name: ['', [Validators.required]],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      step: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  public save() {
    if (this.cardForm.valid) {
      this.candidateSave.emit({ candidate: { ...this.cardForm.getRawValue() } });
    }
  }

  public cancel(): void {
    this.router.navigateByUrl("/home");
  }

}
