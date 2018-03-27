import { TestBed, async } from '@angular/core/testing';
import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { PcarouselComponent } from './pcarousel/pcarousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PcarouselComponent
      ],
      imports: [       
        CarouselModule.forRoot()
      ],
      schemas: [ 
        NO_ERRORS_SCHEMA
       ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'SmartBot - Virtual Product Assistant'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SmartBot - Virtual Product Assistant');
  }));
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/

  /*it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));*/

});
