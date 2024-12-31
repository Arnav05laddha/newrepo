import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { signMessage } from '../../utils/crypto';
import { storeData } from '../../services/storage';
import { AttributeItem } from './AttributeItem';
import type { SelectiveDisclosure as SelectiveDisclosureType } from '../../types/auth';

export function SelectiveDisclosure() {
  const [selectedAttributes, setSelectedAttributes] = useState<SelectiveDisclosureType[]>([
    { attributeId: '1', name: 'Email', value: 'user@example.com', isShared: false },
    { attributeId: '2', name: 'Full Name', value: 'John Doe', isShared: false },
    { attributeId: '3', name: 'Age', value: 25, isShared: false }
  ]);

  const handleToggle = (attributeId: string) => {
    setSelectedAttributes(prev =>
      prev.map(a =>
        a.attributeId === attributeId
          ? { ...a, isShared: !a.isShared }
          : a
      )
    );
  };

  const handleShare = async () => {
    const sharedData = selectedAttributes.filter(attr => attr.isShared);
    if (sharedData.length === 0) return;

    try {
      const message = JSON.stringify(sharedData);
      const signature = await signMessage(message);
      await storeData('shared_attributes', { data: sharedData, signature });
      alert('Data shared successfully!');
    } catch (error) {
      console.error('Error sharing data:', error);
      alert('Failed to share data. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Share2 className="h-5 w-5 text-indigo-600" />
        <h2 className="text-xl font-semibold">Selective Disclosure</h2>
      </div>
      <div className="space-y-3">
        {selectedAttributes.map(attr => (
          <AttributeItem
            key={attr.attributeId}
            attribute={attr}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <button
        onClick={handleShare}
        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2"
      >
        <Share2 className="h-4 w-4" />
        Share Selected Data
      </button>
    </div>
  );
}