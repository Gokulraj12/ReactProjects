import React from 'react';

const headerStyle={height:'15vh',width:'100vw',backgroundColor:'green'};

const Header=()=>{
    return(
        <nav style={headerStyle}>
            <a href="#top">
                <span>My Blog</span>
            </a>

        </nav>
    );
};

export default Header;