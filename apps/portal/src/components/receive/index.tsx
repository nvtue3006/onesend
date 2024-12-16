import React, { useEffect, useState } from "react";
import {useDictionary} from "@/context/use-dictionary-context";
// import { getRequest } from "@/app/actions/get-request";
// import { getPreUrlForDownload } from "@/app/actions/get-pre-url-download";
// import { deleteS3Handler } from "@/app/actions/detele-code-s3";
// import { decryptText } from "@/app/actions/encrypt-text";

interface IReceiveProps {
	setOption: (option: "TEXT" | "FILE") => void;
	setTextValue: (value: string) => void;
	setTextState: (value: number) => void;
}

const Receive: React.FC<IReceiveProps> = ({setOption, setTextValue, setTextState,}) => {
	const { dictionary } = useDictionary();
	const [code, setCode] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);

	useEffect(() => {
		if (!showAlert) {
			return;
		}
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	}, [showAlert]);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (/^[0-9-]*$/.test(value) && value.length <= 6) {
			setCode(value);
		}
	};

	const handleRequest = async () => {
		setLoading(true);
		setShowAlert(false);

		// try {
		// 	const request = await getRequest(code);
		//
		// 	if (request.error === "NOT_FOUND") {
		// 		setShowAlert(true);
		// 		setLoading(false);
		// 		return;
		// 	}
		//
		// 	if (request.error === "INVALID_SECRET") {
		// 		setShowAlert(true);
		// 		setLoading(false);
		// 		return;
		// 	}
		//
		// 	if (request.type === "TEXT") {
		// 		const decryptedContent = await decryptText(request.content);
		// 		setTextValue(decryptedContent);
		// 		setTextState(1);
		// 		setOption("TEXT");
		// 	} else if (request.type === "FILE") {
		// 		const result = await getPreUrlForDownload(code);
		// 		console.log("Pre-signed download URL:", result);
		//
		// 		try {
		// 			const downloadUrl = result;
		// 			const link = document.createElement("a");
		// 			link.href = downloadUrl;
		// 			link.download = `${code}.zip`;
		// 			document.body.appendChild(link);
		// 			link.click();
		// 			document.body.removeChild(link);
		// 			console.log("File downloaded successfully!");
		//
		// 			// Xóa file ZIP trên S3 sau khi tải xong
		// 			await deleteS3Handler(code);
		//
		// 			setShowSuccessPopup(true);
		// 			setTimeout(() => setShowSuccessPopup(false), 3000);
		//
		// 			setOption("FILE");
		// 		} catch (error) {
		// 			console.error("Failed to download ZIP file:", error);
		// 		}
		// 	}
		// } catch (error) {
		// 	console.error("Unexpected error occurred:", error);
		// } finally {
		// 	setLoading(false);
		// }
	};

	const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && code) {
			await handleRequest();
		}
	};

	return (
		<div className="flex flex-col md:w-[360px] w-[343px] border-0.5 p-4 gap-4 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
			<label className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
				{dictionary.receive}
			</label>
			<div className="flex flex-col">
				<div className="flex items-center gap-3 py-[6px] pr-[6px] pl-[10px] bg-white border rounded-[6px] border-[#B7BAB5] ">
					<input
						className="text-[#7E857A] font-normal text-[16px] leading-6 flex-grow outline-none"
						type="text"
						placeholder={dictionary.inputKeyPlaceholder}
						maxLength={11}
						value={code}
						onChange={handleChangeInput}
						onKeyDown={handleKeyDown}
					/>
					<div
						className={`flex items-center text-center p-1 ${code ? "bg-[#9EE86F]" : "bg-gray-300"} rounded-[4px] transition duration-300 ${code ? "hover:border-2 hover:border-green-600" : ""}`}
					>
						<button
							disabled={!code || loading}
							onClick={handleRequest}
							className={`${
								!code || loading ? "cursor-not-allowed" : "cursor-pointer"
							} ${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-200`}
						>
							{loading ? (
								<svg
									aria-hidden="true"
									role="status"
									className="inline w-6 h-5 text-gray-700 animate-spin"
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
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12H19"
										stroke="#1B1D1B"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12 5L19 12L12 19"
										stroke="#1B1D1B"
										strokeWidth="2"
										strokeLinejoin="round"
										strokeLinecap="round"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{loading && (
					<div className="text-center text-black text-[14px] font-semibold leading-6">
						{dictionary.downLoad}
					</div>
				)}

				{showSuccessPopup && (
					<div className="fixed inset-x-0 top-2 flex items-center justify-center z-50">
						<div className="bg-green-500 rounded-lg shadow-lg p-5 max-w-sm text-center">
							<p className="text-lg font-semibold text-white leading-6">
								{dictionary.popUpSuccess}
							</p>
						</div>
					</div>
				)}

				{showAlert && (
					<div className="fixed inset-x-0 top-2 flex items-center justify-center z-50">
						<div className="flex gap-3 items-center rounded-lg shadow-lg p-5 max-w-sm text-center bg-black">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-red-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
								/>
							</svg>
							<p className="text-lg font-semibold text-white leading-6">
								{dictionary.invalidKey}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Receive;
