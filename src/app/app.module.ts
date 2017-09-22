import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortListPipe } from './sort-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
