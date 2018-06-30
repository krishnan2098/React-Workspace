import React from 'react';

// Export a stateless functional component
export const EventListItem = ({ description, amount, createdAt }) => {
    return (
        <div>
            <h3>{ description }</h3>
            <p>{ amount }, { createdAt }</p>
        </div>
    );
};