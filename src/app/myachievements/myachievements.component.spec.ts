import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyachievementsComponent } from './myachievements.component';

describe('MyachievementsComponent', () => {
  let component: MyachievementsComponent;
  let fixture: ComponentFixture<MyachievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyachievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyachievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
