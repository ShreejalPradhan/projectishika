import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl text-gray-700">Suscribe now & Get 20% off</p>
      <p className="mt-3 text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
        reprehenderit eos tenetur nulla culpa repudiandae?
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        action=""
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="something@gamil.com"
          required
        />
        <button
          className={`bg-black text-white text-sm px-10 py-4`}
          type="submit"
        >
          SUSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
