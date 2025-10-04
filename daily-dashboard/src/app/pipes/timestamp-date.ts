import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampDate'
})
export class TimestampDatePipe implements PipeTransform {
  transform(value: any, format: string = 'yyyy-MM-dd'): string {
    const date = value?.toDate ? value.toDate() : value;
    return new Intl.DateTimeFormat('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  }
}
