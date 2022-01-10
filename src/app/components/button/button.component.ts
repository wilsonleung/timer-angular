import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

export type ButtonColor = 'primary' | 'secondary';
export type FontSize = 'lg' | 'md' | 'sm' | '';
export type ButtonType = 'submit' | 'reset' | 'button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input('text') text = '';
  @Input('color') color: ButtonColor = 'primary';
  @Input('fontSize') size: FontSize = '';
  @Input('fullWidth') fullWidth = true;
  @Input('type') buttonType: ButtonType = 'button';

  @HostBinding('style.width')
  width = '100%';

  classList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.width = this.fullWidth ? '100%' : 'auto';

    this.classList.push('btn');
    if (this.color === 'primary' || this.color === 'secondary') {
      this.classList.push(this.color);
    }
    if (this.size) {
      switch (this.size) {
        case 'lg':
          this.classList.push('fontSizeLg');
          break;
        case 'sm':
          this.classList.push('fontSizeSm');
          break;
        default:
          this.classList.push('fontSizeMd');
      }
    }
  }
}
