import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "../../data/faq";

export default function FaqList() {
  const theme = useTheme();
  return (
    <Box>
      {faq.map(({ question, answer }) => (
        <Accordion defaultExpanded key={question}>
          <AccordionSummary
            sx={{
              backgroundColor: `${theme.palette.background.add}`,
            }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography color={`${theme.palette.secondary.main}`} variant="h5">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: `${theme.palette.background.add}`,
            }}
          >
            <Typography
              color={`${theme.palette.primary.main}`}
              sx={{ fontSize: 16 }}
            >
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
