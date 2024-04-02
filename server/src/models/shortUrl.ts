import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";


type ShortUrlType = {
    fullUrl: string;
    shortUrl: string;
    clicks: number;
 };

const shortUrlSchema = new Schema<ShortUrlType>({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: () => nanoid().substring(0, 10),
  },
  clicks: {
    type: Number,
    default: 0,
  },
}, {
    timestamps: true,

});

export const shortUrlModel = model<ShortUrlType>("ShortUrl", shortUrlSchema);
