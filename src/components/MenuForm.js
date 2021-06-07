import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddModal from "./AddModal";

export default function MenuForm() {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/drinks/get")
      .then((res) => res.json())
      .then((res) => {
        setDrinks(res);
      });
  }, []);

  return (
    <div>
      {drinks ? (
        drinks.map((drink) => (
          <Accordion
            key={drink.id}
            style={{
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {drink.name}, ${drink.price}
              </Typography>
              <div
                style={{
                  textAlign: "right",
                  marginLeft: "auto",
                  marginRight: "0",
                }}
              >
                <AddModal />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  flexBasis: "100%",
                  flexShrink: "0",
                  fontStyle: "italic",
                }}
              >
                {drink.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
