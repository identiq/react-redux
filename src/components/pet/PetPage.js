import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PetForm from './PetForm';
import * as petActions from '../../actions/petActions';

class Pet extends React.Component{
    constructor(props){
        super(props);
    }

    submitPet(input){
        this.props.createPet(input);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <h3>Pet</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Breed</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.pets.map((b, i) => <tr key={i}>
                            <td>{b.name}</td>
                            <td>{b.age}</td>
                            <td>{b.breed}</td>
                            <td>${b.price}</td>
                            <td><Link to={`/pets/${b.id}`}>View</Link></td>
                        </tr> )}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>New Pet</h3>
                    <PetForm submitPet={this.submitPet.bind(this)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pets: state.pets
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPet: pet => dispatch(petActions.createPet(pet))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pet);