export default function ImageTrain() {
  return (
    <div className="w-full overflow-hidden bg-background">
      {/* First train - scrolling left */}
      <div className="flex">
        <div className="flex animate-scroll-left">
          {[...Array(50)].map((_, index) => (
            <img
              key={index}
              src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_ach2siach2siach2-split%20.png"
              alt="Security service"
              className="h-32 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Second train - scrolling right */}
      <div className="flex">
        <div className="flex animate-scroll-right">
          {[...Array(50)].map((_, index) => (
            <img
              key={index}
              src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_ach2siach2siach2-split.png"
              alt="Security service"
              className="h-32 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
