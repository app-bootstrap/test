import * as vscode from 'vscode';
import { getWebviewContent } from './assets-maganer';

export function activate(context: vscode.ExtensionContext) {
  console.log('vscode-extension-bootstrap is active.');

  const webViewPanel = vscode.window.createWebviewPanel(
    'myCustomWebview',
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

  let disposable = vscode.commands.registerCommand('vscode-extension-bootstrap.helloWorld', () => {
    console.log('hello');
  });

  context.subscriptions.push(disposable);
};

export function deactivate() {
  console.log('vscode-extension-bootstrap is deactivate.');
};
