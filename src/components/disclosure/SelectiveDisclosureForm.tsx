import React from 'react';
import { useSelectiveDisclosure } from '../../hooks/useSelectiveDisclosure';
import { Share2 } from 'lucide-react';

export function SelectiveDisclosureForm() {
  const { selectedAttributes, toggleAttribute, shareSelectedAttributes } = useSelectiveDisclosure();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await shareSelectedAttributes();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        {selectedAttributes.map(attr => (
          <label key={attr.attributeId} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={attr.isShared}
              onChange={() => toggleAttribute(attr.attributeId)}
              className="rounded text-indigo-600"
            />
            <span>{attr.name}</span>
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        <div className="flex items-center justify-center space-x-2">
          <Share2 className="h-4 w-4" />
          <span>Share Selected Data</span>
        </div>
      </button>
    </form>
  );
}