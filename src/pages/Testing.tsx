import React, { useCallback } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { IAppState } from "../redux/rootReducer";
import { decCounter, incCounter } from "../redux/example/action";

import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";

const Testing = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const example = useSelector(({ example }: IAppState) => example);

  const { counter } = example;

  const increment = useCallback(() => {
    dispatch(incCounter());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(decCounter());
  }, [dispatch]);

  return (
    <Box textAlign="center" bg="lightgrey" p={10} justifyContent={"center"}>
      <HStack maxW="250px" justifyContent={"space-between"} alignContent={"center"}>
        <Button onClick={increment}>Increment</Button>
        <Text>{counter.toString()}</Text>
        <Button onClick={decrement}>Decrement</Button>
      </HStack>
    </Box>
  );
}

export default Testing;
