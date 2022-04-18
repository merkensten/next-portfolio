import React from 'react';

export const Wrapper = ({ children, padding }) => {
  return <div className={`container mx-auto ${padding}`}>{children}</div>;
};
