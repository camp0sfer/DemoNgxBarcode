import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { AppComponent } from './app.component';
 
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BarecodeScannerLivestreamModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }