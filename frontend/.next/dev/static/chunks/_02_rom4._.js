(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Workspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Workspace.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [activeProject, setActiveProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ORION");
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("chat");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-screen overflow-hidden bg-[#0b0d10] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: sidebarOpen,
                activeProject: activeProject,
                onProjectChange: setActiveProject
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        projectName: activeProject,
                        onMenuClick: ()=>setSidebarOpen((open)=>!open)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Workspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        projectName: activeProject,
                        stage: stage,
                        onStageChange: setStage
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Home, "NK89eaFOO691nU7W5S2C1bE3t1s=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/Message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const initialMessages = [
    {
        role: "assistant",
        content: "I'm ready to help design, analyze, and engineer your project."
    }
];
function Chat() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessages);
    function handleSend(message) {
        setMessages((current)=>[
                ...current,
                {
                    role: "user",
                    content: message
                },
                {
                    role: "assistant",
                    content: "This is currently a UI prototype. The engineering agent will be connected here next."
                }
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 flex-1 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl space-y-6",
                    children: messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            role: message.role,
                            content: message.content
                        }, index, false, {
                            fileName: "[project]/components/chat/Chat.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/chat/Chat.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/Chat.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSend: handleSend
            }, void 0, false, {
                fileName: "[project]/components/chat/Chat.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/Chat.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Chat, "OrQCFeJqL9pS8aNDR4fjm9C95KQ=");
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ChatInput({ onSend }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function handleSubmit(event) {
        event.preventDefault();
        const message = value.trim();
        if (!message) {
            return;
        }
        onSend(message);
        setValue("");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-white/10 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mx-auto flex max-w-3xl items-end gap-2 rounded-xl border border-white/10 bg-[#111419] p-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: value,
                    onChange: (event)=>setValue(event.target.value),
                    placeholder: "Ask an engineering question...",
                    rows: 1,
                    className: "max-h-40 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30"
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatInput.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatInput.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ChatInput.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatInput.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/Message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Message
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Message({ role, content }) {
    const isUser = role === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isUser ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? "bg-white text-black" : "border border-white/10 bg-[#111419] text-white/80"}`,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/chat/Message.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/Message.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Message;
var _c;
__turbopack_context__.k.register(_c, "Message");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/Architecture.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Architecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$SystemNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/SystemNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$architecture$2f$ConnectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/architecture/ConnectionModal.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './SystemModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* -------------------------------------------------------------------------- */ /* Initial Architecture                                                       */ /* -------------------------------------------------------------------------- */ const initialNodes = [
    {
        id: "power",
        type: "system",
        position: {
            x: 50,
            y: 150
        },
        data: {
            label: "Power System",
            category: "Power",
            description: "Provides and distributes electrical power.",
            status: "Designed",
            interfaces: [
                {
                    id: "power-output",
                    name: "24V Output",
                    direction: "output",
                    type: "power",
                    standard: "24V DC",
                    protocol: "DC",
                    dataRate: "",
                    voltage: "24 V",
                    maxCurrent: "20 A",
                    description: "Main 24V DC power output."
                }
            ],
            parameters: [
                {
                    id: "power-voltage",
                    name: "Voltage",
                    value: "24",
                    unit: "V"
                },
                {
                    id: "power-max-power",
                    name: "Max Power",
                    value: "500",
                    unit: "W"
                }
            ]
        }
    },
    {
        id: "sensors",
        type: "system",
        position: {
            x: 400,
            y: 50
        },
        data: {
            label: "Sensor System",
            category: "Sensors",
            description: "Perception hardware for the vehicle.",
            status: "Concept",
            interfaces: [
                {
                    id: "sensor-usb",
                    name: "USB-C",
                    direction: "output",
                    type: "usb_c",
                    standard: "USB 3.2 Gen 2",
                    protocol: "USB",
                    dataRate: "10 Gb/s",
                    voltage: "5 V",
                    maxCurrent: "3 A",
                    description: "Sensor data connection."
                },
                {
                    id: "sensor-ethernet",
                    name: "Ethernet",
                    direction: "output",
                    type: "ethernet",
                    standard: "1 GbE",
                    protocol: "Ethernet",
                    dataRate: "1 Gb/s",
                    voltage: "",
                    maxCurrent: "",
                    description: "High-speed sensor networking."
                }
            ],
            parameters: [
                {
                    id: "sensor-cameras",
                    name: "Cameras",
                    value: "2"
                },
                {
                    id: "sensor-lidar",
                    name: "LiDAR",
                    value: "1"
                }
            ]
        }
    },
    {
        id: "computing",
        type: "system",
        position: {
            x: 400,
            y: 300
        },
        data: {
            label: "Computing System",
            category: "Computing",
            description: "Main onboard computing and AI system.",
            status: "Designed",
            interfaces: [
                {
                    id: "computing-power",
                    name: "Power IN",
                    direction: "input",
                    type: "power",
                    standard: "24V DC",
                    protocol: "DC",
                    dataRate: "",
                    voltage: "24 V",
                    maxCurrent: "20 A",
                    description: "Main system power input."
                },
                {
                    id: "computing-can",
                    name: "CAN",
                    direction: "bidirectional",
                    type: "can",
                    standard: "CAN FD",
                    protocol: "CAN",
                    dataRate: "8 Mb/s",
                    voltage: "5 V",
                    maxCurrent: "",
                    description: "Vehicle CAN interface."
                },
                {
                    id: "computing-ethernet",
                    name: "Ethernet",
                    direction: "bidirectional",
                    type: "ethernet",
                    standard: "1 GbE",
                    protocol: "Ethernet",
                    dataRate: "1 Gb/s",
                    voltage: "",
                    maxCurrent: "",
                    description: "Network interface."
                }
            ],
            parameters: [
                {
                    id: "computing-platform",
                    name: "Platform",
                    value: "Jetson Orin NX"
                },
                {
                    id: "computing-memory",
                    name: "Memory",
                    value: "16",
                    unit: "GB"
                }
            ]
        }
    },
    {
        id: "control",
        type: "system",
        position: {
            x: 800,
            y: 200
        },
        data: {
            label: "Control System",
            category: "Control",
            description: "Controls actuators and system behavior.",
            status: "Concept",
            interfaces: [
                {
                    id: "control-can",
                    name: "CAN",
                    direction: "bidirectional",
                    type: "can",
                    standard: "CAN FD",
                    protocol: "CAN",
                    dataRate: "8 Mb/s",
                    voltage: "5 V",
                    maxCurrent: "",
                    description: "Control communication interface."
                }
            ],
            parameters: []
        }
    },
    {
        id: "jetson",
        type: "system",
        position: {
            x: 50,
            y: 100
        },
        data: {
            label: "Jetson Orin NX",
            category: "Computing",
            description: "Primary onboard compute platform.",
            status: "Designed",
            parentId: "computing",
            interfaces: [
                {
                    id: "jetson-power",
                    name: "Power IN",
                    direction: "input",
                    type: "dc_power",
                    standard: "DC",
                    protocol: "DC",
                    dataRate: "",
                    voltage: "12–20 V",
                    maxCurrent: "10 A",
                    description: "Power input for the compute module."
                },
                {
                    id: "jetson-usbc-1",
                    name: "USB-C 1",
                    direction: "bidirectional",
                    type: "usb_c",
                    standard: "USB 3.2 Gen 2",
                    protocol: "USB",
                    dataRate: "10 Gb/s",
                    voltage: "5 V",
                    maxCurrent: "3 A",
                    description: "High-speed USB-C interface."
                },
                {
                    id: "jetson-usbc-2",
                    name: "USB-C 2",
                    direction: "bidirectional",
                    type: "usb_c",
                    standard: "USB 3.2 Gen 2",
                    protocol: "USB",
                    dataRate: "10 Gb/s",
                    voltage: "5 V",
                    maxCurrent: "3 A",
                    description: "High-speed USB-C interface."
                },
                {
                    id: "jetson-ethernet",
                    name: "Ethernet",
                    direction: "bidirectional",
                    type: "ethernet",
                    standard: "1 GbE",
                    protocol: "Ethernet",
                    dataRate: "1 Gb/s",
                    voltage: "",
                    maxCurrent: "",
                    description: "Gigabit Ethernet interface."
                },
                {
                    id: "jetson-hdmi",
                    name: "HDMI",
                    direction: "output",
                    type: "hdmi",
                    standard: "HDMI 2.1",
                    protocol: "HDMI",
                    dataRate: "48 Gb/s",
                    voltage: "",
                    maxCurrent: "",
                    description: "Display output."
                },
                {
                    id: "jetson-can",
                    name: "CAN",
                    direction: "bidirectional",
                    type: "can",
                    standard: "CAN FD",
                    protocol: "CAN",
                    dataRate: "8 Mb/s",
                    voltage: "5 V",
                    maxCurrent: "",
                    description: "CAN bus interface."
                }
            ],
            parameters: [
                {
                    id: "jetson-memory",
                    name: "Memory",
                    value: "16",
                    unit: "GB"
                },
                {
                    id: "jetson-architecture",
                    name: "Architecture",
                    value: "Ampere"
                }
            ]
        }
    },
    {
        id: "ai",
        type: "system",
        position: {
            x: 400,
            y: 100
        },
        data: {
            label: "AI System",
            category: "Software",
            description: "Perception, reasoning, and AI workloads.",
            status: "Concept",
            parentId: "computing",
            interfaces: [
                {
                    id: "ai-data",
                    name: "Data",
                    direction: "bidirectional",
                    type: "custom",
                    standard: "",
                    protocol: "Internal",
                    dataRate: "",
                    voltage: "",
                    maxCurrent: "",
                    description: "Internal data interface."
                }
            ],
            parameters: []
        }
    }
];
/* -------------------------------------------------------------------------- */ /* Initial Connections                                                        */ /* -------------------------------------------------------------------------- */ const initialEdges = [
    {
        id: "power-computing",
        source: "power",
        target: "computing",
        sourceHandle: "power-output",
        targetHandle: "computing-power",
        label: "Power · 24V DC",
        data: {
            type: "power",
            protocol: "24V DC",
            description: "Electrical power from the power system.",
            sourceInterfaceId: "power-output",
            targetInterfaceId: "computing-power"
        }
    },
    {
        id: "sensors-computing",
        source: "sensors",
        target: "computing",
        sourceHandle: "sensor-usb",
        targetHandle: "computing-ethernet",
        label: "Sensor Data · USB / Ethernet",
        data: {
            type: "sensor_data",
            protocol: "USB / Ethernet",
            description: "Sensor measurements and camera feeds.",
            sourceInterfaceId: "sensor-usb",
            targetInterfaceId: "computing-ethernet"
        }
    },
    {
        id: "computing-control",
        source: "computing",
        target: "control",
        sourceHandle: "computing-can",
        targetHandle: "control-can",
        label: "Control · CAN",
        data: {
            type: "control",
            protocol: "CAN",
            description: "Control commands sent to the control system.",
            sourceInterfaceId: "computing-can",
            targetInterfaceId: "control-can"
        }
    },
    {
        id: "jetson-ai",
        source: "jetson",
        target: "ai",
        sourceHandle: "jetson-ethernet",
        targetHandle: "ai-data",
        label: "Communication · Internal",
        data: {
            type: "communication",
            protocol: "Internal",
            description: "Communication between compute platform and AI system.",
            sourceInterfaceId: "jetson-ethernet",
            targetInterfaceId: "ai-data"
        }
    }
];
/* -------------------------------------------------------------------------- */ /* Helpers                                                                    */ /* -------------------------------------------------------------------------- */ function getInterfaceOptions(node) {
    if (!node) {
        return [];
    }
    return (node.data.interfaces ?? []).map((item)=>({
            id: item.id,
            name: item.name,
            type: item.type
        }));
}
function Architecture() {
    _s();
    /* ------------------------------------------------------------------------ */ /* State                                                                    */ /* ------------------------------------------------------------------------ */ const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialNodes);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialEdges);
    const [currentParentId, setCurrentParentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [systemModalOpen, setSystemModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingNodeId, setEditingNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectionModalOpen, setConnectionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingConnection, setPendingConnection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingEdgeId, setEditingEdgeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ------------------------------------------------------------------------ */ /* Connected interface IDs                                                  */ /* ------------------------------------------------------------------------ */ const connectedInterfaceIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[connectedInterfaceIds]": ()=>{
            const ids = new Set();
            for (const edge of edges){
                if (edge.data?.sourceInterfaceId) {
                    ids.add(edge.data.sourceInterfaceId);
                }
                if (edge.data?.targetInterfaceId) {
                    ids.add(edge.data.targetInterfaceId);
                }
            }
            return ids;
        }
    }["Architecture.useMemo[connectedInterfaceIds]"], [
        edges
    ]);
    /* ------------------------------------------------------------------------ */ /* Node types                                                               */ /* ------------------------------------------------------------------------ */ const nodeTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[nodeTypes]": ()=>({
                system: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$SystemNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            })
    }["Architecture.useMemo[nodeTypes]"], []);
    /* ------------------------------------------------------------------------ */ /* React Flow node changes                                                  */ /* ------------------------------------------------------------------------ */ const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[onNodesChange]": (changes)=>{
            setNodes({
                "Architecture.useCallback[onNodesChange]": (current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, current)
            }["Architecture.useCallback[onNodesChange]"]);
        }
    }["Architecture.useCallback[onNodesChange]"], []);
    /* ------------------------------------------------------------------------ */ /* React Flow edge changes                                                  */ /* ------------------------------------------------------------------------ */ const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[onEdgesChange]": (changes)=>{
            setEdges({
                "Architecture.useCallback[onEdgesChange]": (current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, current)
            }["Architecture.useCallback[onEdgesChange]"]);
        }
    }["Architecture.useCallback[onEdgesChange]"], []);
    /* ------------------------------------------------------------------------ */ /* Enter subsystem                                                          */ /* ------------------------------------------------------------------------ */ const enterSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[enterSystem]": (nodeId)=>{
            setCurrentParentId(nodeId);
        }
    }["Architecture.useCallback[enterSystem]"], []);
    /* ------------------------------------------------------------------------ */ /* Go back                                                                  */ /* ------------------------------------------------------------------------ */ const goBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[goBack]": ()=>{
            if (!currentParentId) {
                return;
            }
            const currentNode = nodes.find({
                "Architecture.useCallback[goBack].currentNode": (node)=>node.id === currentParentId
            }["Architecture.useCallback[goBack].currentNode"]);
            if (!currentNode) {
                setCurrentParentId(null);
                return;
            }
            setCurrentParentId(currentNode.data.parentId ?? null);
        }
    }["Architecture.useCallback[goBack]"], [
        currentParentId,
        nodes
    ]);
    /* ------------------------------------------------------------------------ */ /* Breadcrumbs                                                              */ /* ------------------------------------------------------------------------ */ const breadcrumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[breadcrumbs]": ()=>{
            const result = [];
            let id = currentParentId;
            while(id){
                const node = nodes.find({
                    "Architecture.useMemo[breadcrumbs].node": (item)=>item.id === id
                }["Architecture.useMemo[breadcrumbs].node"]);
                if (!node) {
                    break;
                }
                result.unshift(node);
                id = node.data.parentId ?? null;
            }
            return result;
        }
    }["Architecture.useMemo[breadcrumbs]"], [
        currentParentId,
        nodes
    ]);
    /* ------------------------------------------------------------------------ */ /* Current system                                                           */ /* ------------------------------------------------------------------------ */ const currentSystem = currentParentId ? nodes.find((node)=>node.id === currentParentId) : undefined;
    /* ------------------------------------------------------------------------ */ /* System editor                                                            */ /* ------------------------------------------------------------------------ */ const openSystemEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[openSystemEditor]": (nodeId)=>{
            setEditingNodeId(nodeId);
            setSystemModalOpen(true);
        }
    }["Architecture.useCallback[openSystemEditor]"], []);
    /* ------------------------------------------------------------------------ */ /* Delete system                                                            */ /* ------------------------------------------------------------------------ */ const deleteSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[deleteSystem]": (nodeId)=>{
            const node = nodes.find({
                "Architecture.useCallback[deleteSystem].node": (item)=>item.id === nodeId
            }["Architecture.useCallback[deleteSystem].node"]);
            if (!node) {
                return;
            }
            const confirmed = window.confirm(`Delete "${node.data.label}"? This will also delete all of its subsystems and their connections.`);
            if (!confirmed) {
                return;
            }
            const idsToDelete = new Set([
                nodeId
            ]);
            let foundChild = true;
            while(foundChild){
                foundChild = false;
                for (const item of nodes){
                    if (item.data.parentId && idsToDelete.has(item.data.parentId) && !idsToDelete.has(item.id)) {
                        idsToDelete.add(item.id);
                        foundChild = true;
                    }
                }
            }
            setNodes({
                "Architecture.useCallback[deleteSystem]": (current)=>current.filter({
                        "Architecture.useCallback[deleteSystem]": (item)=>!idsToDelete.has(item.id)
                    }["Architecture.useCallback[deleteSystem]"])
            }["Architecture.useCallback[deleteSystem]"]);
            setEdges({
                "Architecture.useCallback[deleteSystem]": (current)=>current.filter({
                        "Architecture.useCallback[deleteSystem]": (edge)=>!idsToDelete.has(edge.source) && !idsToDelete.has(edge.target)
                    }["Architecture.useCallback[deleteSystem]"])
            }["Architecture.useCallback[deleteSystem]"]);
            if (idsToDelete.has(currentParentId ?? "")) {
                setCurrentParentId(null);
            }
            if (editingNodeId === nodeId) {
                setEditingNodeId(null);
                setSystemModalOpen(false);
            }
        }
    }["Architecture.useCallback[deleteSystem]"], [
        currentParentId,
        editingNodeId,
        nodes
    ]);
    /* ------------------------------------------------------------------------ */ /* Visible nodes                                                            */ /* ------------------------------------------------------------------------ */ const visibleNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[visibleNodes]": ()=>{
            return nodes.filter({
                "Architecture.useMemo[visibleNodes]": (node)=>(node.data.parentId ?? null) === currentParentId
            }["Architecture.useMemo[visibleNodes]"]).map({
                "Architecture.useMemo[visibleNodes]": (node)=>({
                        ...node,
                        data: {
                            ...node.data,
                            onEdit: ({
                                "Architecture.useMemo[visibleNodes]": ()=>openSystemEditor(node.id)
                            })["Architecture.useMemo[visibleNodes]"],
                            onDelete: ({
                                "Architecture.useMemo[visibleNodes]": ()=>deleteSystem(node.id)
                            })["Architecture.useMemo[visibleNodes]"]
                        }
                    })
            }["Architecture.useMemo[visibleNodes]"]);
        }
    }["Architecture.useMemo[visibleNodes]"], [
        nodes,
        currentParentId,
        openSystemEditor,
        deleteSystem
    ]);
    /* ------------------------------------------------------------------------ */ /* Visible node IDs                                                         */ /* ------------------------------------------------------------------------ */ const visibleNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[visibleNodeIds]": ()=>new Set(visibleNodes.map({
                "Architecture.useMemo[visibleNodeIds]": (node)=>node.id
            }["Architecture.useMemo[visibleNodeIds]"]))
    }["Architecture.useMemo[visibleNodeIds]"], [
        visibleNodes
    ]);
    /* ------------------------------------------------------------------------ */ /* Visible edges                                                            */ /* ------------------------------------------------------------------------ */ const visibleEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Architecture.useMemo[visibleEdges]": ()=>{
            return edges.filter({
                "Architecture.useMemo[visibleEdges]": (edge)=>visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
            }["Architecture.useMemo[visibleEdges]"]);
        }
    }["Architecture.useMemo[visibleEdges]"], [
        edges,
        visibleNodeIds
    ]);
    /* ------------------------------------------------------------------------ */ /* Add system                                                               */ /* ------------------------------------------------------------------------ */ function handleAddSystem() {
        setEditingNodeId(null);
        setSystemModalOpen(true);
    }
    /* ------------------------------------------------------------------------ */ /* System submit                                                             */ /* ------------------------------------------------------------------------ */ function handleSystemSubmit(data) {
        if (editingNodeId) {
            setNodes((current)=>current.map((node)=>{
                    if (node.id !== editingNodeId) {
                        return node;
                    }
                    return {
                        ...node,
                        data: {
                            ...data,
                            parentId: node.data.parentId ?? null
                        }
                    };
                }));
        } else {
            const id = crypto.randomUUID();
            const newNode = {
                id,
                type: "system",
                position: {
                    x: 100 + Math.random() * 500,
                    y: 100 + Math.random() * 300
                },
                data: {
                    ...data,
                    parentId: currentParentId ?? null
                }
            };
            setNodes((current)=>[
                    ...current,
                    newNode
                ]);
        }
        setSystemModalOpen(false);
        setEditingNodeId(null);
    }
    /* ------------------------------------------------------------------------ */ /* New connection                                                           */ /* ------------------------------------------------------------------------ */ const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[onConnect]": (connection)=>{
            if (!connection.source || !connection.target) {
                return;
            }
            setPendingConnection(connection);
            setEditingEdgeId(null);
            setConnectionModalOpen(true);
        }
    }["Architecture.useCallback[onConnect]"], []);
    /* ------------------------------------------------------------------------ */ /* Connection label                                                         */ /* ------------------------------------------------------------------------ */ function getConnectionLabel(data) {
        const typeLabels = {
            power: "Power",
            communication: "Communication",
            sensor_data: "Sensor Data",
            control: "Control",
            mechanical: "Mechanical",
            thermal: "Thermal"
        };
        const typeLabel = typeLabels[data.type];
        return data.protocol ? `${typeLabel} · ${data.protocol}` : typeLabel;
    }
    /* ------------------------------------------------------------------------ */ /* Open connection editor                                                   */ /* ------------------------------------------------------------------------ */ const openConnectionEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[openConnectionEditor]": (edgeId)=>{
            setEditingEdgeId(edgeId);
            setPendingConnection(null);
            setConnectionModalOpen(true);
        }
    }["Architecture.useCallback[openConnectionEditor]"], []);
    /* ------------------------------------------------------------------------ */ /* Delete connection                                                        */ /* ------------------------------------------------------------------------ */ const deleteConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Architecture.useCallback[deleteConnection]": (edgeId)=>{
            const edge = edges.find({
                "Architecture.useCallback[deleteConnection].edge": (item)=>item.id === edgeId
            }["Architecture.useCallback[deleteConnection].edge"]);
            if (!edge) {
                return;
            }
            const source = nodes.find({
                "Architecture.useCallback[deleteConnection].source": (node)=>node.id === edge.source
            }["Architecture.useCallback[deleteConnection].source"]);
            const target = nodes.find({
                "Architecture.useCallback[deleteConnection].target": (node)=>node.id === edge.target
            }["Architecture.useCallback[deleteConnection].target"]);
            const confirmed = window.confirm(`Delete connection "${source?.data.label ?? edge.source} → ${target?.data.label ?? edge.target}"?`);
            if (!confirmed) {
                return;
            }
            setEdges({
                "Architecture.useCallback[deleteConnection]": (current)=>current.filter({
                        "Architecture.useCallback[deleteConnection]": (item)=>item.id !== edgeId
                    }["Architecture.useCallback[deleteConnection]"])
            }["Architecture.useCallback[deleteConnection]"]);
            if (editingEdgeId === edgeId) {
                setEditingEdgeId(null);
                setConnectionModalOpen(false);
            }
        }
    }["Architecture.useCallback[deleteConnection]"], [
        edges,
        nodes,
        editingEdgeId
    ]);
    /* ------------------------------------------------------------------------ */ /* Connection submit                                                        */ /* ------------------------------------------------------------------------ */ function handleConnectionSubmit(data) {
        /* ---------------------------------------------------------------------- */ /* Editing existing connection                                            */ /* ---------------------------------------------------------------------- */ if (editingEdgeId) {
            setEdges((current)=>current.map((edge)=>{
                    if (edge.id !== editingEdgeId) {
                        return edge;
                    }
                    return {
                        ...edge,
                        sourceHandle: data.sourceInterfaceId ?? edge.sourceHandle,
                        targetHandle: data.targetInterfaceId ?? edge.targetHandle,
                        label: getConnectionLabel(data),
                        data
                    };
                }));
            setEditingEdgeId(null);
            setConnectionModalOpen(false);
            return;
        }
        /* ---------------------------------------------------------------------- */ /* Creating new connection                                                */ /* ---------------------------------------------------------------------- */ if (!pendingConnection || !pendingConnection.source || !pendingConnection.target) {
            return;
        }
        const newEdge = {
            id: crypto.randomUUID(),
            source: pendingConnection.source,
            target: pendingConnection.target,
            sourceHandle: data.sourceInterfaceId ?? pendingConnection.sourceHandle,
            targetHandle: data.targetInterfaceId ?? pendingConnection.targetHandle,
            label: getConnectionLabel(data),
            data
        };
        setEdges((current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addEdge"])(newEdge, current));
        setPendingConnection(null);
        setConnectionModalOpen(false);
    }
    /* ------------------------------------------------------------------------ */ /* Editing node                                                             */ /* ------------------------------------------------------------------------ */ const editingNode = editingNodeId ? nodes.find((node)=>node.id === editingNodeId) : undefined;
    /* ------------------------------------------------------------------------ */ /* Editing edge                                                             */ /* ------------------------------------------------------------------------ */ const editingEdge = editingEdgeId ? edges.find((edge)=>edge.id === editingEdgeId) : undefined;
    /* ------------------------------------------------------------------------ */ /* Connection source node                                                   */ /* ------------------------------------------------------------------------ */ const sourceNode = pendingConnection?.source ? nodes.find((node)=>node.id === pendingConnection.source) : editingEdge ? nodes.find((node)=>node.id === editingEdge.source) : undefined;
    /* ------------------------------------------------------------------------ */ /* Connection target node                                                   */ /* ------------------------------------------------------------------------ */ const targetNode = pendingConnection?.target ? nodes.find((node)=>node.id === pendingConnection.target) : editingEdge ? nodes.find((node)=>node.id === editingEdge.target) : undefined;
    /* ------------------------------------------------------------------------ */ /* Initial connection data                                                  */ /* ------------------------------------------------------------------------ */ const connectionInitialData = editingEdge?.data;
    /* ------------------------------------------------------------------------ */ /* Initial source interface                                                 */ /* ------------------------------------------------------------------------ */ const initialSourceInterfaceId = pendingConnection?.sourceHandle ?? editingEdge?.sourceHandle ?? null;
    /* ------------------------------------------------------------------------ */ /* Initial target interface                                                 */ /* ------------------------------------------------------------------------ */ const initialTargetInterfaceId = pendingConnection?.targetHandle ?? editingEdge?.targetHandle ?? null;
    /* ------------------------------------------------------------------------ */ /* Render                                                                   */ /* ------------------------------------------------------------------------ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden bg-[#0b0d10]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 top-4 z-20 flex items-center gap-2",
                children: [
                    currentParentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: goBack,
                        className: "rounded-lg border border-white/10 bg-[#15191f] px-3 py-2 text-sm text-white/70 shadow-lg transition hover:bg-[#1c2128] hover:text-white",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1423,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center rounded-lg border border-white/10 bg-[#15191f]/95 px-3 py-2 text-sm shadow-lg backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setCurrentParentId(null),
                                className: currentParentId ? "text-white/40 hover:text-white" : "text-white",
                                children: "ORION"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/Architecture.tsx",
                                lineNumber: 1434,
                                columnNumber: 11
                            }, this),
                            breadcrumbs.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-2 text-white/20",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/Architecture.tsx",
                                            lineNumber: 1456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCurrentParentId(node.id),
                                            className: node.id === currentParentId ? "text-white" : "text-white/40 hover:text-white",
                                            children: node.data.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/Architecture.tsx",
                                            lineNumber: 1460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, node.id, true, {
                                    fileName: "[project]/components/engineering/Architecture.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleAddSystem,
                        className: "rounded-lg border border-white/10 bg-[#15191f] px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-[#1c2128]",
                        children: "+ Add System"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1485,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur",
                        children: "Double-click a system to enter"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/Architecture.tsx",
                lineNumber: 1420,
                columnNumber: 7
            }, this),
            currentSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 z-10 rounded-lg border border-white/10 bg-[#15191f]/90 px-3 py-2 text-xs text-white/40 backdrop-blur",
                children: [
                    currentSystem.data.label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-2 text-white/20",
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1510,
                        columnNumber: 11
                    }, this),
                    visibleNodes.length,
                    " ",
                    visibleNodes.length === 1 ? "subsystem" : "subsystems"
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/Architecture.tsx",
                lineNumber: 1507,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                nodes: visibleNodes,
                edges: visibleEdges,
                nodeTypes: nodeTypes,
                onNodesChange: onNodesChange,
                onEdgesChange: onEdgesChange,
                onConnect: onConnect,
                onNodeDoubleClick: (_event, node)=>{
                    enterSystem(node.id);
                },
                onEdgeClick: (event, edge)=>{
                    event.stopPropagation();
                    openConnectionEditor(edge.id);
                },
                onEdgeContextMenu: (event, edge)=>{
                    event.preventDefault();
                    event.stopPropagation();
                    deleteConnection(edge.id);
                },
                fitView: true,
                fitViewOptions: {
                    padding: 0.2
                },
                minZoom: 0.2,
                maxZoom: 2,
                defaultEdgeOptions: {
                    animated: false
                },
                colorMode: "dark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {}, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {}, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                        pannable: true,
                        zoomable: true,
                        nodeColor: "#3a424d"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/Architecture.tsx",
                        lineNumber: 1583,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/Architecture.tsx",
                lineNumber: 1528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SystemModal, {
                open: systemModalOpen,
                initialData: editingNode ? editingNode.data : undefined,
                connectedInterfaceIds: connectedInterfaceIds,
                onClose: ()=>{
                    setSystemModalOpen(false);
                    setEditingNodeId(null);
                },
                onSubmit: handleSystemSubmit
            }, void 0, false, {
                fileName: "[project]/components/engineering/Architecture.tsx",
                lineNumber: 1594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$architecture$2f$ConnectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: connectionModalOpen,
                sourceName: sourceNode?.data.label ?? "Unknown System",
                targetName: targetNode?.data.label ?? "Unknown System",
                sourceInterfaces: getInterfaceOptions(sourceNode),
                targetInterfaces: getInterfaceOptions(targetNode),
                initialData: connectionInitialData,
                initialSourceInterfaceId: initialSourceInterfaceId,
                initialTargetInterfaceId: initialTargetInterfaceId,
                onDelete: editingEdgeId ? ()=>deleteConnection(editingEdgeId) : undefined,
                onClose: ()=>{
                    setPendingConnection(null);
                    setEditingEdgeId(null);
                    setConnectionModalOpen(false);
                },
                onSubmit: handleConnectionSubmit
            }, void 0, false, {
                fileName: "[project]/components/engineering/Architecture.tsx",
                lineNumber: 1622,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/engineering/Architecture.tsx",
        lineNumber: 1415,
        columnNumber: 5
    }, this);
}
_s(Architecture, "mbMMKk4brOTbEPohIl2xUCvgWrI=");
_c = Architecture;
var _c;
__turbopack_context__.k.register(_c, "Architecture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/EngineeringProcess.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EngineeringProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const stages = [
    {
        id: "requirements",
        name: "Requirements"
    },
    {
        id: "architecture",
        name: "Architecture"
    },
    {
        id: "components",
        name: "Components"
    },
    {
        id: "calculations",
        name: "Calculations"
    },
    {
        id: "code",
        name: "Code"
    },
    {
        id: "cad",
        name: "CAD"
    },
    {
        id: "simulation",
        name: "Simulation"
    },
    {
        id: "optimization",
        name: "Optimization"
    },
    {
        id: "manufacturing",
        name: "Manufacturing"
    }
];
function EngineeringProcess({ activeStage, onStageChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden w-72 shrink-0 border-l border-white/10 bg-[#0f1115] xl:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/10 px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold",
                        children: "Engineering Process"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-white/40",
                        children: "Project development"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onStageChange("chat"),
                        className: `mb-2 w-full rounded-lg px-3 py-3 text-left text-sm transition ${activeStage === "chat" ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"}`,
                        children: "AI Assistant"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: stages.map((stage, index)=>{
                            const active = activeStage === stage.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStageChange(stage.id),
                                className: `flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${active ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${active ? "border-white bg-white text-black" : "border-white/20"}`,
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    stage.name
                                ]
                            }, stage.id, true, {
                                fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/EngineeringProcess.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/engineering/EngineeringProcess.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = EngineeringProcess;
var _c;
__turbopack_context__.k.register(_c, "EngineeringProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/SystemNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SystemNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
function getInterfaceTypeLabel(type) {
    const labels = {
        power: "Power",
        dc_power: "DC Power",
        usb_a: "USB-A",
        usb_c: "USB-C",
        thunderbolt_4: "Thunderbolt 4",
        thunderbolt_5: "Thunderbolt 5",
        ethernet: "Ethernet",
        can: "CAN",
        uart: "UART",
        i2c: "I²C",
        spi: "SPI",
        hdmi: "HDMI",
        displayport: "DisplayPort",
        pcie: "PCIe",
        custom: "Custom"
    };
    return labels[type];
}
function getDirectionSymbol(direction) {
    if (direction === "input") {
        return "←";
    }
    if (direction === "output") {
        return "→";
    }
    return "↔";
}
function SystemNode({ data }) {
    const parameters = Array.isArray(data.parameters) ? data.parameters : [];
    const interfaces = Array.isArray(data.interfaces) ? data.interfaces : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-[280px] max-w-[340px] overflow-hidden rounded-xl border border-white/15 bg-[#15191f] shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between border-b border-white/10 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate text-sm font-semibold text-white",
                                children: data.label
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs text-white/40",
                                children: data.category
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (event)=>{
                            event.stopPropagation();
                            data.onEdit?.();
                        },
                        className: "ml-3 shrink-0 rounded-md px-2 py-1 text-white/30 transition hover:bg-white/10 hover:text-white",
                        children: "⋯"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/SystemNode.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/10 px-4 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50",
                    children: data.status
                }, void 0, false, {
                    fileName: "[project]/components/engineering/SystemNode.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/engineering/SystemNode.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            data.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/10 px-4 py-3 text-xs leading-5 text-white/50",
                children: data.description
            }, void 0, false, {
                fileName: "[project]/components/engineering/SystemNode.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            interfaces.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] font-medium uppercase tracking-wider text-white/30",
                            children: "Interfaces"
                        }, void 0, false, {
                            fileName: "[project]/components/engineering/SystemNode.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-1 pb-2",
                        children: interfaces.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-2 rounded-md px-2 py-2 transition hover:bg-white/5",
                                children: [
                                    (item.direction === "input" || item.direction === "bidirectional") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                                        id: item.id,
                                        type: "target",
                                        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                                        className: "!h-3 !w-3 !border-2 !border-[#15191f] !bg-white",
                                        style: {
                                            top: "50%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                        lineNumber: 194,
                                        columnNumber: 19
                                    }, this),
                                    (item.direction === "output" || item.direction === "bidirectional") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                                        id: item.id,
                                        type: "source",
                                        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                                        className: "!h-3 !w-3 !border-2 !border-[#15191f] !bg-white",
                                        style: {
                                            top: "50%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 pl-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "truncate text-xs font-medium text-white/80",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-0.5 truncate text-[10px] text-white/35",
                                                        children: [
                                                            getInterfaceTypeLabel(item.type),
                                                            item.standard ? ` · ${item.standard}` : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 text-[11px] text-white/30",
                                                children: getDirectionSymbol(item.direction)
                                            }, void 0, false, {
                                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/SystemNode.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            parameters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-[10px] font-medium uppercase tracking-wider text-white/30",
                        children: "Parameters"
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: parameters.slice(0, 4).map((parameter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-4 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40",
                                        children: parameter.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                        lineNumber: 276,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right text-white/70",
                                        children: [
                                            parameter.value,
                                            parameter.unit ? ` ${parameter.unit}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/engineering/SystemNode.tsx",
                                        lineNumber: 282,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, parameter.id ?? `${parameter.name}-${index}`, true, {
                                fileName: "[project]/components/engineering/SystemNode.tsx",
                                lineNumber: 269,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/SystemNode.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/SystemNode.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/engineering/SystemNode.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c = SystemNode;
var _c;
__turbopack_context__.k.register(_c, "SystemNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/architecture/ConnectionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConnectionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const connectionTypes = [
    {
        value: "power",
        label: "Power"
    },
    {
        value: "communication",
        label: "Communication"
    },
    {
        value: "sensor_data",
        label: "Sensor Data"
    },
    {
        value: "control",
        label: "Control"
    },
    {
        value: "mechanical",
        label: "Mechanical"
    },
    {
        value: "thermal",
        label: "Thermal"
    }
];
function ConnectionModal({ open, sourceName, targetName, sourceInterfaces, targetInterfaces, initialData, initialSourceInterfaceId, initialTargetInterfaceId, onClose, onSubmit, onDelete }) {
    _s();
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("communication");
    const [protocol, setProtocol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sourceInterfaceId, setSourceInterfaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [targetInterfaceId, setTargetInterfaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectionModal.useEffect": ()=>{
            if (!open) {
                return;
            }
            setType(initialData?.type ?? "communication");
            setProtocol(initialData?.protocol ?? "");
            setDescription(initialData?.description ?? "");
            setSourceInterfaceId(initialSourceInterfaceId ?? sourceInterfaces[0]?.id ?? "");
            setTargetInterfaceId(initialTargetInterfaceId ?? targetInterfaces[0]?.id ?? "");
            setError("");
        }
    }["ConnectionModal.useEffect"], [
        open,
        initialData,
        initialSourceInterfaceId,
        initialTargetInterfaceId,
        sourceInterfaces,
        targetInterfaces
    ]);
    function handleSubmit() {
        if (!sourceInterfaceId) {
            setError("Select a source interface.");
            return;
        }
        if (!targetInterfaceId) {
            setError("Select a target interface.");
            return;
        }
        onSubmit({
            type,
            protocol: protocol.trim(),
            description: description.trim(),
            sourceInterfaceId,
            targetInterfaceId
        });
    }
    function handleDelete() {
        onDelete?.();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[650px] max-w-[95vw]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-white/10 px-6 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Connection"
                        }, void 0, false, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-md bg-white/5 px-2 py-1 text-white/60",
                                    children: sourceName
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/20",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-md bg-white/5 px-2 py-1 text-white/60",
                                    children: targetName
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 px-6 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-xs font-medium text-white/50",
                                            children: "Source Interface"
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sourceInterfaceId,
                                            onChange: (event)=>setSourceInterfaceId(event.target.value),
                                            className: "w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "bg-[#101419]",
                                                    children: "Select interface"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                sourceInterfaces.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: item.id,
                                                        className: "bg-[#101419]",
                                                        children: [
                                                            item.name,
                                                            " · ",
                                                            item.type
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-xs font-medium text-white/50",
                                            children: "Target Interface"
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: targetInterfaceId,
                                            onChange: (event)=>setTargetInterfaceId(event.target.value),
                                            className: "w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "bg-[#101419]",
                                                    children: "Select interface"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                targetInterfaces.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: item.id,
                                                        className: "bg-[#101419]",
                                                        children: [
                                                            item.name,
                                                            " · ",
                                                            item.type
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-xs font-medium text-white/50",
                                    children: "Connection Type"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: type,
                                    onChange: (event)=>setType(event.target.value),
                                    className: "w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30",
                                    children: connectionTypes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item.value,
                                            className: "bg-[#101419]",
                                            children: item.label
                                        }, item.value, false, {
                                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-xs font-medium text-white/50",
                                    children: "Protocol / Specification"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: protocol,
                                    onChange: (event)=>setProtocol(event.target.value),
                                    placeholder: "e.g. USB 3.2 Gen 2, CAN FD, 24V DC",
                                    className: "w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-xs font-medium text-white/50",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (event)=>setDescription(event.target.value),
                                    rows: 4,
                                    placeholder: "What does this connection carry or provide?",
                                    className: "w-full resize-none rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs text-red-300",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-t border-white/10 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "button",
                                variant: "danger",
                                onClick: handleDelete,
                                children: "Delete Connection"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "button",
                                    onClick: onClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "button",
                                    variant: "primary",
                                    onClick: handleSubmit,
                                    children: "Save Connection"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/engineering/architecture/ConnectionModal.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(ConnectionModal, "bXXmpv6um6e9mfVm2Yh3FSQNS5o=");
_c = ConnectionModal;
var _c;
__turbopack_context__.k.register(_c, "ConnectionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/requirements/RequirementCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequirementCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function RequirementCard({ requirement, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group rounded-xl border border-white/10 bg-[#111419] p-4 transition hover:border-white/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium",
                                children: requirement.name
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-white/40",
                                children: requirement.category
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 opacity-0 transition group-hover:opacity-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(requirement),
                                className: "rounded-md px-2 py-1 text-xs text-white/40 transition hover:bg-white/10 hover:text-white",
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(requirement.id),
                                className: "rounded-md px-2 py-1 text-xs text-white/40 transition hover:bg-white/10 hover:text-white",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-semibold",
                        children: requirement.value
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `rounded-full px-2 py-1 text-xs ${requirement.priority === "Required" ? "bg-white/10 text-white" : "bg-white/5 text-white/40"}`,
                        children: requirement.priority
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            requirement.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm leading-6 text-white/40",
                children: requirement.description
            }, void 0, false, {
                fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/engineering/requirements/RequirementCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = RequirementCard;
var _c;
__turbopack_context__.k.register(_c, "RequirementCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/requirements/RequirementModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequirementModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RequirementModal({ open, requirement, onClose, onSubmit }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mechanical");
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Required");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const editing = Boolean(requirement);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequirementModal.useEffect": ()=>{
            if (!open) {
                return;
            }
            if (requirement) {
                setName(requirement.name);
                setValue(requirement.value);
                setCategory(requirement.category);
                setPriority(requirement.priority);
                setDescription(requirement.description);
            } else {
                setName("");
                setValue("");
                setCategory("Mechanical");
                setPriority("Required");
                setDescription("");
            }
        }
    }["RequirementModal.useEffect"], [
        open,
        requirement
    ]);
    if (!open) {
        return null;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!name.trim() || !value.trim()) {
            return;
        }
        onSubmit({
            name: name.trim(),
            value: value.trim(),
            category,
            priority,
            description: description.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) {
                onClose();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl border border-white/10 bg-[#111419] shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-white/10 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: editing ? "Edit Requirement" : "Add Requirement"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-white/40",
                                    children: editing ? "Update this system requirement." : "Define a constraint or goal for the system."
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-lg px-2 py-1 text-white/40 transition hover:bg-white/10 hover:text-white",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm text-white/60",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: name,
                                    onChange: (event)=>setName(event.target.value),
                                    placeholder: "Maximum payload",
                                    autoFocus: true,
                                    className: "w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm text-white/60",
                                    children: "Value / Constraint"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: value,
                                    onChange: (event)=>setValue(event.target.value),
                                    placeholder: "≤ 10 kg",
                                    className: "w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm text-white/60",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: category,
                                            onChange: (event)=>setCategory(event.target.value),
                                            className: "w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Mechanical"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Electrical"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Performance"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Software"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Thermal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Safety"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Environmental"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Manufacturing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm text-white/60",
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: priority,
                                            onChange: (event)=>setPriority(event.target.value),
                                            className: "w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Required"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Preferred"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm text-white/60",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (event)=>setDescription(event.target.value),
                                    placeholder: "Explain why this requirement exists...",
                                    rows: 3,
                                    className: "w-full resize-none rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 border-t border-white/10 pt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-lg px-4 py-2 text-sm text-white/50 transition hover:bg-white/5 hover:text-white",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !name.trim() || !value.trim(),
                                    className: "rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40",
                                    children: editing ? "Save Changes" : "Add Requirement"
                                }, void 0, false, {
                                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/engineering/requirements/RequirementModal.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(RequirementModal, "qXmtspk9vjXjubS2Deqpi4vtlNw=");
_c = RequirementModal;
var _c;
__turbopack_context__.k.register(_c, "RequirementModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engineering/requirements/Requirements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Requirements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$RequirementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/requirements/RequirementCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$RequirementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/requirements/RequirementModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const initialRequirements = [
    {
        id: "1",
        name: "Maximum mass",
        value: "≤ 25 kg",
        category: "Mechanical",
        priority: "Required",
        description: "The complete system must not exceed 25 kg."
    },
    {
        id: "2",
        name: "Maximum speed",
        value: "≥ 5 m/s",
        category: "Performance",
        priority: "Required",
        description: "The system must be capable of reaching at least 5 m/s."
    },
    {
        id: "3",
        name: "Operating time",
        value: "≥ 2 hours",
        category: "Electrical",
        priority: "Required",
        description: "The system must operate for at least 2 hours."
    }
];
function Requirements() {
    _s();
    const [requirements, setRequirements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRequirements);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingRequirement, setEditingRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    function openAddModal() {
        setEditingRequirement(undefined);
        setModalOpen(true);
    }
    function openEditModal(requirement) {
        setEditingRequirement(requirement);
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
        setEditingRequirement(undefined);
    }
    function handleSubmit(data) {
        if (editingRequirement) {
            setRequirements((current)=>current.map((requirement)=>requirement.id === editingRequirement.id ? {
                        ...requirement,
                        ...data
                    } : requirement));
        } else {
            setRequirements((current)=>[
                    ...current,
                    {
                        id: crypto.randomUUID(),
                        ...data
                    }
                ]);
        }
        closeModal();
    }
    function deleteRequirement(id) {
        setRequirements((current)=>current.filter((requirement)=>requirement.id !== id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold",
                                        children: "Requirements"
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-white/40",
                                        children: "Define the constraints and goals for your system."
                                    }, void 0, false, {
                                        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openAddModal,
                                className: "shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90",
                                children: "+ Add Requirement"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 space-y-3",
                        children: requirements.map((requirement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$RequirementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                requirement: requirement,
                                onEdit: openEditModal,
                                onDelete: deleteRequirement
                            }, requirement.id, false, {
                                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    requirements.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 rounded-xl border border-dashed border-white/10 p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/40",
                                children: "No requirements yet."
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openAddModal,
                                className: "mt-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black",
                                children: "Add Requirement"
                            }, void 0, false, {
                                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$RequirementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: modalOpen,
                requirement: editingRequirement,
                onClose: closeModal,
                onSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/components/engineering/requirements/Requirements.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/engineering/requirements/Requirements.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(Requirements, "TrbwT8iE64T4agy0kCyzoUkXhJU=");
_c = Requirements;
var _c;
__turbopack_context__.k.register(_c, "Requirements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Header({ projectName, onMenuClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-[#0f1115] px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onMenuClick,
                        className: "rounded-md p-2 text-white/60 hover:bg-white/5 hover:text-white",
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-bold text-black",
                                children: "AI"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Engineering Platform"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white/50",
                        children: projectName
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-md p-2 text-white/60 hover:bg-white/5 hover:text-white",
                        children: "⚙"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs",
                        children: "H"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const projects = [
    "ORION",
    "Autonomous Rover",
    "Drone"
];
function Sidebar({ open, activeProject, onProjectChange }) {
    if (!open) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex w-60 shrink-0 flex-col border-r border-white/10 bg-[#0f1115]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/10 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90",
                    children: "+ New Project"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 px-2 text-xs font-medium uppercase tracking-wider text-white/30",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onProjectChange(project),
                                className: `w-full rounded-lg px-3 py-2 text-left text-sm transition ${activeProject === project ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"}`,
                                children: project
                            }, project, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full rounded-lg px-3 py-2 text-left text-sm text-white/50 hover:bg-white/5 hover:text-white",
                    children: "Settings"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Workspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$Architecture$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/Architecture.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$Requirements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/requirements/Requirements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/Chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$EngineeringProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engineering/EngineeringProcess.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Workspace({ projectName, stage, onStageChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-white/10 px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold",
                                children: projectName
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-white/40",
                                children: getStageDescription(stage)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Workspace.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-0 flex-1",
                        children: [
                            stage === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 34,
                                columnNumber: 32
                            }, this),
                            stage === "requirements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$requirements$2f$Requirements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 36,
                                columnNumber: 40
                            }, this),
                            stage === "architecture" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$Architecture$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 38,
                                columnNumber: 40
                            }, this),
                            stage === "components" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Components",
                                description: "Select and manage the physical and electronic components."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            stage === "calculations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Calculations",
                                description: "Run and review engineering calculations."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            stage === "code" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Code",
                                description: "Develop, manage, and validate the software for the system."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            stage === "cad" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "CAD",
                                description: "Create and manage mechanical designs."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            stage === "simulation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Simulation",
                                description: "Simulate system behavior and performance."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            stage === "optimization" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Optimization",
                                description: "Optimize the design against project constraints."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            stage === "manufacturing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                title: "Manufacturing",
                                description: "Prepare the design for manufacturing."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Workspace.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Workspace.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Workspace.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engineering$2f$EngineeringProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeStage: stage,
                onStageChange: onStageChange
            }, void 0, false, {
                fileName: "[project]/components/layout/Workspace.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Workspace.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Workspace;
function getStageDescription(stage) {
    switch(stage){
        case "chat":
            return "AI engineering assistant";
        case "requirements":
            return "System requirements";
        case "architecture":
            return "System architecture";
        case "components":
            return "Components and parts";
        case "calculations":
            return "Engineering calculations";
        case "code":
            return "Software and code";
        case "cad":
            return "Computer-aided design";
        case "simulation":
            return "Engineering simulation";
        case "optimization":
            return "Design optimization";
        case "manufacturing":
            return "Manufacturing preparation";
    }
}
function Placeholder({ title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/layout/Workspace.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm leading-6 text-white/40",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/components/layout/Workspace.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90",
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Workspace.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Workspace.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Workspace.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c1 = Placeholder;
var _c, _c1;
__turbopack_context__.k.register(_c, "Workspace");
__turbopack_context__.k.register(_c1, "Placeholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button({ children, variant = "default", className = "", type = "button", ...props }) {
    const variants = {
        default: "border border-white/10 bg-[#15191f] text-white/70 hover:bg-[#1c2128] hover:text-white",
        primary: "border border-white/15 bg-white text-black hover:bg-white/90",
        danger: "border border-red-400/20 bg-red-400/5 text-red-300 hover:bg-red-400/10",
        ghost: "border border-transparent bg-transparent text-white/50 hover:bg-white/5 hover:text-white"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: `rounded-lg px-3 py-2 text-sm font-medium transition ${variants[variant]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Modal({ open, onClose, children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!open) {
                return;
            }
            function handleKeyDown(event) {
                if (event.key === "Escape") {
                    onClose();
                }
            }
            document.addEventListener("keydown", handleKeyDown);
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = previousOverflow;
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        open,
        onClose
    ]);
    if (!open) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) {
                onClose();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-white/10 bg-[#15191f] shadow-2xl",
            onMouseDown: (event)=>event.stopPropagation(),
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Modal.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_02_rom4._.js.map