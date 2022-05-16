import React from 'react'
import Logo from './Logo'
import Link from './Link'
import Button from './Button'
import './Navbar.css'
const Navbar = () => {

  let tabs = [{name:"Services"},{name:"Project"},{name:"About"}]

  return (
    <>
    {/*
    <div id='nav'>
  <div id='logo'>
<h3>Masai School</h3>
  </div>


<div id='center'>
    {tabs.map((user)=>(
      <div id='product'>
      <Navbar {...user}/>
      </div>
    ))}

  </div>

 
  


  <div id='button'>
    <button>Contact</button>
  </div>

</div>
 */}

<div id='nav'>
<div id='logo'>
<Logo/>
  </div>

  <div id='center'>
  {tabs.map((user)=>(
      <div id='product'>
      <Link {...user}/>
      </div>
    ))}
  </div>


  <div id='button'>
    <Button/>
  </div>

</div>
    
    </>
  )
}

export default Navbar;