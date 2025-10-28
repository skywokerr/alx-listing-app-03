const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input type="text" placeholder="MM/YY" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" placeholder="123" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-3 px-4 rounded-md w-full hover:bg-green-600 transition duration-200 font-semibold text-lg">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;