import React, { useEffect } from 'react';


// Dynamically import the model-viewer library (to avoid SSR issues)
const ModelViewerComponent = (props: any) => {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return <model-viewer {...props}></model-viewer>;
};

export default ModelViewerComponent;
