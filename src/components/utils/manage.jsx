import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'


// Icons Import 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/DoNotDisturbAlt';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RefreshIcon from '@mui/icons-material/Refresh';

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

        this.Delete = this.Delete.bind(this);
    }


    handleEdit() {
        this.setState({isEditing: true});
    }


    handleCancel() {
        this.setState({
            isEditing: false
        });
    }

    Delete() {
        this.props.delete(this.props.id);
    }

    handleSave() {
        $.ajax({  
            type: 'POST',
            url: 'http://localhost/CRUD/server/api/update.php', 
            data: {
                id: this.refID,
                username: this.refUsername,
                email: this.refEmail,
                password: this.refPassword
            },
            success: function() {
                toast.success("Successfully updated the user information.",{
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: CheckCircleIcon
                    });
            },
            error: function(jqXHR, textStatus, errorThrown){
                toast.error("Error updating the user information.");
                console.log(' response: ', jqXHR, textStatus, errorThrown)
            }
        })
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
                    <div className="Button Secondary Edit"onClick={() => this.handleEdit()}>
                        {/* On click of the Edit button, switch the cells with inputs, and change the buttons to save button*/}
                        <EditIcon/>
                    </div>
    
                    <div className="Button Primary Delete" onClick={() => this.Delete()}>
                        <DeleteIcon/>
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
                    <div className="Button Secondary Edit" onClick={() => this.handleCancel()}>
                        <CancelIcon />
                    </div>
                    <div className="Button Primary Delete" onClick= {() => this.handleSave()} >
                        <SaveIcon/>
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
            <>
                <CurrentMode/>
            </>
        );
    };
};





// Class for the user interface. (Fetching Data, Rendering, etc.)
class UsersListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            users: [],
            counter: 0,
            isLoading: false
        };

        this.handleRefresh = this.handleRefresh.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        
    };

    rerender = () => {
        this.forceUpdate();
    };
    forceUpdate = () => {
        this.setState((state) => ({
            counter: state.counter + 1,
            isLoaded: false
        }));
    };

    componentDidMount() {
        this.handleRefresh();
    }

    componentDidUpdate() {
        console.log("Updated");
        () => {
            this.handleRefresh();
        }, [this.state.users]
    };

    handleDelete(id) {
        $.ajax({  
            type: 'POST',
            url: 'http://localhost/CRUD/server/api/delete.php',
            data: {
                id: id
            },
            success: function(response) {
                toast.success('User deleted successfully!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: CheckCircleIcon
                });
                console.log(response);

                // Remove the user from the list.
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                toast.error('Error deleting user!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: CheckCircleIcon
                });
                console.log(' response: ', jqXHR, textStatus, errorThrown)

                return false;
            }
        })

        this.handleRefresh();
    }


    handleRefresh() {
        fetch("http://localhost/CRUD/server/api/read.php")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoading: false,
                isLoaded: true,
                users: result
            });
        },
        (error) => {
            this.setState({
                isLoading: false,
                isLoaded: false,
                error
            });
            console.log(error)
        }
        )
        this.rerender();
    }


    render() {

        return this.state.isLoaded ?
                // If the data is loaded, render the users.        

                    this.state.users.map((user) => {
                        return (
                            <User 
                                rerender={this.rerender} 
                                key={user.id} 
                                id={user.id} 
                                username={user.username} 
                                email={user.email} 
                                password={user.password}
                                delete={this.handleDelete}
                            />
                        )
                    }) 
                // If the data is not loaded, display a loading message.
                : (

                <div className='User-Loading'>
                   <div className='Loading'>
                        <div className="loader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className='User-Loading-Text'>
                        <h3>Loading...</h3>

                        <p>Taking too long? Check the API link if is connected.</p>

                        <div className='button' onClick={this.handleRefresh}>
                            <RefreshIcon/>
                            Retry
                        </div>
                    </div>
                </div>
                
                )
    }
}

export default UsersListView;