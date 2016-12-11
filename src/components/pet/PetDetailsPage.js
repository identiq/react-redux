import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as petActions from '../../actions/petActions';
import PetDetails from './PetDetails';
import PetForm from './PetForm';

class PetDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPetById(this.props.params.id);
    }

    submitPet() {
        this.props.updatePet(this.props.params.id, this.props.pet.form);
    }

    render() {
        return (
            <div>
                <h1>Pet Details Page</h1>
                <div className="row">
                    <div className="col-md-6">
                        <PetDetails pet={this.props.pet}/>
                    </div>
                    <div className="col-md-6">
                        <PetForm {...this.props.pet} dispatch={this.props.dispatch} submitPet={this.submitPet.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

PetDetailsPage.propTypes = {
    pet: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchPetById: PropTypes.func.isRequired,
    updatePet: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        pet: state.pet,
        loading: state.loading > 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        fetchPetById: petId => dispatch(petActions.fetchPetById(petId)),
        updatePet: (petId, pet) => dispatch(petActions.updatePet(petId, pet))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDetailsPage);