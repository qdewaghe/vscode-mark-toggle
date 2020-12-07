import * as vscode from 'vscode';


let isMarkActive: boolean = false;
let wasFirstActivated: boolean = false;

export function activate(context: vscode.ExtensionContext) {

	let toggle = vscode.commands.registerCommand('mark-toggle.toggle', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		if (!isMarkActive) {
			createSelection(editor);
			isMarkActive = true;
			wasFirstActivated = true;
		} else {
			vscode.commands.executeCommand("cancelSelection");
			isMarkActive = false;
			wasFirstActivated = false;
		}
	});

	const commands: string[] = [
		"cursorUp",
		"cursorDown",
		"cursorLeft",
		"cursorRight",
		"cursorWordLeft",
		"cursorWordRight",
		"cursorWordStartLeft",
		"cursorWordStartRight",
		"cursorTop",
		"cursorBottom",
		"cursorEnd",
		"cursorHome",
		"cursorLineEnd",
		"cursorPageUp",
		"cursorPageDown",
		"cursorWordEndRight",
		"cursorWordEndLeft",
		"cursorWordPartLeft",
		"cursorWordPartRight",
		"cursorAccessibilityLeft",
		"cursorAccessibilityRight"
	];

	commands.forEach(command => {
		context.subscriptions.push(createCommand(command));
	});

	context.subscriptions.push(toggle);
}

function createCommand(commandName: string): vscode.Disposable {
	return vscode.commands.registerCommand("mark-toggle." + commandName, () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		if (isMarkActive && (wasFirstActivated || !editor.selection.isEmpty)) {
			vscode.commands.executeCommand(commandName + "Select");
			wasFirstActivated = false;
		} else {
			vscode.commands.executeCommand(commandName);
			isMarkActive = false;
			wasFirstActivated = false;
		}
	});
}

function createSelection(editor: vscode.TextEditor): void {
	const currentPosition: vscode.Position = editor.selection.active;
	editor.selection = new vscode.Selection(currentPosition, currentPosition);
}

export function deactivate() { }
