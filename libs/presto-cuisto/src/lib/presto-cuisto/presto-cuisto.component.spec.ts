import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestoCuistoComponent } from './presto-cuisto.component';

describe('PrestoCuistoComponent', () => {
  let component: PrestoCuistoComponent;
  let fixture: ComponentFixture<PrestoCuistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestoCuistoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrestoCuistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
