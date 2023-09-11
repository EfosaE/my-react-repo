import React from 'react'

const SocialLinks = ({social}) => {
    return (
      <ul className="social-links">
        {social.map((socialLink) => {
          return (
            <li key={socialLink.id}>
              <a href={socialLink.url}>{socialLink.icon}</a>
            </li>
          );
        })}
      </ul>
    );
}

export default SocialLinks
