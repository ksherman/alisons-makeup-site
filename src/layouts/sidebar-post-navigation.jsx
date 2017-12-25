import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBook from '@fortawesome/fontawesome-pro-light/faBook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

export default props => {
  return (
    <nav className="navigation-wrapper">
      <div className="sidebar-primary-navigation">
        <Link to="/" className="site-title">
          <h1>{props.metadata.title}</h1>
        </Link>
        <div className="link-list">
          <Link className="link-list-item" to="/book-me">
            <FontAwesomeIcon className="fa-icon" icon={faBook} size="lg" />
            Book Me
          </Link>
          <a
            href="https://twitter.com/kd_sherm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FontAwesomeIcon className="fa-icon" icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/kdsherm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};
