import { Component, OnInit } from '@angular/core';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  selectedFile : File

  imageText = '';
  ngOnInit() {
  }
  imageUrl : any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5c-8qgZT0BceT9dz8NRrZlwe3bAOW98CK5uCDg6O2SjDUOum&s";
  onFileChanged(event){
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload= ((res)=>{
      this.imageUrl = reader.result;
    });
    // const uploaddata = new FormData();
    // this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }

  onUpload(){
    const worker = createWorker({
      logger: m => console.log(m)
    });

    // Run this function as soon as this function defined
    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(this.imageUrl);
      this.imageText = text;
      console.log(text);
      await worker.terminate();
    })();
  }

}
