import React from 'react';

function Boiling({celsius = 0}) {
    if (celsius >= 100) {
        return <p>The Water Would boil</p>
    }
    return <p>Water would not boil</p>
}

export default Boiling;