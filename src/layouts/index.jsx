import React from 'react';
import Link from 'gatsby-link';
import SidebarPostNavigation from './sidebar-post-navigation';
import '../styles/entry.scss';

export default ({ children, data }) => (
  <div className="site-wrapper">
    <SidebarPostNavigation metadata={data.site.siteMetadata} />
    {children()}
  </div>
);

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
