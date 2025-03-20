import { HotelRoomDetails } from '../entities/hotel-room-details.entity';
import { parseHotelSearchData } from '../helpers/hotel-data-parser';
import { HotelSearchResponseDto } from '../dto/hotel-search-response.dto';
import { HOTELS_RATES_ENDPOINT } from '../utils/api-endpoints';
import { 
  HOTEL_RATES_ENDPOINT_MAX_RATES_PER_HOTEL, 
  HOTEL_RATES_ENDPOINT_RESULTS_LIMIT, 
  HOTELS_RATES_ENDPOINT_CURRENCY, 
  HttpContentTypes, 
  HttpMethods,
  LITE_API_KEY
} from '../utils/constants';

/**
 * Searches for hotel rooms based on the provided criteria.
 *
 * @param cityName - The name of the city where the hotels are located.
 * @param countryCode - The ISO 3166-1 alpha-2 country code of the city.
 * @param checkin - The check-in date in the format 'YYYY-MM-DD'.
 * @param checkout - The check-out date in the format 'YYYY-MM-DD'.
 * @param guestNationality - The nationality of the guest, typically an ISO 3166-1 alpha-2 country code.
 * @param adults - The number of adult guests.
 * @param children - An optional array representing the ages of child guests.
 * @returns A promise that resolves to an array of hotel room details.
 * @throws Will throw an error if no hotel rooms are found or if the fetch operation fails.
 */
export const searchHotels = async (
  cityName: string,
  countryCode: string,
  checkin: string,
  checkout: string,
  guestNationality: string,
  adults: number,
  children?: number[]
): Promise<HotelRoomDetails[]> => {
  const options = {
    method: HttpMethods.POST,
    headers: {
      accept: HttpContentTypes.JSON,
      'content-type': HttpContentTypes.JSON,
      'X-API-Key': LITE_API_KEY
    },
    body: JSON.stringify({
      cityName,
      countryCode,
      checkin,
      checkout,
      guestNationality,
      occupancies: [{ adults, children }],
      currency: HOTELS_RATES_ENDPOINT_CURRENCY,
      limit: HOTEL_RATES_ENDPOINT_RESULTS_LIMIT,
      maxRatesPerHotel: HOTEL_RATES_ENDPOINT_MAX_RATES_PER_HOTEL
    })
  };
console.log("KEY: " + options.headers['X-API-Key']);
  try {
    const response = await fetch(HOTELS_RATES_ENDPOINT, options);
    const responseData: HotelSearchResponseDto = await response.json();

    if (responseData.hotels.length === 0) {
      throw new Error('No hotel rooms found');
    }

    return parseHotelSearchData(responseData);
  } catch (error) {
    throw new Error('Failed to fetch hotel data', error);
  }
}

