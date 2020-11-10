import React from 'react';

import PetInformationItems from './PetInformationItems'

const PetDetailList = props =>
  <>
    <h2>Details</h2>
    <dl>
        <PetInformationItems name='Name' value={props.pet.name}/>
        <PetInformationItems name='Age' value={props.pet.age}/>
        <PetInformationItems name='Type' value={props.pet.PetType.type}/>
    </dl>
  </>
;

PetDetailList.defaultProps = {
    pet: {PetType:{type:'Loading...'}, name:'Loading...', age:'Loading...'},
    
}

export default PetDetailList;