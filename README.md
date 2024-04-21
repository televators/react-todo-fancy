# Example React ToDo App #4,619,432,286,115
## There are many like it, but this one is mine.

Example ToDo list app built with vanilla React + Vite.

## Notes
### Original Simple Version
Doing super generic setup. Using single controlled input with a button for adding new tasks; added keyup listener to "submit" on hitting Enter key so it works like a proper form.

### Previous Fancy Version
Abstracted main content chunks into their own components. Added new "empty state" component to show when task list is empty. Added button to clear task list. Went from absolute prop drilling to moving all but the basic Task list state into child components.

### New Fancy Version, using useReducer
Refactoring with useReducer.
