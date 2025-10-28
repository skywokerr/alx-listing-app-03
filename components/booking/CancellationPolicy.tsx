const CancellationPolicy = () => (
  <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold text-gray-800">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6 text-gray-800">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
      <li>Follow the house rules</li>
      <li>Treat your Host's home like your own</li>
      <li>No smoking inside the property</li>
      <li>No parties or events without prior approval</li>
      <li>Respect quiet hours from 10 PM to 7 AM</li>
      <li>Report any damages or issues immediately</li>
    </ul>
  </div>
);

export default CancellationPolicy;