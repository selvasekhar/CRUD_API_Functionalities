import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNottFoundComponent } from './page-nott-found.component';

describe('PageNottFoundComponent', () => {
  let component: PageNottFoundComponent;
  let fixture: ComponentFixture<PageNottFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNottFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNottFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
