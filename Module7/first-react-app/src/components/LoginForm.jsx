import {useState} from 'react'
import { UserProvider, useUserContext } from "../context/UserContext"
import {useThemeContext} from "../context/MyThemeContext"



function LoginForm() {
    
    const {theme, darkMode, toggleTheme} = useThemeContext()

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [submitResult, setSubmitResult] = useState('')
    const [attempts, setAttempts] = useState(0)
    const [isLocked, setIsLocked] = useState(false)
    

    const {currentUser, handleUpdateUser} = useUserContext()
    
    // alternative using the useContext hook directly, either works
    // const {currentUser, handleUpdateUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault() // prevent page reloading on form submit

        if (isLocked) return

        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long')
            setAttempts((prev) => prev + 1)
         } 
         else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address')
            setSubmitResult('Please enter a valid email address')
            setAttempts((prev) => prev + 1)
          } 
          else if (userPassword.toLowerCase().includes('password')) {
            setSubmitResult('Password cannot contain the word password')
            setAttempts((prev) => prev + 1)
         } 
         else if (!userEmail.endsWith('.com')) {
            setSubmitResult('Please enter a valid email address that ends in ".com"')
            setAttempts((prev) => prev + 1)
         }
         else {
            setSubmitResult('Successful login.')
            setIsLocked(true)
            handleUpdateUser({email: userEmail }); //context function
            return
           }
        
           if (attempts + 1 >= 3) {
            setIsLocked(true)
            setSubmitResult('Too many failed attempts. Please try again later.')
            
           }
            if (isLocked) {
                return (
                    <div className="LoginForm componentbox">
                        <p>{submitResult}</p>
                    </div>
                )
            }

            }
            
            if (currentUser.email) return (
                <><p>Welcome {currentUser.name}!</p>
                <button onClick={() => handleUpdateUser({})}>Log Out</button>
                </>
            );

            



    return (
       <div className="LoginForm componentBox">

        <h2>Login Form</h2>

        <form onSubmit={handleSubmit}>
        <div className="formRow">
            <label>Email address: 
                <input type="email"
                 value={userEmail} 
                 name="userEmail" 
                 onChange={(e) => setUserEmail(e.target.value)} />
            </label>
            
        </div>

    <div className="formRow">
        <label>Password:
            <input type="password"
             value={userPassword} 
             name="password" 
             onChange={(e) => setUserPassword(e.target.value)} />
        </label>
    </div>
    <button>Log In</button>
            <button onClick={toggleTheme} style={{ marginLeft: "1rem" }}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
    <p>{submitResult}</p>
    <p>Attempts: {attempts}</p>
    
    
    </form>
   </div>
    )
}



    export default LoginForm