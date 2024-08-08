import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

const cache = new Map<string, { data: any; timestamp: number }>();
const cacheExpiration = 5 * 60 * 1000;

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') {
    return next(req);
  }
  const url = req.urlWithParams;
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < cacheExpiration) {
    return cached.data;
  } else {
    return next(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          cache.set(url, { data: event.body, timestamp: Date.now() });
        }
      })
    );
  }
};
