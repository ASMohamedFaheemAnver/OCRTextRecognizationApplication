import { Component, OnInit } from '@angular/core';
import { createWorker } from 'tesseract.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  selectedFile : File

  imageText = '';
  ngOnInit() {
  }
  imageUrl : any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5c-8qgZT0BceT9dz8NRrZlwe3bAOW98CK5uCDg6O2SjDUOum&s";
  
  onFileChanged(event){
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload= ((res)=>{
      console.log(res);
      this.imageUrl = reader.result;
      // console.log(this.imageUrl);
      const worker = createWorker({
        //logger: m => console.log(m)
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
    });
    // const uploaddata = new FormData();
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }

  onUpload(){
    const uploaddata = new FormData();
    uploaddata.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/users/jstrfaheem065@gmail.com/images', uploaddata).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }

}
