import { Component, OnInit } from '@angular/core';
import { createWorker } from 'tesseract.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  selectedFile: File

  imageText = '';
  isUploading = false;
  isInvalid = false;
  isFinished = false;

  ngOnInit() {
  }
  imageUrl: any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5c-8qgZT0BceT9dz8NRrZlwe3bAOW98CK5uCDg6O2SjDUOum&s";

  onFileChanged(event) {
    this.isUploading = true;
    this.isFinished = false;
    this.isInvalid = false;
    const reader = new FileReader();
    // console.log(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (() => {
      // console.log(res);
      this.imageUrl = reader.result;
      // console.log(this.imageUrl);
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
        // console.log(text);
        this.isUploading = false;
        await worker.terminate();
      })();
    });
    // const uploaddata = new FormData();
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }

  onUpload() {
    if (!this.selectedFile) {
      this.isInvalid = true;
    } else {
      const uploaddata = new FormData();
      uploaddata.append('image', this.selectedFile, this.selectedFile.name);
      uploaddata.append('result', this.imageText);
      this.http.post('http://localhost:3000/api/results', uploaddata).subscribe(
        (res) => {
          console.log(res);
          this.isUploading = false;
          this.isFinished = true;
        }
      );
    }

  }

}
