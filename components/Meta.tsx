import React from 'react';

interface MetaProps {
  title: string;
  description: string;
}

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Meta;