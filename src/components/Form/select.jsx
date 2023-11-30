import { useState } from "react";

export default function Select() {

    const [recipient, setRecipient] = useState('Kashvi');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${recipient}.`);
        }, 0)
    }

    return(
        <from onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                  value={recipient}
                  onChange={e => setRecipient(e.target.value)}
                >
                  <option value="Kashvi">Kashvi</option>
                  <option value="Pranjal">Pranjal</option>
                </select>
            </label>
            <textarea 
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </from>
    )
}