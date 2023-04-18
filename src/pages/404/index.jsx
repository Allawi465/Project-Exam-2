import React from 'react';
import { Helmet } from 'react-helmet-async';

function RouteNotFound() {
    return <div className='text-white'>
        <Helmet>
            <title>Holidaze - 404 Page Not Found</title>
            <meta name="description" content="Page not found. Please try again." />
            <meta name="keywords" content="404, page not found, Holidaze" />
        </Helmet>
        <div className='text-black'>
            pages not Found
        </div>
    </div>;
}

export default RouteNotFound;