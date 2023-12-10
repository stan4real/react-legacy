import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import DataTable from '../../Components/Table/DataTable'
import './Appi.css';

const Appi = () => {

    const [users,setUsers] = useState([])
    const [requestError, setRequestError] = useState()
    const [userId,setUserId] = useState(2)
    //const [search,setSearch] = useState('')

    const axiosTest = axios.create({
        headers : {
            'content-type':'application/json',
            'Authorization':'Bearer RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ'
        }
    }) 
    
    const fetchData = useCallback( async () =>{
        try {
            const result = await axiosTest.get('https://gps.autotracker.group/api/devices');
            (setUsers(result.data));
        } catch (err) {
            setRequestError(err.message)
        }})

    const postData = () =>{ axiosTest.post('https://gps.autotracker.group/api/devices',
        {id:11,
        attributes:{},
        groupId:2,
        calendarId:2,
        name:'Stan',
        uniqueId:'',
        status:'waiting',
        lastUpdate:'2023-11-27T13:47:46.000+00:00',
        positionId:100000,
        phone:'9624295757',
        model:'model55',
        contact:'contactt',
        category:'truck',
        disabled:'true',
        expirationTime: null
        })
        .then(function (response) {
            console.log(response);
        }) 
        .catch(function (error) {
            alert(error);
        });
    }
    

    const deleteData = () =>{ axiosTest.delete(`https://gps.autotracker.group/api/devices/${userId}`,
        )
        .then(function (response) {
            console.log(response);
        }) 
        .catch(function (error) {
            alert(error);
        });
    }

    // {users.filter((item)=>{
    //     if (search==='' ){
    //     return item }
    //     else if(item.id.toString()===(search)){
    //         return item
    //     }
    // })
    // .map(item => {
    //     return <p key = {item.id}>{item.name}{' '} {item.id}</p>
    // })}
        // <div>
        //     <input type="text" placeholder='Введите Id для поиска' onChange={(e)=> setSearch(e.target.value)}></input>
        // </div>
        
  return (
    <div className='container'>
        <div className='ButtonBar'>
            <Button onClick={() => fetchData()}>Получить пользователей</Button>
            <Button onClick={() => postData()}>Добавить</Button>
            <Button onClick={() => deleteData()}>Удалить</Button>
        </div>
        
        <div>
            <DataTable users={users}/>
        </div>
            
    </div>
  )
}

export default Appi