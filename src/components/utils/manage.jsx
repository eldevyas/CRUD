import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'


// Icons Import 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/DoNotDisturbAlt';

// Each user component.
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,

            id: this.props.id,
            username: this.props.username,
            email: this.props.email,
            password: this.props.password,

            refID: '',
            refUsername: '',
            refEmail: '',
            refPassword: ''        
        };

        this.refID = this.props.id;
        this.refUsername = this.props.username;
        this.refEmail = this.props.email;
        this.refPassword = this.props.password;
    }


    handleEdit() {
        this.setState({isEditing: true});
    }

    handleDelete() {
        ReactDOM.unmountComponentAtNode(this)
    }

    handleCancel() {
        this.setState({
            isEditing: false
        });
    }

    handleSave() {
        // Update the state with the new values. As well as changing the display back to the original.
        this.setState({isEditing: false, id: this.refID, username: this.refUsername, email: this.refEmail, password: this.refPassword});
    }

    render() {
        let DisplayMode, EditMode;

        DisplayMode = (
            <div className="Row">
                <div className="Cell C1" id='DataID'>
                    <p>{this.state.id}</p>
                </div>
                <div className="Cell C2" id='DataUsername'>
                    <p>{this.state.username}</p>
                </div>
                <div className="Cell C3" id='DataEmail'>
                    <p>{this.state.email}</p>
                </div>
                <div className="Cell C4" id='DataPassword'>
                    <p>{this.state.password}</p>
                </div>
                <div className="Cell C5" id='DataActions'>
                    <div className="Button Secondary Edit">
                        {/* On click of the Edit button, switch the cells with inputs, and change the buttons to save button*/}
                        <EditIcon onClick={() => this.handleEdit()} />
                    </div>
    
                    <div className="Button Primary Delete">
                        <DeleteIcon onClick={() => this.handleDelete()} />
                    </div>
                </div>
            </div>
        );

        EditMode = (
            <div className="Row EditMode">

                <div className="Cell C1" id="DataID">
                    <p>{this.props.id}</p>
                </div>

                <div className="Cell C2 Editing" id="DataUsername">
                    <input type='text' placeholder='Edit username' defaultValue={this.state.username} onChange={e => {this.refUsername = e.target.value}}/>
                </div>

                <div className="Cell C3 Editing" id="DataEmail">
                    <input type='text' placeholder='Edit e-mail' defaultValue={this.state.email} onChange={e => {this.refEmail = e.target.value}}/>
                </div>

                <div className="Cell C4 Editing" id="DataPassword">
                    <input type='text' placeholder='Edit password' defaultValue={this.state.password} onChange={e => {this.refPassword = e.target.value}}/>
                </div>

                <div className="Cell C5" id="DataActions">
                    <div className="Button Secondary Edit">
                        <CancelIcon onClick={() => this.handleCancel()}/>
                    </div>
                    <div className="Button Primary Delete">
                        <SaveIcon onClick= {() => this.handleSave()} />
                    </div>
                </div>

            </div>
        );
        
        const CurrentMode = () => { 
            return(
                this.state.isEditing ? EditMode : DisplayMode
            )
         };

        return (
           <CurrentMode/>
        );
    };
};





// Class for the user interface. (Fetching Data, Rendering, etc.)
class UsersListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {'ID': 15, 'Username': 'mchta', 'Email': 'maderimata9lwa@gmail.com', 'Password': 'Elach ana m3gaz'},
                {'ID': 16, 'Username':'jason', 'Email':'jason@gmail.com', 'Password': 'jasonspassword'},
                {'ID': 17, 'Username':'billy', 'Email':'billy@gmail.com', 'Password': 'billypassword'}
            ]
        };
    }




    render() {
        return (
            <>
            {
                // Foreach user in the users array, create a new User component 
                this.state.users.map((user) => {
                    return <User key={user.ID} id={user.ID} username={user.Username} email={user.Email} password={user.Password}/>
                })
            }
            </>
        );
    }
}

export default UsersListView;