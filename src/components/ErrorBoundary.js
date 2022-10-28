import React from 'react';
import '../App.css'

function ErrorFallback({ error }) {
    return (
        <div className='error' role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
    )
}

export default ErrorFallback;