import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyprofileComponent
      ],
      imports: [
        NzLayoutModule,
        NzBreadCrumbModule,
        NzMenuModule,
        NzCarouselModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
