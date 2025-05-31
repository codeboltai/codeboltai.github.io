import React from 'react';
import Translate from '@docusaurus/Translate';

export default function Unlisted(): JSX.Element {
  return (
    <div className="alert alert--warning margin-bottom--md">
      <Translate
        id="theme.docs.unlisted.message"
        description="The unlisted content warning message">
        This page is unlisted. Search engines will not index it, and only users having a direct link can access it.
      </Translate>
    </div>
  );
} 