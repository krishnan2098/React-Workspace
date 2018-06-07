import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A thing I have done.</h1>
        <p>This is page is for Item with the id of {props.match.params.id}.</p>
    </div>
);

export default PortfolioItemPage;