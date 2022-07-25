import React from 'react';
import Text from '@components/Text';
import { Link } from 'gatsby';

export default function Index() {
  return (
    <div>
      <Text />
      <Link to="/info">info</Link>
    </div>
  );
}
