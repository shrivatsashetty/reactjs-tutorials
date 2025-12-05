import btnSytles from "./Button.module.css";

import mystyles from './MyStyles.module.css';


function App() {
    return (
        <div>
            <h1 className="myheader">My Header</h1>
            <p className={mystyles.myparagraph}>My Paragraph</p>

            <button className={btnSytles.primary}>Primary Button</button>
            <br />
            <br />
            <button className={btnSytles.secondary}>Secondary Button</button>
        </div>
    );
}

export default App;
