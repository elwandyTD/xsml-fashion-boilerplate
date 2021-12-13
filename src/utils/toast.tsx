import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

interface Props extends UseToastOptions {}

const toast = createStandaloneToast();

const defaultSetting: UseToastOptions = {
  duration: 1500,
  isClosable: true,
  status: "success",
  variant: "left-accent"
}

export const success = (props: Props) => toast({
  ...props,
  ...defaultSetting
});

export const error = (props: Props) => toast({
  ...props,
  ...defaultSetting,
  status: "error",
  title: "Error Found!"
});

export { toast as custom };