import * as vscode from 'vscode';

function getWebviewContent(): string {
  return `
    <html>
      <head>
      </head>
    <body>
      <h1>欢迎来到我的自定义Webview视图！</h1>
    </body>
    </html>
  `;
}

export function activate(context: vscode.ExtensionContext) {
  console.log('vscode-extension-bootstrap is active.');

  const webViewPanel = vscode.window.createWebviewPanel(
    'myCustomView', // 同`package.json`中定义的ID
    '我的自定义Webview视图', // 面板标题
    vscode.ViewColumn.One, // 显示在编辑器的哪一列
    {
      // Webview选项
      enableScripts: true // 允许在Webview中运行脚本
    }
  );

  webViewPanel.webview.html = getWebviewContent(); // 设置Webview的内容
  context.subscriptions.push(webViewPanel);

  let disposable = vscode.commands.registerCommand('vscode-extension-bootstrap.helloWorld', () => {
    console.log('hello');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('vscode-extension-bootstrap is deactivate.');
}
