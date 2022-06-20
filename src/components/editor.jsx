import React, { Component, useState } from 'react';
import { error, extend } from 'jquery';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
    import WarningIcon from '@mui/icons-material/Warning';
    import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
    import LoginIcon from '@mui/icons-material/Login';
    import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
    import IDIcon from '@mui/icons-material/Grid3x3';
    import UserIcon from '@mui/icons-material/PersonOutline';
    import EmailIcon from '@mui/icons-material/MailOutline';
    import PasswordIcon from '@mui/icons-material/Lock';
    import ActionsIcon from '@mui/icons-material/Settings';
    // import AddIcon from '@mui/icons-material/AddCircle';
    import AddIcon from '@mui/icons-material/Add';
    // import CancelIcon from '@mui/icons-material/HighlightOff';
    // import CancelIcon from '@mui/icons-material/DoDisturb';
    import CancelIcon from '@mui/icons-material/Close';

    import UsersListView from './utils/manage'
    import Validator from './../javascript/functions/validateForm';


class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddingUser: false
        }

        this.btnAddUser = this.btnAddUser.bind(this);
        this.btnCancel = this.btnCancel.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);

        this.newUser = {
            username: null,
            email: null,
            password: null
        }

        // Create a reference for the child (UsersListView) to be rerendered when the state changes.
        this.child = React.createRef();
    }

    componentDidMount() {
        this.newUser = {
            username: null,
            email: null,
            password: null
        }
    }


    componentDidMount() {
        this.state.isAddingUser = false;
    }

    btnAddUser() {
        this.setState({ isAddingUser: true });
    }

    btnCancel() {
        this.setState({ isAddingUser: false });
    }

    handleAddUser() {
        // Validate the form.
        let validator = new Validator();

        let isValidUsername = validator.validateUserName(this.newUser.username),
            isValidEmail = validator.validateEmail(this.newUser.email),
            isValidPassword = validator.validatePassword(this.newUser.password);


        if (isValidUsername && isValidEmail && isValidPassword.success) {
            this.sendAddRequest();
        } else {
            if (!isValidUsername) {
                toast.warning(`Username is not valid.`, {icon: <WarningIcon/>});
            }
            if (!isValidEmail) {
                toast.warning(`Email is not valid.`, {icon: <WarningIcon/>});
            }
            if (!isValidPassword.success) {
                toast.warning(isValidPassword.message, {icon: <WarningIcon/>});
            }
        }
    }


    sendAddRequest() {
        let data = this.newUser;
        console.log(data);

        $.ajax({
            type: "POST",
            url: "http://localhost/CRUD/server/api/add.php",
            data: data,
            success: (data) => {
                let userAdded = JSON.parse(data);

                this.setState({
                    isAddingUser: false
                });

                this.newUser = {
                    username: null,
                    email: null,
                    password: null
                }
                
                this.child.current.handleRefresh()

                toast.success(`Successfully added ${userAdded.username}.`,{
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                toast.error(msg,{
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }
        });
    }

    render() {
        const Header = () => {
            if(this.state.isAddingUser) {
                return(
                    <div className="Header AddUser">
                        <div className="Prombt">
                            <input type="text" className="Username" placeholder="Username" defaultValue={this.newUser.username} onChange={e => {this.newUser.username = e.target.value}}/>
                        </div>

                        <div className="Prombt">
                            <input type="email" className="Email" placeholder="Email" defaultValue={this.newUser.email} onChange={e => {this.newUser.email = e.target.value}}/>
                        </div>

                        <div className="Prombt">
                            <input type="password" className="Password" placeholder="Password" defaultValue={this.newUser.password} onChange={e => {this.newUser.password = e.target.value}}/>
                        </div>

                        <div className="Buttons">
                            <div className="Button Secondary" onClick={this.btnCancel}>
                                <CancelIcon/>
                            </div>

                            <div className="Button" onClick={this.handleAddUser}>
                                <AddIcon/>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return(
                    <div className="Header">
                        <div className="Title">
                            <h1 id='Title'>USERS LIST</h1>
                            <p id='Description'>Create, Read, Update & Delete</p>
                        </div>
                
                        <div className='Button' id='Button' onClick={() => {this.btnAddUser()}}>
                            Add User
                        </div>
                    </div>   
                )
            }
        }


        return(
            <div className="Container" id='Container'>
                <div className="Editor" id='drag'>
                   <Sidebar/> 
                    {/* Content Section */}
                    <div className="Content">
                        <Header/>
                        <div className="Section" id="Section">
                            <div className="Page Login" id="Login"></div>
    
                            <div className="Page Register" id='Register'></div>
    
                            <div className="Page Manage" id="Manage">
                                <div className="Table">
    
                                    <Head/>
    
                                    <div className="Body">
    
                                        <UsersListView ref={this.child}/>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Editor;




function Head() {
    return(
    <div className="Head">
        <div className="Row">
            <div className="Cell C1" id='ID'>
                <IDIcon/>
                ID
            </div>
            <div className="Cell C2" id='Username'>
                <UserIcon/>
                Username
            </div>
            <div className="Cell C3" id='Email'>
                <EmailIcon/>
                E-mail
            </div>
            <div className="Cell C4" id='Password'>
                <PasswordIcon/>
                Password
            </div>
            <div className="Cell C5" id="Actions">
                <ActionsIcon/>
                Actions
            </div>
        </div>
    </div>
    )
}


function MacOSButtons() {
    return (
        <div className="Buttons">
            <div id="Red">
                <img src="src/assets/close.svg" />
            </div>
            <div id="Yellow">
                <img src="src/assets/collapse.svg" />
            </div>
            <div id="Green">
                <img src="src/assets/maximize.svg" />
            </div>
        </div>
    )
}

function NavigationLinks() {
    return (
        <>
        <div className="Navigation">
            <div id="Navigator"></div>
            <div className="Item Login" target="Login" title="Sign in" description="Login to your account" button=''>
                <LoginIcon className="LoginIcon"/>
                <p>Login</p>
            </div>
            <div className="Item Register" target='Register' title='Sign up' description="Register a new account" button=''>
                <SupervisedUserCircleIcon className="RegisterIcon"/>
                <p>Register</p>
            </div>
            <div className="Item Manage" id="Current" target='Manage' title='Users List' description="Create, Read, Update & Delete" button='Add User'>
                <ManageAccountsIcon className="ManageIcon"/>
                <p>Manage</p>
            </div>
        </div>

        {/* Curved Corners on the right side. */}
        <div id="curved-corner-bottomright"></div>
        <div id="curved-corner-topright"></div>
        
        </>
    )
}


function Sidebar() {
    return (
        <>
            <section id="Drag"></section>
            {/* Sidebar Section */}
            <div className="Sidebar">
                {/* MacOS Styled Buttons */}
                <MacOSButtons />

                {/* Navigation Links */}
                <NavigationLinks />
            </div>        
        </>
    )
}