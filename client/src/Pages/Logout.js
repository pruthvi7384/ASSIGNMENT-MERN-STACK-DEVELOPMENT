import { useHistory } from 'react-router-dom';
import { useProfile } from '../Context.Provider'

function Logout() {
    const History = useHistory();
    const {setProfile} = useProfile();
    setProfile('');
    History.push('/login');

    return(
        <>
        
        </>
    )
}

export default Logout