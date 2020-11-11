import React from "react";

const OwnersList = (props) => {
  <>
    <h2>Owners</h2>
    <ul>
      {props.owners.map((owner) => (
        <li key={owner.id}>{owner.firstName}</li>
      ))}
    </ul>
  </>;
};
OwnersList.defaultProp = {props.Owners: []};

export default OwnersList;
