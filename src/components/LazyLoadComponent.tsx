import React, {Suspense} from 'react';
import LoadingComponent from './Loading';

interface LazyLoadComponentProps {
  Component: React.LazyExoticComponent<React.FC>;
}

const LazyLoadComponent: React.FC<LazyLoadComponentProps> = ({Component}) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoadComponent;
