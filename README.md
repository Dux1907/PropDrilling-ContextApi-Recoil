###Commit 1:Used prop-drilling to pass on the states.To pass a state from a parent component to its nth grandchild,you just need to pass it through all the middle components doesn't matter,if the components require the state or not.Also,everything inside the parent component is re-rendered,even if some components didn't even change.

###Commit 2 and 3 : Used Context-Api so that you don't need to pass the states to every middle guy.But the re-rendering problem still exists.

###Commit 4:Recoil,a popular global state management tool where you can access the recoil state from anywhere and only that component which changes re-renders.