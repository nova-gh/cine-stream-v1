import Image from "next/image";
import Link from "next/link";
import { TbHome2, TbMovie, TbDeviceTvOld } from "react-icons/tb";
import { BsFillBookmarksFill } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { id: 1, name: "home", route: "/dashboard", icon: <TbHome2 /> },
    { id: 2, name: "movies", route: "/dashboard/movies", icon: <TbMovie /> },
    {
      id: 3,
      name: "tv shows",
      route: "/dashboard/tvs",
      icon: <TbDeviceTvOld />,
    },
    {
      id: 4,
      name: "bookmarks",
      route: "/dashboard/bookmarks",
      icon: <BsFillBookmarksFill />,
    },
  ];
  return (
    <div className="sticky z-40 p-4 -top-2 bg-bg lg:relative lg:inset-0 lg:top-0 lg:min-h-full">
      <header className="flex items-center justify-between h-full p-4 rounded-lg bg-bg-light lg:flex-col ">
        <Link href={"/"} className="">
          <div className="">
            <svg
              className="w-12 h-12 md:h-14 md:w-14"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="77" height="77" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.6523 0C69.7812 0 77 7.21875 77 18.3477V58.6523C77 69.7812 69.7812 77 58.6523 77H18.3477C7.21875 77 0 69.7812 0 58.6523V18.3477C0 7.21875 7.21875 0 18.3477 0H58.6523Z"
                fill="#D32D27"
              />
              <g filter="url(#filter0_d_0_1)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.5298 32.9928C33.5298 32.6821 33.7761 32.4302 34.0846 32.4302C34.3912 32.4302 34.6395 32.6792 34.6395 32.9928V43.5305C34.6395 43.8412 34.3932 44.093 34.0846 44.093C33.7781 44.093 33.5298 43.844 33.5298 43.5305V32.9928ZM14.6635 40.953C16.1345 40.953 17.3269 39.7481 17.3269 38.2616C17.3269 36.7752 16.1345 35.5702 14.6635 35.5702C13.1925 35.5702 12 36.7752 12 38.2616C12 39.7481 13.1925 40.953 14.6635 40.953ZM21.7661 40.953C23.2371 40.953 24.4295 39.7481 24.4295 38.2616C24.4295 36.7752 23.2371 35.5702 21.7661 35.5702C20.2951 35.5702 19.1026 36.7752 19.1026 38.2616C19.1026 39.7481 20.2951 40.953 21.7661 40.953ZM28.8687 40.953C30.3397 40.953 31.5321 39.7481 31.5321 38.2616C31.5321 36.7752 30.3397 35.5702 28.8687 35.5702C27.3977 35.5702 26.2052 36.7752 26.2052 38.2616C26.2052 39.7481 27.3977 40.953 28.8687 40.953Z"
                  fill="white"
                />
                <path
                  d="M56.8041 36.2035L63.1144 29.7272C63.2546 29.5835 63.4332 29.4856 63.6275 29.446C63.8219 29.4063 64.0234 29.4267 64.2065 29.5045C64.3896 29.5823 64.5461 29.7141 64.6563 29.8832C64.7665 30.0522 64.8254 30.251 64.8256 30.4544V46.0688C64.8254 46.2722 64.7665 46.471 64.6563 46.6401C64.5461 46.8091 64.3896 46.9409 64.2065 47.0187C64.0234 47.0965 63.8219 47.1169 63.6275 47.0773C63.4332 47.0376 63.2546 46.9398 63.1144 46.796L56.8041 40.3198M41.7639 47.5233H53.7961C54.5939 47.5233 55.359 47.198 55.9231 46.619C56.4872 46.0401 56.8041 45.2548 56.8041 44.436V32.0872C56.8041 31.2684 56.4872 30.4832 55.9231 29.9042C55.359 29.3253 54.5939 29 53.7961 29H41.7639C40.9661 29 40.201 29.3253 39.6369 29.9042C39.0727 30.4832 38.7558 31.2684 38.7558 32.0872V44.436C38.7558 45.2548 39.0727 46.0401 39.6369 46.619C40.201 47.198 40.9661 47.5233 41.7639 47.5233V47.5233Z"
                  fill="white"
                />
                <path
                  d="M56.8041 36.2035L63.1144 29.7272C63.2546 29.5835 63.4332 29.4856 63.6275 29.446C63.8219 29.4063 64.0234 29.4267 64.2065 29.5045C64.3896 29.5823 64.5461 29.7141 64.6563 29.8832C64.7665 30.0522 64.8254 30.251 64.8256 30.4544V46.0688C64.8254 46.2722 64.7665 46.471 64.6563 46.6401C64.5461 46.8091 64.3896 46.9409 64.2065 47.0187C64.0234 47.0965 63.8219 47.1169 63.6275 47.0773C63.4332 47.0376 63.2546 46.9398 63.1144 46.796L56.8041 40.3198M41.7639 47.5233H53.7961C54.5939 47.5233 55.359 47.198 55.9231 46.619C56.4872 46.0401 56.8041 45.2548 56.8041 44.436V32.0872C56.8041 31.2684 56.4872 30.4832 55.9231 29.9042C55.359 29.3253 54.5939 29 53.7961 29H41.7639C40.9661 29 40.201 29.3253 39.6369 29.9042C39.0727 30.4832 38.7558 31.2684 38.7558 32.0872V44.436C38.7558 45.2548 39.0727 46.0401 39.6369 46.619C40.201 47.198 40.9661 47.5233 41.7639 47.5233V47.5233Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="10"
                  y="26.25"
                  width="57.5756"
                  height="24.0233"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.683594 0 0 0 0 0.134182 0 0 0 0 0.114323 0 0 0 0.766616 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Link>
        <div className="flex mx-auto space-x-5 lg:flex-col lg:space-x-0 lg:space-y-5 ">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.route}
              className="p-1 link_hover rounded-xl hover:bg-brand-light"
            >
              <span className="text-xl bg-red-500 md:text-3xl ">
                {link.icon}
              </span>
              <span className="sr-only"> {link.name}</span>
            </Link>
          ))}
        </div>
        <Link href={"/dashboard/settings"} className="">
          <div className="bg-white border border-white rounded-full link_hover hover:border-brand-light hover:bg-brand-light">
            <Image
              src={`https://api.dicebear.com/5.x/bottts/svg?seed=Ginger&scale=70`}
              width={44}
              height={44}
              alt={`profile pic`}
              className="w-8 h-8 hover:border-brand-light md:h-11 md:w-11"
            />
          </div>
          <span className="sr-only"> {`settings page`}</span>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
