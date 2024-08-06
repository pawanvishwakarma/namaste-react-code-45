const tag = React.createElement("div", {id: "heading"}, 
    [
        React.createElement("div", {id: "child1"}, [
            React.createElement("h1", {id: "heading"}, "I'm h1 Tag"),
            React.createElement("h2", {id: "heading"}, "I'm h2 Tag")
        ]
            
        ),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {id: "heading"}, "I'm h1 Tag"),
            React.createElement("h2", {id: "heading"}, "I'm h2 Tag")
        ]
            
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(tag)