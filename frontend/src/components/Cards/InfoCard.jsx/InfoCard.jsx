import { useEffect, useState } from 'react'
import ProfileModal from '../../ProfileModal/ProfileModal'
import { UilPen } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as userApi from '../../../api/userRequest.js'
import "./InfoCard.css"


const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState();

    const { user } = useSelector(state => state.auth.authData);


    useEffect(() => {
      const fetchProfileUser = async() => {
        if(profileUserId === user._id){
            setProfileUser(user)
        }else {
            const profileUser = await userApi.getUser(profileUserId);
            setProfileUser(profileUser);
        }
      }
      fetchProfileUser();
      console.log(profileUser);
    }, [user])
    

    return (
        <div className='info-card'>
            <div className='info-head'>
                <h4>Profile info</h4>
                {user._id === profileUserId ?
                <div>
                <UilPen width='2rem' onClick={() => setModalOpened(true)} />
                <ProfileModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
            </div>
            : ''

                }
            </div>
            <div className='info'>
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser?.relationshipStatus}</span>
            </div>
            <div className='info'>
                <span>
                    <b>Location </b>
                </span>
                <span>{profileUser?.livesin}</span>
            </div>
            <div className='info'>
                <span>
                    <b>Work </b>
                </span>
                <span>{profileUser?.worksat}</span>
            </div>

            <button className='button info-button'>button</button>

        </div>
    )
}

export default InfoCard