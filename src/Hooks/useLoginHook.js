import {useContext, useState} from "react";
import {StoreContextUser} from "../Contenxt/authContext";
import {useNavigate} from "react-router-dom";
import {authForm} from "../Api/authForm";

export const useLoginHook = () => {
  const [credential, setCredential] = useState({username: '', password: ''})
  const [error,setError] = useState(false)
  const {userToken} = useContext(StoreContextUser);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const req = await authForm(credential.username, credential.password);
      if(req.status === 200){
        const token = await req.data
        userToken(token)
        navigate('/')
      }
    } catch (e) {
      // Gestisci l'errore qui, ad esempio loggandolo
      console.log(e) // errore del server
      if(e.response.status !== 200){
        setError(true)
      }
    }
  };
  return {
    credential,
    setCredential,
    error,
    handleChange,
    handleSubmitForm
  }
}