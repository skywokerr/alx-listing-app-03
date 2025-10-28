import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form and Policies */}
          <div className="lg:col-span-2 space-y-6">
            <BookingForm />
            <CancellationPolicy />
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}