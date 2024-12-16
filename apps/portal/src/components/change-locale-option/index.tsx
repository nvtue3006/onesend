import React, { useState } from "react";
import { useDictionary } from "@/context/use-dictionary-context";

const ChangeLocaleOption = () => {
    const { setSelectedLanguage, language } = useDictionary();
    const [isShowLang, setIsShowLang] = useState(false);

    const languages = [
        { code: "en", label: "English" },
        { code: "vi", label: "Vietnamese" },
    ];

    const openLang = () => setIsShowLang((prev) => !prev);

    const handleChooseLang = (lang:string) => {
        setSelectedLanguage(lang);
        setIsShowLang(false);
    };

    return (
        <div className="w-[360px] flex flex-col md:items-end items-start relative">
            <div
                className="flex items-center px-[10px] py-1 gap-1 bg-[#F0F0EF] rounded-[6px] border-[1.5px] border-[#DBDCDA] cursor-pointer"
                onClick={openLang}
                aria-expanded={isShowLang}
                aria-haspopup="true"
            >
                <div>{language.toUpperCase()}</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z"
                        fill="#262824"
                    />
                </svg>
            </div>

            {isShowLang && (
                <div
                    className="absolute md:top-8 top-9 md:right-0 flex flex-col items-start px-2 py-[10px] rounded-[6px] border-[3px] border-[#EFF0F0] bg-white shadow-[0px_4px_30px_0px_rgba(14,15,16,0.09)] mt-2"
                    role="menu"
                >
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className="flex items-center py-3 px-4 hover:bg-[#F7F8F8] hover:cursor-pointer"
                            onClick={() => handleChooseLang(lang.code)}
                            role="menuitem"
                        >
                            <div className="flex gap-3">
                                <div className="w-[90px] text-[#767C7F] text-[15px] font-medium leading-[18px] hover:text-[#3D4142]">
                                    {lang.label}
                                </div>
                                {language === lang.code && (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.83342 13.8333L14.7084 7.95833L13.5417 6.79166L8.83342 11.5L6.45842 9.125L5.29175 10.2917L8.83342 13.8333ZM10.0001 18.3333C8.8473 18.3333 7.76397 18.1146 6.75008 17.6771C5.73619 17.2396 4.85425 16.6458 4.10425 15.8958C3.35425 15.1458 2.7605 14.2639 2.323 13.25C1.8855 12.2361 1.66675 11.1528 1.66675 10C1.66675 8.84722 1.8855 7.76389 2.323 6.75C2.7605 5.73611 3.35425 4.85416 4.10425 4.10416C4.85425 3.35416 5.73619 2.76041 6.75008 2.32291C7.76397 1.88541 8.8473 1.66666 10.0001 1.66666C11.1529 1.66666 12.2362 1.88541 13.2501 2.32291C14.264 2.76041 15.1459 3.35416 15.8959 4.10416C16.6459 4.85416 17.2397 5.73611 17.6772 6.75C18.1147 7.76389 18.3334 8.84722 18.3334 10C18.3334 11.1528 18.1147 12.2361 17.6772 13.25C17.2397 14.2639 16.6459 15.1458 15.8959 15.8958C15.1459 16.6458 14.264 17.2396 13.2501 17.6771C12.2362 18.1146 11.1529 18.3333 10.0001 18.3333ZM10.0001 16.6667C11.8612 16.6667 13.4376 16.0208 14.7292 14.7292C16.0209 13.4375 16.6667 11.8611 16.6667 10C16.6667 8.13889 16.0209 6.5625 14.7292 5.27083C13.4376 3.97916 11.8612 3.33333 10.0001 3.33333C8.13897 3.33333 6.56258 3.97916 5.27092 5.27083C3.97925 6.5625 3.33341 8.13889 3.33341 10C3.33341 11.8611 3.97925 13.4375 5.27092 14.7292C6.56258 16.0208 8.13897 16.6667 10.0001 16.6667Z"
                                            fill="#3D403A"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChangeLocaleOption;
