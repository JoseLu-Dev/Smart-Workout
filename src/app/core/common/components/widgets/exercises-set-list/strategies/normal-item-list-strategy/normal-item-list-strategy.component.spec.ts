import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormalItemListStrategyComponent } from './normal-item-list-strategy.component';

describe('NormalItemListStrategyComponent', () => {
  let component: NormalItemListStrategyComponent;
  let fixture: ComponentFixture<NormalItemListStrategyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalItemListStrategyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormalItemListStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
