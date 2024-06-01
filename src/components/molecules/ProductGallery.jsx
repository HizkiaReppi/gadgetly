import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handlePrevImage = () => {
    if (selectedImage === images[0]) {
      setSelectedImage(images[images.length - 1]);
    } else {
      setSelectedImage(images[images.indexOf(selectedImage) - 1]);
    }
  };

  const handleNextImage = () => {
    if (selectedImage === images[images.length - 1]) {
      setSelectedImage(images[0]);
    } else {
      setSelectedImage(images[images.indexOf(selectedImage) + 1]);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex">
        <img
          src={selectedImage}
          alt="Selected"
          className="h-[524px] w-[524px] rounded-[20px] border object-cover"
        />
        <div className="ml-4 flex flex-col items-center justify-center gap-3">
          <button className="p-1" onClick={handlePrevImage}>
            <svg
              className="h-6 w-6 hover:text-[#0060FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div id="thumbnails" className="flex flex-col gap-y-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`h-[90px] w-[90px] cursor-pointer rounded-md border-2 object-cover ${selectedImage === image ? "border-[#0060FF]" : "border-gray-300"}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <button className="p-1" onClick={handleNextImage}>
            <svg
              className="h-6 w-6 hover:text-[#0060FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
