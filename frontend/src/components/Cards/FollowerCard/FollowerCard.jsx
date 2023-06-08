import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import './FollowerCard.css'
import User from '../../User/User'
import { getAllUsers } from '../../../api/userRequest'

const FollowerCard = () => {

    const [person, setPerson] = useState([]);
    const { user } = useSelector(state => state.auth.authData);
    
    useEffect(() => {
        const fetchPerson = async () => {
            const { data } = await getAllUsers();
            setPerson(data);
            console.log(data);
            console.log(person);

        }
        fetchPerson()
    }, [])


    return (
        <div className='follower-card'>
            <h3>Your followers</h3>

            {person.map((follower, id) => {
                if (follower._id !== user._id){
                    return (
                        <User person={follower} key={id} />
                    )
                }
                
            })}

        </div>
    )
}

export default FollowerCard