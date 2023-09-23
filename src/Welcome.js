import React from "react";
import {useState} from 'react';
function Welcome() {
    const [name, setName] = useState('Fadhlih');

    const handleInput = () => {
        setName( name === 'Fadhlih' ? 'Girindra' : 'Fadhlih');
    }

    return (
        <div>Welcome</div>
    );
}

export default Welcome;
