import { TypeMarkDownRenderer } from '@/types';
import React from 'react';

const MarkdownRenderer = (props: TypeMarkDownRenderer) => {
  const { content } = props;

  return <h1 className='text-2xl font-bold mt-6 mb-4 bg-red-200'>{content}</h1>;
};

export default MarkdownRenderer;
