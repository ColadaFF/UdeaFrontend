import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import AppComponent from './components/main/appComponent';
import TeachersForm  from './components/forms/teachers/teachersFormComponent';
import RoomsForm  from './components/forms/rooms/roomsFormComponent';
import CoursesForm  from './components/forms/courses/coursesFormComponent';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={AppComponent}>
            <Route path="teachers">
                <Route path="add" component={TeachersForm}/>
            </Route>
            <Route path="rooms">
                <Route path="add" component={RoomsForm}/>
            </Route>
            <Route path="courses">
                <Route path="add" component={CoursesForm}/>
            </Route>
        </Route>
    </Router>
);