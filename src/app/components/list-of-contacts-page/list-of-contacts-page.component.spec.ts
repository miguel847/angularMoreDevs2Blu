import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContactsPageComponent } from './list-of-contacts-page.component';

describe('ListOfContactsPageComponent', () => {
  let component: ListOfContactsPageComponent;
  let fixture: ComponentFixture<ListOfContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfContactsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
