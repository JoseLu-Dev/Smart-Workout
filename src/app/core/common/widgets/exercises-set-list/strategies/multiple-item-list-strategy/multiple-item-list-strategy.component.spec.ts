import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleItemListStrategyComponent } from './multiple-item-list-strategy.component';

describe('MultipleItemListStrategyComponent', () => {
  let component: MultipleItemListStrategyComponent;
  let fixture: ComponentFixture<MultipleItemListStrategyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleItemListStrategyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleItemListStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
