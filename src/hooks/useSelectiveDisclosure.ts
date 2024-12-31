import { useState } from 'react';
import type { SelectiveDisclosure } from '../types/auth';

export function useSelectiveDisclosure() {
  const [selectedAttributes, setSelectedAttributes] = useState<SelectiveDisclosure[]>([]);

  const toggleAttribute = (attributeId: string) => {
    setSelectedAttributes(prev => 
      prev.map(attr => 
        attr.attributeId === attributeId 
          ? { ...attr, isShared: !attr.isShared }
          : attr
      )
    );
  };

  const shareSelectedAttributes = async () => {
    const attributesToShare = selectedAttributes.filter(attr => attr.isShared);
    // Implement sharing logic here
    return attributesToShare;
  };

  return {
    selectedAttributes,
    toggleAttribute,
    shareSelectedAttributes
  };
}