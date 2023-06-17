
const Faq = () => {
  return (
    <div className="mx-4 py-8 ">
      <h2 className="text-4xl font-bold mb-4 font-headingFont">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-md">
        <div className="p-4 rounded  font-fontRegular bg-cardColor">
          <h3 className="text-xl font-bold mb- ">Are the tour packages customizable?</h3>
          <p>Yes, our tours are designed to be fully customizable to cater to individual preferences..</p>
        </div>
        <div className="bg-cardColor p-4 rounded font-fontRegular ">
          <h3 className="text-xl font-bold mb-2">Do you offer group discounts?</h3>
          <p>Absolutely! We offer fantastic discounts for group bookings.</p>
        </div>
        <div className="bg-cardColor p-4 rounded font-fontRegular mr-4">
          <h3 className="text-xl font-bold mb-2">Are flights included in packages?</h3>
          <p>Yes, all our tour packages include international and domestic flights.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
