import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  cloudinary.uploader.upload("/home/my_image.jpg", { upload_preset: "my_preset" }, (error, result) => {
    console.log(result, error);
  });

  return NextResponse.json({ message: "Got your file!" });
};
