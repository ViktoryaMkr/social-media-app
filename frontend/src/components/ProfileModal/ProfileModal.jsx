import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../../store/uploadAction';
import { updateUserProfileInfo } from '../../store/userAction';


function ProfileModal({ modalOpened, setModalOpened, data }) {


  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profilePicture, setProfilePicture] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const { user } = useSelector(state => state.auth.authData);



  const handleProfileinfo = (data) => {

    setFormData({ ...formData, ...data });


    let userData = formData;
    if (profilePicture) {
      const profileformData = new FormData();
      const fileName = Date.now() + profilePicture.name;
      profileformData.append("name", fileName);
      profileformData.append("file", profilePicture);
      userData.profilePicture = fileName;
      try {
        dispatch(uploadImage(profileformData))
      } catch (error) {
        console.log(error);
      }
    }else {
      userData.profilePicture = null
    }

    if (coverImage) {
      console.log(coverImage);
      const profileformData = new FormData();
      const fileName = Date.now() + coverImage.name;
      profileformData.append("name", fileName);
      profileformData.append("file", coverImage);
      userData.coverImage = fileName;
      try {
        dispatch(uploadImage(profileformData))
      } catch (error) {
        console.log(error);
      }
    }else {
      userData.coverImage = null
    }

    dispatch(updateUserProfileInfo(params.id, userData));
    setModalOpened(false);

  }

  const handleImageChange = (e) => {

    if (e.target.files && e.target.files[0]) {
      let image = e.target.files[0];
      e.target.name === 'profilePicture' ? setProfilePicture(image) : setCoverImage(image)
    }
  }


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        // title="Authentication"
        size='55%'
        overlayBlur={3}
        overlayOpacity={0.60}
      >
        {/* Modal content */}
        <form className="info-form" onSubmit={handleSubmit(handleProfileinfo)}>
          <h3>Profile Information</h3>

          <div>
            <input className='info-input' value={formData.firstName} name='firstName' type="text" placeholder='First Name' {...register('firstName')} />
            <input className='info-input' value={formData.lastName} name='lastName' type="text" placeholder='Last Name' {...register('lastName')} />
          </div>
          <div>
            <input className='info-input' value={formData.worksat} name='worksat' type="text" placeholder='Works At' {...register('worksat')} />
            <input className='info-input' value={formData.jobTitle} name='jobTitle' type="text" placeholder='Job Title' {...register('jobTitle')} />
          </div>
          <div>
            <input className='info-input' value={formData.livesin} name='livesin' type="text" placeholder='Location' {...register('livesin')} />
            <input className='info-input' value={formData.country} name='country' type="text" placeholder='Country' {...register('country')} />
          </div>
          <div>
            <input className='info-input' value={formData.relationshipStatus} name='relationshipStatus' type="text" placeholder='Relationship Status' {...register('relationshipStatus')} />
          </div>

          <div>
            Profile Image
            {/* <input type="file" value={formData.profilePicture}  name='profilePicture' {...register('profilePicture')} /> */}
            <input type="file" name='profilePicture'  {...register('profilePicture', {
              onChange: handleImageChange
            })} />
            Cover Image
            {/* <input type="file" value={formData.coverPicture}  name='coverPicture' {...register('coverPicture')} /> */}
            <input type="file" name='coverImage' {...register('coverImage', {
              onChange: handleImageChange
            })} />
          </div>
          <button className='button info-button modal-button'>Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal