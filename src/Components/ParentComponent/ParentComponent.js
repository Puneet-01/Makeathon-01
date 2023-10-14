import React, { useState, useEffect } from 'react';
import Card from '../SRPCard/Card/Card';

const ParentComponent = (props) => {

    return (
        <React.Fragment>
            {
                props.data.map((data) => {
                     return  <Card data = {data}></Card>
                })
            }
        </React.Fragment>
    )
}

export default ParentComponent;