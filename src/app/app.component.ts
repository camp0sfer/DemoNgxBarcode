import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
 
  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(){
    console.log('start');
    this.barecodeScanner.start();
  }

  onStop(){
    console.log('stop');
    this.barecodeScanner.stop();
  }
}