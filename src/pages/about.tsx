import React from 'react';
import { graphql, Link } from 'gatsby';

type InfoProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

export default function Info({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>{author}</div>
      <Link to="/">main</Link>
    </div>
  );
}

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
