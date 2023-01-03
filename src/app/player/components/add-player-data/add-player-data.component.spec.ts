import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerDataComponent } from './add-player-data.component';

describe('AddPlayerDataComponent', () => {
  let component: AddPlayerDataComponent;
  let fixture: ComponentFixture<AddPlayerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
