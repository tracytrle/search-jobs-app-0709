import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import jobData from "../getData";
import SkillsPaper from "./SkillsPaper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  bgcolor: "background.paper",
  borderRadius: 2,
  border: "none",
};

function JobDetailModal() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await jobData.getDetailJob(id);
      setJob(data);
    };
    fetchData();
  }, [id]);

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            sx={{
              border: "none",
              boxShadow: 0,
              backgroundColor: (theme) => theme.palette.primary.light,
              color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div">
                {job?.title}
              </Typography>
              <SkillsPaper skills={job?.skills} />
              <Typography sx={{ mb: "8px" }} variant="h6" component="div">
                Job Description: {job?.description}
              </Typography>
              <Typography>City: {job?.city}</Typography>
              <Typography>
                Salary: ${job?.salaryLow} - ${job?.salaryHigh}
              </Typography>
              <Typography>Years Expected: {job?.yrsXPExpected}</Typography>
              <Typography>
                Posted Date: {job?.postedDate.slice(0, 10)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default JobDetailModal;
