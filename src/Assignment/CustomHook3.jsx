import { useEffect } from 'react';

function useDocumentTitle(title, defaultTitle = 'My App') {
  useEffect(() => {
    document.title = title || defaultTitle;
  }, [title, defaultTitle]);
}

export default useDocumentTitle;

