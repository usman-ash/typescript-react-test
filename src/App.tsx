import React from 'react';
import NumberList from './components/NumberList';
import TriangleArea from './components/TriangleArea';

const App: React.FC = () => {
  return (
    <div>
      <h1>Number List and Triangle Area Calculator</h1>
      <NumberList />
      <TriangleArea />
    </div>
  );
};

export default App;
