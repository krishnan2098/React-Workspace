import React from 'react';

const Option = (props) => (
    <div>
        <p>{props.optionText}</p>
        <button
            className='button button--link'
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >Remove</button>
    </div>
);

export default Option;