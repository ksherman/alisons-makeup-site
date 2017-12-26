import React from 'react';
import Link from 'gatsby-link';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaYoutube from 'react-icons/lib/fa/youtube';

export default props => {
  return (
    <nav className="navigation-wrapper">
      <div className="sidebar-primary-navigation">
        <Link to="/" className="site-title">
          <h1>{props.metadata.title}</h1>
        </Link>
        <div className="link-list">
          <Link className="link-list-item" to="/book-me">
            <FaInfoCircle className="fa-icon" />
          </Link>
          <a
            href="https://twitter.com/2brokebeauties"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FaTwitter className="fa-icon" />
          </a>
          <a
            href="https://www.facebook.com/alison.i.sherman/media_set?set=a.10150315359482183.340195.504707182&type=3"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FaFacebook className="fa-icon" />
          </a>
          <a
            href="https://www.instagram.com/explore/tags/shermiebeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FaInstagram className="fa-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCms4ZhLc43U_3Y-bz7wTqgw/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FaYoutube className="fa-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};
