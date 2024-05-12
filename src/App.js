import './App.css';
import HeaderUI from "./header";
import About from "./about";

function App() {

    //added code for completions

    return (
        <div className="App">
            <HeaderUI />
            <main className="about">
                <About />
            </main>
        </div>
    );
}

export default App;
