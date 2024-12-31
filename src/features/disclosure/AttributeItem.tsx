import React from 'react';
import { Check } from 'lucide-react';
import type { SelectiveDisclosure } from '../../types/auth';

interface AttributeItemProps {
  attribute: SelectiveDisclosure;
  onToggle: (attributeId: string) => void;
}

export function AttributeItem({ attribute, onToggle }: AttributeItemProps) {
  return (
    <label className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
      <input
        type="checkbox"
        checked={attribute.isShared}
        onChange={() => onToggle(attribute.attributeId)}
        className="h-4 w-4 text-indigo-600 rounded border-gray-300"
      />
      <div>
        <div className="font-medium">{attribute.name}</div>
        <div className="text-sm text-gray-500">{attribute.value}</div>
      </div>
      {attribute.isShared && (
        <Check className="h-4 w-4 text-green-500 ml-auto" />
      )}
    </label>
  );
}