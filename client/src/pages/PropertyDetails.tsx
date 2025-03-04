const PropertyDetails = () => {
  return (
    <>
      <div className="my-10 md:my-16 px-6 md:px-9">
        <div className="flex md:flex-row flex-col md:items-center py-2 w-full">
          <h3 className="md:w-1/4 font-semibold text-xl">
            Seaside Serenity Villa
          </h3>
          <div className="flex justify-between items-center my-2 md:w-3/4">
            <span className="px-2 py-1 border border-[#2a2a2a] rounded-md w-f font-medium text-sm">
              {' '}
              Malibu,California
            </span>
            <div className="flex md:flex-col items-center md:items-start gap-1">
              <p className="text-[#999999] text-sm">Price</p>
              <p className="font-semibold text-lg">$1,250,000</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default PropertyDetails;
