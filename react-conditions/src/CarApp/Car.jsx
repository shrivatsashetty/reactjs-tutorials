function Car(props) {
    return (
        <>
            {/* conditional rendering using && operator */}
            {props.brand && <h1>My Car is a {props.brand} Car!!!</h1>}
        </>
    );
}

export default Car;
