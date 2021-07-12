import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const CourseEdit = (props) => {
    return (
        <Edit title='Edit a Course' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='title'/>
                <TextInput source='caterogy'/>
                <TextInput multiline source='content'/>
            </SimpleForm>
        </Edit>
    )
}

export default CourseEdit;
