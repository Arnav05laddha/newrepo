import { createConfig, http } from 'wagmi';
import { avalanche } from 'wagmi/chains';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [avalanche],
  transports: {
    [avalanche.id]: http(),
  },
});