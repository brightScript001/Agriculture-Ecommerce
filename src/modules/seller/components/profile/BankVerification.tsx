import React, { useState } from "react";
import { VerificationHeader } from "./VerificationHeader";
import { VerificationTabs } from "./bankVerification/VerificationTabs";
import { ImageUpload } from "./bankVerification/ImageUpload";
import { InputFieldComponent } from "./bankVerification/InputField";
import { ActionButtons } from "./ActionButtons";
import { useNavigate } from "react-router-dom";

export const BankVerification: React.FC = () => {
  const [activeTab, setActiveTab] = useState("National ID Card");
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState("");
  const [bvnNumber, setBvnNumber] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (side: "front" | "back", file: File) => {
    const imageUrl = URL.createObjectURL(file);
    if (side === "front") setFrontImage(imageUrl);
    else setBackImage(imageUrl);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    //TODO Perform additional save actions or navigation
  };
  return (
    <div>
      <VerificationHeader title="Identity Verification" complete={false} />
      <p>
        Please choose a mode of identification and provide a clear and legible
        picture of your valid identification document. Ensure that all details
        are visible and well-lit for verification.
      </p>
      <VerificationTabs
        options={[
          "National ID Card",
          "Driver's License",
          "International Passport",
        ]}
        activeTab={activeTab}
        onTabSelect={setActiveTab}
      />
      <ImageUpload
        frontImage={frontImage}
        backImage={backImage}
        onImageUpload={handleImageUpload}
      />
      <InputFieldComponent
        label={`${activeTab} Number`}
        value={idNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIdNumber(e.target.value)
        }
      />
      <VerificationHeader title="BVN Verification" complete={false} />
      <p>
        We need your BVN (Bank Verification Number) for security purposes, to
        mitigate potential fraud or money laundering and to verify your ID from
        your bank.
      </p>
      <InputFieldComponent
        label="BVN Number"
        value={bvnNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBvnNumber(e.target.value)
        }
      />
      <ActionButtons onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
};
