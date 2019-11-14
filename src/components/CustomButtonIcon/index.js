import * as React from 'react';
import "../../style/CustomButtonIcon.css";

class CustomButtonIcon extends React.Component {
    render() {
        const { icon, text, onClick } = this.props;

        return (
            <button
                onClick={onClick}
                className='custom-btn-icon-text'
            >
                <span className='custom-btn-icon'>{icon}</span>
                <span className='custom-btn-text'>{text}</span>
            </button>
        );
    }
}

export default CustomButtonIcon;