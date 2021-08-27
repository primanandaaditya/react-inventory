import React from "react";

class Loading extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;