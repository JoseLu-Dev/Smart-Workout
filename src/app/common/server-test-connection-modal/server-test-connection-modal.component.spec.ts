import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServerTestConnectionModalComponent } from './server-test-connection-modal.component';

describe('ServerTestConnectionModalComponent', () => {
  let component: ServerTestConnectionModalComponent;
  let fixture: ComponentFixture<ServerTestConnectionModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTestConnectionModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerTestConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
