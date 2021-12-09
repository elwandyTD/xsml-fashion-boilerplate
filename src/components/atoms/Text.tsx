import React from "react";
import { Text as BaseText, TextProps, CircularProgress } from "@chakra-ui/react";

interface Props extends TextProps {
  isLoading?: boolean
}

const Text: React.FC<Props> = React.memo(({isLoading, ...props}: Props) => {
  return isLoading ? <CircularProgress isIndeterminate color='green.300' /> : <BaseText>{props.children || ''}</BaseText>
});

export default Text;