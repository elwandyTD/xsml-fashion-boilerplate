import React, { useMemo } from "react";
import { Button as BaseButton, ButtonProps, Tooltip } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label?: string,
  tooltip?: string,
}

type extraProps = {
  isDisabled?: boolean,
  label?: string
}

const Button = React.memo(({tooltip, ...props}: Props) => {
  const extra: extraProps = useMemo(() => {
    if (tooltip) {
      return { label: tooltip };
    } else {
      return { isDisabled: true };
    }
  }, [tooltip]);

  return (
    <Tooltip {...extra}>
      <BaseButton 
        {...props}
        >
        { props.label || props.children }
      </BaseButton>
    </Tooltip>
  );
});

export default Button;