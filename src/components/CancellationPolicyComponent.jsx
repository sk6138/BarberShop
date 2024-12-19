// src/components/CancellationPolicyComponent.jsx
import React from 'react';
import '../css/CancellationPolicyComponent.css'; // Optional: If you want custom styling

const CancellationPolicyComponent = () => {
  return (
    <div className='policy'>
    <div className="cancellation-policy-container">
      <h2>Cancellation Policy</h2>
      <p>
        We understand that plans can change, and sometimes you may need to cancel or reschedule your appointment. To ensure fairness to both our staff and other customers, we have the following cancellation policy in place:
      </p>

      <h3>1. Cancellation Timeframe</h3>
      <ul>
        <li><strong>More than 24 hours in advance:</strong> Full refund if online payment was made.</li>
        <li><strong>Less than 24 hours but more than 1 hour before:</strong> 50% refund of the total appointment fee.</li>
        <li><strong>Within 1 hour of the appointment or no-show:</strong> No refund will be issued, and a cancellation fee may apply.</li>
      </ul>

      <h3>2. How to Cancel</h3>
      <p>
        You can cancel or reschedule your appointment by calling our salon at [Insert Phone Number], visiting our website, or using the online booking system.
      </p>

      <h3>3. Late Arrivals</h3>
      <p>
        If you arrive more than 15 minutes late, your appointment may be rescheduled, and a late fee may apply.
      </p>

      <h3>4. Refunds</h3>
      <ul>
        <li><strong>Refund Processing:</strong> Refunds will be processed within 7-10 business days for online payments, and according to the payment method for in-store payments.</li>
        <li><strong>Non-Refundable Services:</strong> Certain services may be non-refundable, such as pre-paid packages or special promotions.</li>
      </ul>

      <h3>5. Special Circumstances</h3>
      <p>
        If you need to cancel due to an emergency or extenuating circumstance, please contact us. We may offer rescheduling options without penalties.
      </p>

      <h3>6. Rescheduling</h3>
      <p>
        Reschedule your appointment at least 24 hours before the scheduled time. Cancellations or reschedules made within 24 hours may incur cancellation fees.
      </p>

      <h3>7. No-Show Policy</h3>
      <p>
        If you miss your appointment without any prior notice, we may charge the full appointment fee and you may lose your future appointment privileges.
      </p>
    </div>
    </div>
  );
};

export default CancellationPolicyComponent;
