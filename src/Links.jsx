import React from 'react'

const Links = ({links}) => {
    return (
        <ul className='links'>
            {links.map((link)=>{
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ); 
            })}
        </ul>
    )
}

export default Links
