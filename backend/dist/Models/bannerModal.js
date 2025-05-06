"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bannerSchema = new mongoose_1.default.Schema({
    banners: { type: Array, default: [] },
    time: { type: Number, default: 0 },
    isSlide: { type: Boolean, default: true }
}, { timestamps: true });
const Banner = mongoose_1.default.model("Banner", bannerSchema);
exports.default = Banner;
