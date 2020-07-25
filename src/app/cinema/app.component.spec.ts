import { TestBed, async } from '@angular/core/testing';
import { CinemaComponent } from './app.component';

describe('CinemaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CinemaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CinemaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cinema-Front-web'`, () => {
    const fixture = TestBed.createComponent(CinemaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cinema-Front-web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CinemaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Cinema-Front-web app is running!');
  });
});
