import React, { FormEvent, useState } from "react";
// import { createRequest } from "@/app/actions/create-request";
import { FaCheck } from "react-icons/fa";
import {useDictionary} from "@/context/use-dictionary-context";

interface ISendTextProps {
	textValue: string;
	textState: number;
	setTextValue: (value: string) => void;
	setTextState: (value: number) => void;
	isCopied?: boolean;
	isShowPopup?: boolean;
	setIsCopied: (value: boolean) => void;
	setIsShowPopup: (value: boolean) => void;
	setIsOpenModal: (value: boolean) => void;
}

const SendText: React.FC<ISendTextProps> = ({
												textValue,
												textState,
												setTextState,
												setTextValue,
												isCopied,
												isShowPopup,
												setIsCopied,
												setIsShowPopup,
												setIsOpenModal,
											}) => {

	const { dictionary } = useDictionary();
	const [verificationCode, setVerificationCode] = useState("");
	const [loading, setLoading] = useState(false);

	const maxLength = 10000;

	const changeModeHandler = () => {
		setTextState(2);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);

		changeModeHandler();
	};

	const handleUpload = (e: FormEvent) => {
		e.preventDefault();
	};

	const handleCopyText = () => {
		navigator.clipboard
			.writeText(verificationCode)
			.then(() => {
				setIsCopied(true);
				setIsShowPopup(true);

				setTimeout(() => {
					setIsShowPopup(false);
				}, 3000);

				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	const onSendHandler = async () => {
		setLoading(true);
		setIsOpenModal(true);

		const code = generateRandomCode();

		setVerificationCode(code);
		setTextState(3);

		try {
			// await createRequest(textValue, code);
			console.log("Request created successfully!");
		} catch (error) {
			console.error("Error creating request:", error);
		} finally {
			setLoading(false);
		}
	};

	//6 number
	const generateRandomCode = () => {
		return Math.floor(100000 + Math.random() * 900000).toString();
	};

	const isDisabled = () => {
		return textValue === "";
	};

	if (textState === 1) {
		return (
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col md:w-[360px] w-[343px] border-0.5 p-6 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
					<label className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
						{dictionary.inputText}
					</label>
					<div className="flex flex-col gap-3">
            <textarea
				id="text"
				name="textArea"
				maxLength={maxLength}
				value={textValue}
				placeholder={dictionary.inputTextPlaceholder}
				className="w-full h-[210px] resize-none flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4"
				required={true}
				onChange={(e) => setTextValue(e.target.value)}
			/>
						<p className="flex items-center h-[24px] text-[#565B52]">
							{textValue.length}/{maxLength}
						</p>
					</div>

					<button
						type="submit"
						className="text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed"
						disabled={isDisabled()}
					>
						{dictionary.submit}
					</button>
				</div>
			</form>
		);
	}
	if (textState === 2) {
		return (
			<form onSubmit={handleUpload}>
				{loading && (
					<div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
						<div className="text-white text-lg">{dictionary.loadingText}</div>
					</div>
				)}
				<div className="relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-[16px] py-[24px] gap-6 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
					<div className="flex flex-col gap-2 ">
						<div
							className="flex gap-[10px] cursor-pointer"
							onClick={() => setTextState(1)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M19 12H5"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 19L5 12L12 5"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
								{dictionary.back}
							</div>
						</div>

						<div>
							<p className="flex  font-normal text-[16px] text-[#565B52] leading-6">
								{dictionary.backNote}
							</p>
						</div>
					</div>

					<div className=" h-[210px] flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4 overflow-auto">
						<div>{textValue}</div>
					</div>

					<div className="flex justify-end text-[#1B1D1B] font-semibold text-sm underline">
						<button
							onClick={() => {
								setTextValue("");
								setTextState(1);
							}}
						>
              <span className="cursor-pointer hover:text-red-600">
                {dictionary.clearAll}
              </span>
						</button>
					</div>

					<div
						className="text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600"
						onClick={!loading ? onSendHandler : () => {}}
					>
						<button
							disabled={loading}
							className="text-[#1B1D1B] font-semibold text-[16px] leading-6 "
						>
							{loading ? (
								<>
									<svg
										aria-hidden="true"
										role="status"
										className="inline mr-3 w-4 h-4 text-gray-700 animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										></path>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										></path>
									</svg>
									{dictionary.loading}
								</>
							) : (
								"Send"
							)}
						</button>
					</div>
				</div>
			</form>
		);
	}

	if (textState === 3) {
		return (
			<form onSubmit={handleUpload}>
				<div className="relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-6 pt-6 pb-10 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5] ">
					<div className="flex flex-col gap-2 ">
						<div className="flex items-start gap-[10px] ">
							<div
								className="cursor-pointer"
								onClick={() => {
									setTextValue("");
									setTextState(1);
								}}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="transition duration-300 hover:scale-125 "
								>
									<path
										d="M19 12H5"
										stroke="black"
										strokeWidth="2"
										strokeLinejoin="round"
										strokeLinecap="round"
									/>
									<path
										d="M12 19L5 12L12 5"
										stroke="black"
										strokeWidth="2"
										strokeLinejoin="round"
										strokeLinecap="round"
									/>
								</svg>
							</div>

							<h1 className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
								{dictionary.waiting}
							</h1>
						</div>
						<p className="text-[#565B52] font-normal text-[16px] leading-6">
							{dictionary.waitingNote}
						</p>
					</div>
					<div className="flex justify-center items-center gap-1 self-stretch">
						{verificationCode.split("").map((digit, index) => (
							<div
								key={index}
								className=" flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7"
							>
								{digit}
							</div>
						))}
					</div>
					<div
						className="text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600"
						onClick={handleCopyText}
					>
						<button className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
							{isCopied ? <FaCheck /> : "Copy"}
						</button>
					</div>

					{isShowPopup && (
						<div className="absolute p-2 top-[86%] left-1/2 transform -translate-x-1/2 bg-[#FFE5B4] rounded-md shadow-lg text-[#A65A00] text-center font-semibold">
							{dictionary.popUpTime}
						</div>
					)}
				</div>
			</form>
		);
	}
};

export default SendText;
