import React from 'react'

export default function VisibilityButton({handleAll, handleCaught, handleUncaught}) {

    return (
        <div>
    <button onClick={handleAll}>
        All
    </button>
    <button onClick={handleCaught}>
        Caught
    </button>
    <button onClick={handleUncaught}>
        Uncaught
    </button>
        </div>
    );
}
