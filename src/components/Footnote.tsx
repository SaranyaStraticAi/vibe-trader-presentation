import React from 'react';

interface FootnoteProps {
  references: Array<{
    number: number;
    text: string;
  }>;
}

export const Footnote: React.FC<FootnoteProps> = ({ references }) => {
  if (!references || references.length === 0) return null;
  
  return (
    <div className="absolute bottom-4 left-8 text-xs text-gray-400 space-y-0.5 max-w-md">
      {references.map((ref) => (
        <div key={ref.number} className="flex gap-1">
          <span className="font-medium">{ref.number}.</span>
          <span>{ref.text}</span>
        </div>
      ))}
    </div>
  );
};

export const SuperScript: React.FC<{ number: number }> = ({ number }) => {
  return (
    <sup className="text-xs text-gray-400 ml-0.5">{number}</sup>
  );
};