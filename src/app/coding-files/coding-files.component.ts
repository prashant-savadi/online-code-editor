import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {AppService} from '../app.service';
import {TreeModelService} from '../tree-model.service';
import {MockServerService} from '../mock-server.service';

@Component({
  selector: 'app-coding-files',
  templateUrl: './coding-files.component.html',
  styleUrls: ['./coding-files.component.scss']
})
export class CodingFilesComponent implements OnInit, OnChanges {

  @Input()
  selectedTab: string;

  @Input()
  fileSelected: string = '';

  @Output()
  focusChange: EventEmitter<MatTabChangeEvent>;

  @ViewChild('editor') editor;
  options: any = {maxLines: 1000, printMargin: false};

  text: string;
  tabs: any[] = [];
  fromTop = 0;
  fromTopSmallNavBar = 0;
  activeTabIndex = 0;
  allFileCodesMap = new Map();
  currentCode: string;
  codeToUpdate: string;
  showBar = false;

  constructor(private  appService: AppService, private treeModelService: TreeModelService, private  mockServerService: MockServerService) {
    this.updateEditorPosition();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileSelected']) {
      console.log('Collected File ID: ' + this.treeModelService.getFileName(Number(this.fileSelected)));
      let selectedFileName = this.treeModelService.getFileName(Number(this.fileSelected));
      // console.log('------------------------------- Map Size: ' + this.allFileCodesMap.size);
      this.codeToUpdate = this.mockServerService.getFileCode(Number(this.fileSelected));
      this.tabs.push({
        name: selectedFileName,
        code: this.codeToUpdate
      });
      this.activeTabIndex = this.tabs.length - 1;
      this.displaySmallNavBar();
      this.displayAllTabCodes();
    }
  }

  updateEditorPosition() {
    let tabCount = this.tabs.length;
    if (tabCount > 8) {
      this.fromTop = 35;
      this.fromTopSmallNavBar = 25;
    } else if (tabCount === 0) {
      this.fromTop = -17;
      this.fromTopSmallNavBar = this.fromTopSmallNavBar + 20;
    } else if (tabCount > 0 && tabCount <= 8) {
      this.fromTop = 20;
      this.fromTopSmallNavBar = 5;
    }
    console.log(this.fromTop);
    console.log(this.fromTopSmallNavBar);
  }

  getCodeInformation($event) {
    let currentSelectedTab = this.tabs[this.activeTabIndex].name;
    console.log('-------------------------------This is active tab name: ' + this.currentCode);
    this.currentCode = $event;
    this.allFileCodesMap.set(currentSelectedTab, this.currentCode);
    console.log('------------------------------- Map Size: ' + this.allFileCodesMap.size);
    console.log(this.currentCode);
    this.displaySmallNavBar();
    this.displayAllTabCodes();
  }

  displayAllTabCodes(): void {
    console.log('------------------------------- final codes: started');
    let allKeys = this.allFileCodesMap.keys();
    this.allFileCodesMap.forEach((value: string, key: string) => {
      console.log(key + ':  ' + value);
    });
    console.log('------------------------------- final codes: completed');
  }

  removeTab($event) {
    console.log($event);
    console.log('-------------------------------: Called removeTab method');
    console.log($event);
    let tabName = '';
    try {
      tabName = $event.path[0].id;
    } catch (Error) {
      tabName = $event.explicitOriginalTarget.id;
    }
    console.log('Initial-------------------------');
    console.log(this.tabs);
    console.log('Initial-------------------------');
    for (let i = 0; i < this.tabs.length; i++) {
      console.log('Current tab name: ' + this.tabs[i].name);
      if (this.tabs[i].name === tabName) {
        console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
        this.tabs.splice(i, 1);
      }
    }
    console.log('Later *********************');
    console.log(this.tabs);
    console.log('Later *********************');
    this.allFileCodesMap.delete(tabName);
    // this.ngOnInit();
    this.displaySmallNavBar();
  }

  closeTab(): void {
    let currentSelectedTab = this.tabs[this.activeTabIndex].name;
    if (this.tabs.length != 0) {
      this.activeTabIndex = this.tabs.length - 1;
    }
    this.allFileCodesMap.delete(currentSelectedTab);
    for (let i = 0; i < this.tabs.length; i++) {
      console.log('Current tab name: ' + this.tabs[i].name);
      if (this.tabs[i].name === currentSelectedTab) {
        console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
        this.tabs.splice(i, 1);
      }
    }
    this.displaySmallNavBar();
  }

  closeAllTabs(): void {
    this.allFileCodesMap.clear();
    this.tabs = [];
    this.showBar = false;

  }

  closeOtherTabs(): void {
    let currentSelectedTab = this.tabs[this.activeTabIndex].name;
    console.log('Current Selected Tab: ' + currentSelectedTab);

    this.displayAllTabCodes();
    this.tabs.forEach((tab: any) => {
      console.log(tab.name);
    });
    this.allFileCodesMap.forEach((value: string, key: string) => {
      if (key !== currentSelectedTab) {
        console.log('Deleting: ' + key);
        this.allFileCodesMap.delete(key);
      }
    });

    this.displayAllTabCodes();
    let allTabsLegth = this.tabs.length;
    console.log('All tabs length: ' + allTabsLegth);
    for (let i = allTabsLegth - 1; i >= 0; i--) {
      console.log('Current tab name: ' + this.tabs[i].name);
      if (this.tabs[i].name !== currentSelectedTab) {
        console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
        this.tabs.splice(i, 1);
      }
    }
    this.displaySmallNavBar();
  }

  displaySmallNavBar(): void {
    if (this.tabs.length > 0) {
      this.showBar = true;
    } else {
      this.showBar = false;
    }
  }
}
