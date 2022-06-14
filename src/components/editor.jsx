import React from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
                        <div className="Item Login">
                            <LoginIcon className="LoginIcon"/>
                            <p>Login</p>
                        </div>
                        <div className="Item Register">
                            <SupervisedUserCircleIcon className="RegisterIcon"/>
                            <p>Register</p>
                        </div>
                        <div className="Item Manage" id="Current">
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
                                <h1>USERS LIST</h1>
                                <p>Create, Read, Update & Delete</p>
                            </div>

                            <div className='Button'>
                                Add User
                            </div>

                        </div>
                    <div className="Section">
                        <div className="Page Table">
                            <div className='Head'>
                                
                                <div className="ID">
                                    <p></p>
                                </div>

                                <div className="ID">
                                    <p></p>
                                </div>

                                <div className="ID">
                                    <p></p>
                                </div>

                                <div className="ID">
                                    <p></p>
                                </div>

                                <div className="ID">
                                    <p></p>
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