import React from 'react';

const Person = {
    name: 'Pranjal',
    theme: {
        backgroundColor: 'blue',
        color: 'white'
    }
};

export default function ToDo() {
    return (
        <div>
            <h1 style={Person.theme}>Hello {Person.name}!</h1>
            <p>My first React App</p>
        </div>
    );
}