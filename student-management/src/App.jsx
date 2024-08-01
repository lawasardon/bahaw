// src/App.js

import React from 'react';
import Students from './components/Students';
import StudentData from './data/StudentData';

function App() {
    return (
        <div className="App">
            <Students students={StudentData} />
        </div>
    );
}

export default App;
