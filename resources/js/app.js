import React from 'react';
import {createRoot} from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>This is a React component.</p>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App/>);
