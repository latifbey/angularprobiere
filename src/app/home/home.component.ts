import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: any[];
  person : any;
  projects: any [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.personService.findAll().subscribe(result => {
      this.members = result.data;
    });
  }

  getPersonDetails(persnr){
    
    this.personService.findOne(persnr).subscribe(result => {
      console.log(result.data);
      this.person = result.data.personal[0];
      this.projects = result.data.job;
    })
  }
}
