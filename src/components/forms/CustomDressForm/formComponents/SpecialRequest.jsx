const SpecialRequest = ({ register }) => {
  return (
    <div className="space-y-4">
      <h5 className="font-medium">Any Special Request/Info</h5>
      <div className="space-y-2 relative">
        <textarea
          id="Request"
          name="Request"
          autoComplete="off"
          placeholder="Request"
          defaultValue={""}
          rows="2"
          className="peer floating-input"
          {...register("Request")}
        ></textarea>
        <label htmlFor="Request" className="floating-label">
          Request
        </label>
      </div>
    </div>
  );
};

export default SpecialRequest;