import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-nott-found',
  templateUrl: './page-nott-found.component.html',
  styleUrls: ['./page-nott-found.component.css']
})
export class PageNottFoundComponent implements OnInit {
  image = "https://support.start.me/hc/article_attachments/360001139105/404_page_not_found.jpeg"
  constructor() { }

  ngOnInit(): void {
  }

}
