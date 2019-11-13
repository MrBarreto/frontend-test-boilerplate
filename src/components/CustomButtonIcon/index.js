import * as React from 'react';
import "../../style/CustomButtonIcon.css";
import { baseUrl } from "../../config/location";

class CustomButtonIcon extends React.Component {
    render() {
        const { icon, text, onClick } = this.props;
        
        const customOnClick = () => {
            onClick();
            window.location = `${baseUrl}filters`;
        }

        return (
            <button
                onClick={customOnClick}
                className='custom-btn-icon-text'
            >
                <span className='custom-btn-icon'>{icon}</span>
                <span className='custom-btn-text'>{text}</span>
            </button>
        );
    }
}

export default CustomButtonIcon;