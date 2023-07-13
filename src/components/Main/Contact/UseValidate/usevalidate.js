import { useState } from "react";


export const useValidate = () => {
    const [error, setError] = useState({})
    const pattern = new RegExp((/^\+375\(\d{2}\)\d{7}$/))
    const number = new RegExp((/[0-9]/))
    const email = new RegExp(( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))



    const validate = (name, value) => {

        switch (name) {
            case 'name': {
                console.log(value)
                if (value.length < 2 || value.length > 15) {
                    setError({ ...error, firstName: 'incorrect length!' })
                } else {
                    setError({ ...error, firstName: '' })
                }
                break
            }
            case 'phone': {
                console.log(value)
                if (!pattern.test(value)) {
                    setError({ ...error, phone: 'Please enter valid Mobile Number!' })
                } else {
                    setError({ ...error, phone: '' })
                }
                break
            }
            case 'email': {

                if (!email.test(value)) {
                    setError({ ...error, email: 'Please enter valid adressa email!' })
                } else {
                    setError({ ...error, email: '' })
                }
                break
            }
            case 'subject': {

                if (value.length < 0 || value.length > 30) {
                    setError({ ...error, subject: 'incorrect length!' })
                } else {
                    setError({ ...error, subject: '' })
                }
                break
            }
            
            case 'message': {

                if (value.length < 0 || value.length > 150) {
                    setError({ ...error, message: 'incorrect length!' })
                } else {
                    setError({ ...error, message: '' })
                }
                break
            }

            default: break
        }

    }


    return { error, validate }
}