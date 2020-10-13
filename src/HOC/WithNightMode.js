import React from 'react'

const WithNightMode = (WrappedComponent) => 
(props) => {
    return (
        <div style={{backgroundColor: 'wheat'}}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithNightMode;