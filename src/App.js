// restaurant_project\src\App.js
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from "react-redux";

// redux connect korte hole <Provide> tag use korte hbe
// tag er property "store" er value storeName dte hbe
function App() {
    return (
        <div className="App">
            <Provider store={myStore}>
                <BrowserRouter>
                    <MainComponent />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
