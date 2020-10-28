import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"


const App = () => {
    return (
        <div>
            Hello App!
            <Header />
            <Button />
            <Footer />
        </div>
    );
}

export default App;