import React, { useState } from "react";
import ModalComponent from "../../../../shared/ui/Modal";
import { VerificationHeader } from "./VerificationHeader";
import { ActionButtons } from "./ActionButtons";
import { GPSButton } from "./farmVerification/GPSButton";
import { FarmMap } from "./farmVerification/FarmMap";
import { FarmLocation } from "./farmVerification/FarmLocation";
import { FarmPhotoUpload } from "./farmVerification/FarmPhotoUpload";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import styled from "styled-components";
import Button from "../../../../shared/ui/Button";

export const FarmInfoVerification: React.FC = () => {
  const navigate = useNavigate();
  const [farmLocation] = useState("Chief Palace, Karu, Abuja");
  const [farmPhotos, setFarmPhotos] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const StyledButtonGroup = styled(ButtonGroup)`
    flex-direction: column;
    gap: 1rem;
  `;

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 35rem;
    text-align: center;
  `;

  const handlePhotoUpload = (photos: File[]) => {
    setFarmPhotos(photos);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    // Open the modal on save
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    //TODO Handle logout action
    navigate("/seller/logout");
  };

  const handleGoToHomepage = () => {
    navigate("/seller/dashboard");
  };

  return (
    <div>
      <VerificationHeader title="Locate my farm" complete={true} />
      <p>
        Geofencing allows you to accurately map the boundaries of your farmland,
        helping us provide you with more tailored services and insights.
      </p>
      <GPSButton />
      <p>
        Click on the map to set points and draw the perimeter of your farmland.
        Double-click to finish drawing.
      </p>
      <FarmMap />
      <FarmLocation location={farmLocation} />
      <VerificationHeader title="Farm Photos" complete={true} />
      <FarmPhotoUpload photos={farmPhotos} onPhotoUpload={handlePhotoUpload} />
      <ActionButtons onCancel={handleCancel} onSave={handleSave} />

      {/* Modal Component */}
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
        <Section>
          <h2 id="modal-title">Verification Ongoing</h2>
          <p id="modal-description">
            Hello Prince Idoma, thank you for submitting your information. Our
            team will verify it and get back to you via email or phone. <br />
            This verification usually takes less than 2 hours.
          </p>
          <StyledButtonGroup>
            <Button size="large" onClick={handleGoToHomepage}>
              Go to Homepage
            </Button>
            <Button variation="secondary" size="large" onClick={handleLogout}>
              Logout of Onefarm
            </Button>
          </StyledButtonGroup>
        </Section>
      </ModalComponent>
    </div>
  );
};
