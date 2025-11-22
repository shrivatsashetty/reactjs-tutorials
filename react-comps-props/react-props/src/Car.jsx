
function Car(props) {
    // props destucturing along with setting default values & using spread operator
    let { colors, brand="Mustang", ...rest } = props;
    return (
        <>
            <h2>I am a {brand} car!</h2>
            <p>I'm {rest.model} car.</p>
            <p>I was first released in {rest.release}</p>
            <p>I available in following color variants:</p>
            <ul>
                {colors.map((color) => {
                    return <li key={color}>{color}</li>;
                })}
            </ul>
        </>
    );
}

export default Car
