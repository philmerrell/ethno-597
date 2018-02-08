import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Pipe({ name: 'trustHtml', pure: false })
export class TrustHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
