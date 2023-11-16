import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";
import { Button, Group } from "@mantine/core";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURLs, setImageURLs] = useState(propertyDetails.images || []); // Initialize with any existing images
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, images: imageURLs }));
    nextStep();
    setImageURLs([]); // Reset the imageURLs state after moving to the next step
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxknt3r2d",
        uploadPreset: "cews38vn",
        maxFiles: 5,
      },
      (err, result) => {
        if (result.event === "success") {
          const newImageURLs = [...imageURLs, result.info.secure_url];
          setImageURLs(newImageURLs);
        }
      }
    );
  }, [imageURLs]); // Include imageURLs as a dependency

  return (
    <div className="flexColCenter uploadWrapper">
      {imageURLs.length === 0 ? (
        <div
          className="flexColCenter uploadZone"
          onClick={() => widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Images</span>
        </div>
      ) : (
        <div
          className="uploadedImages"
          onClick={() => widgetRef.current?.open()}
        >
          {imageURLs.map((url, index) => (
            <img key={index} src={url} alt="" />
          ))}
        </div>
      )}

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {/* you can't go to the next step until you've uploaded at least one image */}
        <Button onClick={handleNext} disabled={imageURLs.length === 0}> 
          Next
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
