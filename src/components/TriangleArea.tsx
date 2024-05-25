import React, { useState } from 'react';

const TriangleArea: React.FC = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeight(value === '' ? '' : parseInt(value));
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWidth(value === '' ? '' : parseInt(value));
  };

  const calculateArea = () => {
    if (typeof height === 'number' && typeof width === 'number') {
      return (0.5 * height * width).toFixed(2);
    }
    return null;
  };

  return (
    <div>
      <label>
        Height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <label>
        Width:
        <input type="number" value={width} onChange={handleWidthChange} />
      </label>
      <div>Area of the triangle: {calculateArea()}</div>
    </div>
  );
};

export default TriangleArea;
