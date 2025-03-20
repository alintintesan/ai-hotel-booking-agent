import { createTool } from '@mastra/core/tools';
import { searchHotels } from '../services/hotel-search.service';
import { HOTEL_SEARCH_TOOL_DESCRIPTION, Tools } from '../utils/constants';
import { hotelSearchToolInputSchema, hotelSearchToolOutputSchema } from '../schemas/hotel-search.tool.schema';

/**
 * A tool for searching hotels based on various input parameters such as city, country, check-in and check-out dates, 
 * guest nationality, and the number of adults and children.
 *
 * @constant
 * @type {Tool}
 * @property {string} id - The unique identifier for the hotel search tool.
 * @property {string} description - A brief description of the tool's functionality.
 * @property {Schema} inputSchema - The schema defining the structure of the input data required by the tool.
 * @property {Schema} outputSchema - The schema defining the structure of the output data returned by the tool.
 * @property {Function} execute - An asynchronous function that performs the hotel search operation.
 * @param {Object} context - The context object containing the input parameters for the hotel search.
 * @param {string} context.cityName - The name of the city where the hotel search is to be performed.
 * @param {string} context.countryCode - The country code corresponding to the city.
 * @param {string} context.checkin - The check-in date for the hotel stay.
 * @param {string} context.checkout - The check-out date for the hotel stay.
 * @param {string} context.guestNationality - The nationality of the guest(s).
 * @param {number} context.adults - The number of adult guests.
 * @param {number} context.children - The number of child guests.
 * @returns {Tool} The hotel search tool.
 */
export const hotelSearchTool = createTool({
  id: Tools.HOTEL_SEARCH_TOOL,
  description: HOTEL_SEARCH_TOOL_DESCRIPTION,
  inputSchema: hotelSearchToolInputSchema,
  outputSchema: hotelSearchToolOutputSchema,
  execute: async ({ context }) => {
    return await searchHotels(
      context.cityName,
      context.countryCode,
      context.checkin,
      context.checkout,
      context.guestNationality,
      context.adults,
      context.children
    );
  },
});