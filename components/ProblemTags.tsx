import React from 'react';
import { Badge } from './ui/badge';
import { ProblemTag } from '@prisma/client';

interface Props {
  items: ProblemTag[];
}

const ProblemTags = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge variant="secondary" key={item.id} className="px-2 py-0 text-neutral-400 hover:text-neutral-200">
          {item.tag}
        </Badge>
      ))}
    </div>
  );
};

export default ProblemTags;

