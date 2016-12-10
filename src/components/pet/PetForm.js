import React from 'react';

const PetForm = (props) => {
    let nameInput, ageInput, breedInput, priceInput = null;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            let input = {
                name: nameInput.value,
                age: ageInput.value,
                breed: breedInput.value,
                price: priceInput.value
            };
            props.submitPet(input);
            e.target.reset();
        }}
              className="form-horizontal"
        >
            <div className="input-group">
                <label className="col-sm-2 control-label">Name: </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        name="title"
                        ref={node => nameInput = node}
                        className="form-control" />
                </div>
            </div>
            <br/>
            <div className="input-group">
                <label className="col-sm-2 control-label">Age: </label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        name="age"
                        ref={node => ageInput = node}
                        className="form-control" />
                </div>
            </div>
            <br/>
            <div className="input-group">
                <label className="col-sm-2 control-label">Price: </label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        name="price"
                        ref={node => priceInput = node}
                        className="form-control" />
                </div>
            </div>
            <br/>
            <div className="input-group">
                <label className="col-sm-2 control-label">Breed: </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        name="breed"
                        ref={node => breedInput = node}
                        className="form-control" />
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
};

export default PetForm;