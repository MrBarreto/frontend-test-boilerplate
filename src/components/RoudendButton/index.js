import React from 'react';

export default function RoundedButton(props) {
    const { onClick, disabled, text } = props;
    return (
        <button
            disabled={disabled}
            className="filters-confirm-btn"
            onClick={() => onClick}
            {...props}
        >
            {text}
        </button>
    );
}