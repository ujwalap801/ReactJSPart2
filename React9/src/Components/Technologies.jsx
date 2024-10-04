import { Link,Outlet } from "react-router-dom"

const Technologies = () => {
  return (
    <div>
    <div className=' py-2'>

    <ul className="nav justify-content-center">


    <li className="nav-item">
      <Link className="nav-link text-warning" to="java">Java</Link>
    </li>


    <li className="nav-item">
      <Link className="nav-link text-warning" to="node">NodeJS</Link>
    </li>


    <li className="nav-item">
      <Link className="nav-link text-warning" to="vue">VueJS</Link>
    </li>

</ul>


{/* Placeholder for selected component */}
<Outlet/>
</div>
 </div>
  )
}

export default Technologies
