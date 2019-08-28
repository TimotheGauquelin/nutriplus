import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/usersmodel';

@Component({
  selector: 'app-inscriptionvalide',
  templateUrl: './inscriptionvalide.component.html',
  styleUrls: ['./inscriptionvalide.component.scss']
})
export class InscriptionvalideComponent implements OnInit {
 users: User;
  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getCurrentUser();
  }

}
