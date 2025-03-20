import { z } from "zod";

export const hotelSearchToolInputSchema = z.object({
    cityName: z.string().describe('City to search for hotels in'),
    countryCode: z.string().describe('Country code of the city in ISO 2-letter format'),
    checkin: z.string().describe('Check-in date in YYYY-MM-DD format (ISO 8601)'),
    checkout: z.string().describe('Check-out date YYYY-MM-DD format (ISO 8601)'),
    guestNationality: z.string().describe('The guest nationality in ISO 2-letter format, current year'),
    adults: z.number().describe('Number of adults'),
    children: z.array(z.number()).optional().describe('Ages of children'),
});

export const hotelSearchToolOutputSchema = z.array(
    z.object({
        mainPhotoUrl: z.string().describe('URL of the main photo of the hotel'),
        hotelName: z.string().describe('Name of the hotel'),
        address: z.string().describe('Address of the hotel'),
        roomType: z.string().describe('Type of room'),
        price: z.string().describe('Price of the room together with currency'),
        rating: z.number().describe('Rating of the hotel'),
    })
);