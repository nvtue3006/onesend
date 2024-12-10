import React, { useRef } from "react";
import { useClickAway } from "react-use";

interface ISafeDataProps {
  isShowHelpSafeData: boolean;
  isOnSafeData: boolean;
  setIsShowHelpSafeData: (value: boolean) => void;
  setIsOnSafeData: (value: boolean) => void;
}

const SafeData: React.FC<ISafeDataProps> = ({
  isShowHelpSafeData,
  isOnSafeData,
  setIsShowHelpSafeData,
  setIsOnSafeData,
}) => {
  const tooltipRef = useRef(null);

  useClickAway(tooltipRef, () => {
    setIsShowHelpSafeData(false);
  });

  const handleToggle = () => {
    setIsOnSafeData(!isOnSafeData);
  };

  return (
    <div className="flex w-full items-center gap-[10px] relative">
      <div className="flex relative w-[298px] gap-[6px] items-center">
        <div className="text-[#262824] text-sm font-semibold">
          Safe your data
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="cursor-pointer"
          onClick={() => {
            setIsShowHelpSafeData(!isShowHelpSafeData);
          }}
        >
          <mask
            id="mask0_1403_7750"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1403_7750)">
            <path
              d="M9.95829 15C10.25 15 10.4965 14.8993 10.6979 14.6979C10.8993 14.4965 11 14.25 11 13.9583C11 13.6667 10.8993 13.4201 10.6979 13.2187C10.4965 13.0174 10.25 12.9167 9.95829 12.9167C9.66663 12.9167 9.4201 13.0174 9.21871 13.2187C9.01732 13.4201 8.91663 13.6667 8.91663 13.9583C8.91663 14.25 9.01732 14.4965 9.21871 14.6979C9.4201 14.8993 9.66663 15 9.95829 15ZM9.20829 11.7917H10.75C10.75 11.3333 10.802 10.9722 10.9062 10.7083C11.0104 10.4444 11.3055 10.0833 11.7916 9.62499C12.1527 9.26388 12.4375 8.92013 12.6458 8.59374C12.8541 8.26735 12.9583 7.87499 12.9583 7.41666C12.9583 6.63888 12.6736 6.04166 12.1041 5.62499C11.5347 5.20832 10.8611 4.99999 10.0833 4.99999C9.29163 4.99999 8.64926 5.20832 8.15621 5.62499C7.66315 6.04166 7.3194 6.54166 7.12496 7.12499L8.49996 7.66666C8.5694 7.41666 8.72565 7.14582 8.96871 6.85416C9.21176 6.56249 9.58329 6.41666 10.0833 6.41666C10.5277 6.41666 10.8611 6.53818 11.0833 6.78124C11.3055 7.0243 11.4166 7.29166 11.4166 7.58332C11.4166 7.8611 11.3333 8.12152 11.1666 8.36457C11 8.60763 10.7916 8.83332 10.5416 9.04166C9.93052 9.58332 9.55551 9.99304 9.41663 10.2708C9.27774 10.5486 9.20829 11.0555 9.20829 11.7917ZM9.99996 18.3333C8.84718 18.3333 7.76385 18.1146 6.74996 17.6771C5.73607 17.2396 4.85413 16.6458 4.10413 15.8958C3.35413 15.1458 2.76038 14.2639 2.32288 13.25C1.88538 12.2361 1.66663 11.1528 1.66663 9.99999C1.66663 8.84721 1.88538 7.76388 2.32288 6.74999C2.76038 5.7361 3.35413 4.85416 4.10413 4.10416C4.85413 3.35416 5.73607 2.76041 6.74996 2.32291C7.76385 1.88541 8.84718 1.66666 9.99996 1.66666C11.1527 1.66666 12.2361 1.88541 13.25 2.32291C14.2638 2.76041 15.1458 3.35416 15.8958 4.10416C16.6458 4.85416 17.2395 5.7361 17.677 6.74999C18.1145 7.76388 18.3333 8.84721 18.3333 9.99999C18.3333 11.1528 18.1145 12.2361 17.677 13.25C17.2395 14.2639 16.6458 15.1458 15.8958 15.8958C15.1458 16.6458 14.2638 17.2396 13.25 17.6771C12.2361 18.1146 11.1527 18.3333 9.99996 18.3333Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        {isShowHelpSafeData && (
          <div
            ref={tooltipRef}
            className="absolute left-32 w-[212px] p-2 text-[12px] font-medium leading-5 text-white bg-gray-700 rounded-lg shadow-lg z-50"
          >
            Protect your data more securely with an additional 4-digit security
            code
          </div>
        )}
      </div>
      <div
        className={`flex w-[52px] h-7 p-1 items-center rounded-2xl cursor-pointer transition-colors ${
          isOnSafeData ? "bg-[#40AEDD]" : "bg-[#DBDCDA]"
        }`}
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`transform transition-transform ${
            isOnSafeData ? "translate-x-[24px]" : "translate-x-0"
          }`}
        >
          <circle
            cx="10"
            cy="10"
            r="10"
            transform="matrix(-1 0 0 1 20 0)"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default SafeData;
