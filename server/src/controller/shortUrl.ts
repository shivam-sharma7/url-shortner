import { Request, Response } from "express";
import { shortUrlModel } from "../models/shortUrl";
 

export const createUrl = async (req: Request, res: Response) => {
  try {
    const { fullUrl } = req.body;
    if(!fullUrl || !fullUrl.trim() || !fullUrl.includes("https://")) {
      return res.status(400).json({ message: "Please provide a valid and secure URL" });
     } else {
      const shortUrl = await shortUrlModel.create({ fullUrl });
      res.status(201).json({message: "Url shortened successfully", shortUrl});
      shortUrl.save();
    }
  } catch (error) {
    res.status(500).json({ message: "Error while shorting url" });
  }
};

export const getAllUrl = async (req: Request, res: Response) => {
  try {
    const shortUrl = await shortUrlModel.find().sort({ createdAt: -1 });
    if (shortUrl.length < 0) {
      res.status(404).send({ message: "Urls not found" });
    }
    res.status(200).send(shortUrl);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUrlById = async (req: Request, res: Response) => {
  try {
    const shortUrl = await shortUrlModel.findOne({ shortUrl: req.params.id });
    if (!shortUrl) {
      res.status(404).send({ message: "Url not found" });
    } else {
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
  try {
    const shortUrl = await shortUrlModel.findOneAndDelete({ _id: req.params.id});
    if (shortUrl) {
      res.status(200).send({ message: "Requested URL deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
