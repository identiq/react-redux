import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PetForm from './PetForm';
import Loader from '../common/Loader';
import * as petActions from '../../actions/petActions';

class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.props.clearPet();
    }

    paginationPets(page) {
        this.props.paginatePet(this.props.pagination.perPage, page);
    }

    canPaginate(page) {
        return page > 0 && page <= (this.props.pagination.totalItems / this.props.pagination.perPage);
    }

    submitPet() {
        this.props.createPet(this.props.pet.form);
        this.props.clearPet();
        this.paginationPets(this.props.pagination.totalItems / this.props.pagination.perPage);
    }

    deletePet(petId) {
        this.props.removePet(petId);
    }

    render() {

        return (
            <div>
                <Loader loading={this.props.loading}/>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Pet ({this.props.pagination.perPage} on {this.props.pagination.totalItems} pets)</h3>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Breed</th>
                                <th>Price</th>
                                <th/>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.pets.map((p, i) => <tr key={i}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                                <td>{p.breed}</td>
                                <td>${p.price}</td>
                                <td><Link to={`/pets/${p.id}`}>View</Link></td>
                                <td>
                                    <button onClick={this.deletePet.bind(this, p.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>)}
                            </tbody>
                        </table>
                        <button disabled={!this.canPaginate(this.props.pagination.page - 1)}
                                onClick={this.paginationPets.bind(this, this.props.pagination.page - 1)}
                                className="btn btn-default">Prev
                        </button>
                        Page: {this.props.pagination.page}/{this.props.pagination.totalItems / this.props.pagination.perPage}
                        <button disabled={!this.canPaginate(this.props.pagination.page + 1)}
                                onClick={this.paginationPets.bind(this, this.props.pagination.page + 1)}
                                className="btn btn-default">Next
                        </button>
                    </div>
                    <div className="col-md-6">
                        <h3>New Pet</h3>
                        <PetForm {...this.props.pet} dispatch={this.props.dispatch} submitPet={this.submitPet.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

Pet.propTypes = {
    pet: PropTypes.object.isRequired,
    pets: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    clearPet: PropTypes.func.isRequired,
    createPet: PropTypes.func.isRequired,
    removePet: PropTypes.func.isRequired,
    paginatePet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        pet: state.pet,
        pets: state.pets,
        pagination: state.pagination,
        loading: state.loading > 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearPet: () => dispatch(petActions.clearPet()),
        createPet: pet => dispatch(petActions.createPet(pet)),
        removePet: petId => dispatch(petActions.removePet(petId)),
        paginatePet: (itemsPerPage, page) => dispatch(petActions.fetchPets(itemsPerPage, page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pet);