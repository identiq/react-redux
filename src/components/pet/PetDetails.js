import React from 'react';

const PetDetails = ({pet}) => {
    return (
        <div className="media">
            <div className="media-left">
                <a href="#">
                    <img className="media-object" src="http://placehold.it/200/550" alt="Placehold" />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{pet.name}</h4>
                <ul>
                    <li><stron>Age: </stron> {pet.age}</li>
                    <li><stron>Breed: </stron> {pet.breed}</li>
                    <li><stron>Price: </stron> ${pet.price}</li>
                </ul>
            </div>
        </div>
    );
};

export default PetDetails;