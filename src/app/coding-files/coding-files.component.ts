import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-coding-files',
  templateUrl: './coding-files.component.html',
  styleUrls: ['./coding-files.component.scss']
})
export class CodingFilesComponent implements OnInit, OnChanges {

  @Input()
  fileSelected = '';

  displayChangedData = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileSelected']) {
      console.log('By Omkar!!' + this.fileSelected);
      this.displayChangedData = this.fileSelected;
    }
  }

}
