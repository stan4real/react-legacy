import { Button } from '@mui/material'
import React from 'react'
import DataTable from '../Table/DataTable'
import useApi from '../../utils/api/useApi'

const Objects = () => {
    const {users, isLoading, Error, deleteData, postData} = useApi()
    console.log(users)
  return (
    <div className='container'>
        <div className='ButtonBar'>
            <Button onClick={() => postData()}>Добавить</Button>
            <Button onClick={() => deleteData()}>Удалить</Button>
        </div>
        {
            isLoading ? <p>Loading...</p> : 
            Error ? <p>Error : {Error}</p> : 
            <div>
                <DataTable users={users}/>
            </div>
        }
    </div>
  )
}

export default Objects