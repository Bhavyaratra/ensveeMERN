import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../axios'

export default function Home(){
    const navigate = useNavigate();

    const [usid,setUsid] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(() => {
        if(!localStorage.getItem('user')){
            navigate('/login');
        }else{
            const userdata = JSON.parse(localStorage.getItem('user'))
            setUsid(userdata.usid);
        }
        
    }, [])

    const getAllUsers=async (e)=>{
        e.preventDefault();
        const {data} =await axios({
            url: '/api/auth/getusers',
        })
        console.log(data)
        setUsers(data.data);
    }

    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('user')
        navigate('login')
    }

    return(<>
        <div className="container">
            <h1>Hello {usid}!</h1>
            <button className="logout"
                onClick={(e)=>{
                    handleLogout(e)
                }}
            >Logout</button>
            <button  onClick={(e)=>{
                    getAllUsers(e)
                }}>Get All Users</button>

                {users ? <h3>All Users</h3>:<span></span>}

                {users && users.map((user)=>(
                        <div>
                            <p>{user.usid}</p>
                            <br/>
                        </div>
                ))}
        </div>
    </>)

}