import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Header from './Header/Header'
const layout = (props) => {
    return(
    <Auxiliary>
        <Header suggestions={props.suggestions}></Header>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
    )
}

export default layout;