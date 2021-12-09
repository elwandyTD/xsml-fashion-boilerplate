import React from "react";
import { Box } from "@chakra-ui/react";
import Button from "../components/atoms/Button";

const Testing = () => {
  return (
    <Box textAlign="center" bg="lightgrey" p={10}>
      <Button onClick={() => console.log("TEST")}>Nice</Button>
    </Box>
  )
}

export default Testing;
