import React from 'react';

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
                        <div className="Login"></div>
                        <div className="Register"></div>
                        <div className="Manage"></div>
                    </div>

                    {/* Curved Corners on the right side. */}

                    <div id="curved-corner-bottomright"></div>
                    <div id="curved-corner-topright"></div>
                </div>
                {/* Content Section */}
                <div className="Content">

                </div>
            </div>
        </div>
    )
};

export default Editor;