import * as vscode from 'vscode';
import { getWebviewContent } from './assets-maganer';
import { completions } from './proxy/openai';

class MyDataProvider {
  getTreeItem(element: any) {
    return element;
  }

  getChildren(element: any) {
    if (!element) {
      return [
        new vscode.TreeItem('Item 1'),
        new vscode.TreeItem('Item 2')
      ];
    }
    return [];
  }
}

export function activate(context: vscode.ExtensionContext) {
  console.log('vscode-extension-bootstrap is active.');

  const webViewPanel = vscode.window.createWebviewPanel(
    'myCustomView',
    '自定义Webview',
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      enableCommandUris: true,
      enableFindWidget: true,
      localResourceRoots: [],
    }
  );

  webViewPanel.webview.html = getWebviewContent();
  context.subscriptions.push(webViewPanel);

  const dataProvider = new MyDataProvider();
  vscode.window.registerTreeDataProvider('myCustomView', dataProvider);

  let disposable = vscode.commands.registerCommand('vscode-extension-bootstrap.helloWorld', () => {
    console.log('hello');
  });

  context.subscriptions.push(disposable);

  completions().then(d => {
    console.log(d);
  }).catch(e => {
    console.log(e);
  });
};

export function deactivate() {
  console.log('vscode-extension-bootstrap is deactivate.');
};
