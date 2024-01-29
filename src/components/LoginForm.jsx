import {useLoginHook} from "../Hooks/useLoginHook";
const LoginForm = () => {
  const {handleSubmitForm,handleChange,credential,error} = useLoginHook()
  return (
   <>
     <div className="md:mx-auto max-w-2xl bg-white p-8 rounded shadow-md">
       <h2 className="text-2xl font-semibold mb-2 text-center">Accedi</h2>
       <p className='text-center mb-2'>Inserisci i dati di accesso per poter effettuare il login.</p>
       <form onSubmit={handleSubmitForm}>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
           <input type="text" value={credential.username} onChange={handleChange} name="username"
                  className="w-full p-2 border border-gray-300 rounded"/>
         </div>

         <div className="mb-6">
           <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
           <input type="password" value={credential.password} onChange={handleChange} name="password"
                  className="w-full p-2 border border-gray-300 rounded"/>
         </div>

         <button type="submit"
                 className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Accedi
         </button>
         {error && <p className='text-red-500 font-semibold text-center mt-2 text-xs'>Ricontrolla le credenziali di accesso! Qualcosa è andato storto!</p> }
       </form>
     </div>
   </>
  )
}
export default LoginForm