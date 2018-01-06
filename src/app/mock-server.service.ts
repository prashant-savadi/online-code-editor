import { Injectable } from '@angular/core';
import {NodeMenuItemAction, Tree, TreeModel, TreeModelSettings} from 'ng2-tree';

@Injectable()
export class MockServerService {

  constructor() { }

  settingsFile: TreeModelSettings = {
    'cssClasses': {
      'expanded': 'fa fa-caret-down fa-lg',
      'collapsed': 'fa fa-caret-right fa-lg',
      'leaf': 'fa fa-lg',
      'empty': 'fa fa-caret-right disabled'
    },
    'templates': {
      'node': '<i class="fa fa-folder-o fa-lg"></i>',
      'leaf': '<i class="fa fa-file-o fa-lg"></i>',
      'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
    },
    'menuItems': [
      {action: NodeMenuItemAction.Custom, name: 'New', cssClass: 'fa fa-file-text-o'},
      {action: NodeMenuItemAction.Custom, name: 'Run', cssClass: 'fa fa-play'},
      {action: NodeMenuItemAction.Custom, name: 'Open', cssClass: 'fa fa-folder-open-o'},
      {action: NodeMenuItemAction.Custom, name: 'Logs', cssClass: 'fa fa-list'},
      {action: NodeMenuItemAction.Custom, name: 'Docs', cssClass: 'fa fa-list'},
      {action: NodeMenuItemAction.Custom, name: 'Rename', cssClass: 'fa fa-circle-o-notch'},
      {action: NodeMenuItemAction.Custom, name: 'Cut', cssClass: 'fa fa-scissors'},
      {action: NodeMenuItemAction.Custom, name: 'Copy', cssClass: 'fa fa-files-o'},
      {action: NodeMenuItemAction.Custom, name: 'Paste', cssClass: 'fa fa-clipboard'},
      {action: NodeMenuItemAction.Custom, name: 'Delete', cssClass: 'fa fa-arrows-alt'}
    ]
  };

  settingsFolder: TreeModelSettings = {
    'cssClasses': {
      'expanded': 'fa fa-caret-down fa-lg',
      'collapsed': 'fa fa-caret-right fa-lg',
      'leaf': 'fa fa-lg',
      'empty': 'fa fa-caret-right disabled'
    },
    'templates': {
      'node': '<i class="fa fa-folder-o fa-lg"></i>',
      'leaf': '<i class="fa fa-file-o fa-lg"></i>',
      'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
    },
    'menuItems': [
      {action: NodeMenuItemAction.Custom, name: 'New', cssClass: 'fa fa-file-text-o'},
      {action: NodeMenuItemAction.Custom, name: 'Rename', cssClass: 'fa fa-circle-o-notch'},
      {action: NodeMenuItemAction.Custom, name: 'Cut', cssClass: 'fa fa-scissors'},
      {action: NodeMenuItemAction.Custom, name: 'Copy', cssClass: 'fa fa-files-o'},
      {action: NodeMenuItemAction.Custom, name: 'Paste', cssClass: 'fa fa-clipboard'},
      {action: NodeMenuItemAction.Custom, name: 'Delete', cssClass: 'fa fa-arrows-alt'}
    ]
  };

  public tree: TreeModel = {
    value: 'Root Folder',
    id: 1,
    settings: this.settingsFolder,
    children: [
      {
        value: 'Test Folder',
        id: 2,
        settings: this.settingsFolder,
        children: [
          {
            value: 'sample1.java',
            id: 21,
            settings: this.settingsFile
          },
          {
            value: 'sample2.java',
            id: 22,
            settings: this.settingsFile
          },
          {
            value: 'sample3.java',
            id: 23,
            settings: this.settingsFile
          },
          {
            value: 'sample4.java',
            id: 24,
            settings: this.settingsFile
          },
          {
            value: 'sample5.java',
            id: 25,
            settings: this.settingsFile
          },
          {
            value: 'sample6.java',
            id: 26,
            settings: this.settingsFile
          }
        ]
      },
      {
        value: 'sample7.java',
        id: 27,
        settings: this.settingsFile
      },
      {
        value: 'sample8.java',
        id: 28,
        settings: this.settingsFile
      },
      {
        value: 'sample9.java',
        id: 29,
        settings: this.settingsFile
      },
      {
        value: 'sample10.java',
        id: 30,
        settings: this.settingsFile
      },
      {
        value: 'sample11.java',
        id: 31,
        settings: this.settingsFile
      },
      {
        value: 'Level two',
        id: 32,
        settings: this.settingsFolder,
        children: [
          {
            value: 'Level three',
            id: 33,
            settings: this.settingsFolder,
            children: [
              {
                value: 'sample14java',
                id: 35,
                settings: this.settingsFile
              },
              {
                value: 'sample15java',
                id: 36,
                settings: this.settingsFile
              },
              {
                value: 'sample16java',
                id: 37,
                settings: this.settingsFile
              },
              {
                value: 'sample17java',
                id: 38,
                settings: this.settingsFile
              },
              {
                value: 'sample18java',
                id: 39,
                settings: this.settingsFile
              },
              {
                value: 'sample19java',
                id: 40,
                settings: this.settingsFile
              },
              {
                value: 'sample20java',
                id: 41,
                settings: this.settingsFile
              },
              {
                value: 'sample21java',
                id: 42,
                settings: this.settingsFile
              },
              {
                value: 'sample22java',
                id: 43,
                settings: this.settingsFile
              },
              {
                value: 'sample23java',
                id: 44,
                settings: this.settingsFile
              },
              {
                value: 'sample24java',
                id: 45,
                settings: this.settingsFile
              },
              {
                value: 'sample25java',
                id: 46,
                settings: this.settingsFile
              },
              {
                value: 'sample26java',
                id: 47,
                settings: this.settingsFile
              },
              {
                value: 'sample27java',
                id: 48,
                settings: this.settingsFile
              },
              {
                value: 'sample28java',
                id: 49,
                settings: this.settingsFile
              },
              {
                value: 'sample29java',
                id: 50,
                settings: this.settingsFile
              },
              {
                value: 'sample30java',
                id: 51,
                settings: this.settingsFile
              },
              {
                value: 'sample31java',
                id: 52,
                settings: this.settingsFile
              },
              {
                value: 'sample32java',
                id: 53,
                settings: this.settingsFile
              },
              {
                value: 'sample33java',
                id: 54,
                settings: this.settingsFile
              },
              {
                value: 'sample34java',
                id: 55,
                settings: this.settingsFile
              },
              {
                value: 'sample35java',
                id: 56,
                settings: this.settingsFile
              },
              {
                value: 'sample36java',
                id: 57,
                settings: this.settingsFile
              },
              {
                value: 'sample37java',
                id: 58,
                settings: this.settingsFile
              },
              {
                value: 'sample38java',
                id: 59,
                settings: this.settingsFile
              },
              {
                value: 'sample39java',
                id: 60,
                settings: this.settingsFile
              },
              {
                value: 'sample40java',
                id: 61,
                settings: this.settingsFile
              },
              {
                value: 'sample41java',
                id: 62,
                settings: this.settingsFile
              },
              {
                value: 'sample42java',
                id: 63,
                settings: this.settingsFile
              },
            ]
          }]
      }
    ]
  };

  allCodes = {2: 'This is code of id : 2', 3: 'some other code'};

  public getTreeModel(): TreeModel {
    return this.tree;
  }

  public updateTreeModel(): void {
    console.log('Update Data');
  }

  public getFileCode(id): string {
    let codeToReturn = 'class TestDemo \n{ \n\tpublic void testCaseDemo' + String(id) + '()\n\t{ \n\t\tSystem.out.println("This is about: ' + String(id) + '");\n\t}\n}';
    return codeToReturn;
  }
}
