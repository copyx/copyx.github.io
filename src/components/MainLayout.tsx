import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainLayoutProps = {
  pageTitle?: string;
  children?: ReactNode;
};

export default function MainLayout({ pageTitle, children }: MainLayoutProps) {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Container>
      <title>
        {pageTitle} | {siteTitle}
      </title>
      <header>
        <SiteTitle>{siteTitle}</SiteTitle>
      </header>
      <nav>
        <NavigationList>
          <NavigationListItem>
            <Link to="/">Home</Link>
          </NavigationListItem>
          <NavigationListItem>
            <Link to="/about">About</Link>
          </NavigationListItem>
        </NavigationList>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  width: 100%;
`;

const SiteTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const NavigationList = styled.ul`
  display: flex;
`;

const NavigationListItem = styled.li`
  font-size: 24;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
