import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[anmsLoadingState]'
})
export class LoadingStateDirective implements OnChanges {
  @Input() anmsLoadingState;
  loading = false;
  initialTemplate;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['anmsLoadingState'].currentValue) {
      this.showLoadingText()
    } else {
      this.hideLoadingText();
    }
  }

  showLoadingText() {
    this.initialTemplate = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerText = 'Loading...'
    this.el.nativeElement.disabled = true;
  }

  hideLoadingText() {
    this.el.nativeElement.disabled = false;
    this.el.nativeElement.innerHTML = this.initialTemplate;
    console.log('Not Loading...');
  }

}
