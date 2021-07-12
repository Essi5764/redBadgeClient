import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const CourseCreate = (props) => {
    return (
        <Create title='Create a Course' {...props}>
            <SimpleForm>
                <TextField source='title'/>
                <TextField source='caterogy'/>
                <TextField multiline source='content'/>
            </SimpleForm>
        </Create>
    )
}

export default CourseCreate;
