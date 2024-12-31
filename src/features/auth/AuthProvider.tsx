import React, { createContext, useContext, useState } from 'react';
import { useAccount } from 'wagmi';
import { createDID } from '../../services/did';

interface AuthContextType {
  did: string | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({ did: null, isAuthenticated: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const [did, setDid] = useState<string | null>(null);

  React.useEffect(() => {
    if (address) {
      createDID(address).then(setDid);
    } else {
      setDid(null);
    }
  }, [address]);

  return (
    <AuthContext.Provider value={{ did, isAuthenticated: isConnected }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);