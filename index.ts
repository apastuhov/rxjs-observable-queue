console.clear();
import { Observable } from 'rxjs';
import { ObservableQueue } from './observable-queue';

const q = new ObservableQueue();
let globalCounter = 0;

function getNew() {
  globalCounter += 1;
  const original = createObservable(globalCounter);

  // Uncomment next line and comment another return to see the issue.
  // return original;
  return q.push(original);
}

function createObservable(result) {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next(result);
      observer.complete();
    }, Math.random() * 1000);
  });
}


getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);
getNew().subscribe(render);

function render(value) {
  document.getElementById("result").innerText += `\n${value}`;
  console.log(value);
}