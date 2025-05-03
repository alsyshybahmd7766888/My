module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            accent: "bg-accent text-accent-foreground hover:bg-accent/90"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// Base styles from specs: h-12 (48px), rounded-md (8px), border, bg-input (#F9F9F9), padding, text-base (16sp)
        "flex h-12 w-full rounded-[var(--radius)] border border-border bg-input px-3 py-2 text-base ring-offset-background", // File input specific styles (keep default)
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground", // Placeholder text style: #9E9E9E (muted-foreground)
        "placeholder:text-muted-foreground", // Focus visible state: default ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // Disabled state: default
        "disabled:cursor-not-allowed disabled:opacity-50", // Ensure text color is appropriate for the background (usually card-foreground or foreground)
        "text-card-foreground", // Remove responsive text size unless specified
        // "md:text-sm",
        // Transition for smooth visual changes
        "transition-colors duration-200 ease-in-out", // Remove hover effect unless specified
        // "hover:border-primary/50",
        className // Allow consuming components to override styles
        ),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/lib/firebase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db),
    "firebaseApp": (()=>firebaseApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-d5ff2369.js [app-ssr] (ecmascript) <export o as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Use environment variables for sensitive information
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "YOUR_API_KEY"),
    authDomain: ("TURBOPACK compile-time value", "YOUR_PROJECT_ID.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "YOUR_PROJECT_ID"),
    storageBucket: ("TURBOPACK compile-time value", "YOUR_PROJECT_ID.appspot.com"),
    messagingSenderId: ("TURBOPACK compile-time value", "YOUR_SENDER_ID"),
    appId: ("TURBOPACK compile-time value", "YOUR_APP_ID"),
    measurementId: ("TURBOPACK compile-time value", "YOUR_MEASUREMENT_ID")
};
// Initialize Firebase only if it hasn't been initialized yet
const firebaseApp = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__["getAuth"])(firebaseApp);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(firebaseApp);
;
}}),
"[project]/src/app/(authenticated)/services/recharge/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RechargePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-ssr] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)"); // Keep Card for structure
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>"); // Import Firebase Auth and User type
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-d5ff2369.js [app-ssr] (ecmascript) <export o as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-d5ff2369.js [app-ssr] (ecmascript) <export y as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)"); // Assuming firebaseApp is initialized here
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
;
;
;
;
// Updated operator prefixes based on 4ME structure
const operatorPrefixes = {
    'يمن موبايل': [
        '77',
        '78'
    ],
    'سبأفون': [
        '71'
    ],
    'YOU': [
        '73'
    ],
    'واي': [
        '70'
    ],
    'الهاتف الأرضي': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09'
    ],
    'ADSL': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09'
    ]
};
// Operator logos (ensure these paths exist or use placeholders)
// Assuming logos directory exists in public/logos/
const operatorLogos = {
    'يمن موبايل': '/logos/yemen-mobile.png',
    'سبأفون': '/logos/sabafon.png',
    'YOU': '/logos/you.png',
    'واي': '/logos/y.png',
    'الهاتف الأرضي': '/logos/landline.png',
    'ADSL': '/logos/adsl.png'
};
// Sample data using updated operator names
const packagesData = {
    'يمن موبايل': [
        {
            id: 'ym1',
            name: 'باقة موبايلي الشهرية',
            price: 1500,
            description: '5GB بيانات + 150 دقيقة + 100 رسالة'
        },
        {
            id: 'ym2',
            name: 'باقة نت 2 جيجا',
            price: 700,
            description: '2GB بيانات صالحة لأسبوع'
        },
        {
            id: 'ym3',
            name: 'تعبئة رصيد مباشر',
            price: 'حسب المبلغ',
            description: 'أدخل مبلغ التعبئة'
        }
    ],
    'سبأفون': [
        // Updated Sabafon Packages (Using provided data)
        {
            id: 'sb-dp-yb-week',
            name: 'دفع مسبق يابلاش الاسبوعية',
            price: 484
        },
        {
            id: 'sb-dp-yb-month',
            name: 'دفع مسبق يابلاش الشهرية',
            price: 1210
        },
        {
            id: 'sb-dp-yb-superplus',
            name: 'دفع مسبق يابلاش سوبر بلاس',
            price: 3025
        },
        {
            id: 'sb-dp-yb-kalam',
            name: 'دفع مسبق يابلاش كلام- 400 دقيقة- 30يوم',
            price: 1210
        },
        {
            id: 'sb-dp-whatsapp-week',
            name: 'دفع مسبق واتساب الأسبوعية',
            price: 484
        },
        {
            id: 'sb-dp-fb-twitter',
            name: 'دفع مسبق فيسبوك+تويتر',
            price: 484
        },
        {
            id: 'sb-dp-fb-month',
            name: 'دفع مسبق فيسبوك الشهرية',
            price: 1210
        },
        {
            id: 'sb-dp-tawasol-extra',
            name: 'دفع مسبق تواصل اكسترا الشهرية',
            price: 1029
        },
        {
            id: 'sb-dp-tawasol-month',
            name: 'دفع مسبق تواصل الشهرية- فيسبوك',
            price: 1997
        },
        {
            id: 'sb-dp-supernet-day',
            name: 'دفع مسبق سوبرنت اليومية',
            price: 484
        },
        {
            id: 'sb-dp-supernet-1',
            name: 'دفع مسبق سوبرنت 1-250 ميجابايت 30 يوم',
            price: 1210
        },
        {
            id: 'sb-dp-supernet-2',
            name: 'دفع مسبق سوبرنت 2 - 500 ميجابايت 30 يوم',
            price: 1815
        },
        {
            id: 'sb-dp-supernet-3',
            name: 'دفع مسبق سوبرنت 3- 1024 ميجا 30 يوم',
            price: 3025
        },
        {
            id: 'sb-dp-supernet-4',
            name: 'دفع مسبق سوبرنت 4- 4000 ميجا 30يوم',
            price: 4840
        },
        {
            id: 'sb-dp-msg-200',
            name: 'دفع مسبق 200 رسالة',
            price: 484
        },
        {
            id: 'sb-dp-msg-600',
            name: 'دفع مسبق 600 رسالة',
            price: 726
        },
        {
            id: 'sb-dp-gsm-week',
            name: 'دفع مسبق جي إس إم الاسبوعية',
            price: 1004
        },
        {
            id: 'sb-dp-wahed-day',
            name: 'دفع مسبق باقة واحد اليومية لكل الشبكات',
            price: 508
        },
        {
            id: 'sb-dp-wahed-month',
            name: 'دفع مسبق باقة واحد الشهرية لكل الشبكات',
            price: 1513
        },
        {
            id: 'sb-dp-wahed-week-all',
            name: 'باقة واحد الاسبوعية- دفع مسبق لكل الشبكات',
            price: 811
        },
        {
            id: 'sb-dp-yb-daily',
            name: 'دفع مسبق يابلاش اليومية',
            price: 575
        },
        {
            id: 'sb-dp-yb-10days',
            name: 'دفع مسبق يابلاش 10 ايام',
            price: 847
        },
        {
            id: 'sb-dp-whatsapp-plus-month',
            name: 'دفع مسبق واتساب بلاس الشهرية',
            price: 1573
        },
        {
            id: 'sb-dp-gsm-month',
            name: 'دفع مسبق جي اس ام الشهرية',
            price: 1936
        },
        {
            id: 'sb-dp-4g-inter-12gb',
            name: 'انتر 12 جيجا فورجي دفع مسبق',
            price: 4520
        },
        {
            id: 'sb-dp-4g-inter-7gb',
            name: 'انتر 7 جيجا فورجي دفع مسبق',
            price: 3420
        },
        {
            id: 'sb-dp-4g-inter-6gb',
            name: 'انتر 6 جيجا فورجي دفع مسبق',
            price: 2260
        },
        {
            id: 'sb-dp-4g-inter-week-2gb',
            name: 'أنتر فورجي الأسبوعية 2 جيجا- دفع مسبق',
            price: 990
        },
        {
            id: 'sb-dp-4g-inter-day-1.5gb',
            name: 'أنتر فورجي اليومية 1.5 جيجا- دفع مسبق',
            price: 500
        },
        {
            id: 'sb-dp-4g-hybrid-month',
            name: 'هايبرد فورجي الشهرية -دفع مسبق',
            price: 3350
        },
        {
            id: 'sb-dp-4g-hybrid-week',
            name: 'هايبرد فورجي الاسبوعيه - دفع مسبق',
            price: 1400
        },
        {
            id: 'sb-dp-4g-safari-4h',
            name: 'سفري 4 ساعات فورجي - دفع مسبق',
            price: 193
        },
        {
            id: 'sb-dp-4g-safari-8h',
            name: 'سفري 8 ساعات فورجي - دفع مسبق',
            price: 291
        },
        {
            id: 'sb-dp-4g-inter-4gb',
            name: 'انتر 4 جيجا فورجي- دفع مسبق',
            price: 1940
        },
        {
            id: 'sb-dp-inter-layali',
            name: 'انتر ليالي دفع مسبق',
            price: 944
        },
        {
            id: 'sb-dp-4g-inter-15gb',
            name: 'انتر فورجي 15 جيجا دفع مسبق',
            price: 7260
        },
        {
            id: 'sb-dp-4g-yb-month',
            name: 'يابلاش فورجي الشهرية - دفع مسبق',
            price: 2390
        },
        {
            id: 'sb-dp-4g-yb-10days',
            name: 'يابلاش فورجي 10 أيام دفع مسبق',
            price: 1330
        },
        {
            id: 'sb-dp-4g-yb-2days',
            name: 'يابلاش فورجي يومين - دفع مسبق',
            price: 'حسب الطلب'
        },
        // فوترة (Postpaid) - Can be filtered out or handled differently if needed
        {
            id: 'sb-post-yb-month',
            name: 'فوترة يابلاش الشهرية',
            price: 1210,
            category: 'فوترة'
        },
        {
            id: 'sb-post-yb-kalam',
            name: 'فوترة يابلاش كلام',
            price: 1210,
            category: 'فوترة'
        },
        {
            id: 'sb-post-wahed-month',
            name: 'فوترة باقة واحد الشهرية لكل الشبكات',
            price: 1513,
            category: 'فوترة'
        },
        {
            id: 'sb-post-yb-superplus',
            name: 'فوترة يابلاش سوبر بلاس الشهرية',
            price: 3025,
            category: 'فوترة'
        },
        {
            id: 'sb-post-whatsapp-week',
            name: 'فوترة واتساب الأسبوعية',
            price: 484,
            category: 'فوترة'
        },
        {
            id: 'sb-post-fb-twitter',
            name: 'فوترة فيسبوك +تويتر الاسبوعية',
            price: 484,
            category: 'فوترة'
        },
        {
            id: 'sb-post-fb-plus-month',
            name: 'فوترة فيسبوك بلاس الشهرية',
            price: 1210,
            category: 'فوترة'
        },
        {
            id: 'sb-post-tawasol-extra',
            name: 'فوترة تواصل اكسترا',
            price: 1029,
            category: 'فوترة'
        },
        {
            id: 'sb-post-tawasol-month',
            name: 'فوترة تواصل الشهرية',
            price: 1997,
            category: 'فوترة'
        },
        {
            id: 'sb-post-supernet-day',
            name: 'فوترة سوبرنت اليومية',
            price: 484,
            category: 'فوترة'
        },
        {
            id: 'sb-post-supernet-1',
            name: 'فوترة سوبرنت 1',
            price: 1210,
            category: 'فوترة'
        },
        {
            id: 'sb-post-supernet-2',
            name: 'فوترة سوبرنت 2',
            price: 1815,
            category: 'فوترة'
        },
        {
            id: 'sb-post-supernet-3',
            name: 'فوترة سوبرنت3',
            price: 3025,
            category: 'فوترة'
        },
        {
            id: 'sb-post-supernet-4',
            name: 'فوترة سوبرنت 4',
            price: 4840,
            category: 'فوترة'
        },
        {
            id: 'sb-post-msg-200',
            name: 'فوترة 200 رسالة',
            price: 484,
            category: 'فوترة'
        },
        {
            id: 'sb-post-msg-600',
            name: 'فوترة 600 رسالة',
            price: 726,
            category: 'فوترة'
        },
        {
            id: 'sb-post-whatsapp-plus-month',
            name: 'فوترة واتساب بلاس الشهرية',
            price: 1573,
            category: 'فوترة'
        },
        {
            id: 'sb-post-gsm-month',
            name: 'فوترة جي اس ام الشهرية',
            price: 1936,
            category: 'فوترة'
        },
        {
            id: 'sb-post-whatsapp-plus',
            name: 'باقة واتساب بلاس فوترة',
            price: 1210,
            category: 'فوترة'
        },
        {
            id: 'sb-post-gsm-allnet',
            name: 'باقة جي اس ام الشهرية لجميع شبكات الجي اس ام',
            price: 1936,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-12gb',
            name: 'انتر 12 جيجا فورجي فوتره',
            price: 4520,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-7gb',
            name: 'انتر 7 جيجا فورجي فوتره',
            price: 3420,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-6gb',
            name: 'انتر 6 جيجا فورجي فوتره',
            price: 2260,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-week-2gb',
            name: 'أنتر فورجي الأسبوعية 2 جيجا- فوترة',
            price: 990,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-day-1.5gb',
            name: 'أنتر فورجي اليومية 1.5 جيجا- فوترة',
            price: 500,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-hybrid-month',
            name: 'هايبرد فورجي الشهرية- فوترة',
            price: 3350,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-safari-4h',
            name: 'سفري 4 ساعات فورجي - فوترة',
            price: 193,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-safari-8h',
            name: 'سفري 8 ساعات فورجي - فوترة',
            price: 291,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-4gb',
            name: 'انتر 4 جيجا فورجي - فوترة',
            price: 1940,
            category: 'فوترة'
        },
        {
            id: 'sb-post-inter-layali',
            name: 'انتر ليالي - فوترة',
            price: 944,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-inter-15gb',
            name: 'انتر فورجي 15 جيجا فوترة',
            price: 7260,
            category: 'فوترة'
        },
        {
            id: 'sb-post-4g-yb-month',
            name: 'يابلاش فورجي الشهرية - فوترة',
            price: 2390,
            category: 'فوترة'
        },
        // Fallback for direct recharge if needed
        {
            id: 'sb-direct-recharge',
            name: 'تعبئة رصيد مباشر',
            price: 'حسب المبلغ',
            description: 'أدخل مبلغ التعبئة'
        }
    ],
    'YOU': [
        // باقات سوى
        {
            id: 'you-sawa-250-300',
            name: 'سوا 250 دقيقة 300 رسالة الشهرية',
            price: 1815,
            category: 'باقات سوى'
        },
        // باقات التواصل الاجتماعية
        {
            id: 'you-social-daily',
            name: 'توفير اليومية',
            price: 496,
            category: 'باقات التواصل الاجتماعية'
        },
        {
            id: 'you-whatsapp-unlimited',
            name: 'واتساب بلاحدود',
            price: 484,
            category: 'باقات التواصل الاجتماعية'
        },
        // باقات مكس المميزة الشهرية
        {
            id: 'you-mix-plus',
            name: 'مكس بلس',
            price: 1513,
            category: 'باقات مكس المميزة الشهرية'
        },
        {
            id: 'you-mix-300-400-100',
            name: 'مكس (300دقيقة 400 رسالة 100 ميجا ) دفع مسبق',
            price: 1250,
            category: 'باقات مكس المميزة الشهرية'
        },
        {
            id: 'you-mix-600-700-300',
            name: 'مكس (600 دقيقة - 700 رسالة - 300 ميجا ) دفع مسبق',
            price: 2420,
            category: 'باقات مكس المميزة الشهرية'
        },
        {
            id: 'you-mix-weekly',
            name: 'مكس الاسبوعية',
            price: 496,
            category: 'باقات مكس المميزة الشهرية'
        },
        // باقات اتصال مكالمات فقط
        {
            id: 'you-calls-400',
            name: 'مكالمات 400 دقيقة',
            price: 1210,
            category: 'باقات اتصال مكالمات فقط'
        },
        {
            id: 'you-calls-600-weekly',
            name: 'مكالمات 600 دقيقة الأسبوعية',
            price: 1004,
            category: 'باقات اتصال مكالمات فقط'
        },
        // باقات رسائل
        {
            id: 'you-sms-750',
            name: 'باقة رسايل 750 رسالة',
            price: 1210,
            category: 'باقات رسائل'
        },
        // باقات فورجي
        {
            id: 'you-4g-smart-0.5gb-24h',
            name: 'سمارت 0.5 جيجا فورجي (24 ساعة )',
            price: 266,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-smart-1gb-48h',
            name: 'سمارت 1 جيجا فورجي (48 ساعة)',
            price: 484,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-smart-5gb-14d',
            name: 'سمارت 5 جيجا فورجي (14 يوم)',
            price: 2420,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-smart-8gb-30d',
            name: 'سمارت 8 جيجا فورجي( 30 يوم)',
            price: 3485,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-mix-1.5gb-72h',
            name: 'مكس 1.5 جيجا فورجي( 72 ساعة )',
            price: 962,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-mix-6gb-30d',
            name: 'مكس 6 جيجا فورجي (30 يوم)',
            price: 3412,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-smart-3gb',
            name: 'سمارت 3 جيجا فورجي',
            price: 1452,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-mix-30gb',
            name: 'مكس 30 جيجا فورجي',
            price: 14714,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-wafer-9gb',
            name: 'وفر 9 جيجا فورجي',
            price: 3485,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-wafer-plus-10gb',
            name: 'باقة وفر بلس 10 جيجا 4G-فورجي',
            price: 2500,
            category: 'باقات فورجي'
        },
        {
            id: 'you-4g-mix-monthly-10gb',
            name: 'باقة مكس الشهرية 10 جيجا فورجي',
            price: 5990,
            category: 'باقات فورجي'
        },
        // باقة سمارت نت
        {
            id: 'you-smartnet-2gb-weekly',
            name: 'باقة 2 جيجاالأسبوعية',
            price: 1210,
            category: 'باقة سمارت نت'
        },
        {
            id: 'you-smartnet-postpaid-500mb',
            name: 'فوترة 500 ميجا',
            price: 1210,
            category: 'باقة سمارت نت'
        },
        {
            id: 'you-smartnet-2g-1gb-monthly-dp',
            name: 'باقه توجي سمارت نت1جيجا الشهرية دفع مسبق',
            price: 1210,
            category: 'باقة سمارت نت'
        },
        {
            id: 'you-smartnet-4g-20gb',
            name: 'باقة سمارت 20 جيجا 4G-فورجي',
            price: 9680,
            category: 'باقة سمارت نت'
        },
        // باقات الربط الموحد
        {
            id: 'you-unified-4gmax-12gb',
            name: 'باقة السعر الموحد فورجي ماكس 12جيجا',
            price: 9874,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-4gmax-5gb',
            name: 'باقة السعر الموحد فورجي ماكس 5جيجا',
            price: 5445,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-mix-10000',
            name: 'باقة السعر الموحد مكس 10000',
            price: 9862,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-mix-5000',
            name: 'باقة السعر الموحد مكس 5000',
            price: 4901,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-4g-4gb',
            name: 'باقه السعر الموحد 4 جيجا فورجي',
            price: 2904,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-wafer-plus-10gb',
            name: 'باقة وفر بلس 10 جيجا السعر الموحد',
            price: 2500,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-sawa-300',
            name: 'باقة سوا 300 السعر الموحد',
            price: 2904,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-smart-4g-daily',
            name: 'باقه السعر الموحد سمارت فورجي اليوميه',
            price: 1815,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-smart-4g-weekly',
            name: 'باقه السعر الموحد سمارت فورجي الاسبوعيه',
            price: 2251,
            category: 'باقات الربط الموحد'
        },
        {
            id: 'you-unified-smart-4g-15gb',
            name: 'فورجي سمارت15جيجا - السعر الموحد',
            price: 12705,
            category: 'باقات الربط الموحد'
        },
        // باقات هلال فورجي
        {
            id: 'you-hilal-4g-1gb',
            name: 'باقة هلال 1جيجا فورجي',
            price: 300,
            category: 'باقات هلال فورجي'
        },
        {
            id: 'you-hilal-4g-2gb',
            name: 'باقة هلال 2جيجا فورجي',
            price: 500,
            category: 'باقات هلال فورجي'
        },
        {
            id: 'you-hilal-4g-3gb',
            name: 'باقة هلال 3جيجا فورجي',
            price: 699,
            category: 'باقات هلال فورجي'
        },
        // Direct Recharge fallback
        {
            id: 'you-direct-recharge',
            name: 'تعبئة رصيد YOU',
            price: 'حسب المبلغ',
            description: 'أدخل مبلغ التعبئة'
        }
    ],
    'واي': [
        {
            id: 'y1',
            name: 'باقة واي شباب الأسبوعية',
            price: 600,
            description: '2GB بيانات ومكالمات داخل الشبكة'
        },
        {
            id: 'y3',
            name: 'تعبئة رصيد Y',
            price: 'حسب المبلغ',
            description: 'أدخل مبلغ التعبئة'
        }
    ],
    'الهاتف الأرضي': [
        {
            id: 'll1',
            name: 'تسديد فاتورة الهاتف الثابت',
            price: 'حسب الفاتورة',
            description: 'سيتم جلب مبلغ الفاتورة تلقائياً'
        }
    ],
    'ADSL': [
        {
            id: 'adsl1',
            name: 'تجديد اشتراك ADSL الشهري',
            price: 'حسب الفاتورة',
            description: 'سيتم جلب مبلغ التجديد تلقائياً'
        }
    ]
};
// Function to call the Firebase Cloud Function
const callRechargeFunction = async (payload)=>{
    // Replace with your actual Firebase Cloud Function URL
    // Find this in your Firebase console: Functions -> Dashboard -> Trigger URL for 'recharge'
    // Or if using emulators: http://localhost:5001/your-project-id/your-region/recharge
    const functionUrl = ("TURBOPACK compile-time value", "YOUR_RECHARGE_FUNCTION_URL_HERE") || 'http://127.0.0.1:5001/nextn-a3266/us-central1/recharge'; // Replace or use environment variable
    if ("TURBOPACK compile-time truthy", 1) {
        console.error("Recharge function URL is not configured. Please set NEXT_PUBLIC_RECHARGE_FUNCTION_URL environment variable or replace the placeholder.");
        throw new Error("Recharge endpoint not configured.");
    }
    console.log("Calling recharge function at:", functionUrl);
    console.log("Payload being sent:", {
        ...payload,
        token: 'HIDDEN'
    }); // Don't log the token
    const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}` // Send Firebase Auth token
        },
        body: JSON.stringify({
            phoneNumber: payload.phoneNumber,
            amount: payload.amount,
            packageId: payload.packageId,
            operator: payload.operator,
            userId: payload.userId
        })
    });
    const responseData = await response.json();
    if (!response.ok) {
        // Throw an error with the message from the backend if available
        throw new Error(responseData.error || `Request failed with status ${response.status}`);
    }
    return responseData; // Contains { success: boolean, message: string, ... }
};
function RechargePage() {
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [detectedOperator, setDetectedOperator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [operatorLogo, setOperatorLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPackages, setShowPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFetchingPackages, setIsFetchingPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeButtonId, setActiveButtonId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Store Firebase user with User type
    const [idToken, setIdToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Store ID token
    // --- Simulate Balance State ---
    // Replace this with actual state management fetching from backend or context
    const [currentBalance, setCurrentBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5000); // Example starting balance
    // Function to fetch user's balance from backend (replace with actual API call)
    const fetchBalance = async (userId)=>{
        // Example: Call your backend API to get balance
        // const response = await fetch(`/api/user/${userId}/balance`);
        // const data = await response.json();
        // setCurrentBalance(data.balance);
        console.log("Fetching balance for user (simulated):", userId);
    // For now, keep the simulated balance
    };
    // --- Firebase Auth Listener ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firebaseApp"]);
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$d5ff2369$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(auth, async (user)=>{
            if (user) {
                setCurrentUser(user);
                try {
                    const token = await user.getIdToken(true); // Force refresh token
                    setIdToken(token);
                    console.log("User authenticated:", user.uid);
                    fetchBalance(user.uid); // Fetch balance when user is loaded
                } catch (error) {
                    console.error("Error getting ID token:", error);
                    toast({
                        title: "خطأ في المصادقة",
                        description: "لا يمكن التحقق من هويتك. حاول تسجيل الدخول مرة أخرى.",
                        variant: "destructive"
                    });
                    setIdToken(null);
                    setCurrentUser(null);
                }
            } else {
                console.log("User not authenticated.");
                setCurrentUser(null);
                setIdToken(null);
            // Optionally redirect to login if required on this page
            // router.push('/login');
            }
        });
        // Cleanup subscription on unmount
        return ()=>unsubscribe();
    }, [
        toast
    ]); // Add toast to dependencies
    // ------------------------------
    const detectOperator = (number)=>{
        let foundOperator = null;
        let logoPath = null;
        // Prioritize mobile prefixes
        for (const operator of [
            'يمن موبايل',
            'سبأفون',
            'YOU',
            'واي'
        ]){
            for (const prefix of operatorPrefixes[operator]){
                if (number.startsWith(prefix)) {
                    foundOperator = operator;
                    logoPath = operatorLogos[foundOperator] || null;
                    break;
                }
            }
            if (foundOperator) break;
        }
        // If no mobile operator found, check for landline/ADSL (based on '0' prefix)
        if (!foundOperator && number.startsWith('0') && number.length >= 2) {
            const areaCodePrefix = number.substring(0, 2); // e.g., '01', '02'
            if (operatorPrefixes['الهاتف الأرضي'].includes(areaCodePrefix)) {
                foundOperator = 'الهاتف الأرضي'; // Default to Landline
                logoPath = operatorLogos[foundOperator] || operatorLogos['ADSL'] || null;
            }
        }
        setDetectedOperator(foundOperator);
        setOperatorLogo(logoPath);
        if (foundOperator) {
            setShowPackages(true);
            setIsFetchingPackages(true);
            // Simulate loading packages
            setTimeout(()=>setIsFetchingPackages(false), 500);
        } else {
            setShowPackages(false);
        }
    };
    const handleInputChange = (event)=>{
        const value = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setPhoneNumber(value);
        if (value.length >= 2) {
            detectOperator(value);
        } else {
            setDetectedOperator(null);
            setOperatorLogo(null);
            setShowPackages(false);
        }
    };
    const handleRechargeClick = async (pkg)=>{
        console.log("handleRechargeClick triggered for package:", pkg.name);
        console.log("Current User:", currentUser?.uid);
        console.log("ID Token available:", !!idToken);
        // --- Authentication Check ---
        if (!currentUser || !idToken) {
            console.error("Authentication check failed: User or ID token is missing.");
            toast({
                title: "المصادقة مطلوبة",
                description: "يرجى تسجيل الدخول أولاً لتتمكن من الشحن.",
                variant: "destructive"
            });
            return;
        }
        console.log("Authentication check passed.");
        // --- Balance Check ---
        const packagePrice = typeof pkg.price === 'number' ? pkg.price : 0; // Handle non-numeric prices
        if (packagePrice <= 0) {
            console.error("Package price check failed: Price is invalid or zero.", pkg.price);
            toast({
                title: "خطأ",
                description: "لا يمكن شحن هذه الباقة حالياً (السعر غير محدد).",
                variant: "destructive"
            });
            return;
        }
        console.log("Package price check passed:", packagePrice);
        // Fetch fresh balance before recharge maybe? Or rely on backend check.
        // For now, use the state balance for client-side check.
        if (currentBalance < packagePrice) {
            console.warn(`Balance check failed: Current balance (${currentBalance}) is less than package price (${packagePrice}).`);
            toast({
                title: "رصيد غير كافٍ",
                description: `رصيدك الحالي (${currentBalance} ريال) غير كافٍ لشحن هذه الباقة (${packagePrice} ريال).`,
                variant: "destructive"
            });
            return; // Stop execution if balance is insufficient
        }
        console.log("Balance check passed.");
        // ---------------------
        setActiveButtonId(pkg.id);
        setIsLoading(true);
        console.log(`Attempting to recharge package: ${pkg.name} for number: ${phoneNumber}. Cost: ${packagePrice}. Balance: ${currentBalance}. User: ${currentUser.uid}`);
        toast({
            title: "بدء عملية الشحن",
            description: `جاري شحن ${pkg.name} للرقم ${phoneNumber}...`,
            variant: 'default'
        });
        // --- Call Firebase Cloud Function ---
        try {
            const result = await callRechargeFunction({
                phoneNumber: phoneNumber,
                // amount: amount, // Include amount if it's a direct recharge
                packageId: pkg.id,
                operator: detectedOperator,
                userId: currentUser.uid,
                token: idToken
            });
            console.log("Cloud Function response:", result);
            // Handle success from the Cloud Function
            toast({
                title: "نجاح العملية",
                description: result.message || `تم شحن ${pkg.name} بنجاح للرقم ${phoneNumber}!`,
                variant: "default"
            });
            // --- Update Frontend Balance (Simulated) ---
            // In a real app, the backend might return the new balance, or you'd refetch it.
            if (result.success && result.newBalance !== undefined) {
                setCurrentBalance(result.newBalance);
            } else {
                // Fallback: Deduct locally or refetch
                setCurrentBalance((prev)=>prev - packagePrice);
            // Or: fetchBalance(currentUser.uid);
            }
        // Optionally clear phone number
        // setPhoneNumber('');
        // setDetectedOperator(null);
        // setShowPackages(false);
        } catch (error) {
            console.error('Recharge function call failed:', error);
            toast({
                title: "فشل العملية",
                // Use error message from the backend function if available
                description: error.message || `فشل شحن ${pkg.name}. يرجى المحاولة لاحقاً.`,
                variant: "destructive"
            });
            // Check if the error indicates insufficient balance from the backend
            if (error.message?.toLowerCase().includes('insufficient balance')) {
            // Optionally update local balance if backend provides it
            // if (error.currentBalance !== undefined) setCurrentBalance(error.currentBalance);
            }
        } finally{
            // Ensure loading state is always reset
            setIsLoading(false);
            setActiveButtonId(null);
        }
    };
    // Group packages by category for rendering
    const groupedPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!detectedOperator || !packagesData[detectedOperator]) return {};
        // Filter out 'فوترة' packages unless specific logic is added to handle them
        const filteredPackages = packagesData[detectedOperator].filter((pkg)=>pkg.category !== 'فوترة');
        return filteredPackages.reduce((acc, pkg)=>{
            const category = pkg.category || 'عام'; // Default category if none provided
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(pkg);
            return acc;
        }, {});
    }, [
        detectedOperator
    ]);
    return(// Background: Light Grey (#F7F9FA), Text: Dark Grey (#333333)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 flex h-16 items-center justify-between bg-primary px-4 py-2 text-primary-foreground shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        passHref: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "text-primary-foreground hover:bg-primary/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "رجوع"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-medium",
                        children: "التعبئة"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                lineNumber: 489,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 space-y-4 p-4 pt-6 md:p-6 md:pt-8",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "tel",
                                placeholder: "أدخل رقم الهاتف أو الأرضي",
                                value: phoneNumber,
                                onChange: handleInputChange,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 w-full rounded-[8px] border border-border bg-input py-3 pl-4 pr-12 text-lg shadow-sm placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary text-foreground", "text-right" // Align text to the right for RTL numbers
                                ),
                                maxLength: 15,
                                dir: "ltr" // Keep LTR for number input behavior
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this),
                            operatorLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 transform overflow-hidden rounded-md",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: operatorLogo,
                                        alt: detectedOperator || 'Operator',
                                        width: 32,
                                        height: 32,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                lineNumber: 521,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 505,
                        columnNumber: 10
                    }, this),
                    phoneNumber.length >= 2 && !detectedOperator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-destructive",
                        children: "المشغل غير مدعوم حالياً."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 529,
                        columnNumber: 12
                    }, this) // Destructive text color
                    ,
                    showPackages && detectedOperator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-center text-base font-semibold text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "inline-block h-5 w-5 mr-2 align-middle text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 18
                                    }, this),
                                    "باقات ",
                                    detectedOperator,
                                    " المتاحة"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-[calc(100vh-280px)]",
                                children: [
                                    " ",
                                    isFetchingPackages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-8 w-8 animate-spin text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 25
                                            }, this),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 23
                                    }, this) : Object.keys(groupedPackages).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            " ",
                                            Object.entries(groupedPackages).map(([category, pkgs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        category !== 'عام' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mb-2 px-1 text-base font-medium text-muted-foreground",
                                                            children: category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 38
                                                        }, this) // Use muted-foreground
                                                        ,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                " ",
                                                                pkgs.map((pkg)=>// Package Card: Use card styles
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                                        className: "overflow-hidden rounded-[12px] bg-card p-3 shadow-md transition-transform duration-150 ease-in-out active:scale-[0.98] active:shadow active:translate-y-[2px]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 space-y-1 text-right",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-base font-semibold text-card-foreground",
                                                                                            children: pkg.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                            lineNumber: 560,
                                                                                            columnNumber: 54
                                                                                        }, this),
                                                                                        pkg.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-muted-foreground",
                                                                                            children: pkg.description
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                            lineNumber: 562,
                                                                                            columnNumber: 74
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-medium text-primary flex items-center justify-end gap-1 pt-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"], {
                                                                                                    className: "h-4 w-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                                    lineNumber: 565,
                                                                                                    columnNumber: 58
                                                                                                }, this),
                                                                                                typeof pkg.price === 'number' && pkg.price > 0 ? `${pkg.price} ريال` : pkg.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                            lineNumber: 564,
                                                                                            columnNumber: 54
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                    lineNumber: 558,
                                                                                    columnNumber: 50
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    size: "sm",
                                                                                    variant: "accent" // Use accent variant
                                                                                    ,
                                                                                    className: "px-4 py-1.5 text-sm font-medium shadow-sm h-auto rounded-[8px] transition-all" // Add base styles
                                                                                    ,
                                                                                    onClick: ()=>handleRechargeClick(pkg),
                                                                                    disabled: isLoading && activeButtonId === pkg.id,
                                                                                    children: isLoading && activeButtonId === pkg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                        className: "h-4 w-4 animate-spin"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                        lineNumber: 580,
                                                                                        columnNumber: 58
                                                                                    }, this) : 'اشحن الآن'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                                    lineNumber: 572,
                                                                                    columnNumber: 50
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                            lineNumber: 556,
                                                                            columnNumber: 46
                                                                        }, this)
                                                                    }, pkg.id, false, {
                                                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 42
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, category, true, {
                                                    fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 30
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 22
                                    }, this) : // No packages message: Use muted-foreground
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p-6 text-center text-muted-foreground",
                                        children: "لا توجد باقات متاحة حالياً لهذا المشغل."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                                lineNumber: 539,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                        lineNumber: 534,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/services/recharge/page.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this));
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__066d5ae2._.js.map