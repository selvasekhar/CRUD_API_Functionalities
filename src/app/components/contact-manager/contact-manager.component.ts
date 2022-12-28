import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/iContacts.models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  loading: boolean = false;
  contacts: IContact[] = [];
  errorMessage: string | null = null;
  
  img1 = "https://www.iconspng.com/images/young-user-icon.jpg";
  image = "https://support.start.me/hc/article_attachments/360001139105/404_page_not_found.jpeg"

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loading = true;
    this.contactService.getAllContact().subscribe((data: IContact[]) => {
      this.contacts = data;
    this.loading = false

  },(error) =>{
    this.errorMessage = error;
    this.loading = false
  });
}

}
