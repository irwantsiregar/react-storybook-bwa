"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FeaturedSection({ number, content, button, badge, image }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4 group", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-green uppercase font-semibold mb-3", children: content.preheading || "Pre Heading" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-navy font-semibold text-[30px] mb-5", children: content.heading || "Heading" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-grey leading-8 mb-8", children: content.paragraph || "Paragraph" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative md:group-odd:order-1 md:group-even:order-2", children: [(0, jsx_runtime_1.jsx)("div", { className: [
                                "absolute rounded-full inline-flex items-center justify-center text-2xl font-semibold top-0 left-0 z-10 border-2 border-white text-white transform -translate-x-1/2 -translate-y-1/2 p-4 w-14 h-14",
                                number.className || "bg-green",
                            ].join(" "), children: number.text }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute rounded-xl bottom-0 right-0 bg-white z-10 transform translate-x-4 translate-y-4 md:translate-x-1/4 xl:translate-x-1/2 xl:translate-y-1/2 p-4 w-56", children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex items-center gap-x-2 mb-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-5 h-5 p-1 bg-green rounded-full flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 12 8", fill: "none", preserveAspectRatio: "xMidYMid meet", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.83325 4L4.46483 6.5L10.1666 1.5", className: "stroke-white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-navy font-medium", children: badge.title })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-grey text-sm hidden md:block", children: badge.content })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative max-w-full w-[240px] h-[340px] xl:w-[340px] xl:h-[440px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden", children: typeof image === "string" ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: badge.title })) : (image) })] })] }) }));
}
exports.default = FeaturedSection;
