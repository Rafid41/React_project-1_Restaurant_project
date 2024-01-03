// src\components\body\LoadingScreen.js

import React from "react";

const LoadingScreen = () => {
    return <div className="col-12" style={{ padding: "60px" }}>
        {/* font awesome spinner */}
        <span className="fa fa-spinner fa-5x text-primary fa-fw fa-pulse"></span>
    </div>;
};

export default LoadingScreen;
