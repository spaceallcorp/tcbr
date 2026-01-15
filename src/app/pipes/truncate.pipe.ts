import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string, limit = 100, completeWords = false, ellipsis = '...'): SafeHtml {
    if (!value) return '';

    // Strip HTML tags for a clean preview
    const plainText = value.replace(/<[^>]+>/g, '');

    if (completeWords) {
      limit = plainText.substr(0, limit).lastIndexOf(' ');
    }

    const truncated = plainText.length > limit
      ? plainText.substr(0, limit) + ellipsis
      : plainText;

    // Return safe HTML
    return this.sanitizer.bypassSecurityTrustHtml(truncated);
  }
}
