import React, { useState } from 'react';

const NumberList: React.FC = () => {
  const [number, setNumber] = useState<number | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(value === '' ? '' : parseInt(value));
  };

  const renderNumbers = () => {
    if (typeof number === 'number') {
      return Array.from({ length: number }, (_, i) => i + 1).join(', ');
    }
    return null;
  };

  return (
    <div>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleChange} />
      </label>
      <div>{renderNumbers()}</div>
    </div>
  );
};

export default NumberList;
