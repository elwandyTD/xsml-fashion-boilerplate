import React, { useCallback } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { IAppState } from "../redux/rootReducer";
import { decCounter, exampleCreateApi, incCounter } from "../redux/example/action";

import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";

import * as toast from "../utils/toast";

const Testing = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const example = useSelector(({ example }: IAppState) => example);

  const { counter, loading } = example;

  const increment = useCallback(() => {
    dispatch(incCounter());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(decCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(exampleCreateApi());
  }, [dispatch]);

  return (
    <Box textAlign="center" bg="lightgrey" p={10} justifyContent={"center"}>
      <HStack maxW="250px" justifyContent={"space-between"} alignContent={"center"}>
        <Button onClick={increment}>Increment</Button>
        <Text>{counter.toString()}</Text>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={() => {
          toast.success({
            title: 'Account created.',
            description: "We've created your account for you.",
          });
        }}>Toasting</Button>
      </HStack>
      {loading && <Text>Loading</Text>} 
    </Box>
  );
}

export default Testing;
