import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "../../data/faq";

export default function FaqList() {
  return (
    <Box>
      {faq.map(({ question, answer }) => (
        <Accordion key={question}>
          <AccordionSummary
            sx={{
              backgroundColor: "background.add",
            }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography sx={{ color: "secondary.main" }} variant="h5">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "background.add",
            }}
          >
            <Typography sx={{ color: "primary.main", fontSize: 16 }}>
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
