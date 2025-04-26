const FindUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Find us</h2>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-medium text-gray-500 uppercase mb-2">EMAIL</p>
            <a
              href="mailto:pm@mediasolution.ai"
              className="text-accent hover:underline"
            >
              pm@mediasolution.ai
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-medium text-gray-500 uppercase mb-2">
                US Office Address
              </p>
              <p className="text-gray-700">
                211 E 43rd St, 7th Flr #568, New York, NY 10017
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-500 uppercase mb-2">
                UK Office Address
              </p>
              <p className="text-gray-700">
                Suite 126, Westlink House, 981 Great West Road, London, United
                Kingdom
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-500 uppercase mb-2">
                UAE Office Address
              </p>
              <p className="text-gray-700">
                No. 29-103, Salem Ahmed Abdo Bin Dasmal Al Suwaidi - Al Quoz
                Industrial 1, UAE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
