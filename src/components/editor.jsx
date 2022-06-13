import React from 'react';

const Editor = () => {
    return(
        <div class="Container">
            {/* Shadow Division */}
            <div class="Shadow"></div>
            
            <div class="Editor">
                {/* Sidebar Section */}
                <div class="Sidebar">

                    {/* MacOS Styled Buttons */}
                    <div class="Buttons">
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

                    <div class="Navigation">
                        <div class="Login"></div>
                        <div class="Register"></div>
                        <div class="Manage"></div>
                    </div>

                    {/* Curved Corners on the right side. */}

                    <div id="curved-corner-bottomright"></div>
                    <div id="curved-corner-topright"></div>
                </div>
                {/* Content Section */}
                <div class="Content">

                </div>
            </div>
        </div>
    )
};

export default Editor;