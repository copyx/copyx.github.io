import React from 'react';
import { graphql, Link } from 'gatsby';

import MainLayout from '@components/MainLayout';

type PostInfo = {
  id: string;
  name: string;
};

type IndexPageProps = {
  data: {
    allFile: {
      nodes: PostInfo[];
    };
  };
};

export default function IndexPage({ data }: IndexPageProps) {
  return (
    <MainLayout>
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li>📝 {name}</li>
        ))}
      </ul>
    </MainLayout>
  );
}

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
      nodes {
        id
        name
      }
    }
  }
`;
