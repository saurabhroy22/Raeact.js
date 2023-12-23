
const heading=React.createElement('h1',{id:'heading'},"Hello world from react!");

const parent=React.createElement('div',{id:'parents'},
[React.createElement('div',{id:'child'},[
React.createElement('h1',{},"I am h1 tag from child."),
React.createElement('h2',{},"I am h2 tag from child.")
]),
React.createElement('div',{id:'child'},[
React.createElement('h1',{},"I am h1 tag from child."),
React.createElement('h2',{},"I am h2 tag from child.")])]
)

const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
    // console.log(heading);
