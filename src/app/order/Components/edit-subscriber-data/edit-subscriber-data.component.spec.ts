import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubscriberDataComponent } from './edit-subscriber-data.component';

describe('EditSubscriberDataComponent', () => {
  let component: EditSubscriberDataComponent;
  let fixture: ComponentFixture<EditSubscriberDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubscriberDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubscriberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
