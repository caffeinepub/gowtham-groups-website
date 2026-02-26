import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactInfo } from '../backend';

export function useContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching
  });
}
