import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/usersmodel';
import {
Validators,
FormGroup,
FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
@Component({
  selector: 'app-unboarding',
  templateUrl: './unboarding.component.html',
  styleUrls: ['./unboarding.component.scss']
})
export class UnboardingComponent implements OnInit {
  inscriptionForm: FormGroup;  constructor(
    private inscriptionService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.inscriptionForm.value;
    const newUser = new User (
      formValue.nom,
      formValue.prenom,
      formValue.email,
      formValue.motdepasse,
    );
    this.inscriptionService.addUser(newUser);
    this.router.navigate(['/validationOfRegistration']);
  }
 }
