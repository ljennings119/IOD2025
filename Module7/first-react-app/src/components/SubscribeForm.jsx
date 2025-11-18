import { useState } from "react"
import { useFormInput } from '../hooks/useFormInput';

export default function SubscribeForm() {
    const [status, setStatus] = useState('');

    // const [firstName, setFirstName] = useState('Mary');
    // const [email, setEmail] = useState('mary@poppins.com');

    const [nameInputProps, resetName] = useFormInput('Mary');
    const [emailInputProps, resetEmail] = useFormInput('mary@poppins');

    // const handleNameChange = (e) => setFirstName(e.target.value);
    // const handleEmailChange = (e) => setEmail(e.target.value);

    // function handleSubscribe() {
    //     setFirstName(''); setEmail('');
    //     setStatus('Thanks for subscribing!')
    // }

    function handleSubscribe() {
        resetName(); resetEmail();
        setStatus('Thanks for subscribing!')
    }

    //     return (
    //         <div className="SubscribeForm componentBox">
    //             <label>First Name:
    //                 <input value={firstName} onChange={handleNameChange} />
    //             </label>

    //             <label>Email:
    //                 <input value={email} onChange={handleEmailChange} />
    //             </label>

    //             <button onClick={handleSubscribe}>Subscribe</button>
    //             <div>{status}</div>
    //         </div>
    //     )
    // }

    return (
        <div className="SubscribeForm componentBox">
            <label>First name: <input {...nameInputProps} /></label>
            <label>Email: <input {...emailInputProps} /></label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}