import React, { useEffect } from "react";
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
  const extra: extraProps = {};

  if (tooltip) {
    extra.label = tooltip;
  } else {
    extra.isDisabled = true;
  }

  return (
    <Tooltip {...extra}>
      <BaseButton 
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        {...props}
        >
        { props.label || props.children}
      </BaseButton>
    </Tooltip>
  );
});


export default Button;