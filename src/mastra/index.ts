
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { hotelSearchAgent } from './agents/hotel-search.agent';

export const mastra = new Mastra({
  agents: { hotelSearchAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'debug',
  })
});
