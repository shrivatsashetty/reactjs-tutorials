import ChildComponent from "./ChildComponent";

let parentStyles = {
    backgroundColor: "blue",
    padding: "10px",
    width: "50vw",
}

function ParentComponent() {
  return (
    <div style={parentStyles}>
        <h3>This is a Parent Component</h3>      
        <ChildComponent>
            <p style={{backgroundColor: "white", padding: "10px"}} >
                This para is a part of ChildComponent but was passed from ParentComponent
            </p>
        </ChildComponent>
    </div>
  )
}

export default ParentComponent
