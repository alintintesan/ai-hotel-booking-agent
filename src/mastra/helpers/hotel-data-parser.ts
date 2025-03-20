import { HotelDto, HotelRoomDto, HotelSearchResponseDto } from "../dto/hotel-search-response.dto";
import { HotelRoomDetails } from "../entities/hotel-room-details.entity";

/**
 * Parses hotel search response data and maps it to an array of `HotelRoomDetails` objects.
 *
 * @param responseData - The hotel search response data containing hotel and room information.
 * @returns An array of `HotelRoomDetails` objects, each representing a hotel and its associated room details.
 *
 * The function extracts the following details for each hotel:
 * - `mainPhotoUrl`: The URL of the hotel's main photo.
 * - `hotelName`: The name of the hotel.
 * - `address`: The address of the hotel.
 * - `roomType`: The name of the room type for the first rate of the first room type.
 * - `price`: The suggested selling price of the room, formatted as "amount currency".
 * - `rating`: The rating of the hotel.
 */
export const parseHotelSearchData = (responseData: HotelSearchResponseDto): HotelRoomDetails[] => {
    const roomData: HotelRoomDto[] = responseData.data;
    return responseData.hotels.map((hotel: HotelDto, index: number) => {
        return {
            mainPhotoUrl: hotel.main_photo,
            hotelName: hotel.name,
            address: hotel.address,
            roomType: roomData[index].roomTypes[0].rates[0].name,
            price: `${
                roomData[index].roomTypes[0].suggestedSellingPrice.amount
            } ${roomData[index].roomTypes[0].suggestedSellingPrice.currency}`,
            rating: hotel.rating
        } as HotelRoomDetails;
    });
}