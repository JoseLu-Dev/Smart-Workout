import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BandsSelectionModalComponent } from './bands-selection-modal.component';

describe('BandsSelectionModalComponent', () => {
  let component: BandsSelectionModalComponent;
  let fixture: ComponentFixture<BandsSelectionModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsSelectionModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BandsSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
