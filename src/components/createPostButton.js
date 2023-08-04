import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className={`fixed-bottom`} style={{ width: "100%" }}>
      <div className="centerDivH">
        <span className="boxShadow hover circle bg-white">
          <AddCircleIcon className="nunsa" style={{ fontSize: "62px" }} />
        </span>
      </div>
    </div>
  );
};

export default CreatePost;