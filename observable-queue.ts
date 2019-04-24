import { Observable } from 'rxjs';

/**
 * WARNING:
 * May contain bugs.
 * Not covered with tests.
 */
export class ObservableQueue {
  private queue: Observable<any>[] = [];

  push<T>(original: Observable<T>): Observable<T> {
    this.queue.push(original);

    const wrapper = new Observable<T>(observer => {
      const intervalId = setInterval(() => {
        if (this.queue.length > 0) {
          const first = this.queue[0];
          if (first === original) {
            clearInterval(intervalId);
            original.subscribe((...args) => {
              observer.next(...args);
              observer.complete();
              this.queue.shift();
            });
          }
        } else {

        }
      }, 100);
    });

    return wrapper;
  }
}
