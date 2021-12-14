import React, { useMemo, memo, forwardRef } from "react";
import { Button as BaseButton, ButtonProps, Tooltip } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label?: string,
  tooltip?: string
}

type extraProps = {
  isDisabled?: boolean,
  label?: string,
}

const Button = memo(forwardRef(({tooltip, ...props}: Props, ref?: React.LegacyRef<HTMLButtonElement>) => {
  const extra: extraProps = useMemo(() => {
    const newProps: extraProps = {};

    if (tooltip) {
      newProps.label = tooltip;
    } else {
      newProps.isDisabled = true;
    }

    return newProps;
  }, [tooltip]);

  const itemRef = useMemo(() => {
    if (ref) {
      return ref
    }

    return undefined;
  }, [ref]);

  return (
    <Tooltip {...extra}>
      <BaseButton 
        {...props}
        ref={itemRef}
        >
        { props.label || props.children }
      </BaseButton>
    </Tooltip>
  );
}));

export default Button;