import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ControlledAccordions = ({ accordionData, title, subtitle }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 2,
      }}
    >
      {title && (
        <h1 style={{ marginBottom: 5, textAlign: "start" }}>{title}</h1>
      )}
      {subtitle && (
        <p style={{ marginBottom: 10, textAlign: "start" }}>{subtitle}</p>
      )}

      {accordionData.map((item, index) => (
        <Accordion
          key={`panel${index}`}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            mb: 1,
            "&:before": {
              display: "none",
            },
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            bgcolor: "white",
            border: "1px solid black",
            "&.MuiAccordion-root": {
              borderRadius: 0, // Force border radius to 0
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Big Caslon",
                fontSize: "1.5rem",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></Typography>
          </AccordionDetails>
          {item.learnMoreLink && (
            <Button
              variant="outlined"
              href={item.learnMoreLink}
              sx={{
                mt: 2,
                textTransform: "none",
                backgroundColor: "#EBC16B",
                width: "100%",
                border: 0,
                color: "black",
                fontFamily: "Rethink Sans",
                fontWeight: 600,
                borderRadius: 0,
                justifyContent: "start",
                "&:hover": {
                  backgroundColor: "#eab54b",
                },
              }}
            >
              learn more →
            </Button>
          )}
        </Accordion>
      ))}
    </Box>
  );
};

export default ControlledAccordions;
