import React from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class TopHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    AlertError() {
        toast.error("This feature is not yet available.");
    }

    render() {


        return (
        <div className="TopHeader">
            <h1>PHP - CRUD System</h1>


            <div className="ThemeChanger">
                <div className="ThemeButton" onClick = {() => this.AlertError()}>
                    <ColorLensIcon />
                </div>
            </div>
        </div>
        );
    }
};