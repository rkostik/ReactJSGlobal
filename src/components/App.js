import React from 'react';
import styles from './App.module.css';
import ModalMovieWrap from './Modal/ModalMovieWrap.jsx';
import ModalRemoval from './Modal/ModalRemoval.jsx';
import ModalCompletion from './Modal/ModalCompletion.jsx';
import {Route, Switch, Redirect} from "react-router-dom";
import SearchPage from './SearchPage.jsx';
import NotFound from './NotFound/NotFound.jsx';

const App = () => (
    <>
        <div className={styles.main_wrap}>
            <div>
                <Switch>
                    <Route exact path='/search' component={SearchPage}/>
                    <Route exact path='/search/:searchQuery' component={SearchPage}/>
                    <Redirect from='/' to='/search'/>
                    <Route path="*" component={NotFound} />
                </Switch>
                <div className={styles.wrap}>
                    <ModalMovieWrap/>
                    <ModalRemoval/>
                    <ModalCompletion/>
                </div>
            </div>
        </div>
    </>
)

export default App