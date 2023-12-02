import React, { useState } from 'react';
import useDocumentTitle from './CustomHook3';


    function DynamicTitleComponent() {
        const [pageTitle, setPageTitle] = useState('Hello everynyan!');
      
        useDocumentTitle(pageTitle)

  return (
    <div>
      <h3>{pageTitle}</h3>
      <button onClick={() => setPageTitle('meow :-}')}>
        Change Title
      </button>
    </div>
  );
}

export default DynamicTitleComponent;
