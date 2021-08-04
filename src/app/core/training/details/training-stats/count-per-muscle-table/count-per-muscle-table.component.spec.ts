import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountPerMuscleTableComponent } from './count-per-muscle-table.component';

describe('CountPerMuscleTableComponent', () => {
  let component: CountPerMuscleTableComponent;
  let fixture: ComponentFixture<CountPerMuscleTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountPerMuscleTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountPerMuscleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
