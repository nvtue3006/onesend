(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_apps_portal_f93601._.js", {

"[project]/apps/portal/src/components/send-file/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
// import getPreUrl from "@/app/actions/get-pre-url";
// import { createPreUrlDownload } from "@/app/actions/create-request";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const maxTotalSize = 2 * 1024 * 1024 * 1024; // 2 GB in bytes
const SendFile = ({ fileState, setFileState, isCopied, isShowPopup, setIsCopied, setIsShowPopup, setIsOpenModal })=>{
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "SendFile.useEffect": ()=>{
            const interval = setInterval({
                "SendFile.useEffect.interval": ()=>{
                    setProgress({
                        "SendFile.useEffect.interval": (prev)=>prev < 100 ? prev + 10 : 100
                    }["SendFile.useEffect.interval"]); // Increase by 10% every second
                }
            }["SendFile.useEffect.interval"], 1000);
            return ({
                "SendFile.useEffect": ()=>clearInterval(interval)
            })["SendFile.useEffect"];
        }
    }["SendFile.useEffect"], []);
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
            const zipContent = await prepareZipContent();
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
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] p-6 bg-white gap-5 shadow-custom-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                        children: "Upload File"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 230,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: onChooseFile,
                        className: "flex flex-col items-center px-6 py-14 gap-3 text-gray-400 border-dashed border-2 border-[#5BA72A] rounded-[10px] bg-[#F9FEF6] cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                multiple: true,
                                type: "file",
                                ref: inputRef,
                                className: "hidden",
                                onChange: handleOnChange
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 237,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                        id: "mask0_1137_2453",
                                        maskUnits: "userSpaceOnUse",
                                        x: "0",
                                        y: "0",
                                        width: "40",
                                        height: "40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "40",
                                            height: "40",
                                            fill: "#D9D9D9"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 259,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 251,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        mask: "url(#mask0_1137_2453)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.8333 33.3333C8.30551 33.3333 6.14579 32.4583 4.35413 30.7083C2.56246 28.9583 1.66663 26.8194 1.66663 24.2916C1.66663 22.125 2.3194 20.1944 3.62496 18.5C4.93052 16.8055 6.63885 15.7222 8.74996 15.25C9.4444 12.6944 10.8333 10.625 12.9166 9.04163C15 7.45829 17.3611 6.66663 20 6.66663C23.25 6.66663 26.0069 7.79857 28.2708 10.0625C30.5347 12.3263 31.6666 15.0833 31.6666 18.3333C33.5833 18.5555 35.1736 19.3819 36.4375 20.8125C37.7014 22.243 38.3333 23.9166 38.3333 25.8333C38.3333 27.9166 37.6041 29.6875 36.1458 31.1458C34.6875 32.6041 32.9166 33.3333 30.8333 33.3333H21.6666C20.75 33.3333 19.9652 33.0069 19.3125 32.3541C18.6597 31.7013 18.3333 30.9166 18.3333 30V21.4166L15.6666 24L13.3333 21.6666L20 15L26.6666 21.6666L24.3333 24L21.6666 21.4166V30H30.8333C32 30 32.9861 29.5972 33.7916 28.7916C34.5972 27.9861 35 27 35 25.8333C35 24.6666 34.5972 23.6805 33.7916 22.875C32.9861 22.0694 32 21.6666 30.8333 21.6666H28.3333V18.3333C28.3333 16.0277 27.5208 14.0625 25.8958 12.4375C24.2708 10.8125 22.3055 9.99996 20 9.99996C17.6944 9.99996 15.7291 10.8125 14.1041 12.4375C12.4791 14.0625 11.6666 16.0277 11.6666 18.3333H10.8333C9.22218 18.3333 7.84718 18.9027 6.70829 20.0416C5.5694 21.1805 4.99996 22.5555 4.99996 24.1666C4.99996 25.7777 5.5694 27.1527 6.70829 28.2916C7.84718 29.4305 9.22218 30 10.8333 30H15V33.3333H10.8333Z",
                                            fill: "#1C1B1F"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 262,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 261,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 244,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#262824] font-medium text-[16px] leading-6 text-center",
                                        children: [
                                            "Drag & drop files or Choose File",
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 269,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#565B52] font-medium text-[12px] leading-5 text-center",
                                        children: "Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 272,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 268,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 233,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full max-h-48 overflow-auto flex flex-col gap-[8px] ",
                        children: selectedFiles.map((selectedFile, index)=>selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center p-4 gap-[8px] bg-[#FAFAFA] rounded-md ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "size-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 294,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 286,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-auto flex-1 items-center gap-2  ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 text-[#1B1D1B] font-semibold text-[12px] leading-5 ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[160px] overflow-scroll overflow-ellipsis whitespace-nowrap",
                                                            children: selectedFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 14
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "- ",
                                                                formatFileSize(selectedFile.size)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 14
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[215px] h-[5px] rounded-md bg-[#DBDCDA]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-500 h-full rounded-md transition-all duration-300",
                                                        style: {
                                                            width: `${progress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 14
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 302,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 301,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "cursor-pointer",
                                        onClick: ()=>removeFile(index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                id: "mask0_1145_471",
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "24",
                                                height: "24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "24",
                                                    height: "24",
                                                    fill: "#D9D9D9"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 328,
                                                columnNumber: 12
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                mask: "url(#mask0_1145_471)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z",
                                                    fill: "#757972"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 338,
                                                columnNumber: 12
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 319,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 282,
                                columnNumber: 10
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 278,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed",
                        disabled: selectedFiles.length === 0,
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 350,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                lineNumber: 229,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 228,
            columnNumber: 4
        }, this);
    }
    if (fileState === 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] px-[16px] py-[24px] bg-white gap-6 shadow-custom-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 cursor-pointer",
                            onClick: onChooseFile,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    multiple: true,
                                    type: "file",
                                    ref: inputRef,
                                    className: "hidden",
                                    onChange: handleOnChange
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 366,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-[#0F88BD]", {
                                        "text-gray-500 cursor-not-allowed": loading
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                id: "mask0_1180_1969",
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "24",
                                                height: "24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "24",
                                                    height: "24",
                                                    fill: "#D9D9D9"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 385,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                mask: "url(#mask0_1180_1969)",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H13C12.45 20 11.9792 19.8042 11.5875 19.4125C11.1958 19.0208 11 18.55 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V20H6.5Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 395,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 378,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 373,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-disabled": loading,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(" text-[#0F88BD] font-semibold text-[16px] leading-6", {
                                                "text-gray-500 cursor-not-allowed": loading
                                            }),
                                            children: "Add more"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 404,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-[#565B52] font-normal text-[16px] leading-6 ", {
                                                "text-gray-500 cursor-not-allowed": loading
                                            }),
                                            children: [
                                                "Total ",
                                                getTotalFiles(),
                                                " file -",
                                                " ",
                                                formatFileSize(calculateTotalSize())
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 413,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 403,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 365,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-40 overflow-auto flex flex-col bg-[#FAFAFA] border rounded-lg py-1 ",
                            children: selectedFiles.map((selectedFile, index)=>selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex px-3 pt-[10px] pb-2 items-center gap-[10px] justify-between rounded-md ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "size-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 441,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 433,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[10px] flex-grow overflow-scroll overflow-ellipsis whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[200px] text-[#1B1D1B] font-semibold text-[12px] leading-5 overflow-scroll overflow-ellipsis whitespace-nowrap",
                                                    children: selectedFile.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#757972] font-medium text-[12px] leading-5",
                                                    children: [
                                                        "- ",
                                                        formatFileSize(selectedFile.size)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 448,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeFile(index),
                                            className: "hover:text-black",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                        id: "mask0_1180_1982",
                                                        maskUnits: "userSpaceOnUse",
                                                        x: "0",
                                                        y: "0",
                                                        width: "24",
                                                        height: "24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "24",
                                                            height: "24",
                                                            fill: "#D9D9D9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        mask: "url(#mask0_1180_1982)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",
                                                            fill: "#7E857A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                lineNumber: 461,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 457,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 429,
                                    columnNumber: 10
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 425,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-disabled": loading,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex justify-end text-[#1B1D1B] font-semibold text-sm underline", {
                                "text-gray-500 cursor-not-allowed": loading
                            }),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("hover:text-red-600", {
                                    "hover:text-gray-500 cursor-not-allowed": loading
                                }),
                                onClick: handleReset,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Reset All"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                    lineNumber: 504,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 498,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 491,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                            onClick: !loading ? onSendHandler : ()=>{},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 ",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            role: "status",
                                            className: "inline mr-3 w-4 h-4 text-gray-700 animate-spin",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                    fill: "#E5E7EB"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 518,
                                            columnNumber: 10
                                        }, this),
                                        "Loading..."
                                    ]
                                }, void 0, true) : "Send"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 512,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 508,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                    lineNumber: 364,
                    columnNumber: 5
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-xl ",
                    children: "Loading, please wait..."
                }, void 0, false, {
                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                    lineNumber: 545,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 363,
            columnNumber: 4
        }, this);
    }
    if (fileState === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] px-6 pt-6 pb-10 bg-white gap-5 shadow-custom-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer",
                                        onClick: ()=>setFileState(2),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "transition duration-300 hover:scale-125 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                            lineNumber: 557,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 556,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                        children: "Waiting..."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                        lineNumber: 581,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 555,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#565B52] font-normal text-[16px] leading-6",
                                children: "Enter the 6-digit key on the receiving device"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 585,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 554,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-1 self-stretch",
                        children: verificationCode.split("").map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7",
                                children: digit
                            }, index, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 591,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 589,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                        onClick: handleCopyFile,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                            children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                                lineNumber: 605,
                                columnNumber: 20
                            }, this) : "Copy"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                            lineNumber: 604,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 600,
                        columnNumber: 6
                    }, this),
                    isShowPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute p-2 top-[86%] left-1/2 transform -translate-x-1/2 bg-[#FFE5B4] rounded-md shadow-lg text-[#A65A00] text-center font-semibold",
                        children: "Code will expire in 10 minutes"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                        lineNumber: 610,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
                lineNumber: 553,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-file/index.tsx",
            lineNumber: 552,
            columnNumber: 4
        }, this);
    }
};
_s(SendFile, "AmKwVlVqC1+9XjFp4DA6uwsgmyE=");
_c = SendFile;
const __TURBOPACK__default__export__ = SendFile;
var _c;
__turbopack_refresh__.register(_c, "SendFile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/components/receive/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const Receive = ({ setOption, setTextValue, setTextState })=>{
    _s();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessPopup, setShowSuccessPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Receive.useEffect": ()=>{
            if (!showAlert) {
                return;
            }
            setTimeout({
                "Receive.useEffect": ()=>{
                    setShowAlert(false);
                }
            }["Receive.useEffect"], 3000);
        }
    }["Receive.useEffect"], [
        showAlert
    ]);
    const handleChangeInput = (e)=>{
        const value = e.target.value;
        if (/^[0-9-]*$/.test(value) && value.length <= 11) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] p-4 bg-white gap-4 shadow-custom-text",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                children: "Receive"
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                lineNumber: 100,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 py-[6px] pr-[6px] pl-[10px] bg-white border rounded-[6px] border-[#B7BAB5] ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "text-[#7E857A] font-normal text-[16px] leading-6 flex-grow outline-none",
                                type: "text",
                                placeholder: "Input key",
                                maxLength: 11,
                                value: code,
                                onChange: handleChangeInput,
                                onKeyDown: handleKeyDown
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 105,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center text-center p-1 ${code ? "bg-[#9EE86F]" : "bg-gray-300"} rounded-[4px] transition duration-300 ${code ? "hover:border-2 hover:border-green-600" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: !code || loading,
                                    onClick: handleRequest,
                                    className: `${!code || loading ? "cursor-not-allowed" : "cursor-pointer"} ${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-200`,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        role: "status",
                                        className: "inline w-6 h-5 text-gray-700 animate-spin",
                                        viewBox: "0 0 100 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                fill: "#E5E7EB"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 133,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 137,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 125,
                                        columnNumber: 9
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12H19",
                                                stroke: "#1B1D1B",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 150,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5L19 12L12 19",
                                                stroke: "#1B1D1B",
                                                strokeWidth: "2",
                                                strokeLinejoin: "round",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                                lineNumber: 157,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 143,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 117,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 114,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 104,
                        columnNumber: 5
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-black text-[14px] font-semibold leading-6",
                        children: "Downloading, please wait..."
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 171,
                        columnNumber: 6
                    }, this),
                    showSuccessPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-x-0 top-2 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-500 rounded-lg shadow-lg p-5 max-w-sm text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-white leading-6",
                                children: "Download completed successfully!"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                lineNumber: 179,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                            lineNumber: 178,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 177,
                        columnNumber: 6
                    }, this),
                    showAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-x-0 top-2 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-center rounded-lg shadow-lg p-5 max-w-sm text-center bg-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    className: "w-6 h-6 text-red-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                        lineNumber: 197,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 189,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-white leading-6",
                                    children: "The key is invalid or has expired"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                                    lineNumber: 203,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                            lineNumber: 188,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                        lineNumber: 187,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/receive/index.tsx",
                lineNumber: 103,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/receive/index.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this);
};
_s(Receive, "tI52V0U0AwKG6X2DMuGg4DLoAa8=");
_c = Receive;
const __TURBOPACK__default__export__ = Receive;
var _c;
__turbopack_refresh__.register(_c, "Receive");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/components/send-text/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { createRequest } from "@/app/actions/create-request";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const SendText = ({ textValue, textState, setTextState, setTextValue, isCopied, isShowPopup, setIsCopied, setIsShowPopup, setIsOpenModal })=>{
    _s();
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] p-6 bg-white gap-5 shadow-custom-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                        children: "Input Text"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 103,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "text",
                                name: "textArea",
                                maxLength: maxLength,
                                value: textValue,
                                placeholder: "Write a text...",
                                className: "w-full h-[210px] resize-none flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4",
                                required: true,
                                onChange: (e)=>setTextValue(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center h-[24px] text-[#565B52]",
                                children: [
                                    textValue.length,
                                    "/",
                                    maxLength
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 117,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 106,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 transform hover:shadow-lg hover:border-2 hover:border-green-600 disabled:bg-[#DBDCDA] disabled:text-[#7E857A] disabled:cursor-not-allowed",
                        disabled: isDisabled(),
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 122,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 101,
            columnNumber: 4
        }, this);
    }
    if (textState === 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: [
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-lg",
                        children: "Loading, please wait..."
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 138,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                    lineNumber: 137,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] px-[16px] py-[24px] bg-white gap-6 shadow-custom-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-[10px] cursor-pointer",
                                    onClick: ()=>setTextState(1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 147,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 169,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 143,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex font-normal font-normal text-[16px] text-[#565B52] leading-6",
                                        children: "If you want to edit the text"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 175,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 174,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 142,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " h-[210px] flex flex-col bg-[#FAFAFA] rounded-[10px] pt-4 pr-6 pb-14 pl-4 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: textValue
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 182,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 181,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end text-[#1B1D1B] font-semibold text-sm underline",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTextValue("");
                                    setTextState(1);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cursor-pointer hover:text-red-600",
                                    children: "Clear All"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 186,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 185,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                            onClick: !loading ? onSendHandler : ()=>{},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "text-[#1B1D1B] font-semibold text-[16px] leading-6 ",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            role: "status",
                                            className: "inline mr-3 w-4 h-4 text-gray-700 animate-spin",
                                            viewBox: "0 0 100 101",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                                    fill: "#E5E7EB"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 208,
                                            columnNumber: 10
                                        }, this),
                                        "Loading..."
                                    ]
                                }, void 0, true) : "Send"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 202,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 198,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                    lineNumber: 141,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 135,
            columnNumber: 4
        }, this);
    }
    if (textState === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUpload,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col md:w-[360px] w-[343px] border-0.5 border-[#B7BAB5] rounded-[12px] px-6 pt-6 pb-10 bg-white gap-5 shadow-custom-text ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-[10px] ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            setTextValue("");
                                            setTextState(1);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "transition duration-300 hover:scale-125 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 19L5 12L12 5",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                            lineNumber: 250,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 243,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                                        children: "Waiting..."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                        lineNumber: 275,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 242,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#565B52] font-normal text-[16px] leading-6",
                                children: "Enter the 6-digit key on the receiving device"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 279,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 241,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-1 self-stretch",
                        children: verificationCode.split("").map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " flex flex-col flex-1 p-2 justify-center items-center bg-[#F0F0EF] rounded-[4px] font-bold text-[#262824] text-[18px] leading-7",
                                children: digit
                            }, index, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 285,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 283,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center bg-[#9EE86F] p-[10px] rounded-md cursor-pointer transition duration-300 hover:shadow-lg hover:border-2 hover:border-green-600",
                        onClick: handleCopyText,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#1B1D1B] font-semibold text-[16px] leading-6",
                            children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                                lineNumber: 298,
                                columnNumber: 20
                            }, this) : "Copy"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                            lineNumber: 297,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 293,
                        columnNumber: 6
                    }, this),
                    isShowPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute p-2 top-[86%] left-1/2 transform -translate-x-1/2 bg-[#FFE5B4] rounded-md shadow-lg text-[#A65A00] text-center font-semibold",
                        children: "Code will expire in 10 minutes"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                        lineNumber: 303,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
                lineNumber: 240,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/components/send-text/index.tsx",
            lineNumber: 239,
            columnNumber: 4
        }, this);
    }
};
_s(SendText, "31QZpHCdebiO/uShmHpYDo2YAU8=");
_c = SendText;
const __TURBOPACK__default__export__ = SendText;
var _c;
__turbopack_refresh__.register(_c, "SendText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/components/donate/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const Donate = ({ isOpenModal, setIsOpenModal })=>{
    _s();
    const [isCopyBank, setIsCopyBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const accountNumber = '595749999';
    const openModal = ()=>{
        setIsOpenModal(!isOpenModal);
    };
    const handleCopy = ()=>{
        navigator.clipboard.writeText(accountNumber).then(()=>{
            setIsCopyBank(true);
            setTimeout(()=>setIsCopyBank(false), 2000);
        }).catch((error)=>{
            setIsCopyBank(false);
            console.error('Copy failed:', error);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed md:bottom-8 right-0 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "114",
                height: "68",
                viewBox: "0 0 114 68",
                fill: "none",
                className: "cursor-pointer md:block hidden",
                onClick: openModal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M41.6616 55.5772C41.6616 55.5772 42.313 37.5217 45.5692 37.2934C48.8254 37.065 65.3695 35.9995 65.3695 35.9995C68.0616 40.9726 69.8085 48.8297 69.6881 54.5517L69.6663 55.5772H41.6616Z",
                        fill: "#FFC25E"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 41,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M45.6227 39.6092C45.6227 39.6092 45.0767 44.9616 48.8996 46.2726C52.7231 47.5836 55.4535 41.4661 55.4535 41.4661C55.4535 41.4661 59.4955 47.8016 63.1 46.4911C66.7049 45.1801 64.9569 37.4247 64.9569 37.4247L45.6227 39.6092Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M55.5888 44.9212C57.0716 44.8506 56.9305 47.3927 55.3771 47.1804C53.8237 46.9687 54.1061 44.9918 55.5888 44.9212Z",
                        fill: "#633E36"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 49,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M55.7561 50.2746C57.2389 50.204 57.0978 52.7461 55.5444 52.5338C53.991 52.3225 54.2739 50.3452 55.7561 50.2746Z",
                        fill: "#633E36"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 53,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M60.0197 0.00512595L51.4567 0.29525C25.815 3.45492 27.7638 27.6517 27.7638 27.6517C18.2111 41.6662 39.9702 51.2485 51.9985 50.6891L61.3442 50.2541C73.372 49.6941 87.5827 43.8232 82.1259 27.0216C82.1259 27.0216 84.8387 -0.430315 60.0197 0.00512595Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 57,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M59.7568 50.319C59.7568 50.319 72.8709 50.031 77.7708 45.2754",
                        stroke: "#633E36",
                        strokeWidth: "1.55846",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M29.7822 42.6814C29.7822 42.6814 36.7451 51.6352 51.998 50.689",
                        stroke: "#633E36",
                        strokeWidth: "1.55846",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 68,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M45.498 2.00976C45.498 2.00976 46.6731 5.76939 50.3149 5.88669C53.9567 6.00398 52.7822 2.59727 52.7822 2.59727C52.7822 2.59727 55.1317 5.88669 56.5418 5.29918C57.9514 4.71167 56.3067 2.12705 56.3067 2.12705C56.3067 2.12705 60.301 5.53429 62.651 5.18137C65.0005 4.82897 61.3587 1.06934 61.3587 1.06934",
                        stroke: "#332B00",
                        strokeWidth: "1.33582",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 75,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18.9616 44.0573C25.6598 48.8305 28.3934 36.7155 32.1048 25.2565C35.2468 15.5554 40.1404 6.55281 37.8548 6.29954C28.1251 5.22158 6.59282 35.2431 18.9616 44.0573Z",
                        fill: "#FFDA1A"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 82,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35.9786 14.1473C35.9786 14.1473 27.7217 46.1654 20.8472 45.2754",
                        stroke: "#332B00",
                        strokeWidth: "1.55846",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 86,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M75.5991 7.24463C75.5991 7.24463 76.771 18.3486 77.6585 28.957C78.5522 39.6421 79.1901 49.827 87.2304 48.2191C103.092 45.0465 79.8134 1.63892 75.5991 7.24463Z",
                        fill: "#FFDA1A"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 94,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M75.7363 11.1589C75.7363 11.1589 76.356 21.5005 77.3629 30.2311C78.2654 38.0581 78.7574 46.5189 82.981 47.6773",
                        stroke: "#332B00",
                        strokeWidth: "1.55846",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 98,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M45.2267 13.6818C54.3268 12.6547 55.5169 30.0578 46.2455 30.8207C36.9736 31.5837 37.6727 14.5345 45.2267 13.6818Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M52.3279 19.3534C52.3279 19.3534 51.6174 12.7434 45.2436 13.6901C39.6394 14.5226 39.0166 22.3859 39.0166 22.3859",
                        stroke: "#332B00",
                        strokeWidth: "1.78243",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 110,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50.8934 18.5714C50.3625 17.5648 49.5385 16.864 48.3894 16.6917L50.8934 18.5714ZM50.8934 18.5714C51.4299 19.5885 51.6559 20.9049 51.5777 22.2264M50.8934 18.5714L51.5777 22.2264M51.5777 22.2264C51.4996 23.5478 51.1199 24.8298 50.4936 25.7773M51.5777 22.2264L50.4936 25.7773M50.4936 25.7773C49.8707 26.7197 49.0296 27.3004 48.0062 27.3333M50.4936 25.7773L48.0062 27.3333M48.0062 27.3333C46.7953 27.3723 45.9169 26.745 45.3329 25.7195M48.0062 27.3333L45.3329 25.7195M45.3329 25.7195C44.7392 24.6769 44.4703 23.2441 44.5367 21.7992M45.3329 25.7195L44.5367 21.7992M44.5367 21.7992C44.603 20.3541 45.0018 18.9594 45.6763 17.9901M44.5367 21.7992L45.6763 17.9901M45.6763 17.9901C46.3398 17.0367 47.2432 16.5199 48.3894 16.6917L45.6763 17.9901Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.890549"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 118,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M44.6621 21.4447C44.6621 21.4447 47.2431 21.7431 48.1368 20.4C49.03 19.0569 49.2288 15.7739 49.2288 15.7739C49.2288 15.7739 49.1297 20.3255 50.4199 20.8478C51.7106 21.3702 53.4976 21.5941 53.4976 21.5941C53.4976 21.5941 49.8246 22.1909 49.6258 22.9372C49.427 23.6834 49.2288 27.3398 49.2288 27.3398C49.2288 27.3398 48.633 23.236 47.938 22.7137C47.2436 22.1909 44.6621 21.4447 44.6621 21.4447Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 124,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M63.7933 14.522C72.9702 12.9749 75.1438 30.5685 65.7774 31.8571C56.4115 33.1458 56.1754 15.8065 63.7933 14.522Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 128,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M58.6719 19.6285C58.6719 19.6285 60.3067 13.1394 65.5429 14.0456C71.1258 15.012 71.7699 22.7419 71.7699 22.7419",
                        stroke: "#332B00",
                        strokeWidth: "1.78243",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 132,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M62.8012 17.5894C63.9917 17.7019 64.8774 18.3405 65.4807 19.2734C66.0906 20.2166 66.4066 21.4578 66.4163 22.7187C66.4261 23.9798 66.1291 25.218 65.5614 26.152C64.9984 27.0783 64.1851 27.6867 63.1347 27.7782C61.892 27.8862 60.9543 27.3229 60.2969 26.3738C59.6278 25.4081 59.2617 24.051 59.2332 22.665C59.2046 21.2784 59.5151 19.9249 60.13 18.9663C60.7327 18.0268 61.6131 17.4771 62.8012 17.5894Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.890549"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 140,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M59.3911 22.2634C59.3911 22.2634 61.9477 22.1103 62.2544 21.1912C62.5612 20.2721 62.9701 16.2136 62.9701 16.2136C62.9701 16.2136 63.5836 21.1912 64.1976 21.4974C64.811 21.8037 67.8793 22.2634 67.8793 22.2634C67.8793 22.2634 64.0953 22.4166 63.8908 22.9525C63.6864 23.4884 63.1751 28.1598 63.1751 28.1598C63.1751 28.1598 62.6639 23.565 62.0505 23.1822C61.4365 22.7994 59.3911 22.2634 59.3911 22.2634Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 146,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M55.2005 25.6302C64.9266 25.6562 65.5551 37.602 54.2518 38.095C43.9108 38.546 44.0125 25.6001 55.2005 25.6302Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 150,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50.6959 34.4602C50.6233 35.1515 52.4785 33.8661 53.6666 33.569C55.7462 34.4602 57.7871 35.6485 57.2315 34.4602C57.026 34.0206 56.3403 30.8954 54.2608 30.8954C51.2901 31.1925 50.7369 34.071 50.6959 34.4602Z",
                        fill: "#332B00"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 154,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M51.29 34.4602C51.8842 34.4602 52.447 33.6028 53.6666 33.569C55.2791 33.5244 56.4136 35.9056 56.6373 34.4602C54.1177 29.41 52.2647 33.2219 51.29 34.4602Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 158,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M50.6959 34.4604C50.6232 35.1517 51.8842 34.1633 53.6666 33.5692C55.152 33.074 56.6373 35.9456 57.5284 35.0545C57.5284 34.7573 56.9344 30.9521 54.2836 30.9262C51.6328 30.9003 50.7369 34.0712 50.6959 34.4604Z",
                        stroke: "#332B00",
                        strokeWidth: "0.667912",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 162,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M34.3569 25.8452C34.3569 25.8452 45.0515 16.933 46.3215 32.8142L34.3569 25.8452Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 169,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.2473 26.571C47.7164 30.7594 40.8334 37.3195 36.2159 32.9397C31.5989 28.5599 38.2026 21.843 43.2473 26.571Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 173,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M34.6538 25.8452C34.6538 25.8452 43.777 16.5211 47.3213 32.5556",
                        stroke: "#332B00",
                        strokeWidth: "1.33582",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 177,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M61.623 34.0957C61.623 34.0957 65.4023 20.0786 75.6499 27.3305L61.623 34.0957Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 185,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M71.4618 26.1685C77.0452 27.547 74.7113 36.0357 68.9187 34.569C63.1262 33.1023 65.1591 24.6125 71.4618 26.1685Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 189,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M61.3906 33.0287C61.3906 33.0287 65.8333 19.8845 76.0809 27.1365",
                        stroke: "#332B00",
                        strokeWidth: "1.33582",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 193,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M42.2939 12.5405L42.2939 12.5405C42.0399 12.3263 42.0629 12.0036 42.1975 11.7992C42.2655 11.6959 42.3692 11.6096 42.497 11.5794C42.6301 11.548 42.771 11.5818 42.8955 11.687M42.2939 12.5405L44.7356 12.4683C44.0433 12.4584 43.4329 12.1405 42.8955 11.687M42.2939 12.5405C43.4557 13.5202 45.0535 13.8437 46.4324 13.0587L46.4324 13.0587M42.2939 12.5405L46.4324 13.0587M42.8955 11.687L42.8093 11.789M42.8955 11.687C42.8955 11.687 42.8954 11.687 42.8954 11.687L42.8093 11.789M42.8093 11.789C42.4275 11.4665 42.0003 12.1181 42.38 12.4384L42.8093 11.789ZM46.4324 13.0587C47.647 12.367 48.4678 11.0687 48.6212 9.68778L48.6212 9.68776M46.4324 13.0587L48.6212 9.68776M48.6212 9.68776C48.7106 8.88116 48.5439 8.0514 48.1299 7.34973L48.1298 7.34965M48.6212 9.68776L48.1298 7.34965M48.1298 7.34965C47.9593 7.06112 47.6375 7.03708 47.4156 7.14347C47.3038 7.19712 47.2044 7.28861 47.1556 7.41102C47.105 7.53786 47.115 7.68296 47.198 7.8236L47.198 7.82367M48.1298 7.34965L47.198 7.82367M47.198 7.82367C47.7521 8.76248 47.7034 9.91697 47.1664 10.8667L47.1664 10.8667M47.198 7.82367L47.1664 10.8667M47.1664 10.8667C46.6653 11.7535 45.7636 12.4826 44.7356 12.4683L47.1664 10.8667Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.267165"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 201,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M65.861 13.3868L65.861 13.3868C67.4691 13.9316 69.1158 13.5604 70.3569 12.4139M65.861 13.3868L63.1527 8.10041C63.3108 7.80136 63.6313 7.76957 63.8556 7.8732C63.9684 7.92534 64.0691 8.01564 64.1213 8.13692C64.1752 8.26215 64.1718 8.40792 64.0954 8.55224C63.5317 9.61946 63.8997 10.664 64.6857 11.4352C65.4757 12.2103 66.6652 12.6819 67.6732 12.5878C68.3855 12.521 69.0542 12.2017 69.5819 11.7141L69.582 11.714C69.825 11.49 70.1425 11.5519 70.3294 11.709C70.4239 11.7885 70.4977 11.9013 70.5124 12.0318C70.5277 12.1678 70.4767 12.3033 70.3569 12.4139M65.861 13.3868C64.5395 12.9388 63.297 11.8474 62.9105 10.4557M65.861 13.3868L62.9105 10.4557M70.3569 12.4139L70.2663 12.3158L70.3569 12.4139C70.3569 12.4139 70.3569 12.4139 70.3569 12.4139ZM62.9105 10.4557C62.6899 9.66337 62.7655 8.83287 63.1527 8.10043L62.9105 10.4557Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.267165"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 207,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M53.7712 27.0632C54.5575 26.8525 55.8405 26.9054 55.8379 27.2526C55.8353 27.5998 55.1139 28.6352 54.4023 28.4562C53.6903 28.2777 52.985 27.2744 53.7712 27.0632Z",
                        fill: "#332B00"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 213,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M70.4404 52.0427C70.4404 52.0427 60.7418 47.6828 62.2351 42.9694C63.7292 38.2561 77.5309 35.9877 80.4593 42.7471C83.3876 49.5065 79.4019 50.5551 79.4019 50.5551C79.4019 50.5551 80.8513 63.5887 74.5831 64.9433C68.3274 65.7039 70.4404 52.0427 70.4404 52.0427Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 217,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M64.8959 48.6782C64.8959 48.6782 69.3681 52.8238 75.1309 51.7625",
                        stroke: "#633E36",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 221,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M68.2765 60.4045C69.1633 55.9526 70.4404 52.0427 70.4404 52.0427C70.4404 52.0427 60.7418 47.6828 62.2351 42.9694C63.7292 38.2561 77.5309 35.9877 80.4593 42.7471C83.3876 49.5065 79.4019 50.5551 79.4019 50.5551C79.4019 50.5551 79.9032 52.6204 80.1281 55.515",
                        stroke: "#332B00",
                        strokeWidth: "1.78243",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 228,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M67.5231 42.4059C67.5231 42.4059 67.5335 39.5629 69.75 38.8685",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 235,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M71.8815 42.7778C71.8815 42.7778 71.6558 38.4755 74.5151 38.4968",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 243,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M75.8896 43.8651C75.8896 43.8651 75.4054 40.0438 78.0155 40.2448",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 251,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M40.0168 51.7483C40.0168 51.7483 50.1109 48.4045 49.1081 43.5629C48.1045 38.7214 34.6076 35.0516 31.0025 41.4756C27.3974 47.8996 31.2547 49.3509 31.2547 49.3509C31.2547 49.3509 28.4784 62.1675 34.5749 64.1569C40.7199 65.5541 40.0168 51.7483 40.0168 51.7483Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 259,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M45.8767 48.9691C45.8767 48.9691 41.0035 52.635 35.3796 50.9892",
                        stroke: "#633E36",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 263,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M41.3131 60.2878C40.8869 55.7684 40.0168 51.7483 40.0168 51.7483C40.0168 51.7483 50.1109 48.4045 49.1081 43.5629C48.1045 38.7214 34.6076 35.0516 31.0025 41.4756C27.3974 47.8996 31.2547 49.3509 31.2547 49.3509C31.2547 49.3509 30.5446 51.3539 30.0245 54.2104C29.4833 57.1847 29.1481 61.085 30.0373 64.6128",
                        stroke: "#332B00",
                        strokeWidth: "1.78243",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 270,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.853 42.3853C43.853 42.3853 44.1338 39.5562 42 38.6384",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 277,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M39.532 42.3844C39.532 42.3844 40.197 38.1279 37.3506 37.8563",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 285,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35.4331 43.0556C35.4331 43.0556 36.3061 39.3039 33.6891 39.2366",
                        stroke: "#332B00",
                        strokeWidth: "1.29548",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 293,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M96.3492 53.381C96.3492 54.6136 96.7 55.7989 97.4705 56.7976C97.2352 57.0076 97.0256 57.2493 96.8496 57.5192C96.2375 58.4578 96.0415 59.7611 96.6694 60.9769C97.1421 61.892 97.8231 62.6407 98.662 63.2119L98.6619 63.2119L98.6711 63.2181C100.037 64.1402 101.646 64.4927 103.298 64.4927C104.511 64.4927 105.694 64.2939 106.79 63.8206C107.856 63.3621 108.807 62.6751 109.52 61.7094C110.265 60.7039 110.636 59.5372 110.636 58.3004C110.636 56.9307 110.193 55.6146 109.199 54.5691C109.356 54.3946 109.496 54.2038 109.617 53.9983C110.187 53.0267 110.309 51.7142 109.619 50.5411L107.347 51.8779L109.619 50.5411C109.187 49.8064 108.62 49.1827 107.944 48.6759C106.625 47.6822 105.021 47.3385 103.425 47.3385C102.27 47.3385 101.14 47.5322 100.087 47.9863C99.0549 48.4267 98.1354 49.0915 97.4405 50.0242L97.4405 50.0242C96.698 51.0207 96.3492 52.1764 96.3492 53.381ZM99.1711 60.8927C99.1711 60.8927 99.1715 60.8931 99.1724 60.8939L99.1711 60.8927Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 301,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M97.4647 60.6049L97.4684 60.5988C98.2499 59.3143 98.6086 57.8795 98.6086 56.3761V47.4507C98.6086 45.3541 96.909 43.6545 94.8124 43.6545C92.7158 43.6545 91.0161 45.3541 91.0161 47.4507V56.1889C91.0161 56.4844 90.9553 56.6444 90.9001 56.7421L90.8956 56.7502L90.8911 56.7583C90.8474 56.8369 90.7869 56.9114 90.637 56.9936C90.5306 57.0503 90.3083 57.1323 89.878 57.1323C89.4607 57.1323 89.2403 57.0534 89.1304 56.9957C88.9852 56.9145 88.9094 56.8326 88.8515 56.7343C88.7976 56.636 88.7399 56.4766 88.7399 56.1889V47.447C88.7399 45.3525 87.0419 43.6545 84.9474 43.6545C82.8528 43.6545 81.1549 45.3525 81.1549 47.447V56.3761C81.1549 57.8795 81.5136 59.3143 82.2951 60.5988L82.2951 60.5988L82.2988 60.6049C83.0701 61.8648 84.1488 62.8348 85.4589 63.5149L85.4589 63.5149L85.469 63.5201C86.8199 64.214 88.3156 64.5152 89.878 64.5152C91.4435 64.5152 92.9422 64.2147 94.2945 63.5201L94.2945 63.5201L94.3046 63.5149C95.6147 62.8348 96.6934 61.8648 97.4647 60.6049ZM95.973 47.4507L96.2875 47.4507L95.973 47.4507Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 307,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M66.3345 63.3945L66.3264 63.3896C65.0673 62.6325 64.1012 61.565 63.4428 60.2557L63.4388 60.2477L63.4349 60.2397C62.7831 58.9214 62.503 57.466 62.503 55.9493C62.503 54.4409 62.7855 52.9945 63.4298 51.6768L63.4349 51.6662L63.435 51.6662C64.0783 50.365 65.0133 49.2857 66.2413 48.5056L66.2476 48.5016L66.2476 48.5016C67.5207 47.698 68.9557 47.3385 70.4549 47.3385C71.4008 47.3385 72.3261 47.496 73.2179 47.8103C74.1881 48.1523 75.0516 48.6892 75.7954 49.3946L74.4315 50.8326L75.7954 49.3946C76.6119 50.169 77.1936 51.1182 77.5891 52.1554C78.0151 53.2673 78.1822 54.4919 78.1822 55.7546C78.1822 56.6075 77.8709 57.3876 77.3556 57.9876C77.8111 58.9731 77.8248 60.217 77.1133 61.3034C76.9061 61.6197 76.6726 61.9154 76.4155 62.19L66.3345 63.3945ZM66.3345 63.3945L66.3427 63.3993M66.3345 63.3945L66.3427 63.3993M72.6786 59.2502L72.6149 59.184L72.6786 59.2502ZM72.6786 59.2502L72.7012 59.2738L72.6786 59.2502ZM66.3427 63.3993C67.6393 64.1662 69.0978 64.4927 70.6122 64.4927C71.7156 64.4927 72.7953 64.3252 73.8072 63.9313L73.8072 63.9313M66.3427 63.3993L73.8072 63.9313M73.8072 63.9313L73.817 63.9274M73.8072 63.9313L73.817 63.9274M73.817 63.9274C74.7977 63.5411 75.6843 62.9714 76.4149 62.1907L73.817 63.9274ZM74.7717 60.923C74.7718 60.9231 74.7699 60.9251 74.766 60.9286C74.7697 60.9246 74.7717 60.9229 74.7717 60.923Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 313,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "path-49-outside-1_1474_4038",
                        maskUnits: "userSpaceOnUse",
                        x: "51.02",
                        y: "41.3684",
                        width: "18",
                        height: "26",
                        fill: "black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                fill: "white",
                                x: "51.02",
                                y: "41.3684",
                                width: "18",
                                height: "26"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                lineNumber: 328,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M62.4037 50.1239C62.8999 50.1239 63.3022 50.5262 63.3022 51.0224C63.3022 51.5186 62.8999 51.9209 62.4037 51.9209H57.9185C57.4223 51.9209 57.02 51.5186 57.02 51.0224C57.02 50.5262 57.4223 50.1239 57.9185 50.1239H62.4037ZM58.7047 48.4878C58.7047 47.8696 59.2059 47.3684 59.8242 47.3684C60.4424 47.3684 60.9436 47.8696 60.9436 48.4878V58.248C60.9436 58.6823 61.0085 59.0092 61.1382 59.2289C61.268 59.4435 61.4352 59.5908 61.6399 59.6707C61.8496 59.7455 62.0767 59.783 62.3213 59.783C62.501 59.783 62.6582 59.7705 62.793 59.7455C62.9678 59.7132 63.1379 59.8248 63.1759 59.9984L63.3891 60.9738C63.4597 61.2967 63.2813 61.6174 62.9577 61.6848C62.7181 61.7397 62.4186 61.7697 62.0592 61.7747C61.4702 61.7847 60.9211 61.6798 60.4119 61.4602C59.9028 61.2406 59.491 60.9011 59.1765 60.4419C58.862 59.9826 58.7047 59.4061 58.7047 58.7122V48.4878Z"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                lineNumber: 329,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 319,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M62.4037 50.1239C62.8999 50.1239 63.3022 50.5262 63.3022 51.0224C63.3022 51.5186 62.8999 51.9209 62.4037 51.9209H57.9185C57.4223 51.9209 57.02 51.5186 57.02 51.0224C57.02 50.5262 57.4223 50.1239 57.9185 50.1239H62.4037ZM58.7047 48.4878C58.7047 47.8696 59.2059 47.3684 59.8242 47.3684C60.4424 47.3684 60.9436 47.8696 60.9436 48.4878V58.248C60.9436 58.6823 61.0085 59.0092 61.1382 59.2289C61.268 59.4435 61.4352 59.5908 61.6399 59.6707C61.8496 59.7455 62.0767 59.783 62.3213 59.783C62.501 59.783 62.6582 59.7705 62.793 59.7455C62.9678 59.7132 63.1379 59.8248 63.1759 59.9984L63.3891 60.9738C63.4597 61.2967 63.2813 61.6174 62.9577 61.6848C62.7181 61.7397 62.4186 61.7697 62.0592 61.7747C61.4702 61.7847 60.9211 61.6798 60.4119 61.4602C59.9028 61.2406 59.491 60.9011 59.1765 60.4419C58.862 59.9826 58.7047 59.4061 58.7047 58.7122V48.4878Z",
                        fill: "#3D403A"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 331,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M61.1382 59.2289L56.6 61.9106L56.6136 61.9335L56.6274 61.9564L61.1382 59.2289ZM61.6399 59.6707L59.7236 64.5813L59.7949 64.6091L59.867 64.6349L61.6399 59.6707ZM62.0592 61.7747L61.986 56.5039L61.978 56.504L61.9699 56.5041L62.0592 61.7747ZM60.4119 61.4602L58.324 66.3004H58.324L60.4119 61.4602ZM59.1765 60.4419L54.8272 63.4202L54.8272 63.4202L59.1765 60.4419ZM63.1759 59.9984L58.0262 61.1242L63.1759 59.9984ZM62.4037 46.6496H57.9185V57.1922H62.4037V46.6496ZM57.9185 55.3952H62.4037V44.8526H57.9185V55.3952ZM55.6722 48.4878V58.248H66.2149V48.4878H55.6722ZM55.6722 58.248C55.6722 59.0423 55.7617 60.4919 56.6 61.9106L65.6765 56.5472C65.991 57.0794 66.1129 57.5417 66.1627 57.7927C66.2139 58.0508 66.2149 58.2179 66.2149 58.248H55.6722ZM56.6274 61.9564C57.2688 63.0171 58.2869 64.0207 59.7236 64.5813L63.5563 54.76C64.5836 55.1609 65.2673 55.8699 65.6491 56.5014L56.6274 61.9564ZM59.867 64.6349C60.6991 64.9321 61.532 65.0543 62.3213 65.0543V54.5116C62.6214 54.5116 63 54.559 63.4128 54.7064L59.867 64.6349ZM62.3213 65.0543C62.7299 65.0543 63.2215 65.0271 63.7529 64.9287L61.8332 54.5623C62.095 54.5139 62.2721 54.5116 62.3213 54.5116V65.0543ZM58.0262 61.1242L58.2394 62.0996L68.5388 59.848L68.3256 58.8725L58.0262 61.1242ZM61.7803 56.5467C61.917 56.5154 62.0057 56.5056 62.0289 56.5033C62.0545 56.5008 62.0429 56.5031 61.986 56.5039L62.1324 67.0455C62.7097 67.0375 63.4089 66.9894 64.1352 66.823L61.7803 56.5467ZM61.9699 56.5041C62.0175 56.5033 62.095 56.5068 62.1941 56.5257C62.2942 56.5448 62.3985 56.5763 62.4999 56.62L58.324 66.3004C59.5625 66.8347 60.859 67.0671 62.1486 67.0453L61.9699 56.5041ZM62.4999 56.62C62.6833 56.6991 62.882 56.815 63.0739 56.9732C63.2658 57.1314 63.4156 57.3027 63.5258 57.4636L54.8272 63.4202C55.7022 64.698 56.8966 65.6847 58.324 66.3004L62.4999 56.62ZM63.5258 57.4636C63.9453 58.0763 63.9761 58.6066 63.9761 58.7122H53.4334C53.4334 60.2056 53.7786 61.889 54.8272 63.4202L63.5258 57.4636ZM63.9761 58.7122V48.4878H53.4334V58.7122H63.9761ZM59.8242 52.6397C57.5311 52.6397 55.6722 50.7809 55.6722 48.4878H66.2149C66.2149 44.9583 63.3537 42.0971 59.8242 42.0971V52.6397ZM59.8242 42.0971C56.2946 42.0971 53.4334 44.9583 53.4334 48.4878H63.9761C63.9761 50.7808 62.1172 52.6397 59.8242 52.6397V42.0971ZM62.2913 51.0224C62.2913 53.4374 60.3336 55.3952 57.9185 55.3952V44.8526C54.511 44.8526 51.7487 47.6149 51.7487 51.0224H62.2913ZM57.9185 46.6496C60.3336 46.6496 62.2913 48.6074 62.2913 51.0224H51.7487C51.7487 54.4299 54.511 57.1922 57.9185 57.1922V46.6496ZM58.2394 62.0996C57.7738 59.9696 58.9408 57.1372 61.8826 56.5243L64.0328 66.8454C67.6217 66.0977 69.1456 62.6237 68.5388 59.848L58.2394 62.0996ZM58.0309 51.0224C58.0309 48.6074 59.9886 46.6496 62.4037 46.6496V57.1922C65.8112 57.1922 68.5735 54.4299 68.5735 51.0224H58.0309ZM63.7529 64.9287C61.1639 65.4082 58.6033 63.764 58.0262 61.1242L68.3256 58.8725C67.6725 55.8855 64.7716 54.0182 61.8332 54.5623L63.7529 64.9287ZM68.5735 51.0224C68.5735 47.6149 65.8112 44.8526 62.4037 44.8526V55.3952C59.9886 55.3952 58.0309 53.4374 58.0309 51.0224H68.5735Z",
                        fill: "#3D403A",
                        mask: "url(#path-49-outside-1_1474_4038)"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 335,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.6977 61.7344L43.6928 61.727C43.0178 60.6946 42.754 59.5301 42.754 58.3753C42.754 57.4037 42.9395 56.3652 43.4992 55.4248L45.3647 56.5352L43.4992 55.4248C43.7169 55.0591 43.972 54.7251 44.2614 54.4256C44.1158 54.2388 43.9879 54.0368 43.8807 53.8217C43.3642 52.7862 43.3413 51.4298 44.1526 50.2894M43.6977 61.7344L44.1526 50.2894M43.6977 61.7344L43.7026 61.7418C44.3271 62.6831 45.1766 63.3938 46.1855 63.8641L46.1939 63.868L46.2022 63.8718C47.1762 64.3175 48.2159 64.5152 49.2758 64.5152C50.155 64.5152 51.0537 64.3884 51.9008 64.044C51.9752 64.0138 52.0494 63.9822 52.1232 63.9493M43.6977 61.7344L52.1232 63.9493M44.1526 50.2894C44.4206 49.9127 44.7279 49.566 45.075 49.255L44.1526 50.2894ZM52.1232 63.9493C52.5578 64.1492 53.0415 64.2606 53.5512 64.2606H53.8582C55.9176 64.2606 57.5871 62.5911 57.5871 60.5317V53.9875C57.5871 52.8739 57.399 51.7121 56.8269 50.6738C56.3497 49.8033 55.6844 49.0444 54.8064 48.4929C54.0921 48.0414 53.3139 47.7275 52.4857 47.5584C51.8206 47.4172 51.1528 47.3385 50.4888 47.3385C49.5414 47.3385 48.613 47.4749 47.7159 47.7587C46.7327 48.0644 45.8442 48.5654 45.0761 49.2539L52.1232 63.9493ZM47.4323 50.5941C47.0648 50.5333 46.7801 50.619 46.6435 50.6791C46.5697 50.7116 46.5235 50.7425 46.5015 50.7585C46.479 50.7749 46.4683 50.7857 46.4652 50.7888C46.6752 50.5721 46.8993 50.3755 47.132 50.1969L47.4375 50.595M47.4323 50.5941C47.4341 50.5944 47.4358 50.5947 47.4375 50.595M47.4323 50.5941L47.5085 50.693L47.5216 50.71L47.4323 50.5941ZM47.4375 50.595C47.4668 50.6 47.4965 50.6058 47.5268 50.6127C47.5642 50.6213 47.6014 50.6312 47.6383 50.6426L47.5245 50.7083L47.5095 50.6888L47.4375 50.595ZM53.5512 62.4882L52.9281 61.8428L53.5512 62.4882ZM52.0537 53.8977L52.0214 53.8452L52.0537 53.8977Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 340,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M44.7934 50.7349C44.2491 49.6548 43.4337 48.7637 42.3486 48.1639C41.3091 47.5843 40.1685 47.3385 39.0103 47.3385C38.0573 47.3385 37.0952 47.4967 36.2005 47.8968C35.7045 47.6359 35.1396 47.4882 34.5402 47.4882H34.4016C32.3526 47.4882 30.6915 49.1493 30.6915 51.1984V60.5055C30.6915 62.5794 32.3727 64.2606 34.4466 64.2606C36.2636 64.2606 37.7793 62.9699 38.1267 61.2554C38.4742 62.9699 39.9898 64.2606 41.8069 64.2606C43.8808 64.2606 45.562 62.5794 45.562 60.5055V54.3095C45.562 53.0739 45.3522 51.844 44.7934 50.7349ZM38.239 54.4726C38.239 54.4726 38.2388 54.4732 38.2382 54.4745L38.239 54.4726Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 346,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M25.7549 57.0429L25.7516 57.0518L25.7484 57.0607C25.6939 57.2132 25.6394 57.2911 25.5981 57.3346C25.5728 57.3382 25.5325 57.342 25.4746 57.342C25.4138 57.342 25.3708 57.338 25.3434 57.3341C25.3399 57.3336 25.3368 57.3331 25.3338 57.3326C25.2897 57.2864 25.2324 57.2055 25.175 57.0513C25.0717 56.7589 25.0029 56.3902 25.0029 55.9193C25.0029 55.4537 25.0716 55.0862 25.1762 54.7914C25.2364 54.6272 25.2976 54.5402 25.3454 54.4898C25.3711 54.4859 25.4131 54.4817 25.4746 54.4817C25.526 54.4817 25.5627 54.4848 25.5867 54.4879C25.6313 54.5353 25.6892 54.6186 25.7462 54.7791L25.7505 54.7912L25.7549 54.8032C25.8612 55.0939 25.9314 55.457 25.9314 55.9193C25.9314 56.389 25.8605 56.7542 25.7549 57.0429ZM21.2637 63.3609C22.5393 64.1453 23.9726 64.4927 25.4671 64.4927C26.9617 64.4927 28.395 64.1453 29.6705 63.3609C30.9155 62.5954 31.8674 61.5242 32.5193 60.2204C33.1791 58.9009 33.464 57.4446 33.464 55.9268C33.464 54.4055 33.1796 52.9463 32.5219 51.6235C31.8712 50.3148 30.9193 49.2381 29.6705 48.4702C28.395 47.6859 26.9617 47.3385 25.4671 47.3385C23.9726 47.3385 22.5393 47.6859 21.2637 48.4702C20.015 49.2381 19.0631 50.3148 18.4123 51.6235C17.7547 52.9463 17.4703 54.4055 17.4703 55.9268C17.4703 57.4446 17.7552 58.9009 18.415 60.2204C19.0668 61.5242 20.0187 62.5954 21.2637 63.3609Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 352,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15.8274 63C17.389 62.1198 18.591 60.847 19.4003 59.2442C20.211 57.6486 20.5608 55.8484 20.5608 53.9351C20.5608 52.0302 20.2148 50.2374 19.4088 48.6504C18.6089 47.0603 17.4239 45.7925 15.8784 44.9185C14.3277 44.0366 12.5691 43.6545 10.707 43.6545H7.08545C4.80139 43.6545 2.94979 45.5061 2.94979 47.7902V60.1249C2.94979 62.409 4.80139 64.2606 7.08545 64.2606H10.5498C12.4517 64.2606 14.2451 63.8847 15.8194 63.0044L15.8194 63.0045L15.8274 63ZM12.6751 55.9245C12.5125 56.2782 12.3057 56.4949 12.0285 56.6553C11.768 56.8018 11.311 56.9532 10.5348 56.9666V50.9475H10.5648C11.3501 50.9475 11.8019 51.1001 12.0568 51.247C12.3036 51.3892 12.5051 51.5923 12.671 51.959L12.6709 51.959L12.6763 51.9708C12.8625 52.3769 13.0132 53.0007 13.0132 53.9351C13.0132 54.8802 12.8622 55.5125 12.6751 55.9245Z",
                        fill: "#3D403A",
                        stroke: "#3D403A",
                        strokeWidth: "5.27132"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 358,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M107.775 52.9318L105.746 53.2912C105.661 53.0316 105.527 52.7845 105.342 52.5499C105.162 52.3153 104.918 52.1231 104.608 51.9733C104.299 51.8236 103.912 51.7487 103.448 51.7487C102.814 51.7487 102.284 51.891 101.86 52.1755C101.436 52.455 101.224 52.8169 101.224 53.2612C101.224 53.6456 101.366 53.9551 101.65 54.1897C101.935 54.4243 102.394 54.6165 103.028 54.7662L104.855 55.1855C105.913 55.4301 106.702 55.807 107.221 56.3162C107.74 56.8253 108 57.4868 108 58.3004C108 58.9893 107.8 59.6033 107.401 60.1424C107.007 60.6765 106.455 61.0958 105.746 61.4003C105.042 61.7048 104.226 61.8571 103.298 61.8571C102.01 61.8571 100.959 61.5825 100.145 61.0334C99.3318 60.4793 98.8326 59.6931 98.6479 58.6748L100.812 58.3453C100.947 58.9094 101.224 59.3362 101.643 59.6257C102.062 59.9103 102.609 60.0525 103.283 60.0525C104.017 60.0525 104.603 59.9003 105.042 59.5958C105.482 59.2863 105.701 58.9094 105.701 58.4651C105.701 58.1057 105.567 57.8037 105.297 57.5591C105.032 57.3145 104.626 57.1298 104.077 57.005L102.13 56.5782C101.056 56.3337 100.263 55.9443 99.7486 55.4102C99.2395 54.876 98.9849 54.1997 98.9849 53.381C98.9849 52.7021 99.1746 52.1081 99.554 51.5989C99.9333 51.0898 100.457 50.6929 101.126 50.4084C101.795 50.1189 102.562 49.9741 103.425 49.9741C104.668 49.9741 105.646 50.2437 106.36 50.7828C107.074 51.3169 107.546 52.0332 107.775 52.9318Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 364,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M93.6518 46.2902H95.973V56.3761C95.973 57.4493 95.7209 58.4002 95.2167 59.2289C94.7126 60.0525 94.0037 60.7014 93.0902 61.1757C92.1767 61.6449 91.106 61.8795 89.878 61.8795C88.655 61.8795 87.5868 61.6449 86.6733 61.1757C85.7598 60.7014 85.051 60.0525 84.5468 59.2289C84.0426 58.4002 83.7905 57.4493 83.7905 56.3761V46.2902H86.1042V56.1889C86.1042 56.8827 86.2565 57.4992 86.561 58.0383C86.8705 58.5774 87.3072 59.0017 87.8713 59.3112C88.4354 59.6157 89.1043 59.768 89.878 59.768C90.6567 59.768 91.3281 59.6157 91.8922 59.3112C92.4613 59.0017 92.8955 58.5774 93.195 58.0383C93.4995 57.4992 93.6518 56.8827 93.6518 56.1889V46.2902Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 368,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M70.6122 61.8571C69.479 61.8571 68.5031 61.615 67.6845 61.1308C66.8708 60.6416 66.2419 59.9552 65.7976 59.0716C65.3583 58.1831 65.1387 57.1423 65.1387 55.9493C65.1387 54.7712 65.3583 53.7329 65.7976 52.8344C66.2419 51.9359 66.8608 51.2345 67.6545 50.7304C68.4532 50.2262 69.3867 49.9741 70.4549 49.9741C71.1039 49.9741 71.7328 50.0814 72.3418 50.2961C72.9508 50.5107 73.4974 50.8477 73.9816 51.3069C74.4658 51.7662 74.8477 52.3627 75.1272 53.0965C75.4068 53.8253 75.5465 54.7113 75.5465 55.7546V56.5483H66.4041V54.8711H73.3527C73.3527 54.282 73.2328 53.7604 72.9932 53.3061C72.7536 52.8469 72.4167 52.485 71.9824 52.2204C71.5531 51.9559 71.0489 51.8236 70.4699 51.8236C69.8409 51.8236 69.2918 51.9783 68.8226 52.2878C68.3584 52.5923 67.999 52.9917 67.7444 53.4858C67.4948 53.975 67.37 54.5067 67.37 55.0807V56.3911C67.37 57.1598 67.5048 57.8137 67.7743 58.3528C68.0489 58.8919 68.4308 59.3038 68.9199 59.5883C69.4091 59.8678 69.9807 60.0076 70.6346 60.0076C71.0589 60.0076 71.4458 59.9477 71.7952 59.8279C72.1446 59.7031 72.4466 59.5184 72.7012 59.2738C72.9558 59.0292 73.1505 58.7272 73.2853 58.3678L75.4043 58.7497C75.2345 59.3736 74.9301 59.9202 74.4908 60.3895C74.0565 60.8537 73.5099 61.2156 72.851 61.4752C72.197 61.7298 71.4508 61.8571 70.6122 61.8571Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 372,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M63.3022 50.1239V51.9209H57.02V50.1239H63.3022ZM58.7047 47.3684H60.9436V58.248C60.9436 58.6823 61.0085 59.0092 61.1382 59.2289C61.268 59.4435 61.4352 59.5908 61.6399 59.6707C61.8496 59.7455 62.0767 59.783 62.3213 59.783C62.501 59.783 62.6582 59.7705 62.793 59.7455C62.9278 59.7206 63.0326 59.7006 63.1075 59.6856L63.5118 61.5351C63.382 61.585 63.1973 61.6349 62.9577 61.6848C62.7181 61.7397 62.4186 61.7697 62.0592 61.7747C61.4702 61.7847 60.9211 61.6798 60.4119 61.4602C59.9028 61.2406 59.491 60.9011 59.1765 60.4419C58.862 59.9826 58.7047 59.4061 58.7047 58.7122V47.3684Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 376,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M49.2758 61.8795C48.547 61.8795 47.888 61.7447 47.299 61.4752C46.71 61.2006 46.2432 60.8038 45.8988 60.2846C45.5594 59.7655 45.3896 59.129 45.3896 58.3753C45.3896 57.7264 45.5144 57.1922 45.764 56.7729C46.0136 56.3536 46.3506 56.0217 46.7749 55.7771C47.1992 55.5325 47.6734 55.3478 48.1975 55.223C48.7217 55.0982 49.2558 55.0033 49.7999 54.9384C50.4888 54.8586 51.0478 54.7937 51.4771 54.7438C51.9064 54.6889 52.2184 54.6015 52.4131 54.4817C52.6078 54.3619 52.7051 54.1672 52.7051 53.8977V53.8452C52.7051 53.1913 52.5204 52.6847 52.151 52.3253C51.7866 51.9658 51.2425 51.7861 50.5187 51.7861C49.7649 51.7861 49.1709 51.9534 48.7366 52.2878C48.3073 52.6173 48.0103 52.9842 47.8456 53.3885L45.7416 52.9093C45.9912 52.2104 46.3556 51.6464 46.8348 51.2171C47.319 50.7828 47.8756 50.4683 48.5045 50.2736C49.1335 50.074 49.7949 49.9741 50.4888 49.9741C50.948 49.9741 51.4347 50.029 51.9489 50.1388C52.468 50.2437 52.9522 50.4384 53.4015 50.7229C53.8557 51.0074 54.2276 51.4142 54.5171 51.9434C54.8066 52.4675 54.9514 53.1489 54.9514 53.9875V61.6249H52.765V60.0525H52.6752C52.5304 60.3421 52.3132 60.6266 52.0237 60.9061C51.7342 61.1857 51.3623 61.4178 50.9081 61.6025C50.4538 61.7872 49.9097 61.8795 49.2758 61.8795ZM49.7624 60.0825C50.3814 60.0825 50.9106 59.9602 51.3498 59.7156C51.7941 59.471 52.1311 59.1515 52.3607 58.7572C52.5953 58.3578 52.7126 57.931 52.7126 57.4768V55.9942C52.6327 56.0741 52.478 56.149 52.2484 56.2188C52.0237 56.2837 51.7666 56.3411 51.4771 56.3911C51.1876 56.436 50.9056 56.4784 50.631 56.5183C50.3565 56.5533 50.1269 56.5832 49.9422 56.6082C49.5079 56.6631 49.111 56.7555 48.7516 56.8852C48.3972 57.015 48.1127 57.2022 47.898 57.4468C47.6884 57.6864 47.5835 58.0059 47.5835 58.4052C47.5835 58.9593 47.7882 59.3786 48.1975 59.6632C48.6069 59.9427 49.1285 60.0825 49.7624 60.0825Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 380,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35.566 54.7962V61.6249H33.3271V50.1239H35.4761V51.9958H35.6184C35.8829 51.3868 36.2973 50.8976 36.8613 50.5282C37.4304 50.1588 38.1467 49.9741 39.0103 49.9741C39.794 49.9741 40.4804 50.1388 41.0694 50.4683C41.6584 50.7928 42.1152 51.277 42.4396 51.9209C42.7641 52.5649 42.9263 53.361 42.9263 54.3095V61.6249H40.6875V54.579C40.6875 53.7454 40.4704 53.094 40.0361 52.6248C39.6018 52.1505 39.0053 51.9134 38.2465 51.9134C37.7274 51.9134 37.2657 52.0257 36.8613 52.2504C36.462 52.475 36.145 52.8045 35.9104 53.2387C35.6808 53.668 35.566 54.1872 35.566 54.7962Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 384,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M25.4671 61.8571C24.3889 61.8571 23.448 61.61 22.6443 61.1158C21.8406 60.6216 21.2166 59.9302 20.7724 59.0417C20.3281 58.1532 20.106 57.1149 20.106 55.9268C20.106 54.7338 20.3281 53.6905 20.7724 52.797C21.2166 51.9034 21.8406 51.2096 22.6443 50.7154C23.448 50.2212 24.3889 49.9741 25.4671 49.9741C26.5454 49.9741 27.4863 50.2212 28.29 50.7154C29.0937 51.2096 29.7176 51.9034 30.1619 52.797C30.6062 53.6905 30.8283 54.7338 30.8283 55.9268C30.8283 57.1149 30.6062 58.1532 30.1619 59.0417C29.7176 59.9302 29.0937 60.6216 28.29 61.1158C27.4863 61.61 26.5454 61.8571 25.4671 61.8571ZM25.4746 59.9777C26.1735 59.9777 26.7525 59.793 27.2118 59.4236C27.671 59.0542 28.0104 58.5625 28.2301 57.9485C28.4547 57.3345 28.567 56.6581 28.567 55.9193C28.567 55.1855 28.4547 54.5117 28.2301 53.8977C28.0104 53.2787 27.671 52.782 27.2118 52.4076C26.7525 52.0332 26.1735 51.846 25.4746 51.846C24.7708 51.846 24.1867 52.0332 23.7225 52.4076C23.2633 52.782 22.9213 53.2787 22.6967 53.8977C22.4771 54.5117 22.3672 55.1855 22.3672 55.9193C22.3672 56.6581 22.4771 57.3345 22.6967 57.9485C22.9213 58.5625 23.2633 59.0542 23.7225 59.4236C24.1867 59.793 24.7708 59.9777 25.4746 59.9777Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 388,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.5498 61.6249H5.58545V46.2902H10.707C12.2095 46.2902 13.4999 46.5972 14.5781 47.2111C15.6564 47.8201 16.4825 48.6962 17.0566 49.8393C17.6356 50.9774 17.9251 52.3427 17.9251 53.9351C17.9251 55.5324 17.6331 56.9052 17.0491 58.0533C16.47 59.2014 15.6314 60.0849 14.5332 60.7039C13.435 61.3179 12.1072 61.6249 10.5498 61.6249ZM7.89914 59.6032H10.4225C11.5906 59.6032 12.5615 59.3836 13.3352 58.9443C14.1089 58.5001 14.688 57.8586 15.0723 57.02C15.4567 56.1764 15.6489 55.1481 15.6489 53.9351C15.6489 52.7321 15.4567 51.7112 15.0723 50.8726C14.693 50.034 14.1264 49.3975 13.3726 48.9633C12.6189 48.529 11.6829 48.3118 10.5648 48.3118H7.89914V59.6032Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 392,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "29",
                height: "52",
                viewBox: "0 0 29 52",
                fill: "none",
                className: "md:hidden block  ",
                onClick: openModal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M36.1473 33.9607C36.1473 33.9607 24.4638 33.5392 24.316 31.4322C24.1682 29.3251 23.4788 18.6195 23.4788 18.6195C26.6968 16.8775 31.781 15.7471 35.4837 15.825L36.1473 15.8391L36.1473 33.9607Z",
                        fill: "#FFC25E"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 407,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M25.8147 31.3976C25.8147 31.3976 29.2782 31.7509 30.1265 29.2771C30.9748 26.803 27.0163 25.0361 27.0163 25.0361C27.0163 25.0361 31.1159 22.4206 30.2679 20.0882C29.4196 17.7555 24.4011 18.8866 24.4011 18.8866L25.8147 31.3976Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 411,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.18691 22.0813L0.374646 27.6223C2.41924 44.2148 18.0767 42.9537 18.0767 42.9537C27.1454 49.1352 33.346 35.0551 32.984 27.2717L32.7025 21.2242C32.3402 13.4411 28.5412 4.24551 17.669 7.77653C17.669 7.77653 -0.0948603 6.0211 0.18691 22.0813Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 415,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.8025 41.6475C27.8025 41.6475 33.5964 37.1418 32.9842 27.2718",
                        stroke: "#633E36",
                        strokeWidth: "1.00846",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 419,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1.48427 31.478C1.48427 31.478 3.91709 30.7177 3.99299 28.3611C4.06889 26.0045 1.86444 26.7645 1.86444 26.7645C1.86444 26.7645 3.99299 25.2442 3.61282 24.3317C3.23265 23.4196 1.56017 24.4838 1.56017 24.4838C1.56017 24.4838 3.76496 21.8992 3.53659 20.3785C3.30855 18.8582 0.875732 21.2148 0.875732 21.2148",
                        stroke: "#332B00",
                        strokeWidth: "0.864398",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 426,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M28.6927 48.6496C31.7814 44.3152 23.9419 42.5464 16.5269 40.1448C10.2494 38.1116 4.4239 34.945 4.26001 36.424C3.56247 42.72 22.9891 56.6533 28.6927 48.6496Z",
                        fill: "#FFDA1A"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 433,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.33838 37.638C9.33838 37.638 30.057 42.981 29.481 47.4294",
                        stroke: "#332B00",
                        strokeWidth: "1.00846",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 437,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.87172 11.9998C4.87172 11.9998 12.057 11.2414 18.9216 10.6671C25.8358 10.0888 32.4264 9.67608 31.3859 4.47325C29.3329 -5.79034 1.24432 9.27274 4.87172 11.9998Z",
                        fill: "#FFDA1A"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 445,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.40454 11.9109C7.40454 11.9109 14.0965 11.5099 19.746 10.8584C24.8108 10.2743 30.2856 9.95597 31.0352 7.22291",
                        stroke: "#332B00",
                        strokeWidth: "1.00846",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 449,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.03708 31.6538C8.37245 25.7651 19.6338 24.9951 20.1275 30.9945C20.6212 36.9943 9.58886 36.5419 9.03708 31.6538Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 457,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.7071 27.0587C12.7071 27.0587 8.42988 27.5185 9.04245 31.643C9.58114 35.2694 14.6694 35.6724 14.6694 35.6724",
                        stroke: "#332B00",
                        strokeWidth: "1.15339",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 461,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.8708 29.8552L17.8708 29.8552C17.8495 29.193 17.4737 28.6487 16.8639 28.2456C16.2507 27.8403 15.4212 27.5946 14.5661 27.5441C13.711 27.4935 12.8592 27.6397 12.201 27.9869C11.5497 28.3304 11.0962 28.8636 10.9847 29.6072M17.8708 29.8552L10.9847 29.6072M17.8708 29.8552C17.896 30.6387 17.4901 31.2072 16.8265 31.585C16.1518 31.9692 15.2247 32.1432 14.2897 32.1003C13.3546 32.0573 12.452 31.7993 11.8249 31.3628C11.2079 30.9335 10.8735 30.3489 10.9847 29.6072M17.8708 29.8552L10.6997 29.5645L10.9847 29.6072",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.576266"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 469,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.0604 32.0193C14.0604 32.0193 14.2535 30.3492 13.3844 29.7708C12.5153 29.1929 10.3909 29.0642 10.3909 29.0642C10.3909 29.0642 13.3362 29.1284 13.6742 28.2935C14.0122 27.4582 14.1571 26.302 14.1571 26.302C14.1571 26.302 14.5433 28.6787 15.0262 28.8073C15.5091 28.9359 17.8751 29.0642 17.8751 29.0642C17.8751 29.0642 15.2195 29.4498 14.8815 29.8995C14.5433 30.3488 14.0604 32.0193 14.0604 32.0193Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 475,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.58085 19.6393C8.57971 13.701 19.9643 12.2945 20.7982 18.3554C21.6321 24.4159 10.4121 24.5687 9.58085 19.6393Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 479,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.8851 22.9534C12.8851 22.9534 8.68609 21.8955 9.27247 18.5072C9.8978 14.8946 14.8998 14.4778 14.8998 14.4778",
                        stroke: "#332B00",
                        strokeWidth: "1.15339",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 483,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.5656 20.2813C11.6384 19.511 12.0516 18.9378 12.6553 18.5474C13.2656 18.1527 14.0688 17.9483 14.8847 17.942C15.7008 17.9357 16.502 18.1278 17.1064 18.4952C17.7057 18.8595 18.0995 19.3858 18.1586 20.0655C18.2286 20.8696 17.8641 21.4764 17.2499 21.9018C16.625 22.3347 15.7468 22.5716 14.85 22.5901C13.9527 22.6086 13.0769 22.4077 12.4566 22.0098C11.8486 21.6198 11.4929 21.0501 11.5656 20.2813Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.576266"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 491,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.5901 22.488C14.5901 22.488 14.491 20.8337 13.8963 20.6352C13.3015 20.4367 10.6753 20.1721 10.6753 20.1721C10.6753 20.1721 13.8963 19.7751 14.0944 19.3778C14.2926 18.9809 14.5901 16.9954 14.5901 16.9954C14.5901 16.9954 14.6892 19.444 15.036 19.5763C15.3828 19.7086 18.4056 20.0394 18.4056 20.0394C18.4056 20.0394 15.4323 20.3702 15.1846 20.7672C14.9369 21.1645 14.5901 22.488 14.5901 22.488Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 497,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.7686 25.1996C16.7854 18.906 24.5154 18.4993 24.8344 25.8135C25.1263 32.5051 16.7491 32.4393 16.7686 25.1996Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 501,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.4828 28.1146C22.9301 28.1616 22.0983 26.9612 21.9061 26.1923C22.4828 24.8466 23.2517 23.526 22.4828 23.8855C22.1984 24.0185 20.176 24.4622 20.176 25.8078C20.3683 27.7301 22.2309 28.0881 22.4828 28.1146Z",
                        fill: "#332B00"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 505,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.4826 27.73C22.4826 27.3455 21.9277 26.9813 21.9059 26.1921C21.877 25.1487 23.4179 24.4146 22.4826 24.2698C19.2147 25.9002 21.6813 27.0993 22.4826 27.73Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 509,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.4829 28.1145C22.9302 28.1615 22.2906 27.3456 21.9062 26.1922C21.5857 25.231 23.4439 24.2698 22.8673 23.6932C22.675 23.6932 20.2127 24.0776 20.1959 25.7929C20.1791 27.5082 22.231 28.088 22.4829 28.1145Z",
                        stroke: "#332B00",
                        strokeWidth: "0.432199",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 513,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.9079 38.6873C16.9079 38.6873 11.141 31.7669 21.4175 30.9451L16.9079 38.6873Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 520,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.3777 32.9344C20.0879 30.0424 24.333 34.4964 21.4988 37.4843C18.6647 40.4719 14.3182 36.1987 17.3777 32.9344Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 524,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.9079 38.4951C16.9079 38.4951 10.8743 32.5916 21.2501 30.2981",
                        stroke: "#332B00",
                        strokeWidth: "0.864398",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 528,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.2467 21.0437C22.2467 21.0437 13.1763 18.5982 17.869 11.967L22.2467 21.0437Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 536,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.1171 14.6769C18.0091 11.0639 23.502 12.5742 22.553 16.3225C21.6039 20.0708 16.1102 18.7553 17.1171 14.6769Z",
                        fill: "#ED7A85"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 540,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21.5561 21.1941C21.5561 21.1941 13.0506 18.3193 17.7433 11.6882",
                        stroke: "#332B00",
                        strokeWidth: "0.864398",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 544,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.63358 30.8739L8.63358 30.8739C9.14159 31.7661 8.93226 32.8001 8.29826 33.5519C8.15965 33.7162 7.95088 33.7013 7.81859 33.6142C7.75174 33.5702 7.69588 33.5031 7.67635 33.4204C7.65602 33.3343 7.67792 33.2432 7.74596 33.1626L8.63358 30.8739ZM8.63358 30.8739C8.186 30.0879 7.34586 29.5568 6.45231 29.4575L6.4523 29.4575M8.63358 30.8739L6.4523 29.4575M6.4523 29.4575C5.93035 29.3997 5.39342 29.5075 4.93938 29.7755L4.93933 29.7755M6.4523 29.4575L4.93933 29.7755M4.93933 29.7755C4.75263 29.8858 4.73707 30.0941 4.80591 30.2376C4.84063 30.31 4.89983 30.3743 4.97904 30.4059C5.06112 30.4386 5.15501 30.4321 5.24602 30.3785L5.24606 30.3785M4.93933 29.7755L5.24606 30.3785M5.24606 30.3785C5.85356 30.0199 6.60062 30.0514 7.21517 30.3989L7.21519 30.3989M5.24606 30.3785L7.21519 30.3989M7.21519 30.3989C7.78904 30.7232 8.26083 31.3066 8.25155 31.9719M7.21519 30.3989L8.25155 31.9719M8.25155 31.9719C8.24513 32.4198 8.03944 32.8149 7.74598 33.1626L8.25155 31.9719Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.17288"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 552,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.84605 18.3013L8.84605 18.3013C9.19858 17.2607 8.95838 16.1952 8.21652 15.3921C8.14497 15.3146 8.05724 15.2815 7.96929 15.2914C7.88484 15.3009 7.81179 15.3487 7.76035 15.4099C7.6587 15.5308 7.61867 15.7363 7.76362 15.8935L7.76368 15.8936C8.07919 16.235 8.2858 16.6678 8.32902 17.1287C8.38991 17.7809 8.08475 18.5506 7.58317 19.0618C7.08414 19.5704 6.40826 19.8086 5.71767 19.4438C5.62428 19.3944 5.52996 19.3921 5.44892 19.427C5.37044 19.4608 5.31201 19.526 5.27827 19.599C5.21121 19.7441 5.23178 19.9515 5.42529 20.0538C5.89924 20.3044 6.43663 20.3533 6.94932 20.2106L8.84605 18.3013ZM8.84605 18.3013C8.55619 19.1565 7.84991 19.9605 6.94935 20.2106L8.84605 18.3013Z",
                        fill: "#332B00",
                        stroke: "#332B00",
                        strokeWidth: "0.17288"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 558,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.696 26.1246C17.5596 25.6158 17.5939 24.7856 17.8186 24.7873C18.0432 24.789 18.7132 25.2558 18.5974 25.7162C18.4819 26.177 17.8327 26.6334 17.696 26.1246Z",
                        fill: "#332B00"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 564,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M33.86 15.3385C33.86 15.3385 31.0387 21.6144 27.9887 20.6481C24.9388 19.6813 23.4709 10.7503 27.8449 8.85539C32.2188 6.96047 32.8974 9.53958 32.8974 9.53958C32.8974 9.53958 41.3313 8.6017 42.2078 12.6578C42.7 16.7058 33.86 15.3385 33.86 15.3385Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 568,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M39.2708 16.7387C36.39 16.1649 33.86 15.3385 33.86 15.3385C33.86 15.3385 31.0387 21.6144 27.9887 20.6481C24.9388 19.6813 23.4709 10.7503 27.8449 8.85539C32.2188 6.96047 32.8974 9.53958 32.8974 9.53958C32.8974 9.53958 34.2338 9.2152 36.1069 9.06965",
                        stroke: "#332B00",
                        strokeWidth: "1.15339",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 572,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.624 17.2259C27.624 17.2259 25.7843 17.2192 25.335 15.7849",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 579,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.8647 14.4058C27.8647 14.4058 25.0807 14.5519 25.0945 12.7017",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 587,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M28.5685 11.8122C28.5685 11.8122 26.0957 12.1256 26.2258 10.4366",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 595,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M33.6694 35.0253C33.6694 35.0253 31.5057 28.4936 28.3728 29.1425C25.2398 29.7919 22.8652 38.5256 27.0221 40.8584C31.179 43.1912 32.1181 40.6952 32.1181 40.6952C32.1181 40.6952 40.4116 42.4917 41.6989 38.5468C42.603 34.5704 33.6694 35.0253 33.6694 35.0253Z",
                        fill: "#FFF3B8"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 603,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M39.1952 34.1865C36.2708 34.4623 33.6694 35.0253 33.6694 35.0253C33.6694 35.0253 31.5057 28.4936 28.3728 29.1425C25.2398 29.7919 22.8652 38.5256 27.0221 40.8584C31.179 43.1912 32.1181 40.6952 32.1181 40.6952C32.1181 40.6952 33.4143 41.1547 35.2626 41.4913C37.1873 41.8415 39.7111 42.0584 41.9939 41.483",
                        stroke: "#332B00",
                        strokeWidth: "1.15339",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 607,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.6108 32.5431C27.6108 32.5431 25.7802 32.3614 25.1863 33.7422",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 614,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.6103 35.3389C27.6103 35.3389 24.8559 34.9086 24.6802 36.7505",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 622,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M28.0447 37.9913C28.0447 37.9913 25.617 37.4264 25.5735 39.1198",
                        stroke: "#332B00",
                        strokeWidth: "0.83829",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                        lineNumber: 630,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                lineNumber: 398,
                columnNumber: 4
            }, this),
            isOpenModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-[414px] w-[300px] fixed flex flex-col bg-white rounded-lg border-[#2f2f2f] text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full justify-center items-center px-[130px] pt-6 pb-0 gap-[10px] bg-[#FFF9DB] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-none rounded-br-none ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute flex md:w-[130px] md:px-[10px] px-[8px] md:py-2 py-1 items-center justify-center bg-[#3D403A] rounded-[55px] md:left-[24px] left-[14px] md:top-[22px] top-[13px] md:text-[12px] text-[10px] text-white font-normal leading-[14px]",
                                    children: "Donate us, please.."
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 644,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute md:left-20 md:top-[46px] left-[52px] top-8 ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "36",
                                        height: "22",
                                        viewBox: "0 0 36 22",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M34.7241 21.9287C1.81379 23.1938 -0.717678 7.30955 0.126174 0H11.9402C3.07956 21.9287 43.5844 19.3984 34.7241 21.9287Z",
                                            fill: "#3D403A"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 655,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                        lineNumber: 648,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 647,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-4 top-4 cursor-pointer",
                                    onClick: openModal,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 6L6 18",
                                                stroke: "black",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                lineNumber: 672,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 6L18 18",
                                                stroke: "black",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                        lineNumber: 665,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 661,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "210",
                                            height: "123",
                                            viewBox: "0 0 210 123",
                                            fill: "none",
                                            className: "md:block hidden md:w-[210px] md:h-[123px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                    id: "mask0_1403_5876",
                                                    maskUnits: "userSpaceOnUse",
                                                    x: "0",
                                                    y: "0",
                                                    width: "210",
                                                    height: "123",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: "210",
                                                        height: "123",
                                                        fill: "#D9D9D9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    mask: "url(#mask0_1403_5876)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M71.2148 144.169C71.2148 144.169 72.8712 98.2538 81.1518 97.6731C89.4324 97.0924 131.505 94.3828 131.505 94.3828C138.351 107.029 142.793 127.01 142.487 141.561L142.431 144.169H71.2148Z",
                                                            fill: "#FFC25E"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 708,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M81.2873 103.562C81.2873 103.562 79.8988 117.174 89.6207 120.507C99.3439 123.841 106.287 108.284 106.287 108.284C106.287 108.284 116.566 124.396 125.733 121.063C134.9 117.729 130.455 98.007 130.455 98.007L81.2873 103.562Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M106.632 117.071C110.403 116.891 110.044 123.356 106.093 122.816C102.143 122.278 102.861 117.25 106.632 117.071Z",
                                                            fill: "#633E36"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M117.9 2.84824L96.1237 3.58603C30.9162 11.6211 35.8722 73.1542 35.8722 73.1542C11.5794 108.794 66.9132 133.162 97.5016 131.739L121.268 130.633C151.855 129.209 187.993 114.279 174.116 71.5519C174.116 71.5519 181.015 1.7409 117.9 2.84824Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M117.231 130.798C117.231 130.798 150.581 130.065 163.041 117.972",
                                                            stroke: "#633E36",
                                                            strokeWidth: "2.62304",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M41.0059 111.375C41.0059 111.375 58.7127 134.145 97.5011 131.739",
                                                            stroke: "#633E36",
                                                            strokeWidth: "2.62304",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M80.9707 7.94609C80.9707 7.94609 83.9588 17.5069 93.22 17.8052C102.481 18.1035 99.4945 9.44014 99.4945 9.44014C99.4945 9.44014 105.469 17.8052 109.055 16.3112C112.64 14.8171 108.457 8.24437 108.457 8.24437C108.457 8.24437 118.615 16.9091 124.591 16.0116C130.566 15.1154 121.305 5.55457 121.305 5.55457",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.24832",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M13.4884 114.874C30.5221 127.012 37.4737 96.2035 46.9118 67.063C54.902 42.3928 67.3467 19.499 61.5341 18.8549C36.7913 16.1136 -17.9657 92.4591 13.4884 114.874Z",
                                                            fill: "#FFDA1A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M56.7628 38.812C56.7628 38.812 32.9425 128.599 18.2832 117.971",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.62304",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M157.519 21.2585C157.519 21.2585 160.499 49.4962 162.756 76.4735C165.028 103.646 166.65 129.546 187.097 125.458C227.433 117.39 168.236 7.003 157.519 21.2585Z",
                                                            fill: "#FFDA1A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M157.868 31.2124C157.868 31.2124 159.444 57.5113 162.005 79.7135C164.3 99.6178 165.551 121.134 176.292 124.08",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.62304",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M80.2812 37.6284C103.423 35.0165 106.449 79.2729 82.872 81.2131C59.2932 83.1532 61.071 39.7969 80.2812 37.6284Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M98.3402 52.0514C98.3402 52.0514 96.5334 35.242 80.3246 37.6494C66.0731 39.7664 64.4893 59.7631 64.4893 59.7631",
                                                            stroke: "#332B00",
                                                            strokeWidth: "3",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M88.3808 44.9039C91.4468 45.3636 93.6356 47.2392 95.0306 49.884C96.4349 52.5466 97.0162 55.9675 96.8144 59.38C96.6125 62.7922 95.632 66.1213 93.9946 68.5985C92.3629 71.0671 90.122 72.6384 87.3619 72.7271C84.1102 72.8317 81.7575 71.1324 80.2186 68.4299C78.6634 65.6987 77.973 61.9777 78.144 58.2535C78.315 54.5288 79.3427 50.9058 81.1103 48.3657C82.8595 45.8522 85.2884 44.4403 88.3808 44.9039Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.49888"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M78.8447 52.4156C78.8447 52.4156 85.4082 53.4253 87.681 48.8811C89.9524 44.3369 90.4579 33.2292 90.4579 33.2292C90.4579 33.2292 90.2058 48.629 93.4869 50.3963C96.7693 52.1635 101.313 52.9211 101.313 52.9211C101.313 52.9211 91.9731 54.9404 91.4676 57.4653C90.9621 59.9901 90.4579 72.3609 90.4579 72.3609C90.4579 72.3609 88.9428 58.4763 87.1755 56.709C85.4096 54.9404 78.8447 52.4156 78.8447 52.4156Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M127.497 39.765C150.834 35.8306 156.361 80.5715 132.542 83.8486C108.725 87.1257 108.124 43.0315 127.497 39.765Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M114.473 52.7509C114.473 52.7509 118.63 36.249 131.946 38.5535C146.143 41.011 147.781 60.6685 147.781 60.6685",
                                                            stroke: "#332B00",
                                                            strokeWidth: "3",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M125.854 73.8572C122.534 74.146 120.025 72.628 118.29 70.1225C116.535 67.5891 115.59 64.0589 115.517 60.4808C115.443 56.9017 116.242 53.3789 117.858 50.8603C119.453 48.3737 121.819 46.8829 125.009 47.1843C128.171 47.4832 130.521 49.185 132.109 51.6401C133.707 54.1123 134.524 57.344 134.549 60.6065C134.575 63.8693 133.807 67.0913 132.32 69.5392C130.84 71.9741 128.674 73.6119 125.854 73.8572ZM125.854 73.8572L125.919 74.6039L125.854 73.8572Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.49888"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M116.302 54.4218C116.302 54.4218 122.803 53.9017 123.583 50.7803C124.363 47.6589 125.403 33.876 125.403 33.876C125.403 33.876 126.963 50.7803 128.525 51.8204C130.085 52.8604 137.888 54.4218 137.888 54.4218C137.888 54.4218 128.265 54.9418 127.745 56.7618C127.225 58.5818 125.925 74.4462 125.925 74.4462C125.925 74.4462 124.625 58.8419 123.065 57.5418C121.503 56.2418 116.302 54.4218 116.302 54.4218Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M105.645 68.0133C130.379 68.0793 131.977 98.4578 103.232 99.7116C76.9347 100.859 77.1934 67.9368 105.645 68.0133Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M94.1898 90.4684C94.0051 92.2264 98.7229 88.9575 101.744 88.2021C107.033 90.4684 112.223 93.4903 110.81 90.4685C110.287 89.3506 108.544 81.403 103.255 81.403C95.7008 82.1584 94.2941 89.4785 94.1898 90.4684Z",
                                                            fill: "#332B00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M95.7012 90.4685C97.2121 90.4685 98.6432 88.2879 101.745 88.2021C105.846 88.0886 108.731 94.1442 109.299 90.4685C102.892 77.6257 98.1798 87.3194 95.7012 90.4685Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M94.1892 90.4689C94.0045 92.2269 97.2112 89.7134 101.744 88.2024C105.521 86.9432 109.299 94.2458 111.565 91.9797C111.565 91.224 110.054 81.5471 103.313 81.4812C96.572 81.4154 94.2935 89.479 94.1892 90.4689Z",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.12416",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M52.6396 68.5602C52.6396 68.5602 79.8362 45.8964 83.0657 86.2825L52.6396 68.5602Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M75.2489 70.4061C86.614 81.0571 69.1104 97.7398 57.3679 86.6017C45.6267 75.4637 62.4202 58.3825 75.2489 70.4061Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 832,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M53.3955 68.56C53.3955 68.56 76.596 44.8487 85.6092 85.6248",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.24832",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M121.979 89.5413C121.979 89.5413 131.589 53.8954 157.649 72.3374L121.979 89.5413Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M146.999 69.3824C161.197 72.8878 155.262 94.475 140.531 90.7452C125.801 87.0153 130.971 65.4255 146.999 69.3824Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M121.387 86.8278C121.387 86.8278 132.684 53.4018 158.744 71.8438",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.24832",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M83.2895 35.9437L83.2896 35.9437C86.345 34.2038 88.4122 30.9353 88.7983 27.4586L88.7983 27.4586C89.0231 25.431 88.604 23.346 87.5642 21.584L87.5641 21.5838C87.1681 20.9137 86.4208 20.8532 85.8965 21.1046C85.6327 21.2312 85.4036 21.4445 85.2922 21.724C85.1778 22.011 85.1979 22.3428 85.3922 22.6723L85.3923 22.6725C86.8248 25.0995 86.6964 28.0795 85.3131 30.5259L85.3131 30.5259C84.0264 32.8028 81.7007 34.6944 79.0297 34.6571C77.2332 34.6313 75.6559 33.8062 74.2777 32.6431C73.9861 32.3968 73.6645 32.3228 73.3651 32.3935C73.0744 32.4621 72.8335 32.6601 72.6729 32.9039C72.3544 33.3878 72.3054 34.1398 72.8961 34.638L73.0411 34.4661L72.8961 34.638C75.8219 37.1053 79.8334 37.9116 83.2895 35.9437Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.449665"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M132.792 36.7693L132.792 36.7694C136.841 38.1409 140.985 37.2074 144.111 34.3197C144.391 34.0606 144.504 33.7509 144.47 33.4454C144.437 33.149 144.268 32.887 144.045 32.6994C143.602 32.3272 142.861 32.1878 142.296 32.7087L142.296 32.7089C140.937 33.9643 139.213 34.7882 137.375 34.9606C134.773 35.2036 131.716 33.9884 129.686 31.9971C127.664 30.0125 126.7 27.3027 128.164 24.5303L132.792 36.7693ZM132.792 36.7693C129.459 35.6396 126.333 32.8883 125.363 29.3935L132.792 36.7693ZM125.363 29.3934C124.809 27.4055 124.999 25.324 125.97 23.4885C126.336 22.7951 127.078 22.7166 127.607 22.9613C127.873 23.0841 128.106 23.295 128.226 23.573C128.349 23.8577 128.343 24.192 128.164 24.5301L125.363 29.3934Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.449665"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M102.01 71.6575C104.01 71.1216 107.273 71.2562 107.266 72.1392C107.259 73.0222 105.425 75.6552 103.615 75.1999C101.804 74.7459 100.011 72.1946 102.01 71.6575Z",
                                                            fill: "#332B00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M144.399 135.181C144.399 135.181 119.735 124.094 123.533 112.107C127.332 100.121 162.43 94.3526 169.877 111.542C177.324 128.731 167.188 131.398 167.188 131.398C167.188 131.398 170.874 164.543 154.934 167.988C139.026 169.922 144.399 135.181 144.399 135.181Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M138.896 156.445C141.151 145.124 144.399 135.181 144.399 135.181C144.399 135.181 119.735 124.094 123.533 112.107C127.332 100.121 162.43 94.3526 169.877 111.542C177.324 128.731 167.188 131.398 167.188 131.398C167.188 131.398 168.463 136.65 169.035 144.011C169.63 151.676 169.462 161.63 166.294 170.322",
                                                            stroke: "#332B00",
                                                            strokeWidth: "3",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M136.995 111.337C136.995 111.337 137.021 104.107 142.658 102.341",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 885,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M148.063 111.62C148.063 111.62 147.489 100.679 154.761 100.733",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M158.258 114.385C158.258 114.385 157.026 104.667 163.664 105.179",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M67.0315 134.432C67.0315 134.432 92.701 125.929 90.1508 113.617C87.5987 101.305 53.2758 91.9723 44.1079 108.309C34.9399 124.645 44.7493 128.336 44.7493 128.336C44.7493 128.336 37.6889 160.929 53.1925 165.988C68.8194 169.541 67.0315 134.432 67.0315 134.432Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M70.3279 156.148C69.2441 144.656 67.0315 134.432 67.0315 134.432C67.0315 134.432 92.701 125.929 90.1508 113.617C87.5987 101.305 53.2758 91.9723 44.1079 108.309C34.9399 124.645 44.7493 128.336 44.7493 128.336C44.7493 128.336 42.9435 133.43 41.6207 140.693C40.2445 148.257 39.3921 158.176 41.6532 167.147",
                                                            stroke: "#332B00",
                                                            strokeWidth: "3",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 910,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M76.8381 111.472C76.8381 111.472 77.5522 104.277 72.126 101.943",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 917,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M65.7993 110.62C65.7993 110.62 67.4906 99.7956 60.252 99.1049",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M55.3757 112.327C55.3757 112.327 57.5956 102.786 50.9406 102.615",
                                                            stroke: "#332B00",
                                                            strokeWidth: "2.18041",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 689,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "128",
                                            height: "75",
                                            viewBox: "0 0 128 75",
                                            fill: "none",
                                            className: "md:hidden block w-[128px] h-[75px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                    id: "mask0_1403_9311",
                                                    maskUnits: "userSpaceOnUse",
                                                    x: "0",
                                                    y: "0",
                                                    width: "128",
                                                    height: "75",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: "128",
                                                        height: "75",
                                                        fill: "#D9D9D9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    mask: "url(#mask0_1403_9311)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M43.7637 92.1994C43.7637 92.1994 44.8048 63.3382 50.0098 62.9732C55.2147 62.6082 81.6601 60.905 81.6601 60.905C85.9632 68.8543 88.7557 81.4137 88.5632 90.5601L88.5284 92.1994H43.7637Z",
                                                            fill: "#FFC25E"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M50.0948 66.6749C50.0948 66.6749 49.2221 75.2307 55.333 77.3262C61.4447 79.4218 65.8092 69.6433 65.8092 69.6433C65.8092 69.6433 72.2702 79.7703 78.0318 77.6755C83.7943 75.5799 81.0002 63.1831 81.0002 63.1831L50.0948 66.6749Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M73.1085 3.36903L59.4208 3.83279C18.4333 8.88343 21.5485 47.5613 21.5485 47.5613C6.27874 69.9632 41.06 85.2802 60.2869 84.3859L75.2257 83.6907C94.4518 82.7955 117.167 73.411 108.445 46.5542C108.445 46.5542 112.781 2.67299 73.1085 3.36903Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M24.7749 71.5857C24.7749 71.5857 35.9049 85.8981 60.2862 84.3857",
                                                            stroke: "#633E36",
                                                            strokeWidth: "1.64877",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M49.896 6.57356C49.896 6.57356 51.7742 12.5832 57.5956 12.7707C63.4169 12.9582 61.5395 7.51267 61.5395 7.51267C61.5395 7.51267 65.2952 12.7707 67.5492 11.8316C69.8024 10.8925 67.1734 6.76105 67.1734 6.76105C67.1734 6.76105 73.558 12.2074 77.3145 11.6433C81.0701 11.08 75.2488 5.07031 75.2488 5.07031",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.41323",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.47855 73.7849C18.1854 81.4148 22.555 62.0493 28.4875 43.7324C33.5099 28.2254 41.3323 13.8351 37.6787 13.4302C22.1261 11.7072 -12.2926 59.6957 7.47855 73.7849Z",
                                                            fill: "#FFDA1A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 986,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M34.6798 25.9749C34.6798 25.9749 19.7071 82.4122 10.4927 75.7322",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.64877",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 990,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M98.012 14.9412C98.012 14.9412 99.8852 32.6906 101.304 49.6478C102.732 66.7277 103.752 83.0079 116.604 80.4378C141.958 75.3664 104.748 5.98061 98.012 14.9412Z",
                                                            fill: "#FFDA1A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M98.2317 21.1978C98.2317 21.1978 99.2222 37.7285 100.832 51.6841C102.274 64.1954 103.061 77.7197 109.812 79.5714",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.64877",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M49.4623 25.231C64.0086 23.5892 65.9109 51.4076 51.0908 52.6271C36.2699 53.8466 37.3874 26.5941 49.4623 25.231Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M60.8139 34.2967C60.8139 34.2967 59.6781 23.7308 49.4898 25.244C40.5317 26.5747 39.5361 39.1441 39.5361 39.1441",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.88571",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M54.5535 29.8041C56.4806 30.0931 57.8565 31.272 58.7333 32.9345C59.616 34.6081 59.9814 36.7583 59.8545 38.9034C59.7277 41.0482 59.1113 43.1407 58.0821 44.6978C57.0565 46.2496 55.6479 47.2372 53.913 47.293C51.8691 47.3587 50.3902 46.2906 49.4229 44.5919C48.4454 42.8751 48.0114 40.5362 48.1189 38.1953C48.2264 35.8541 48.8723 33.5767 49.9834 31.9801C51.0829 30.4002 52.6096 29.5127 54.5535 29.8041Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.942154"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M48.5598 34.5256C48.5598 34.5256 52.6855 35.1602 54.114 32.3039C55.5418 29.4476 55.8595 22.4656 55.8595 22.4656C55.8595 22.4656 55.7011 32.1454 57.7635 33.2563C59.8267 34.3671 62.683 34.8433 62.683 34.8433C62.683 34.8433 56.8119 36.1126 56.4942 37.6996C56.1764 39.2867 55.8595 47.0626 55.8595 47.0626C55.8595 47.0626 54.9071 38.3351 53.7963 37.2243C52.6863 36.1126 48.5598 34.5256 48.5598 34.5256Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M79.1407 26.5738C93.8098 24.1008 97.2842 52.2236 82.3123 54.2835C67.3412 56.3434 66.9638 28.6271 79.1407 26.5738Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1029,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M70.9543 34.7364C70.9543 34.7364 73.5676 24.3638 81.9375 25.8123C90.8616 27.357 91.8911 39.7132 91.8911 39.7132",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.88571",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1033,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M77.5772 31.2375C79.5644 31.4254 81.0417 32.4951 82.0397 34.0383C83.0446 35.5923 83.558 37.6236 83.5738 39.6743C83.5896 41.7253 83.1074 43.7505 82.1722 45.2892C81.242 46.8197 79.8804 47.8491 78.1084 48.0034C76.021 48.1849 74.4445 47.2307 73.3535 45.6559C72.2503 44.0634 71.6568 41.8444 71.6104 39.5954C71.564 37.3456 72.0665 35.1313 73.0821 33.5482C74.0847 31.9852 75.5721 31.0481 77.5772 31.2375Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.942154"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1040,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M72.1038 35.7868C72.1038 35.7868 76.1904 35.4599 76.6807 33.4979C77.171 31.5359 77.8247 22.8723 77.8247 22.8723C77.8247 22.8723 78.8053 33.4979 79.7867 34.1516C80.7673 34.8054 85.672 35.7868 85.672 35.7868C85.672 35.7868 79.6233 36.1137 79.2964 37.2577C78.9696 38.4017 78.1524 48.3736 78.1524 48.3736C78.1524 48.3736 77.3353 38.5651 76.3547 37.748C75.3732 36.9308 72.1038 35.7868 72.1038 35.7868Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1046,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M65.4052 44.3299C80.9521 44.3714 81.9567 63.4664 63.8887 64.2546C47.3588 64.9755 47.5214 44.2818 65.4052 44.3299Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M58.205 58.4446C58.0888 59.5497 61.0543 57.4949 62.9536 57.0201C66.2778 58.4446 69.54 60.3441 68.6519 58.4447C68.3234 57.742 67.2274 52.7463 63.9033 52.7463C59.1547 53.2212 58.2705 57.8224 58.205 58.4446Z",
                                                            fill: "#332B00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1054,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M59.155 58.4445C60.1047 58.4445 61.0043 57.0738 62.9539 57.0199C65.5315 56.9486 67.3449 60.7549 67.7025 58.4445C63.675 50.3719 60.713 56.4651 59.155 58.4445Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M58.205 58.4448C58.0888 59.5498 60.1045 57.9699 62.9536 57.0202C65.328 56.2287 67.7023 60.8189 69.1266 59.3945C69.1266 58.9194 68.1771 52.8368 63.9399 52.7954C59.7027 52.754 58.2705 57.8226 58.205 58.4448Z",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.706616",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1062,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M32.0879 44.6736C32.0879 44.6736 49.1829 30.4278 51.2128 55.8133L32.0879 44.6736Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1069,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M46.2992 45.834C53.4429 52.5289 42.4407 63.0151 35.0597 56.0141C27.6795 49.013 38.2354 38.2762 46.2992 45.834Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M32.5627 44.6736C32.5627 44.6736 47.1459 29.7693 52.8113 55.4",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.41323",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M75.6719 57.8619C75.6719 57.8619 81.7129 35.4559 98.0935 47.048L75.6719 57.8619Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1084,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M91.3989 45.1902C100.324 47.3937 96.5931 60.9627 87.3339 58.6183C78.0746 56.2738 81.3242 42.7031 91.3989 45.1902Z",
                                                            fill: "#ED7A85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M75.3 56.1562C75.3 56.1562 82.4015 35.1456 98.7821 46.7377",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.41323",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1092,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M45.689 22.0972C45.5057 21.9424 45.3035 21.8959 45.1153 21.9403C44.9326 21.9834 44.7811 22.1079 44.6802 22.2611C44.48 22.5653 44.4492 23.0379 44.8205 23.3511C46.6596 24.902 49.1811 25.4088 51.3535 24.1719L51.3535 24.1719L48.676 23.3631L48.674 23.5044L48.6759 23.3631C47.5467 23.3469 46.5553 22.8283 45.689 22.0972ZM45.689 22.0972L45.5978 22.2052L45.6889 22.0972C45.689 22.0972 45.689 22.0972 45.689 22.0972Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.282646"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1099,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M82.4692 24.6908L82.4692 24.6908L77.7992 20.0545C77.4514 18.805 77.5708 17.4966 78.1807 16.3428C78.411 15.907 78.8773 15.8577 79.2101 16.0114C79.3772 16.0887 79.5236 16.2212 79.5989 16.396C79.6759 16.5749 79.6724 16.7851 79.5599 16.9976C78.6394 18.7403 79.2453 20.4436 80.5168 21.6911C81.7924 22.9428 83.714 23.7066 85.3495 23.5539C86.5051 23.4455 87.5886 22.9277 88.4427 22.1385L88.4428 22.1384C88.798 21.811 89.2639 21.8986 89.5421 22.1325C89.6824 22.2505 89.7884 22.4152 89.8094 22.6015C89.8311 22.7935 89.76 22.9882 89.5836 23.151C87.6186 24.9661 85.014 25.553 82.4692 24.6908Z",
                                                            fill: "#332B00",
                                                            stroke: "#332B00",
                                                            strokeWidth: "0.282646"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M63.1211 46.6205C64.3779 46.2837 66.4287 46.3683 66.4246 46.9233C66.4204 47.4783 65.2673 49.1334 64.1299 48.8472C62.9916 48.5618 61.8642 46.9582 63.1211 46.6205Z",
                                                            fill: "#332B00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M89.7648 86.5497C89.7648 86.5497 74.2618 79.5806 76.6489 72.0464C79.0371 64.5122 101.099 60.8862 105.78 71.6909C110.461 82.4956 104.09 84.1718 104.09 84.1718C104.09 84.1718 106.406 105.006 96.3868 107.171C86.3871 108.387 89.7648 86.5497 89.7648 86.5497Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1115,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M86.3059 99.9159C87.7233 92.7996 89.7648 86.5497 89.7648 86.5497C89.7648 86.5497 74.2618 79.5806 76.6489 72.0464C79.0371 64.5122 101.099 60.8862 105.78 71.6909C110.461 82.4956 104.09 84.1718 104.09 84.1718C104.09 84.1718 104.891 87.4731 105.25 92.1001C105.624 96.9182 105.519 103.175 103.527 108.639",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.88571",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M85.111 71.5619C85.111 71.5619 85.1276 67.0175 88.6707 65.9075",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M92.0683 71.74C92.0683 71.74 91.7075 64.863 96.2781 64.897",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1133,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M98.4759 73.4781C98.4759 73.4781 97.7019 67.3697 101.874 67.6911",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1140,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M41.1345 86.079C41.1345 86.079 57.2696 80.734 55.6666 72.995C54.0624 65.2558 32.488 59.3899 26.7253 69.6585C20.9627 79.9271 27.1285 82.2468 27.1285 82.2468C27.1285 82.2468 22.6906 102.734 32.4357 105.914C42.2583 108.147 41.1345 86.079 41.1345 86.079Z",
                                                            fill: "#FFF3B8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M43.2065 99.7291C42.5252 92.5051 41.1345 86.079 41.1345 86.079C41.1345 86.079 57.2696 80.734 55.6666 72.995C54.0624 65.2558 32.488 59.3899 26.7253 69.6585C20.9627 79.9271 27.1286 82.2468 27.1286 82.2468C27.1286 82.2468 25.9934 85.4487 25.162 90.0146C24.2969 94.769 23.7611 101.004 25.1824 106.643",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.88571",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M47.2986 71.6469C47.2986 71.6469 47.7474 67.1248 44.3367 65.6577",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1158,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M40.3597 71.1112C40.3597 71.1112 41.4228 64.3072 36.8728 63.873",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1165,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M33.8078 72.1838C33.8078 72.1838 35.2032 66.1868 31.02 66.0793",
                                                            stroke: "#332B00",
                                                            strokeWidth: "1.37055",
                                                            strokeMiterlimit: "10",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 941,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 688,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                            lineNumber: 643,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-3 py-2 gap-3 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-[6px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "md:w-[246px] w-[210px] text-[#1B1D1B] text-center text-[16px] leading-6 font-semibold",
                                            children: "Support Our Mission to Make a Difference"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 1185,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#1B1D1B] text-center md:text-[16px] text-sm md:leading-6 font-normal",
                                            children: [
                                                "By donating to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Onesend"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 25
                                                }, this),
                                                ", you’re helping us bring new technology to market.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold",
                                                    children: "Join us in making a lasting impact!"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 1184,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[270px] h-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "270",
                                        height: "2",
                                        viewBox: "0 0 270 2",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 1L270 1",
                                            stroke: "#B7BAB5",
                                            strokeDasharray: "4 4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 1204,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                        lineNumber: 1197,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 1196,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex md:w-full w-[280px] flex-col px-3 py-5 items-center gap-[8px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#1B1D1B] text-center text-sm uppercase font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:block hidden",
                                                    children: "Scan QR to donate 👇"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:hidden block",
                                                    children: "👇 donate by:"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-center items-start gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:block hidden justify-center items-center gap-5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/QR.png",
                                                        alt: "",
                                                        width: 150,
                                                        height: 150,
                                                        className: "md:block hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:hidden flex flex-col justify-center gap-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 ",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {}, void 0, false, {
                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                    lineNumber: 1226,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/momo.png",
                                                                    alt: "Momo",
                                                                    className: "w-[48px] h-auto rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                    lineNumber: 1227,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://me.momo.vn/m8IbTzsdfzfJfAsdCNsaCj",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "text-[#40AEDD] text-sm underline font-medium",
                                                                    children: "Click Here"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col justify-center gap-[6px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {}, void 0, false, {
                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                            lineNumber: 1243,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[#262824] text-sm font-bold",
                                                                            children: "Bank"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                            lineNumber: 1244,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                    lineNumber: 1242,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col pl-5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex w-[250px] flex-col px-[12px] py-[10px] gap-[6px] bg-[#FAFAFA] rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: "MB Bank"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                lineNumber: 1250,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: "Cassavas"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                lineNumber: 1251,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between items-center cursor-pointer",
                                                                                onClick: handleCopy,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-semibold",
                                                                                        children: accountNumber
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                        lineNumber: 1256,
                                                                                        columnNumber: 15
                                                                                    }, this),
                                                                                    isCopyBank !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm text-green-500",
                                                                                        children: isCopyBank ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                            lineNumber: 1260,
                                                                                            columnNumber: 18
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            width: "20",
                                                                                            height: "20",
                                                                                            viewBox: "0 0 20 20",
                                                                                            fill: "none",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                                    clipPath: "url(#clip0_1523_1121)",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z",
                                                                                                            stroke: "#3D403A",
                                                                                                            strokeWidth: "1.66667",
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                            lineNumber: 1270,
                                                                                                            columnNumber: 20
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M4.16675 12.5001H3.33341C2.89139 12.5001 2.46746 12.3245 2.1549 12.0119C1.84234 11.6994 1.66675 11.2754 1.66675 10.8334V3.33341C1.66675 2.89139 1.84234 2.46746 2.1549 2.1549C2.46746 1.84234 2.89139 1.66675 3.33341 1.66675H10.8334C11.2754 1.66675 11.6994 1.84234 12.0119 2.1549C12.3245 2.46746 12.5001 2.89139 12.5001 3.33341V4.16675",
                                                                                                            stroke: "#3D403A",
                                                                                                            strokeWidth: "1.66667",
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                            lineNumber: 1277,
                                                                                                            columnNumber: 20
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                    lineNumber: 1269,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                                                        id: "clip0_1523_1121",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                            width: "20",
                                                                                                            height: "20",
                                                                                                            fill: "white"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                            lineNumber: 1287,
                                                                                                            columnNumber: 21
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                        lineNumber: 1286,
                                                                                                        columnNumber: 20
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                                    lineNumber: 1285,
                                                                                                    columnNumber: 19
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                            lineNumber: 1262,
                                                                                            columnNumber: 18
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                        lineNumber: 1258,
                                                                                        columnNumber: 16
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                                lineNumber: 1252,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                        lineNumber: 1249,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                                    lineNumber: 1248,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                            lineNumber: 1241,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                                    lineNumber: 1224,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 1207,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#1B1D1B] text-center md:text-[16px] md:leading-6 text-sm font-semibold",
                                    children: "Thank you for your support!"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                            lineNumber: 1183,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                    lineNumber: 642,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/donate/index.tsx",
                lineNumber: 641,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/donate/index.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
};
_s(Donate, "IMgipLIov04ZOzYvlVM2QBz1gLA=");
_c = Donate;
const __TURBOPACK__default__export__ = Donate;
var _c;
__turbopack_refresh__.register(_c, "Donate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/public/images/github.png [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/github.b3481dbf.png");}}),
"[project]/apps/portal/public/images/github.png.mjs { IMAGE => \"[project]/apps/portal/public/images/github.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/apps/portal/public/images/github.png [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 54,
    height: 54,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAICAwA2LzcSn5ycbNXY0rja2tW4rK2rbS0tLRIAAQAAADg6OA/JxcmX9fP097+/v/++vr7/9fX197y+u5cuMS4PAJaZk1r7/Pv0uLi4/5KSkv+Tk5P/uLi4//r7+vOTk5VZALu8uZj/////qamp/7u7u/+wsLD/paWl//////+ytLaXAKywq4zq6ur+ysrK/7CwsP+ioqL/1NTU//X19f6lqaeNAHBvckGvr67mgYGB/4ODg/9/f3//goKC/7Kzsed6fnpDACEiIgd9hIBq0NHP4efn5/zm5ub8zM7L4XyAeWodHh0HAAEBAQAbHh0GYGVbNoaNhXCLkIpwZmtjNhsdGQYBAQEAQQKZ0h4rHtEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/get-dictionary.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getDictionary": (()=>getDictionary)
});
const dictionaries = {
    en: ()=>__turbopack_require__("[project]/apps/portal/src/locales/en.json (json, async loader)")(__turbopack_import__).then((module)=>module.default),
    vi: ()=>__turbopack_require__("[project]/apps/portal/src/locales/vi.json (json, async loader)")(__turbopack_import__).then((module)=>module.default)
};
const getDictionary = async (locale)=>dictionaries[locale]?.() ?? dictionaries.vi();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/locales/vi.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"lang\":\"vi\",\"text\":\"Text\",\"file\":\"File\"}"));}}),
"[project]/apps/portal/src/context/use-dictionary-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DictionaryProvider),
    "useDictionary": (()=>useDictionary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$get$2d$dictionary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/get-dictionary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$locales$2f$vi$2e$json__$28$json$29$__ = __turbopack_import__("[project]/apps/portal/src/locales/vi.json (json)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
const DictionaryContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
function DictionaryProvider({ language, children }) {
    _s();
    const [dictionary, setDictionary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$locales$2f$vi$2e$json__$28$json$29$__["default"]);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(language);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DictionaryProvider.useEffect": ()=>{
            const fetchDictionary = {
                "DictionaryProvider.useEffect.fetchDictionary": async ()=>{
                    const dictionaryData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$get$2d$dictionary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDictionary"])(selectedLanguage);
                    setDictionary(dictionaryData);
                }
            }["DictionaryProvider.useEffect.fetchDictionary"];
            fetchDictionary();
        }
    }["DictionaryProvider.useEffect"], [
        language,
        selectedLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DictionaryContext.Provider, {
        value: {
            language: selectedLanguage,
            dictionary,
            setSelectedLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/portal/src/context/use-dictionary-context.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_s(DictionaryProvider, "PRc/Ve2RUAKRMFBgyJvoQa0/adk=");
_c = DictionaryProvider;
function useDictionary() {
    _s1();
    const { dictionary, language, setSelectedLanguage } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(DictionaryContext) || {};
    if (!(dictionary && language && setSelectedLanguage)) {
        throw new Error('useDictionary hook must be used within DictionaryProvider');
    }
    return {
        dictionary,
        language,
        setSelectedLanguage
    };
}
_s1(useDictionary, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_refresh__.register(_c, "DictionaryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/components/change-locale-option/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const ChangeLocaleOption = ()=>{
    _s();
    const { setSelectedLanguage, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"])();
    const [isShowLang, setIsShowLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[360px] flex flex-col md:items-end items-start relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-[10px] py-1 gap-1 bg-[#F0F0EF] rounded-[6px] border-[1.5px] border-[#DBDCDA] cursor-pointer",
                onClick: openLang,
                "aria-expanded": isShowLang,
                "aria-haspopup": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: language.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            isShowLang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute md:top-8 top-9 md:right-0 flex flex-col items-start px-2 py-[10px] rounded-[6px] border-[3px] border-[#EFF0F0] bg-white shadow-[0px_4px_30px_0px_rgba(14,15,16,0.09)] mt-2",
                role: "menu",
                children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-3 px-4 hover:bg-[#F7F8F8] hover:cursor-pointer",
                        onClick: ()=>handleChooseLang(lang.code),
                        role: "menuitem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[90px] text-[#767C7F] text-[15px] font-medium leading-[18px] hover:text-[#3D4142]",
                                    children: lang.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/change-locale-option/index.tsx",
                                    lineNumber: 56,
                                    columnNumber: 33
                                }, this),
                                language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(ChangeLocaleOption, "Tu/ut24CsIVqnrZcQjN5gzs6bGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"]
    ];
});
_c = ChangeLocaleOption;
const __TURBOPACK__default__export__ = ChangeLocaleOption;
var _c;
__turbopack_refresh__.register(_c, "ChangeLocaleOption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/app/[lang]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$send$2d$file$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/components/send-file/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$receive$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/components/receive/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$send$2d$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/components/send-text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$donate$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/components/donate/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/apps/portal/public/images/github.png.mjs { IMAGE => "[project]/apps/portal/public/images/github.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$change$2d$locale$2d$option$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/components/change-locale-option/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/portal/src/context/use-dictionary-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"])();
    const [option, setOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TEXT');
    const [textState, setTextState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [textValue, setTextValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileState, setFileState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isShowPopup, setIsShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpenModal, setIsOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contentRender = ()=>{
        if (option === 'TEXT') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$send$2d$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isCopied: isCopied,
                isShowPopup: isShowPopup,
                textValue: textValue,
                textState: textState,
                setTextState: setTextState,
                setTextValue: setTextValue,
                setIsCopied: setIsCopied,
                setIsShowPopup: setIsShowPopup,
                setIsOpenModal: setIsOpenModal
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$send$2d$file$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isCopied: isCopied,
            isShowPopup: isShowPopup,
            fileState: fileState,
            setFileState: setFileState,
            setIsCopied: setIsCopied,
            setIsShowPopup: setIsShowPopup,
            setIsOpenModal: setIsOpenModal
        }, void 0, false, {
            fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
            lineNumber: 44,
            columnNumber: 4
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative flex flex-col items-center justify-center m-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute md:top-5 md:right-24 top-10 right-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/nvtue3006/onesend",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-14 h-14 cursor-pointer",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$portal$2f$public$2f$images$2f$github$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "onsend github icon resource"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                            lineNumber: 60,
                            columnNumber: 6
                        }, this),
                        ";"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                    lineNumber: 59,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                lineNumber: 58,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-auto max-w-[360px] flex flex-col justify-center items-center gap-5 mt-16 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$change$2d$locale$2d$option$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                        lineNumber: 65,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center md:w-[302px] rounded-[30px] bg-[#F0F0EF] p-[6px] shadow-custom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[145px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        onChange: ()=>setOption('TEXT'),
                                        type: "radio",
                                        name: "option",
                                        id: "1",
                                        value: "1",
                                        className: "peer hidden",
                                        defaultChecked: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "1",
                                        className: "block cursor-pointer select-none rounded-3xl p-[6px] text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black",
                                        children: dictionary.text
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[145px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        onChange: ()=>setOption('FILE'),
                                        type: "radio",
                                        name: "option",
                                        id: "2",
                                        value: "2",
                                        className: "peer hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "2",
                                        className: "block cursor-pointer select-none rounded-3xl p-[6px] text-center peer-checked:bg-white peer-checked:font-bold peer-checked:text-black",
                                        children: dictionary.file
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 5
                    }, this),
                    contentRender(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$receive$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setTextState: setTextState,
                        setTextValue: setTextValue,
                        setOption: (option)=>setOption(option)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                lineNumber: 64,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$donate$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpenModal: isOpenModal,
                setIsOpenModal: setIsOpenModal
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
                lineNumber: 94,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/app/[lang]/page.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, this);
}
_s(Home, "DuAdZ/XJfsW8zuSj0Vp2w2uG7nA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$context$2f$use$2d$dictionary$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/portal/src/app/[lang]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Bproject%5D_apps_portal_f93601._.js.map