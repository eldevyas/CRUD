import React, { Component, useState } from 'react';

// Icons
    import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
    import LoginIcon from '@mui/icons-material/Login';
    import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
    import IDIcon from '@mui/icons-material/Grid3x3';
    import UserIcon from '@mui/icons-material/PersonOutline';
    import EmailIcon from '@mui/icons-material/MailOutline';
    import PasswordIcon from '@mui/icons-material/Lock';
    import ActionsIcon from '@mui/icons-material/Settings';
    import EditIcon from '@mui/icons-material/Edit';
    import DeleteIcon from '@mui/icons-material/DeleteOutline';
    import SaveIcon from '@mui/icons-material/Check';
    import CancelIcon from '@mui/icons-material/DoNotDisturbAlt';


import UsersListView from './utils/manage'

const Editor = () => {

    return(
        <div className="Container" id='Container'>
            <div className="Editor" id='drag'>

                <section id="Drag"></section>
                {/* Sidebar Section */}
                <div className="Sidebar">

                    {/* MacOS Styled Buttons */}
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

                    {/* Navigation Links */}

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
                </div>
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

                                    <UsersListView/>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor;



function Header(){
    let [isAddingUser, setIsAddingUser] = useState(false);


    return (isAddingUser ? 

    <div className="Header">
        <div className="Title">
            <h1 id='Title'>USERS LIST</h1>
            <p id='Description'>Create, Read, Update & Delete</p>
        </div>

        <div className='Button' id='Button' onClick={e => {setIsAddingUser(true)}}>
            Add User
        </div>
    </div> 

    :

    <div className="Header">
        <div className="Title">
            <h1 id='Title'>ADD USER</h1>
            <p id='Description'>Create a new user</p>
        </div>

        <div className='Button' id='Button' onClick={e => {setIsAddingUser(false)}}>
            Cancel
        </div>
    </div>
    
    )
}


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