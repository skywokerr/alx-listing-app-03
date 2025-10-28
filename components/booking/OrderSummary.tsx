interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Review Order Details</h2>
    <div className="flex items-start mt-4">
      <img 
        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400" 
        alt="Property" 
        className="w-32 h-32 object-cover rounded-md" 
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500 mt-1">⭐ 4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500 mt-1">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 pt-4 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-3">Price Breakdown</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-600">${bookingDetails.price} × {bookingDetails.totalNights} nights</p>
          <p className="font-medium">${bookingDetails.price * bookingDetails.totalNights}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Booking Fee</p>
          <p className="font-medium">${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t border-gray-200">
          <p className="text-lg font-semibold">Grand Total</p>
          <p className="text-lg font-bold text-green-600">
            ${bookingDetails.bookingFee + (bookingDetails.price * bookingDetails.totalNights)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummary;