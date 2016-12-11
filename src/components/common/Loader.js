import React from 'react';

const Loader = ({loading}) => {

    const loadingStyle = {'display': loading ? 'block':'none'};

    return (
        <div style={loadingStyle} className="alert alert-info">Loading...</div>
    );
};

export default Loader;
