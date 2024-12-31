export interface Credential {
  id: string;
  type: string;
  issuer: string;
  issuanceDate: string;
  expirationDate?: string;
  claims: Record<string, any>;
}

export interface SelectiveDisclosure {
  attributeId: string;
  name: string;
  value: any;
  isShared: boolean;
}

export interface UserProfile {
  did: string;
  credentials: Credential[];
  sharedAttributes: SelectiveDisclosure[];
}