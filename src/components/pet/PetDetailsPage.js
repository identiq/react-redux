import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as petActions from '../../actions/petActions';
import PetDetails from './PetDetails';

class PetDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        this.props.fetchPetById(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>Pet Details Page</h1>
                <PetDetails pet={this.props.pet}/>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pet: state.pet
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPetById: petId => dispatch(petActions.fetchPetById(petId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDetailsPage);