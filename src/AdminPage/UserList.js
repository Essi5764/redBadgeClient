import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'
// import {alpha} from '@material-ui/core/style'

const CourseList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <TextField source='category'/>
            <TextField source='content'/>
            <DateField source='createdAt'/>
            <EditButton basePath='/course'/>
            <DeleteButton basePath='/course'/>
        </Datagrid>
    </List>
}

export default CourseList;
