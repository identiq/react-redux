import React from 'react';
import { createForm } from 'redux-form-utils';
import petFormConfig from '../../utils/petFormConfig';

@createForm(petFormConfig)
class PetForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { name, age, breed, price } = this.props.fields;

        return (
            <form className="form-horizontal" onSubmit={e => {
                e.preventDefault();
                this.props.submitPet();
                this.props.clearAll();
            }}
            >
                <div className="input-group">
                    <label className="col-sm-2 control-label">Name: </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="title"
                            {...name}
                            className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="input-group">
                    <label className="col-sm-2 control-label">Age: </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            name="age"
                            {...age}
                            className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="input-group">
                    <label className="col-sm-2 control-label">Price: </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            name="price"
                            {...price}
                            className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="input-group">
                    <label className="col-sm-2 control-label">Breed: </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="breed"
                            {...breed}
                            className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="input-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit" className="btn btn-default"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default PetForm;