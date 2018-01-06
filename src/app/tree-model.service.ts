import { Injectable } from '@angular/core';
import {MockServerService} from './mock-server.service';
import {Tree} from 'ng2-tree';

@Injectable()
export class TreeModelService {

  constructor() { }

  getFileName(id): string {
    let mockServer: MockServerService = new MockServerService();
    console.log('Looking for: ' + id);
    let selectedNode = this.getNodeByID(new Tree(mockServer.getTreeModel()), id);
    console.log(selectedNode);
    return selectedNode.value;
  }

  getFullPath(currentNode) {
    let fullPath: string[] = [];
    while (currentNode.parent != null) {
      fullPath.push(currentNode.value);
      currentNode = currentNode.parent;
    }
    fullPath.push(currentNode.value);
    console.log(fullPath.reverse().join('/'));
  }

  getNodeByID(node, matchingId) {
    console.log('----------Entered----------');
    if (node.id === matchingId) {
      console.log('Finaly Found: ' + node.value);
      return node;
    }
    if (node.hasChildren()) {
      console.log('Has Children!!');
      let list = node.children;
      for (let i = 0; i < list.length; i++) {
        let res = this.getNodeByID(list[i], matchingId);
        if (res) return res;
      }
    }
    return null;
  }

}
