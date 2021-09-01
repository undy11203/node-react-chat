import React from 'react'
import '../styles/Input.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className="inputMessage"/>
    )
})

export default MyInput
