let childSytles = {
    backgroundColor: "gray",
    padding: "10px",
};

function ChildComponent(props) {
    return (
        <div style={childSytles}>
            <h4>This is a Child Component</h4>
            {props.children}
        </div>
    );
}

export default ChildComponent;
