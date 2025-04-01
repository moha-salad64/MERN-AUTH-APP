import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Oauth() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () =>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app)
            const result = await signInWithPopup(auth , provider)
           
            // console.log(result);
    
            const response = await fetch('/api/auth/google' , {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                })
            });
            
            const data = await response.json();
            console.log(data);
            dispatch(signinSuccess(data));
            navigate('/');
            
        } catch (error) {
            console.log("cloud not connect with google account", error.message);
            
        }
    
    }

  return (
    <button 
    type='button' 
    onClick={handleGoogleClick}
    className='bg-red-700 p-2 rounded-lg font-semibold uppercase cursor-pointer text-white hover:opacity-95'>
        continue with google
    </button>
  )
}
