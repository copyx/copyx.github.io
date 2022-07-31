import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MainLayout from '@components/MainLayout';

type Post = {
  frontmatter: {
    title: string;
    date: string;
  };
  slug: string;
};

type IndexPageProps = {
  data: {
    allMdx: {
      nodes: Post[];
    };
  };
};

export default function IndexPage({ data }: IndexPageProps) {
  return (
    <MainLayout>
      <ul>
        {data.allMdx.nodes.map(({ frontmatter: { title, date }, slug }) => (
          <li>
            <article>
              <h2>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </h2>
              <p>{date}</p>
            </article>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        id
        slug
      }
    }
  }
`;
