const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"},
[
React.createElement("h1", {key: "abc"}, "I am h1 tag"),
React.createElement("h2", {key:"bcd"}, "I am h2 tag")
]));


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);