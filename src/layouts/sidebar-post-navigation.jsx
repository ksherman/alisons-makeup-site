import React from 'react';
import Link from 'gatsby-link';

export default props => {
  return (
    <nav className="navigation-wrapper">
      <div className="sidebar-primary-navigation">
        <Link to="/" className="site-title">
          <h1>{props.metadata.title}</h1>
        </Link>
        <div className="link-list">
          <Link className="link-list-item" to="/book-me">
            Book Me
          </Link>
          <a
            href="https://twitter.com/2brokebeauties"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            Tw
          </a>
          <a
            href="https://www.facebook.com/alison.i.sherman/media_set?set=a.10150315359482183.340195.504707182&type=3"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            Fb
          </a>
        </div>
      </div>
    </nav>
  );
};
