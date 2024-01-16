// src\components\error\ErrorBoundary.jsx
import React, {Component} from "react";


class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    // whole application er state update e kono error pele
    // ei fn er "hasError: true" kore dbe
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  

    // j kono component theke error pele eta dhorbe
    componentDidCatch(error, info) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      //logErrorToMyService(error, info.componentStack);  =>ei function nai amader project e
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
}
  
export default ErrorBoundary;