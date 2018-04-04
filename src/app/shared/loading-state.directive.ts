import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[isLoading]'
})
export class LoadingStateDirective implements OnChanges {
  @Input('isLoading') isLoading: boolean;
  loading = false;
  originalText;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading'].currentValue) {
      this.showLoadingText()
    } else {
      this.hideLoadingText();
    }
  }

  showLoadingText() {
    this.originalText = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML = '<h1>Test</h1>';
    this.el.nativeElement.disabled = true;
  }

  hideLoadingText() {
    this.el.nativeElement.disabled = false;
    if (this.originalText) {
      this.el.nativeElement.innerHTML = this.originalText;
    }
  }

}
