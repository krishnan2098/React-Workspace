import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            You can Edit the data of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;