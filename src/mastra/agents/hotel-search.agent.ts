import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { hotelSearchTool } from '../tools/hotel-search.tool';
import { Agents } from '../utils/constants';

const STORE_LAST_MESSAGES = 20;

/**
 * Represents an AI-powered agent designed to assist users in finding accommodations
 * and providing detailed hotel information. The agent interacts with users to gather
 * necessary details such as location, check-in and check-out dates, number of guests,
 * and guest nationality, ensuring a comprehensive search experience.
 *
 * Features:
 * - Prompts users for missing information, including location, dates, guest details, and nationality.
 * - Assumes the current year if the year is omitted in the provided dates.
 * - Fetches accommodation data using the `hotelSearchTool`.
 * - Provides concise yet informative responses, including hotel name, room type, and price.
 * - Utilizes a memory system to enable context-aware interactions.
 *
 * Configuration:
 * - `name`: The unique identifier for the agent, set to `Agents.HOTEL_SEARCH_AGENT`.
 * - `instructions`: A detailed set of guidelines for the agent's behavior and response structure.
 * - `model`: Powered by the OpenAI GPT-4o model for generating responses.
 * - `memory`: Configured with working memory and optional storage for the last messages.
 * - `tools`: Includes the `hotelSearchTool` for fetching hotel data.
 */
export const hotelSearchAgent = new Agent({
    name: Agents.HOTEL_SEARCH_AGENT,
    instructions: `
        You help users find accommodations and provide detailed hotel information. The current year is ${new Date().getFullYear()}.

        When responding:
        - Always ask for a location if none is provided.
        - Always ask for a check-in and check-out date if none is provided. If year is ommitted, assume the current year.
        - Always ask for the number of guests if none is provided: number of adults, and children, for each children, also ask for their age.
        - Always ask for the guest nationality if none is provided.
        - Provide details like hotel name, room type and price.
        - Keep responses concise but informative.

        Always use the hotelSearchTool to fetch accommodation data.
    `,
    model: openai('gpt-4o'),
    memory: new Memory({
        options: {
          workingMemory: {
            enabled: true,
          },
          lastMessages: STORE_LAST_MESSAGES
        }
    }),
    tools: {
        hotelSearchTool
    }
});

