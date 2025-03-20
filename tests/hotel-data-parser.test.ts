import { parseHotelSearchData } from "../src/mastra/helpers/hotel-data-parser";
import { HotelSearchResponseDto } from "../src/mastra/dto/hotel-search-response.dto";
import { HotelRoomDetails } from "../src/mastra/entities/hotel-room-details.entity";

describe("parseHotelSearchData", () => {
    it("should parse hotel search response data and return an array of HotelRoomDetails", () => {
        const mockResponseData: HotelSearchResponseDto = {
            hotels: [
                {
                    id: "1",
                    main_photo: "https://example.com/photo1.jpg",
                    name: "Hotel One",
                    address: "123 Main St",
                    rating: 4.5,
                },
                {
                    id: "2",
                    main_photo: "https://example.com/photo2.jpg",
                    name: "Hotel Two",
                    address: "456 Elm St",
                    rating: 4.0,
                },
            ],
            data: [
                {
                    hotelId: "1",
                    roomTypes: [
                        {
                            roomTypeId: "1",
                            offerId: "1",
                            rates: [
                                {
                                    rateId: "1",
                                    name: "Deluxe Room",
                                },
                            ],
                            suggestedSellingPrice: {
                                amount: 150,
                                currency: "USD",
                            },
                        },
                    ],
                },
                {
                    hotelId: "2",
                    roomTypes: [
                        {
                            roomTypeId: "2",
                            offerId: "2",
                            rates: [
                                {
                                    rateId: "2",
                                    name: "Standard Room",
                                },
                            ],
                            suggestedSellingPrice: {
                                amount: 100,
                                currency: "USD",
                            },
                        },
                    ],
                },
            ],
        };

        const expectedOutput: HotelRoomDetails[] = [
            {
                mainPhotoUrl: "https://example.com/photo1.jpg",
                hotelName: "Hotel One",
                address: "123 Main St",
                roomType: "Deluxe Room",
                price: "150 USD",
                rating: 4.5,
            },
            {
                mainPhotoUrl: "https://example.com/photo2.jpg",
                hotelName: "Hotel Two",
                address: "456 Elm St",
                roomType: "Standard Room",
                price: "100 USD",
                rating: 4.0,
            },
        ];

        const result = parseHotelSearchData(mockResponseData);
        expect(result).toEqual(expectedOutput);
    });

    it("should return an empty array if no hotels are provided", () => {
        const mockResponseData: HotelSearchResponseDto = {
            hotels: [],
            data: [],
        };

        const result = parseHotelSearchData(mockResponseData);
        expect(result).toEqual([]);
    });

    it("should handle missing room type or rate data gracefully", () => {
        const mockResponseData: HotelSearchResponseDto = {
            hotels: [
                {
                    id: "1",
                    main_photo: "https://example.com/photo1.jpg",
                    name: "Hotel One",
                    address: "123 Main St",
                    rating: 4.5,
                },
            ],
            data: [
                {
                    hotelId: "1",
                    roomTypes: [],
                },
            ],
        };

        expect(() => parseHotelSearchData(mockResponseData)).toThrowError();
    });
});