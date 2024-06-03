import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxResultComponent } from './search-box-result.component';

describe('SearchBoxResultComponent', () => {
  let component: SearchBoxResultComponent;
  let fixture: ComponentFixture<SearchBoxResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBoxResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
