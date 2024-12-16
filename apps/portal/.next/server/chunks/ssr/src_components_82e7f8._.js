module.exports = {

"[project]/apps/portal/src/components/send-file/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jszip/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-ssr] (ecmascript)");
// import getPreUrl from "@/app/actions/get-pre-url";
// import { createPreUrlDownload } from "@/app/actions/create-request";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
const maxTotalSize = 2 * 1024 * 1024 * 1024; // 2 GB in bytes
const SendFile = ({ fileState, setFileState, isCopied, isShowPopup, setIsCopied, setIsShowPopup, setIsOpenModal })=>{
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(80);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prev)=>prev < 100 ? prev + 10 : 100); // Increase by 10% every second
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    const handleOnChange = (e)=>{
        if (loading) {
            return;
        }
        const totalSize = calculateTotalSize();
        if (totalSize > maxTotalSize) {
            alert("The total file size exceeds the 2 GB limit. Please select fewer files or reduce the file sizes.");
            return;
        }
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);
            setSelectedFiles((prevSelectedFiles)=>[
                    ...prevSelectedFiles,
                    ...files
                ]);
            console.log(...files);
        }
    };
    const onChooseFile = ()=>{
        if (loading) {
            return;
        }
        if (inputRef.current === null) {
            return;
        }
        inputRef.current.click();
    };
    const handleReset = ()=>{
        if (loading) {
            return;
        }
        setSelectedFiles([]);
        setFileState(1);
    };
    const removeFile = (indexToRemove)=>{
        if (loading) {
            return;
        }
        setLoading(true);
        // Check if we are removing the first file (index 0)
        setSelectedFiles((prevSelectedFiles)=>{
            const updatedFiles = prevSelectedFiles.filter((_file, index)=>index !== indexToRemove);
            if (indexToRemove === 0 && updatedFiles.length === 0) {
                setFileState(1);
            }
            return updatedFiles;
        });
        setLoading(false);
    };
    const formatFileSize = (sizeInBytes)=>{
        const units = [
            "B",
            "KB",
            "MB",
            "GB",
            "TB"
        ];
        let index = 0;
        while(sizeInBytes >= 1024 && index < units.length - 1){
            sizeInBytes /= 1024;
            index++;
        }
        return `${sizeInBytes.toFixed(0)} ${units[index]}`;
    };
    const calculateTotalSize = ()=>{
        return selectedFiles.reduce((total, file)=>total + file.size, 0);
    };
    const getTotalFiles = ()=>{
        return selectedFiles.length;
    };
    const onSendHandler = async ()=>{
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
        } finally{
            setLoading(false);
        }
    };
    // Function to prepare zip content
    const prepareZipContent = async ()=>{
        let zipContent;
        if (selectedFiles.length === 1 && selectedFiles[0].type === "application/zip") {
            zipContent = selectedFiles[0];
            console.log("File is already a ZIP, uploading directly.");
        } else {
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            selectedFiles.forEach((file)=>{
                zip.file(file.name, file);
            });
            zipContent = await zip.generateAsync({
                type: "uint8array"
            });
            console.log("Files have been compressed into a ZIP.");
        }
        return zipContent;
    };
    //6 so
    const generateRandomCode = ()=>{
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const handleCopyFile = (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(verificationCode).then(()=>{
            setIsCopied(true);
            setIsShowPopup(true);
            setTimeout(()=>{
                setIsShowPopup(false);
            }, 3000);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        }).catch((err)=>{
            console.error("Failed to copy file: ", err);
        });
    };
    const handleUpload = async (e)=>{
        e.preventDefault();
        if (selectedFiles.length > 0) {
            setFileState(2);
        } else {
            alert("Please select at least one file before submitting.");
        }
    };
    if (fileState === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:w-[360px] w-[343px] border-0.5 p-6 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                        children: dictionary.uploadFile
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 233,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: onChooseFile,
                        className: "flex flex-col items-center px-6 py-14 gap-3 text-gray-400 border-dashed border-2 border-[#5BA72A] rounded-[10px] bg-[#F9FEF6] cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                multiple: true,
                                type: "file",
                                ref: inputRef,
                                className: "hidden",
                                onChange: handleOnChange
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 240,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                        id: "mask0_1137_2453",
                                        maskUnits: "userSpaceOnUse",
                                        x: "0",
                                        y: "0",
                                        width: "40",
                                        height: "40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "40",
                                            height: "40",
                                            fill: "#D9D9D9"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 262,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 254,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        mask: "url(#mask0_1137_2453)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.8333 33.3333C8.30551 33.3333 6.14579 32.4583 4.35413 30.7083C2.56246 28.9583 1.66663 26.8194 1.66663 24.2916C1.66663 22.125 2.3194 20.1944 3.62496 18.5C4.93052 16.8055 6.63885 15.7222 8.74996 15.25C9.4444 12.6944 10.8333 10.625 12.9166 9.04163C15 7.45829 17.3611 6.66663 20 6.66663C23.25 6.66663 26.0069 7.79857 28.2708 10.0625C30.5347 12.3263 31.6666 15.0833 31.6666 18.3333C33.5833 18.5555 35.1736 19.3819 36.4375 20.8125C37.7014 22.243 38.3333 23.9166 38.3333 25.8333C38.3333 27.9166 37.6041 29.6875 36.1458 31.1458C34.6875 32.6041 32.9166 33.3333 30.8333 33.3333H21.6666C20.75 33.3333 19.9652 33.0069 19.3125 32.3541C18.6597 31.7013 18.3333 30.9166 18.3333 30V21.4166L15.6666 24L13.3333 21.6666L20 15L26.6666 21.6666L24.3333 24L21.6666 21.4166V30H30.8333C32 30 32.9861 29.5972 33.7916 28.7916C34.5972 27.9861 35 27 35 25.8333C35 24.6666 34.5972 23.6805 33.7916 22.875C32.9861 22.0694 32 21.6666 30.8333 21.6666H28.3333V18.3333C28.3333 16.0277 27.5208 14.0625 25.8958 12.4375C24.2708 10.8125 22.3055 9.99996 20 9.99996C17.6944 9.99996 15.7291 10.8125 14.1041 12.4375C12.4791 14.0625 11.6666 16.0277 11.6666 18.3333H10.8333C9.22218 18.3333 7.84718 18.9027 6.70829 20.0416C5.5694 21.1805 4.99996 22.5555 4.99996 24.1666C4.99996 25.7777 5.5694 27.1527 6.70829 28.2916C7.84718 29.4305 9.22218 30 10.8333 30H15V33.3333H10.8333Z",
                                            fill: "#1C1B1F"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 265,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 264,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 247,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#262824] font-medium text-[16px] leading-6 text-center",
                                        children: dictionary.uploadFileContent
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 272,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#565B52] font-medium text-[12px] leading-5 text-center",
                                        children: dictionary.uploadFileSupport
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 275,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 271,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 236,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full max-h-48 overflow-auto flex flex-col gap-[8px] ",
                        children: selectedFiles.map((selectedFile, index)=>selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center p-4 gap-[8px] bg-[#FAFAFA] rounded-md ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "size-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 297,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 289,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-auto flex-1 items-center gap-2  ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 text-[#1B1D1B] font-semibold text-[12px] leading-5 ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[160px] overflow-scroll overflow-ellipsis whitespace-nowrap",
                                                            children: selectedFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 14
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "- ",
                                                                formatFileSize(selectedFile.size)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 14
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[215px] h-[5px] rounded-md bg-[#DBDCDA]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-500 h-full rounded-md transition-all duration-300",
                                                        style: {
                                                            width: `${progress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 14
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 305,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 304,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "cursor-pointer",
                                        onClick: ()=>removeFile(index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                id: "mask0_1145_471",
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "24",
                                                height: "24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "24",
                                                    height: "24",
                                                    fill: "#D9D9D9"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 331,
                                                columnNumber: 12
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                mask: "url(#mask0_1145_471)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z",
                                                    fill: "#757972"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 341,
                                                columnNumber: 12
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 322,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 285,
                                columnNumber: 10
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 281,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed",
                        disabled: selectedFiles.length === 0,
                        children: dictionary.submit
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 353,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                lineNumber: 232,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 231,
            columnNumber: 4
        }, this);
    }
    if (fileState === 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5  px-[16px] py-[24px] gap-6 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 cursor-pointer",
                            onClick: onChooseFile,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    multiple: true,
                                    type: "file",
                                    ref: inputRef,
                                    className: "hidden",
                                    onChange: handleOnChange
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 369,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("text-[#0F88BD]", {
                                        "text-gray-500 cursor-not-allowed": loading
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                id: "mask0_1180_1969",
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "24",
                                                height: "24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "24",
                                                    height: "24",
                                                    fill: "#D9D9D9"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 388,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                mask: "url(#mask0_1180_1969)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H13C12.45 20 11.9792 19.8042 11.5875 19.4125C11.1958 19.0208 11 18.55 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V20H6.5Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 398,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 381,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 376,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-disabled": loading,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(" text-[#0F88BD] font-semibold text-[16px] leading-6", {
                                                "text-gray-500 cursor-not-allowed": loading
                                            }),
                                            children: dictionary.addMore
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 407,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("text-[#565B52] font-normal text-[16px] leading-6 ", {
                                                "text-gray-500 cursor-not-allowed": loading
                                            }),
                                            children: [
                                                dictionary.total,
                                                " ",
                                                getTotalFiles(),
                                                " ",
                                                dictionary.file,
                                                " -",
                                                " ",
                                                formatFileSize(calculateTotalSize())
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 416,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 406,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 368,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-40 overflow-auto flex flex-col bg-[#FAFAFA] border rounded-lg py-1 ",
                            children: selectedFiles.map((selectedFile, index)=>selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex px-3 pt-[10px] pb-2 items-center gap-[10px] justify-between rounded-md ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "size-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 444,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 436,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[10px] flex-grow overflow-scroll overflow-ellipsis whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[200px] text-[#1B1D1B] font-semibold text-[12px] leading-5 overflow-scroll overflow-ellipsis whitespace-nowrap",
                                                    children: selectedFile.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#757972] font-medium text-[12px] leading-5",
                                                    children: [
                                                        "- ",
                                                        formatFileSize(selectedFile.size)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 451,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeFile(index),
                                            className: "hover:text-black",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                        id: "mask0_1180_1982",
                                                        maskUnits: "userSpaceOnUse",
                                                        x: "0",
                                                        y: "0",
                                                        width: "24",
                                                        height: "24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "24",
                                                            height: "24",
                                                            fill: "#D9D9D9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        mask: "url(#mask0_1180_1982)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",
                                                            fill: "#7E857A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 464,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 460,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 432,
                                    columnNumber: 10
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 428,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-disabled": loading,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex justify-end text-[#1B1D1B] font-semibold text-sm underline", {
                                "text-gray-500 cursor-not-allowed": loading
                            }),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("hover:text-red-600", {
                                    "hover:text-gray-500 cursor-not-allowed": loading
                                }),
                                onClick: handleReset,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: dictionary.resetAll
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 507,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 501,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 494,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                            onClick: !loading ? onSendHandler : ()=>{},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 ",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            role: "status",
                                            className: "inline mr-3 w-4 h-4 text-gray-700 animate-spin",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                    fill: "#E5E7EB"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 521,
                                            columnNumber: 10
                                        }, this),
                                        dictionary.loading
                                    ]
                                }, void 0, true) : "Send"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 515,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 511,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                    lineNumber: 367,
                    columnNumber: 5
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-xl ",
                    children: dictionary.loadingText
                }, void 0, false, {
                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                    lineNumber: 548,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 366,
            columnNumber: 4
        }, this);
    }
    if (fileState === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-6 pt-6 pb-10 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer",
                                        onClick: ()=>setFileState(2),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "transition duration-300 hover:scale-125 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 560,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 559,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                        children: dictionary.waiting
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 584,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 558,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#565B52] font-normal text-[16px] leading-6",
                                children: dictionary.waitingNote
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 588,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 557,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-1 self-stretch",
                        children: verificationCode.split("").map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7",
                                children: digit
                            }, index, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 594,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 592,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                        onClick: handleCopyFile,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                            children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 608,
                                columnNumber: 20
                            }, this) : "Copy"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 607,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 603,
                        columnNumber: 6
                    }, this),
                    isShowPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute p-2 top-[86%] left-1/2 transform -translate-x-1/2 bg-[#FFE5B4] rounded-md shadow-lg text-[#A65A00] text-center font-semibold",
                        children: dictionary.popUpTime
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 613,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                lineNumber: 556,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 555,
            columnNumber: 4
        }, this);
    }
};
const __TURBOPACK__default__export__ = SendFile;
}}),
"[project]/apps/portal/src/components/receive/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-ssr] (ecmascript)");
;
;
;
const Receive = ({ setOption, setTextValue, setTextState })=>{
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessPopup, setShowSuccessPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showAlert) {
            return;
        }
        setTimeout(()=>{
            setShowAlert(false);
        }, 3000);
    }, [
        showAlert
    ]);
    const handleChangeInput = (e)=>{
        const value = e.target.value;
        if (/^[0-9-]*$/.test(value) && value.length <= 6) {
            setCode(value);
        }
    };
    const handleRequest = async ()=>{
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
    const handleKeyDown = async (e)=>{
        if (e.key === "Enter" && code) {
            await handleRequest();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:w-[360px] w-[343px] border-0.5 p-4 gap-4 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                children: dictionary.receive
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                lineNumber: 102,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 py-[6px] pr-[6px] pl-[10px] bg-white border rounded-[6px] border-[#B7BAB5] ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "text-[#7E857A] font-normal text-[16px] leading-6 flex-grow outline-none",
                                type: "text",
                                placeholder: dictionary.inputKeyPlaceholder,
                                maxLength: 11,
                                value: code,
                                onChange: handleChangeInput,
                                onKeyDown: handleKeyDown
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 107,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center text-center p-1 ${code ? "bg-[#9EE86F]" : "bg-gray-300"} rounded-[4px] transition duration-300 ${code ? "hover:border-2 hover:border-green-600" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: !code || loading,
                                    onClick: handleRequest,
                                    className: `${!code || loading ? "cursor-not-allowed" : "cursor-pointer"} ${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-200`,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        role: "status",
                                        className: "inline w-6 h-5 text-gray-700 animate-spin",
                                        viewBox: "0 0 100 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                fill: "#E5E7EB"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 135,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 139,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 127,
                                        columnNumber: 9
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12H19",
                                                stroke: "#1B1D1B",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 152,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5L19 12L12 19",
                                                stroke: "#1B1D1B",
                                                strokeWidth: "2",
                                                strokeLinejoin: "round",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 159,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 145,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 119,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 116,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-black text-[14px] font-semibold leading-6",
                        children: dictionary.downLoad
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 173,
                        columnNumber: 6
                    }, this),
                    showSuccessPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-x-0 top-2 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-500 rounded-lg shadow-lg p-5 max-w-sm text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-white leading-6",
                                children: dictionary.popUpSuccess
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 181,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                            lineNumber: 180,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 179,
                        columnNumber: 6
                    }, this),
                    showAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-x-0 top-2 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-center rounded-lg shadow-lg p-5 max-w-sm text-center bg-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    className: "w-6 h-6 text-red-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 199,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 191,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-white leading-6",
                                    children: dictionary.invalidKey
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 205,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                            lineNumber: 190,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 189,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                lineNumber: 105,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
        lineNumber: 101,
        columnNumber: 3
    }, this);
};
const __TURBOPACK__default__export__ = Receive;
}}),
"[project]/apps/portal/src/components/send-text/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-ssr] (ecmascript)");
// import { createRequest } from "@/app/actions/create-request";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
const SendText = ({ textValue, textState, setTextState, setTextValue, isCopied, isShowPopup, setIsCopied, setIsShowPopup, setIsOpenModal })=>{
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const maxLength = 10000;
    const changeModeHandler = ()=>{
        setTextState(2);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
        changeModeHandler();
    };
    const handleUpload = (e)=>{
        e.preventDefault();
    };
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(verificationCode).then(()=>{
            setIsCopied(true);
            setIsShowPopup(true);
            setTimeout(()=>{
                setIsShowPopup(false);
            }, 3000);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        }).catch((err)=>{
            console.error("Failed to copy text: ", err);
        });
    };
    const onSendHandler = async ()=>{
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
        } finally{
            setLoading(false);
        }
    };
    //6 number
    const generateRandomCode = ()=>{
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const isDisabled = ()=>{
        return textValue === "";
    };
    if (textState === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:w-[360px] w-[343px] border-0.5 p-6 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                        children: dictionary.inputText
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 106,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "text",
                                name: "textArea",
                                maxLength: maxLength,
                                value: textValue,
                                placeholder: dictionary.inputTextPlaceholder,
                                className: "w-full h-[210px] resize-none flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4",
                                required: true,
                                onChange: (e)=>setTextValue(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center h-[24px] text-[#565B52]",
                                children: [
                                    textValue.length,
                                    "/",
                                    maxLength
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 120,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 109,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed",
                        disabled: isDisabled(),
                        children: dictionary.submit
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 125,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 104,
            columnNumber: 4
        }, this);
    }
    if (textState === 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: [
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-lg",
                        children: dictionary.loadingText
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 141,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                    lineNumber: 140,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-[16px] py-[24px] gap-6 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-[10px] cursor-pointer",
                                    onClick: ()=>setTextState(1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 150,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                            children: dictionary.back
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 172,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 146,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex  font-normal text-[16px] text-[#565B52] leading-6",
                                        children: dictionary.backNote
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 178,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 177,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 145,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " h-[210px] flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: textValue
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 185,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 184,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end text-[#1B1D1B] font-semibold text-sm underline",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTextValue("");
                                    setTextState(1);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cursor-pointer hover:text-red-600",
                                    children: dictionary.clearAll
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 189,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 188,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                            onClick: !loading ? onSendHandler : ()=>{},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 ",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            role: "status",
                                            className: "inline mr-3 w-4 h-4 text-gray-700 animate-spin",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                    fill: "#E5E7EB"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 211,
                                            columnNumber: 10
                                        }, this),
                                        dictionary.loading
                                    ]
                                }, void 0, true) : "Send"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 205,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 201,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                    lineNumber: 144,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 138,
            columnNumber: 4
        }, this);
    }
    if (textState === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 px-6 pt-6 pb-10 gap-5 rounded-[10px] border bg-white shadow-[0px_4px_12px_0px_rgba(56,58,54,0.08)] border-[#B7BAB5] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-[10px] ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            setTextValue("");
                                            setTextState(1);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "transition duration-300 hover:scale-125 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 253,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 246,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                        children: dictionary.waiting
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 278,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 245,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#565B52] font-normal text-[16px] leading-6",
                                children: dictionary.waitingNote
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 282,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 244,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-1 self-stretch",
                        children: verificationCode.split("").map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7",
                                children: digit
                            }, index, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 288,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 286,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                        onClick: handleCopyText,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                            children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 301,
                                columnNumber: 20
                            }, this) : "Copy"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 300,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 296,
                        columnNumber: 6
                    }, this),
                    isShowPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute p-2 top-[86%] left-1/2 transform -translate-x-1/2 bg-[#FFE5B4] rounded-md shadow-lg text-[#A65A00] text-center font-semibold",
                        children: dictionary.popUpTime
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 306,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                lineNumber: 243,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 242,
            columnNumber: 4
        }, this);
    }
};
const __TURBOPACK__default__export__ = SendText;
}}),
"[project]/apps/portal/src/components/change-locale-option/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-ssr] (ecmascript)");
;
;
;
const ChangeLocaleOption = ()=>{
    const { setSelectedLanguage, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    const [isShowLang, setIsShowLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const languages = [
        {
            code: "en",
            label: "English"
        },
        {
            code: "vi",
            label: "Vietnamese"
        }
    ];
    const openLang = ()=>setIsShowLang((prev)=>!prev);
    const handleChooseLang = (lang)=>{
        setSelectedLanguage(lang);
        setIsShowLang(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[360px] flex flex-col md:items-end items-start relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-[10px] py-1 gap-1 bg-[#F0F0EF] rounded-[6px] border-[1.5px] border-[#DBDCDA] cursor-pointer",
                onClick: openLang,
                "aria-expanded": isShowLang,
                "aria-haspopup": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: language.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z",
                            fill: "#262824"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            isShowLang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute md:top-8 top-9 md:right-0 flex flex-col items-start px-2 py-[10px] rounded-[6px] border-[3px] border-[#EFF0F0] bg-white shadow-[0px_4px_30px_0px_rgba(14,15,16,0.09)] mt-2",
                role: "menu",
                children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-3 px-4 hover:bg-[#F7F8F8] hover:cursor-pointer",
                        onClick: ()=>handleChooseLang(lang.code),
                        role: "menuitem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[90px] text-[#767C7F] text-[15px] font-medium leading-[18px] hover:text-[#3D4142]",
                                    children: lang.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                                    lineNumber: 56,
                                    columnNumber: 33
                                }, this),
                                language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8.83342 13.8333L14.7084 7.95833L13.5417 6.79166L8.83342 11.5L6.45842 9.125L5.29175 10.2917L8.83342 13.8333ZM10.0001 18.3333C8.8473 18.3333 7.76397 18.1146 6.75008 17.6771C5.73619 17.2396 4.85425 16.6458 4.10425 15.8958C3.35425 15.1458 2.7605 14.2639 2.323 13.25C1.8855 12.2361 1.66675 11.1528 1.66675 10C1.66675 8.84722 1.8855 7.76389 2.323 6.75C2.7605 5.73611 3.35425 4.85416 4.10425 4.10416C4.85425 3.35416 5.73619 2.76041 6.75008 2.32291C7.76397 1.88541 8.8473 1.66666 10.0001 1.66666C11.1529 1.66666 12.2362 1.88541 13.2501 2.32291C14.264 2.76041 15.1459 3.35416 15.8959 4.10416C16.6459 4.85416 17.2397 5.73611 17.6772 6.75C18.1147 7.76389 18.3334 8.84722 18.3334 10C18.3334 11.1528 18.1147 12.2361 17.6772 13.25C17.2397 14.2639 16.6459 15.1458 15.8959 15.8958C15.1459 16.6458 14.264 17.2396 13.2501 17.6771C12.2362 18.1146 11.1529 18.3333 10.0001 18.3333ZM10.0001 16.6667C11.8612 16.6667 13.4376 16.0208 14.7292 14.7292C16.0209 13.4375 16.6667 11.8611 16.6667 10C16.6667 8.13889 16.0209 6.5625 14.7292 5.27083C13.4376 3.97916 11.8612 3.33333 10.0001 3.33333C8.13897 3.33333 6.56258 3.97916 5.27092 5.27083C3.97925 6.5625 3.33341 8.13889 3.33341 10C3.33341 11.8611 3.97925 13.4375 5.27092 14.7292C6.56258 16.0208 8.13897 16.6667 10.0001 16.6667Z",
                                        fill: "#3D403A"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                                        lineNumber: 67,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                                    lineNumber: 60,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                            lineNumber: 55,
                            columnNumber: 29
                        }, this)
                    }, lang.code, false, {
                        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ChangeLocaleOption;
}}),

};

//# sourceMappingURL=src_components_82e7f8._.js.map