import Link from 'next/link';

export const FABComponent = () => {
  return (
    <div className="fixed bottom-4 left-4 md:bottom-5 md:left-5 lg:bottom-8 lg:left-10 cursor-pointer z-1002 flex md:flex-col justify-center gap-3">
      <Link
        href="tel:+84766079191"
        className="flex justify-start items-center animate-pulse hover-effect"
      >
        <span className="relative p-2 lg:p-3 bg-primary-100 rounded-full flex justify-center items-center shadow-lg">
          <span className="absolute animate-ping p-5 lg:p-6 bg-primary-200 rounded-full -z-1" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 md:w-10 md:h-10"
          >
            <path
              fill="#69433B"
              d="M39.1,7l-3.7,0C22.2,7.2,7.1,24.1,7,35.4l0,3.7c0,1,0.8,1.9,1.9,1.9l7.5-0.1c1,0,1.9-0.9,1.9-1.9l0.2-8.2 l-4.7-4c0-2.6,10.5-13.1,13.2-13.2l4.3,4.7l7.9-0.2c1,0,1.9-0.9,1.9-1.9L41,8.9C41,7.8,40.2,7,39.1,7z"
            />
          </svg>
        </span>
        <span className="hidden md:block rounded-full bg-primary-200 font-bold text-lg lg:text-xl pl-11 lg:pl-12 p-2 -ml-10 -z-1 -mb-2 shadow-lg">
          0766079191
        </span>
      </Link>

      <Link
        href="https://zalo.me/0766079191"
        target="_blank"
        className="flex justify-start items-center animate-pulse hover-effect"
      >

        <span className="relative">
          <span className="absolute animate-ping p-5 lg:p-6 bg-primary-200 rounded-full -z-1" />
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-14 md:h-14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.782.166h4.417c6.066 0 9.611.891 12.758 2.578 3.147 1.687 5.63 4.152 7.299 7.299 1.687 3.147 2.578 6.692 2.578 12.758v4.398c0 6.066-.891 9.611-2.578 12.758-1.688 3.147-4.152 5.63-7.299 7.299-3.147 1.687-6.692 2.578-12.758 2.578h-4.398c-6.066 0-9.611-.89-12.758-2.578-3.147-1.687-5.63-4.152-7.299-7.299C1.057 36.81.166 33.265.166 27.2v-4.398c0-6.066.891-9.611 2.578-12.758 1.687-3.147 4.152-5.63 7.299-7.299C13.17 1.057 16.735.166 22.782.166Z"
              fill="#0068FF"
            />
            <path
              opacity="0.12"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.834 26.474v.725c0 6.067-.891 9.612-2.579 12.759-1.687 3.147-4.151 5.63-7.298 7.298-3.147 1.687-6.692 2.578-12.758 2.578H22.8c-4.964 0-8.24-.596-10.99-1.737l-4.536-4.67 42.559-16.953Z"
              fill="#001A33"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.779 43.59c2.323.256 5.227-.406 7.29-1.408 8.954 4.95 22.95 4.713 31.423-.709a18.69 18.69 0 0 0 .92-1.537C49.107 36.778 50 33.22 50 27.132v-4.415c0-6.088-.894-9.646-2.587-12.804-1.674-3.159-4.167-5.632-7.325-7.325C36.929.894 33.37 0 27.283 0H22.85c-5.186 0-8.552.653-11.38 1.899-.155.138-.306.28-.455.422-8.298 8-8.928 25.338-1.892 34.757a.631.631 0 0 0 .026.042c1.084 1.599.038 4.395-1.598 6.032-.267.247-.172.4.228.437Z"
              fill="#fff"
            />
            <path
              d="M20.563 17h-9.725v2.085h6.749l-6.654 8.247c-.209.303-.36.587-.36 1.232v.53h9.175a.84.84 0 0 0 .834-.833v-1.119h-7.09l6.256-7.848c.095-.114.265-.322.341-.417l.038-.057c.36-.53.436-.986.436-1.536V17Zm12.379 12.095h1.383V17H32.24v11.393a.7.7 0 0 0 .702.702Zm-7.128-9.403a4.741 4.741 0 0 0-4.74 4.74 4.741 4.741 0 0 0 4.74 4.739 4.741 4.741 0 0 0 4.74-4.74c.018-2.615-2.105-4.739-4.74-4.739Zm0 7.526a2.791 2.791 0 0 1-2.787-2.786 2.791 2.791 0 0 1 2.787-2.787 2.791 2.791 0 0 1 2.787 2.787 2.78 2.78 0 0 1-2.787 2.786Zm14.673-7.602a4.781 4.781 0 0 0-4.778 4.777 4.781 4.781 0 0 0 4.778 4.778 4.782 4.782 0 0 0 4.777-4.778 4.782 4.782 0 0 0-4.777-4.777Zm0 7.602a2.8 2.8 0 0 1-2.806-2.806 2.8 2.8 0 0 1 2.806-2.805 2.8 2.8 0 0 1 2.805 2.805 2.8 2.8 0 0 1-2.805 2.806Z"
              fill="#0068FF"
            />
            <path
              d="M29.456 29.094h1.119v-9.137h-1.953v8.322c0 .436.38.815.834.815Z"
              fill="#0068FF"
            />
          </svg>
        </span>
        <span className="hidden md:block rounded-full bg-primary-200 font-bold text-lg lg:text-xl pl-11 lg:pl-12 p-2 -ml-10 -z-1 -mb-2 shadow-lg">
          Duyên Tangrealty
        </span>
      </Link>
    </div>
  );
};
