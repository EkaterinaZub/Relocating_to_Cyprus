import { useState } from 'react'
import { Button } from '../../../../common/Button/Button'
import { Title } from '../../../../common/Title/Title'
import styles from './Request.module.css'
import { Link } from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''

}

export const Request = () => {

    const [state, setState] = useState(initialState)
    // console.log(state)

    const handelChange = (e)=>{

        const {name, value} = e.target
        console.log(name)

        setState({...state, [name]: value})

    }


    return (
        <div className={styles.container}>
            <Title title='send inquiry' addStyles={styles.header} />
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder=" Your Name"
                    
                    value={state.name}
                    onChange={handelChange}
                    name="name"
                />
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Email'
                    value={state.email}
                    onChange={handelChange}
                    name="email"
                />
                <input
                    className={styles.input}
                    type='text'
                    placeholder="Subject"
                    value={state.subject}
                    onChange={handelChange}
                    name="subject"
                />
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Phone'
                    value={state.phone}
                    onChange={handelChange}
                    name="phone"
                />
                <input
                    className={[styles.input, styles.message].join(' ')}
                    type='text'
                    placeholder='Your message'
                    value={state.message}
                    onChange={handelChange}
                    name="message"
                />
                <div className={styles.containet_checkbox}>
                    <input className={styles.checkbox} id="checkbox" type='checkbox'
                        name='agree'
                    // onChange={(e) => {
                    //     handleChange(e)
                    //     setIsChecked(!isChecked)
                    // }}
                    />
                    <label htmlFor="checkbox" className={styles.text}></label>


                    <span className={styles.text}>By clicking “Submit button” you accept our <Link className={styles.link}>Terms & Conditions </Link>and have read our <Link className={styles.link}> Privacy Policy</Link> and <Link className={styles.link}>Disclaimer </Link></span>
                </div>
                <Button title='Submit' addStyles={styles.button} type='submit' />

            </form>
            {/* <pre className={styles.output}>
                {JSON.stringify(state, null, 2)}
            </pre> */}

        </div>

    )
}