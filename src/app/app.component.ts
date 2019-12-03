import { Component } from '@angular/core';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
    // const worker = createWorker({
    //   logger: m => console.log(m)
    // });

    // Run this function as soon as this function defined
    // (async () => {
    //   await worker.load();
    //   await worker.loadLanguage('eng');
    //   await worker.initialize('eng');
    //   const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    //   console.log(text);
    //   await worker.terminate();
    // })();
  }
}
