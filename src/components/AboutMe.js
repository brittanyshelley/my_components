// components/AboutMe.js
export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card lg:card-side bg-base-100 shadow-xl text-center"> {/* Apply text-center here for global effect */}
        <div className="card-body">
          <h1 className="card-title items-center justify-center text-center">Brooke Shelley, Mortgage Broker</h1>
          <p>Fully licensed mortgage broker servicing British Columbia & Alberta.
            As a mortgage broker, I work directly for YOU, not the bank. It is my job to negotiate on behalf of my clients in order to obtain the best solution for your specific situation.
            When the banks say NO, I say yes. I have exclusive access to several lenders in the mortgage space, including alternative lending, and will find the best solution for you.
            I am specialized in all transactions, including purchases, refinancing for debt consolidation and to lower monthly payments as well as renewals/transfers.

            Click below to schedule a quick 15 minute appointment with me directly!
          </p>
          <div className="card-actions justify-center"> {/* Change to justify-center for the button */}
            <button className="btn btn-primary">Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

