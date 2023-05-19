import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.css"


function ProfileModal({modalOpened, setModalOpened}) {


    const theme = useMantineTheme();

    return (
        <>
          <Modal
            opened={modalOpened}
            onClose={()=>setModalOpened(false)}
            // title="Authentication"
            size='55%'
            overlayBlur={3}
            overlayOpacity={0.60}
          >
            {/* Modal content */}
            <form className="info-form">
                <h3>Profile information</h3>

                <div>
                    <input className='info-input' name='firstName' type="text" placeholder='First Name' />
                    <input className='info-input' name='lastName' type="text" placeholder='Last Name' />
                </div>
                <div>
                    <input className='info-input' name='work' type="text" placeholder='Work' />
                </div>
                <div>
                    <input className='info-input' name='location' type="text" placeholder='Location' />
                    <input className='info-input' name='country' type="text" placeholder='Country' />
                </div>
                <div>
                    <input className='info-input' name='relStatus' type="text" placeholder='Relationship Status' />
                </div>

                <div>
                    Profile Image
                    <input type="file" name='profileImg' />
                    Cover Image
                    <input type="file" name='coverImg' />
                </div>
                    <button className='button info-button modal-button'>Update</button>
            </form>
          </Modal>
        </>
      );
    }

export default ProfileModal