import React from 'react';

const PetInformationItems = (props) => {
    return (
        <>
            <dt>{props.name}</dt>
            <dd>{props.value}</dd>
        </>
    )
}

// PetInformationItems.defaultProp = {
//     value:"Loading...",
    
// }

export default PetInformationItems