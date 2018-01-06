import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { CodingFilesComponent } from './coding-files/coding-files.component';
import {TreeModule} from 'ng2-tree';


@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent,
    CodingFilesComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }