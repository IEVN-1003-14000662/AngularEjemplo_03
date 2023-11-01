import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import { CinepolisComponent } from './cinepolis.component';

describe('CinepolisComponent', () => {
  let component: CinepolisComponent;
  let fixture: ComponentFixture<CinepolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinepolisComponent]
    });
    fixture = TestBed.createComponent(CinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
