import { useNavigate } from "react-router-dom";
import CreateProduct from "../components/CreateProduct";

const CreateProductWrapper: React.FC = () => {
  const navigation = useNavigate();

  const handleClose = () => {
    navigation("/marketplace");
  };
  return <CreateProduct onClose={handleClose} />;
};

export default CreateProductWrapper;
