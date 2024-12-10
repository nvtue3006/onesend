import React from 'react';
import { useDictionary } from '@/context/use-dictionary-context';

const ChangeLocaleOption = () => {
	const { setSelectedLanguage, language } = useDictionary();

	return (
		<div className="flex w-full md:justify-end">
			<select
				defaultValue={language}
				onChange={(e) => setSelectedLanguage(e.target.value)}
				className="flex py-1 px-1 items-center rounded-md bg-[#F0F0EF] border-[1.5px]"
				name="lang"
				id="lang"
			>
				<option value="en">English</option>
				<option value="vi">Vietnamese</option>
			</select>
		</div>
	);
};

export default ChangeLocaleOption;
