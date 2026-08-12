import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { environment } from '../../../environments/environment';

export type BackendHealthStatus = 'available' | 'unavailable';

@Injectable({ providedIn: 'root' })
export class HealthService {
  private readonly http = inject(HttpClient);

  getBackendStatus() {
    return this.http
      .get(`${environment.apiBaseUrl}/health/live`, {
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        map((): BackendHealthStatus => 'available'),
        catchError(() => of<BackendHealthStatus>('unavailable')),
      );
  }
}
