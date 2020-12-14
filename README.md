# mark-toggle

This extension allows a emac's style mark that can toggle with the same command: `mark-toggle.toggle`.\
It also defines the following actions:
- `mark-toggle.cursorUp`
- `mark-toggle.cursorDown`
- `mark-toggle.cursorLeft`
- `mark-toggle.cursorRight`
- `mark-toggle.cursorWordLeft`
- `mark-toggle.cursorWordRight`
- `mark-toggle.cursorWordStartLeft`
- `mark-toggle.cursorWordStartRight`
- `mark-toggle.cursorTop`
- `mark-toggle.cursorBottom`
- `mark-toggle.cursorEnd`
- `mark-toggle.cursorHome`
- `mark-toggle.cursorLineStart`
- `mark-toggle.cursorLineEnd`
- `mark-toggle.cursorPageUp`
- `mark-toggle.cursorPageDown`
- `mark-toggle.cursorWordEndRight`
- `mark-toggle.cursorWordEndLeft`
- `mark-toggle.cursorWordPartLeft`
- `mark-toggle.cursorWordPartRight`
- `mark-toggle.cursorAccessibilityLeft`
- `mark-toggle.cursorAccessibilityRight`

Each of these command will chose between the Select and non-select versions in vscode depending on the state of the toggle.\
e.g. `mark-toggle.cursorUp` will execute `cursorUp` if the toggle is off, otherwise it will execute `cursorUpSelect`.

Does not support multi-cursors.