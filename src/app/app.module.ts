import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { CodingFilesComponent } from './coding-files/coding-files.component';
import {TreeModule} from 'ng2-tree';
import {MockServerService} from './mock-server.service';
import {TreeModelService} from './tree-model.service';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AceEditorModule} from 'ng2-ace-editor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppService} from './app.service';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent,
    CodingFilesComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AceEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    RouterTestingModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    PerfectScrollbarModule,
    FlexLayoutModule
  ],
  providers: [AppService, MockServerService, TreeModelService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
