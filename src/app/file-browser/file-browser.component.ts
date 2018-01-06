import {Component, OnInit, ViewChild} from '@angular/core';
import {NodeMenuItemAction, TreeModel, TreeModelSettings} from 'ng2-tree';
import {Tree} from 'ng2-tree';
import {MockServerService} from '../mock-server.service';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

  fileClicked = false;
  fileSelected = '';

  settings = '';
  config = '';
  @ViewChild('treeComponent') treeComponent;

  public tree: TreeModel;

  constructor(private mockServerSevice: MockServerService) {
    this.tree = mockServerSevice.getTreeModel();
  }

  ngOnInit() {
  }

  triggerFileSelected() {
    console.log('Called: triggerFileSelected');
    this.fileClicked = true;

    let dt = new Date();
    this.fileSelected = dt.toUTCString();
  }


  handleSelected($event) {
    console.log('Called method: handleSelected');
    // if (this.iFile($event)) {
      this.fileClicked = true;
      this.fileSelected = $event.node.id;
      // this.selectedFileIdParent.emit(String($event.node.id));
    // }
  }

  iFile($event): boolean {
    console.log('-------------------isFile-------------started');
    console.log($event);
    let allMenuItems = $event.node.menuItems;
    console.log('Menu items length: ' + allMenuItems.length);
    if (allMenuItems.length === 10) {
      return true;
    }
    return false;
  }

  handleRemoved($event): void {
    console.log($event);
    console.log('Removed: Parent ID: ' + $event.node.parent.id);
  }

  handleRenamed($event): void {
    console.log($event);
    console.log('Renamed: Parent ID: ' + $event.node.parent.id);
  }

  handleMoved($event): void {
    console.log($event);
  }

  handleCreated($event): void {
    console.log($event);
    console.log('Parent ID: ' + $event.node.parent.id);
    const cuurentNode = $event.node;

    let counter = 1;
    let someObj = cuurentNode;
    let allIds: number[] = [];
    while (true) {
      someObj = someObj.parent;
      try {
        console.log(counter + ' : ' + someObj.id);
        allIds.push(someObj.id);
      } catch (e) {
        console.log('Meet exception!!');
        break;
      }

      // -------------------
      counter++;
      if (counter === 100) {
        break;
      }
      // -------------------
    }
    console.log(allIds);
  }

  handleNextLevel($event): void {
    console.log($event);
  }

  onMenuItemSelected($event): void {
    console.log('Called method: onMenuItemSelected');
    console.log($event);
  }

  handleCollapsed($event): void {
    console.log($event);
  }

  handleExpanded($event): void {
    console.log($event);
  }

  collpaseAll(): void {
    this.treeComponent.getControllerByNodeId(1).collapse();
  }

  expandAll(): void {
    this.treeComponent.getControllerByNodeId(1).expand();
  }

}
