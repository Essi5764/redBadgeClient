import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import CourseList from './InstructorPage/CourseList'
import CourseCreate from './InstructorPage/CourseList'
import CourseEdit from './InstructorPage/CourseList'
import APIURL from './helpers/environment'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function InstructorPage() {
    return <Admin dataProvider={dataProvider}>
        <Resource name='Course' list={CourseList} create={CourseCreate} edit={CourseEdit}/>
    </Admin>
}

export default InstructorPage