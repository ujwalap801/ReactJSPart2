import React from 'react'
import { useRouteError } from 'react-router-dom'


const RouterError = () => {

    const routeErr = useRouteError()
    console.log(routeErr);


    return (
    <div className='d-flex justify-content-center align-items-center text-center flex-column' style={{minHeight:"'100vh'"}}>
       <p className="display-4 text-danger">{routeErr.data}</p>
       <p className="lead text-warning fs-1">{routeErr.status}-{routeErr.statusText}</p>
    </div>
  )
}

export default RouterError
