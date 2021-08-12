import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainingCalendarSelectionComponent } from './training-calendar-selection.component';

describe('TrainingCalendarSelectionComponent', () => {
  let component: TrainingCalendarSelectionComponent;
  let fixture: ComponentFixture<TrainingCalendarSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCalendarSelectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
