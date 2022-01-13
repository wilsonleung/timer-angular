import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.text = 'Hello';
    component.color = 'secondary';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Hello text', () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    expect(buttonElement.textContent).toContain('Hello');
  });

  it('should contains secondary classes', () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    expect(buttonElement.querySelector('.btn')).toBeTruthy();
    expect(buttonElement.querySelector('.secondary')).toBeTruthy();
  });
});
