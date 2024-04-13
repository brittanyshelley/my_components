import React from 'react';
import { Widget } from '@typeform/embed-react';

export default function MortgageApplication() {
  // Log to check if the component renders
  console.log('Rendering Typeform Widget with ID: 01HVCJB2D0PKYN1ZWD8V22BGPX');

  return (
    <section>
      <Widget id="01HVCRXWCHF470XP2579MRP1EP" style={{ width: '100%', height: '500px' }} className="my-form" />
    </section>
  );
}
