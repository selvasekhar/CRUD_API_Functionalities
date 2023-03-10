import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { IContact } from 'src/app/models/iContacts.models';
import { IGroup } from 'src/app/models/iGroup.models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  contact: IContact = {} as IContact;
  errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];
  commands : any;


  imgs = ""
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe((data: IGroup[]) => {
      this.groups = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  createSubmit() {
    this.contactService.createContact(this.contact).subscribe((data: IContact[]) => {
      this.router.navigate(['/']).then();
    }, (error) => {
      this.errorMessage = error;
this.router.navigate(['/contacts/add']).then();

  });
}
}
