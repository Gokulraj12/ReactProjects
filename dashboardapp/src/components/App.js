import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component{
    render(){

        const appStyle={
            maxHeight:'100vh',
            maxWidth:'100vw'
        };
        return(
                <div style={appStyle}>
                    <Header />
                    <Content />
                    <Footer />
                </div>
        );
    }
}

export default App;