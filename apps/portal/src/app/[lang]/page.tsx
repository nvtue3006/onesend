'use client';

import SendFile from '@/components/send-file';
import Receive from '@/components/receive';
import React, { useState } from 'react';
import SendText from '@/components/send-text';
import SafeData from '@/components/safe-data';
import Donate from '@/components/donate';
import Image from 'next/image';
import gitHubImage from '../../../public/images/github.png';
import ChangeLocaleOption from '@/components/change-locale-option';
import { useDictionary } from '@/context/use-dictionary-context';

export default function Home() {
	const { dictionary } = useDictionary();

	const [option, setOption] = useState<'TEXT' | 'FILE'>('TEXT');
	const [textState, setTextState] = useState<number>(1);
	const [textValue, setTextValue] = useState('');
	const [fileState, setFileState] = useState<number>(1);
	const [isCopied, setIsCopied] = useState<boolean>(false);
	const [isShowPopup, setIsShowPopup] = useState<boolean>(false);

	const [isOnSafeData, setIsOnSafeData] = useState<boolean>(false);

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	const contentRender = () => {
		if (option === 'TEXT') {
			return (
				<SendText
					isCopied={isCopied}
					isShowPopup={isShowPopup}
					textValue={textValue}
					textState={textState}
					setTextState={setTextState}
					setTextValue={setTextValue}
					setIsCopied={setIsCopied}
					setIsShowPopup={setIsShowPopup}
					isOnSafeData={isOnSafeData}
					setIsOpenModal={setIsOpenModal}
				/>
			);
		}

		return (
			<SendFile
				isCopied={isCopied}
				isShowPopup={isShowPopup}
				fileState={fileState}
				setFileState={setFileState}
				setIsCopied={setIsCopied}
				setIsShowPopup={setIsShowPopup}
				isOnSafeData={isOnSafeData}
				setIsOpenModal={setIsOpenModal}
			/>
		);
	};

	return (
		<div className="w-full h-full relative flex flex-col items-center justify-center m-auto">
			<div className="absolute md:top-5 md:right-24 top-10 right-5">
				<a href="https://github.com/nvtue3006/onesend" target="_blank" rel="noopener noreferrer">
					<Image className="w-14 h-14 cursor-pointer" src={gitHubImage} alt="onsend github icon resource" />;
				</a>
			</div>

			<div className="w-full h-auto max-w-[360px] flex flex-col justify-center items-center gap-5 mt-16 ">
				<ChangeLocaleOption />

				<div className="flex justify-between items-center md:w-[302px] rounded-[30px] bg-[#F0F0EF] p-[6px] shadow-custom">
					<div className="w-[145px]">
						<input onChange={() => setOption('TEXT')} type="radio" name="option" id="1" value="1" className="peer hidden" defaultChecked={true} />
						<label
							htmlFor="1"
							className="block cursor-pointer select-none rounded-3xl p-[6px] text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black"
						>
							{dictionary.text}
						</label>
					</div>

					<div className="w-[145px]">
						<input onChange={() => setOption('FILE')} type="radio" name="option" id="2" value="2" className="peer hidden" />
						<label
							htmlFor="2"
							className="block cursor-pointer select-none rounded-3xl p-[6px] text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black"
						>
							{dictionary.file}
						</label>
					</div>
				</div>

				{contentRender()}

				<Receive setTextState={setTextState} setTextValue={setTextValue} setOption={(option: 'TEXT' | 'FILE') => setOption(option)} />
			</div>
			<Donate isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
		</div>
	);
}
