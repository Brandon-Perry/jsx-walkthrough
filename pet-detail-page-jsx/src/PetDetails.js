import React from 'react';
import PetDetailList from './PetDetailList'
import PetDetailPage from './PetDetailPage';

const PetDetails = (props) => 
    <PetDetailList pet={props.pet}/>


export default PetDetails