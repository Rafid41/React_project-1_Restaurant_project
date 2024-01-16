// restaurant_project\src\App.js
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from "react-redux";
import ErrorBoundary from './components/error/ErrorBoundary';
import Error404 from "./components/error/Error-404";

// redux connect korte hole <Provide> tag use korte hbe
// tag er property "store" er value storeName dte hbe
function App() {
    return (
        <div className="App">
            <Provider store={myStore}>
                <BrowserRouter>
                    {/* fallback+, jodi error hy fallback e j msg ase seta show korbe */}
                    {/* message/component etc pass korbe */}
                    <ErrorBoundary fallback={<Error404/>}>
                        <MainComponent />
                    </ErrorBoundary>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
