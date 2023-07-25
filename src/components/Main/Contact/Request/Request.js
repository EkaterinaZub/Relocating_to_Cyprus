import { useState, useEffect } from 'react'
import { Button } from '../../../../common/Button/Button'
import { Title } from '../../../../common/Title/Title'
import styles from './Request.module.css'
import { Link } from 'react-router-dom'
import { PopUp } from '../PopUp/PopUp'
import { ErrorValidate } from '../ErrorValidate/ErrorValidate'
import { useValidate } from '../UseValidate/usevalidate'
import Cookies from 'js-cookie'

const initialState = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agree: 'false'

}

export const Request = () => {

    const [state, setState] = useState(initialState)
    const [isChecked, setIsChecked] = useState(false)
    const [IsShowPopUp, setIsShowPopUp] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    const { error, validate } = useValidate()


    useEffect(() => {
        const disabled = Object.values(error).find(el => el !== '') ||
            state.name === '' || state.email === '' ||
            state.phone === '' || !isChecked;
        setIsDisabled(disabled)
    }, [error, state.name, state.email, state.phone, isChecked])


    const handelChange = (e) => {

        const { name, value, type, checked } = e.target

        const setValue = type === 'checkbox' ? checked : value

        validate(name, value)

        setState({ ...state, [name]: setValue })

    }

    function getDefaultState() {
        return {
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
            agree: 'false'
        };
    }

    const handelSubmit = (e) => {
        e.preventDefault()
    }


    const sendData = (event) => {
        event.preventDefault();

        Cookies.set('name', state, { expires: 1, path: '' })
        if (!isDisabled) {
            setIsShowPopUp(true)
            console.log(state)
        }
        setState(getDefaultState())

    }


    return (
        <div className={styles.container}>
            <Title title='send inquiry' addStyles={styles.header} />
            <form className={styles.form} onSubmit={handelSubmit}>
                <div className={styles.form_group}>
                    <div className={styles.form_input}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder=" Your Name"

                            value={state.name}
                            onChange={handelChange}
                            name="name"
                        />
                        <ErrorValidate error={error} name='name' />
                    </div>

                    <div className={styles.form_input}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Email'
                            value={state.email}
                            onChange={handelChange}
                            name="email"
                        />
                        <ErrorValidate error={error} name='email' />
                    </div>

                    <div className={styles.form_input}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder="Subject"
                            value={state.subject}
                            onChange={handelChange}
                            name="subject"
                        />
                        <ErrorValidate error={error} name='subject' />
                    </div>
                    <div className={styles.form_input}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Phone'
                            value={state.phone}
                            onChange={handelChange}
                            name="phone"
                        />
                        <ErrorValidate error={error} name='phone' />
                    </div>
                    <div className={styles.form_input}>
                        <input
                            className={[styles.input, styles.message].join(' ')}
                            type='text'
                            placeholder='Your message'
                            value={state.message}
                            onChange={handelChange}
                            name="message"
                        />
                        <ErrorValidate error={error} name='message' />
                    </div>
                </div>
                <div className={styles.containet_checkbox}>
                    <input className={styles.checkbox} id="checkbox" type='checkbox'
                        name='agree'
                        value={state.agree}
                        onChange={(e) => {
                            handelChange(e)
                            setIsChecked(!isChecked)
                        }}
                    />
                    <label htmlFor="checkbox" className={styles.text}></label>
                    <span className={styles.text}>By clicking “Submit button” you accept our <Link className={styles.link}>Terms & Conditions </Link>and have read our <Link className={styles.link}> Privacy Policy</Link> and <Link className={styles.link}>Disclaimer </Link></span>
                </div>
                <Button title='Submit' addStyles={styles.button} type='submit'
                    onClick={sendData}
                    disabled={isDisabled}
                />
            </form>
            {IsShowPopUp && <PopUp setIsShowPopUp={setIsShowPopUp} />}
        </div>

    )
}