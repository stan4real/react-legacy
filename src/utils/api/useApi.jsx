import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useApi (){

    const [users,setUsers] = useState([])
    const [requestError, setRequestError] = useState()
    const [isLoading, setIsLoading] = useState(false)
        
useEffect(() => {
    const fetchData =  async () =>{
        setIsLoading(true)
        try {
            const result = await axios.get('https://my-json-server.typicode.com/stan4real/data/legacy');
            (setUsers(result.data));
        } catch (err) {
            setRequestError(err.message)
        } finally {
            setIsLoading(false)
        }}
    fetchData()
}, [])

    const postData = () =>{ axios.post('https://my-json-server.typicode.com/stan4real/data/legacy',
        {id:12,
        attributes:{},
        groupId:2,
        calendarId:2,
        name:'Stan',
        uniqueId:'',
        status:'waiting',
        lastUpdate:'2023-11-27T13:47:46.000+00:00',
        positionId:100000,
        phone:'9624225757',
        model:'model55',
        contact:'contactt',
        category:'truck',
        disabled:'true',
        expirationTime: null
        })
        .then(function (response) {
            alert('Success');
        }) 
        .catch(function (error) {
            alert(error);
        });
    }
    

    const deleteData = () =>{ axios.delete('https://my-json-server.typicode.com/stan4real/data/legacy',{}
        )
        .then(function (response) {
            console.log(response);
        }) 
        .catch(function (error) {
            alert(error);
        });
    }
    return {users, isLoading, requestError, deleteData, postData}
}

