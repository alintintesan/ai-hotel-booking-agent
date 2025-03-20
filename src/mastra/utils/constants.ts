export enum Agents {
    HOTEL_SEARCH_AGENT = 'Hotel Search Agent'
}

export enum Tools {
    HOTEL_SEARCH_TOOL = 'hotel-search-tool'
}

export const HOTEL_SEARCH_TOOL_DESCRIPTION = 'Search available hotels from a location at specific dates';

export const HttpMethods = {
    POST: 'POST',
};

export const HttpContentTypes = {
    JSON: 'application/json'
};

export const HOTELS_RATES_ENDPOINT_CURRENCY = 'USD';
export const HOTEL_RATES_ENDPOINT_RESULTS_LIMIT = 5;
export const HOTEL_RATES_ENDPOINT_MAX_RATES_PER_HOTEL = 1;

// This should go into an .env file but I couldn't make it read it from there during runtime,
// it was always undefined. So I'm leaving it here for now.
export const LITE_API_KEY = '';
