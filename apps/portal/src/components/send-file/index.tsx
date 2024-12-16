import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
// import getPreUrl from "@/app/actions/get-pre-url";
// import { createPreUrlDownload } from "@/app/actions/create-request";
import { FaCheck } from "react-icons/fa";
import JSZip from "jszip";
import classNames from "classnames";
import {useDictionary} from "@/context/use-dictionary-context";

const maxTotalSize = 2 * 1024 * 1024 * 1024; // 2 GB in bytes

interface ISendFileProps {
	fileState: number;
	setFileState: (value: number) => void;
	isCopied?: boolean;
	isShowPopup?: boolean;
	setIsCopied: (value: boolean) => void;
	setIsShowPopup: (value: boolean) => void;
	setIsOpenModal: (value: boolean) => void;
}

const SendFile: React.FC<ISendFileProps> = ({
												fileState,
												setFileState,
												isCopied,
												isShowPopup,
												setIsCopied,
												setIsShowPopup,
												setIsOpenModal,
											}) => {

	const { dictionary } = useDictionary();
	const inputRef = useRef<HTMLInputElement>(null);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [verificationCode, setVerificationCode] = useState("");
	const [progress, setProgress] = useState(80);

	const [loading, setLoading] = useState(false);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increase by 10% every second
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (loading) {
			return;
		}

		const totalSize = calculateTotalSize();

		if (totalSize > maxTotalSize) {
			alert(
				"The total file size exceeds the 2 GB limit. Please select fewer files or reduce the file sizes.",
			);
			return;
		}

		if (e.target.files && e.target.files.length > 0) {
			const files = Array.from(e.target.files);

			setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
			console.log(...files);
		}
	};

	const onChooseFile = () => {
		if (loading) {
			return;
		}
		if (inputRef.current === null) {
			return;
		}
		inputRef.current.click();
	};

	const handleReset = () => {
		if (loading) {
			return;
		}
		setSelectedFiles([]);
		setFileState(1);
	};

	const removeFile = (indexToRemove: number) => {
		if (loading) {
			return;
		}

		setLoading(true);

		// Check if we are removing the first file (index 0)
		setSelectedFiles((prevSelectedFiles) => {
			const updatedFiles = prevSelectedFiles.filter(
				(_file, index) => index !== indexToRemove,
			);

			if (indexToRemove === 0 && updatedFiles.length === 0) {
				setFileState(1);
			}
			return updatedFiles;
		});
		setLoading(false);
	};

	const formatFileSize = (sizeInBytes: number) => {
		const units = ["B", "KB", "MB", "GB", "TB"];
		let index = 0;

		while (sizeInBytes >= 1024 && index < units.length - 1) {
			sizeInBytes /= 1024;
			index++;
		}
		return `${sizeInBytes.toFixed(0)} ${units[index]}`;
	};

	const calculateTotalSize = () => {
		return selectedFiles.reduce((total, file) => total + file.size, 0);
	};

	const getTotalFiles = () => {
		return selectedFiles.length;
	};

	const onSendHandler = async () => {
		const code = generateRandomCode();

		try {
			setIsOpenModal(true);
			setLoading(true);


			// const uploadUrl = await getPreUrl(code);

			// const zipContent = await prepareZipContent();


			// const uploadResult = await fetch(uploadUrl, {
			// 	method: "PUT",
			// 	headers: {
			// 		"Content-Type": "application/zip",
			// 	},
			// 	body: zipContent,
			// });


			// if (!uploadResult.ok) {
			// 	const errorText = await uploadResult.text();
			// 	throw new Error(
			// 		`Failed to upload ZIP file: ${uploadResult.statusText} - ${errorText}`,
			// 	);
			// }

			// Success feedback
			console.log("ZIP file uploaded successfully!");

			// Set the verification code and state
			setVerificationCode(code);
			setFileState(3);

			// Create pre-signed URL for download
			// await createPreUrlDownload(code);
		} catch (error) {
			console.error("Error during file upload process:", error);
		} finally {
			setLoading(false);
		}
	};

	// Function to prepare zip content
	const prepareZipContent = async () => {
		let zipContent;

		if (
			selectedFiles.length === 1 &&
			selectedFiles[0].type === "application/zip"
		) {
			zipContent = selectedFiles[0];
			console.log("File is already a ZIP, uploading directly.");
		} else {
			const zip = new JSZip();
			selectedFiles.forEach((file) => {
				zip.file(file.name, file);
			});
			zipContent = await zip.generateAsync({ type: "uint8array" });
			console.log("Files have been compressed into a ZIP.");
		}

		return zipContent;
	};

	//6 so
	const generateRandomCode = () => {
		return Math.floor(100000 + Math.random() * 900000).toString();
	};

	const handleCopyFile = (e: FormEvent) => {
		e.preventDefault();
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
				console.error("Failed to copy file: ", err);
			});
	};

	const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (selectedFiles.length > 0) {
			setFileState(2);
		} else {
			alert("Please select at least one file before submitting.");
		}
	};

	if (fileState === 1) {
		return (
			<form onSubmit={handleUpload}>
				<div className="flex flex-col md:w-[360px] w-[343px] border-0.5 p-6 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
					<label className="text-[#1B1D1B] font-semibold text-[16px] leading-6">
						{dictionary.uploadFile}
					</label>
					<div
						onClick={onChooseFile}
						className="flex flex-col items-center px-6 py-14 gap-3 text-gray-400 border-dashed border-2 border-[#5BA72A] rounded-[10px] bg-[#F9FEF6] cursor-pointer"
					>
						<input
							multiple={true}
							type="file"
							ref={inputRef}
							className="hidden"
							onChange={handleOnChange}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
						>
							<mask
								id="mask0_1137_2453"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="40"
								height="40"
							>
								<rect width="40" height="40" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_1137_2453)">
								<path
									d="M10.8333 33.3333C8.30551 33.3333 6.14579 32.4583 4.35413 30.7083C2.56246 28.9583 1.66663 26.8194 1.66663 24.2916C1.66663 22.125 2.3194 20.1944 3.62496 18.5C4.93052 16.8055 6.63885 15.7222 8.74996 15.25C9.4444 12.6944 10.8333 10.625 12.9166 9.04163C15 7.45829 17.3611 6.66663 20 6.66663C23.25 6.66663 26.0069 7.79857 28.2708 10.0625C30.5347 12.3263 31.6666 15.0833 31.6666 18.3333C33.5833 18.5555 35.1736 19.3819 36.4375 20.8125C37.7014 22.243 38.3333 23.9166 38.3333 25.8333C38.3333 27.9166 37.6041 29.6875 36.1458 31.1458C34.6875 32.6041 32.9166 33.3333 30.8333 33.3333H21.6666C20.75 33.3333 19.9652 33.0069 19.3125 32.3541C18.6597 31.7013 18.3333 30.9166 18.3333 30V21.4166L15.6666 24L13.3333 21.6666L20 15L26.6666 21.6666L24.3333 24L21.6666 21.4166V30H30.8333C32 30 32.9861 29.5972 33.7916 28.7916C34.5972 27.9861 35 27 35 25.8333C35 24.6666 34.5972 23.6805 33.7916 22.875C32.9861 22.0694 32 21.6666 30.8333 21.6666H28.3333V18.3333C28.3333 16.0277 27.5208 14.0625 25.8958 12.4375C24.2708 10.8125 22.3055 9.99996 20 9.99996C17.6944 9.99996 15.7291 10.8125 14.1041 12.4375C12.4791 14.0625 11.6666 16.0277 11.6666 18.3333H10.8333C9.22218 18.3333 7.84718 18.9027 6.70829 20.0416C5.5694 21.1805 4.99996 22.5555 4.99996 24.1666C4.99996 25.7777 5.5694 27.1527 6.70829 28.2916C7.84718 29.4305 9.22218 30 10.8333 30H15V33.3333H10.8333Z"
									fill="#1C1B1F"
								/>
							</g>
						</svg>
						<div>
							<div className="text-[#262824] font-medium text-[16px] leading-6 text-center">
								{dictionary.uploadFileContent}
							</div>
							<div className="text-[#565B52] font-medium text-[12px] leading-5 text-center">
								{dictionary.uploadFileSupport}
							</div>
						</div>
					</div>

					<div className="h-full max-h-48 overflow-auto flex flex-col gap-[8px] ">
						{selectedFiles.map(
							(selectedFile, index) =>
								selectedFile && (
									<div
										key={index}
										className="flex items-center p-4 gap-[8px] bg-[#FAFAFA] rounded-md "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="size-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
											/>
										</svg>

										<div className="flex overflow-auto flex-1 items-center gap-2  ">
											<div>
												<div className="flex gap-2 text-[#1B1D1B] font-semibold text-[12px] leading-5 ">
													<div className="w-[160px] overflow-scroll overflow-ellipsis whitespace-nowrap">
														{selectedFile.name}
													</div>
													<div>- {formatFileSize(selectedFile.size)}</div>
												</div>

												<div className="w-[215px] h-[5px] rounded-md bg-[#DBDCDA]">
													<div
														className="bg-green-500 h-full rounded-md transition-all duration-300"
														style={{ width: `${progress}%` }}
													></div>
												</div>
											</div>
										</div>

										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="cursor-pointer"
											onClick={() => removeFile(index)}
										>
											<mask
												id="mask0_1145_471"
												maskUnits="userSpaceOnUse"
												x="0"
												y="0"
												width="24"
												height="24"
											>
												<rect width="24" height="24" fill="#D9D9D9" />
											</mask>
											<g mask="url(#mask0_1145_471)">
												<path
													d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
													fill="#757972"
												/>
											</g>
										</svg>
									</div>
								),
						)}
					</div>

					<button
						type="submit"
						className="text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed"
						disabled={selectedFiles.length === 0}
					>
						{dictionary.submit}
					</button>
				</div>
			</form>
		);
	}
	if (fileState === 2) {
		return (
			<form onSubmit={handleUpload}>
				<div className="relative flex flex-col md:w-[360px] w-[343px] border-0.5  px-[16px] py-[24px] gap-6 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
					<div className="flex gap-2 cursor-pointer" onClick={onChooseFile}>
						<input
							multiple={true}
							type="file"
							ref={inputRef}
							className="hidden"
							onChange={handleOnChange}
						/>
						<div
							className={classNames("text-[#0F88BD]", {
								"text-gray-500 cursor-not-allowed": loading,
							})}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_1180_1969"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="24"
									height="24"
								>
									<rect width="24" height="24" fill="#D9D9D9" />
								</mask>
								<g mask="url(#mask0_1180_1969)">
									<path
										d="M6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H13C12.45 20 11.9792 19.8042 11.5875 19.4125C11.1958 19.0208 11 18.55 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V20H6.5Z"
										fill="currentColor"
									/>
								</g>
							</svg>
						</div>
						<div className="flex flex-col">
							<div
								aria-disabled={loading}
								className={classNames(
									" text-[#0F88BD] font-semibold text-[16px] leading-6",
									{ "text-gray-500 cursor-not-allowed": loading },
								)}
							>
								{dictionary.addMore}
							</div>
							<p
								className={classNames(
									"text-[#565B52] font-normal text-[16px] leading-6 ",
									{ "text-gray-500 cursor-not-allowed": loading },
								)}
							>
								{dictionary.total} {getTotalFiles()} {dictionary.file} -{" "}
								{formatFileSize(calculateTotalSize())}
							</p>
						</div>
					</div>

					<div className="h-40 overflow-auto flex flex-col bg-[#FAFAFA] border rounded-lg py-1 ">
						{selectedFiles.map(
							(selectedFile, index) =>
								selectedFile && (
									<div
										key={index}
										className="flex px-3 pt-[10px] pb-2 items-center gap-[10px] justify-between rounded-md "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="size-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
											/>
										</svg>

										<div className="flex items-center gap-[10px] flex-grow overflow-scroll overflow-ellipsis whitespace-nowrap">
											<div className="w-[200px] text-[#1B1D1B] font-semibold text-[12px] leading-5 overflow-scroll overflow-ellipsis whitespace-nowrap">
												{selectedFile.name}
											</div>
											<div className="text-[#757972] font-medium text-[12px] leading-5">
												- {formatFileSize(selectedFile.size)}
											</div>
										</div>

										<button
											onClick={() => removeFile(index)}
											className="hover:text-black"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
											>
												<mask
													id="mask0_1180_1982"
													maskUnits="userSpaceOnUse"
													x="0"
													y="0"
													width="24"
													height="24"
												>
													<rect width="24" height="24" fill="#D9D9D9" />
												</mask>
												<g mask="url(#mask0_1180_1982)">
													<path
														d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
														fill="#7E857A"
													/>
												</g>
											</svg>
										</button>
									</div>
								),
						)}
					</div>

					<div
						aria-disabled={loading}
						className={classNames(
							"flex justify-end text-[#1B1D1B] font-semibold text-sm underline",
							{ "text-gray-500 cursor-not-allowed": loading },
						)}
					>
						<button
							className={classNames("hover:text-red-600", {
								"hover:text-gray-500 cursor-not-allowed": loading,
							})}
							onClick={handleReset}
						>
							<span>{dictionary.resetAll}</span>
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

				{loading && (
					<div className="text-white text-xl ">{dictionary.loadingText}</div>
				)}
			</form>
		);
	}
	if (fileState === 3) {
		return (
			<form>
				<div className="relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-6 pt-6 pb-10 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]">
					<div className="flex flex-col gap-2 ">
						<div className="flex items-start gap-[10px]">
							<div className="cursor-pointer" onClick={() => setFileState(2)}>
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
								className="flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7"
							>
								{digit}
							</div>
						))}
					</div>

					<div
						className="text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600"
						onClick={handleCopyFile}
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
export default SendFile;
