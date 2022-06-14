import React from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';


const Editor = () => {
    return(
        <div className="Container">

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
                        <div className="Header">
                            <div className="Title">
                                <h1 id='Title'>USERS LIST</h1>
                                <p id='Description'>Create, Read, Update & Delete</p>
                            </div>

                            <div className='Button' id='Button'>
                                Add User
                            </div>

                        </div>
                    <div className="Section" id="Section">
                        <div className="Page Login" id="Login"></div>

                        <div className="Page Register" id='Register'></div>

                        <div className="Page Manage" id="Manage">
                            <div className='Head'>

                                <div className="ID">
                                    <p>ID</p>
                                </div>

                                <div className="Username">
                                    <p>Username</p>
                                </div>

                                <div className="E-mail">
                                    <p>E-mail</p>
                                </div>

                                <div className="Password">
                                    <p>Password</p>
                                </div>

                                <div className="Actions">
                                    <p>Actions</p>
                                </div>

                            </div>

                            <div className='Row'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor;