import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Header from './Header/Header'
const layout = (props) => (
    <Auxiliary>
        <Header></Header>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout;