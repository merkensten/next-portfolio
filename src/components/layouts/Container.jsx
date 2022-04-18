import React from 'react';

export const Container = ({ children, bgColor }) => {
  return <div className={bgColor}>{children}</div>;
};
