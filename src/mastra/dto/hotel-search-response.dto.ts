export interface HotelSearchResponseDto {
    data: HotelRoomDto[],
    hotels: HotelDto[]
}

export interface HotelRoomDto {
    hotelId: string,
    roomTypes: RoomTypeDto[]
}

export interface HotelDto {
    id: string,
    name: string,
    main_photo: string,
    address: string,
    rating: number
}

interface RoomTypeDto {
    roomTypeId: string,
    offerId: string,
    rates: RateDto[]
    suggestedSellingPrice: PriceDto
}

interface RateDto {
    rateId: string,
    name: string,
}

interface PriceDto {
    amount: number,
    currency: string
}