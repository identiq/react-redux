import React, {PropTypes} from 'react';

const Loader = ({loading}) => {

    const loadingStyle = {'display': loading ? 'block':'none'};

    return (
        <div style={loadingStyle} className="alert alert-info">Loading...</div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loader;
