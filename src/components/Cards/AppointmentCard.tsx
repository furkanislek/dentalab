import React from "react";

interface AppointmentCardProps {
  name: string;
  title: string;
  address: string;
  rating: number;
  date: string;
  time: string;
  profilePhoto: string;
  rotate: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  name,
  title,
  address,
  rating,
  date,
  time,
  profilePhoto,
  rotate,
}) => {
  return (
    <div
      className={`bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl  rounded-xl max-h-fit shadow-md p-4 max-w-md min-w-[320px] flex flex-col gap-2 relative ${rotate}`}
    >
      <div className="flex items-start gap-3">
        <img
          src={profilePhoto}
          alt={name}
          className="w-10 h-10 rounded-full object-cover bg-gray-200"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 text-base">
              {name}
            </span>
            <span className="text-yellow-500 text-sm flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-4 h-4 inline"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
              {rating}
            </span>
            <span className="absolute right-4 top-4 text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5"
              >
                <circle cx="10" cy="4" r="1.5" />
                <circle cx="10" cy="10" r="1.5" />
                <circle cx="10" cy="16" r="1.5" />
              </svg>
            </span>
          </div>
          <div className="text-gray-500 text-sm -mt-0.5">{title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-black/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-4 h-4 inline mr-1"
          >
            <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
        </span>
        <span className="text-gray-700 text-sm font-medium">{address}</span>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="bg-indigo-100 text-indigo-600 rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10m-9 4h.01M12 19h.01M16 15h.01"
            />
          </svg>
          {date}
        </span>
        <span className="bg-indigo-100 text-indigo-600 rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3"
            />
          </svg>
          {time}
        </span>
      </div>
    </div>
  );
};

export default AppointmentCard;
