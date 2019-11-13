import * as React from 'react';
import "../../style/CustomButtonIcon.css";

class CustomButtonIcon extends React.Component {
    render() {
        const {icon, text} = this.props;
        return (
            <button className='custom-btn-icon-text'>
                <span className='custom-btn-icon'>{icon}</span>
                <span className='custom-btn-text'>{text}</span>
            </button>
        );
    }
}

export default CustomButtonIcon;