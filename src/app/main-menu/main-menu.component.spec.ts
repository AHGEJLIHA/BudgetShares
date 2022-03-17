import { TestBed } from '@angular/core/testing';
import { MainMenuComponent } from './main-menu.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BudgetShares'`, () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BudgetShares');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BudgetShares app is running!');
  });
});
