import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPlacesComponent } from './popular-places.component';

describe('PopularPlacesComponent', () => {
  let component: PopularPlacesComponent;
  let fixture: ComponentFixture<PopularPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
