import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";

export const PasswordInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement | null>) => {
    const [showPassword, setShowPassword] = useState(false);

    const onToggleShowPassword = () => {
      setShowPassword((showPassword) => !showPassword);
    };

    return (
      <InputGroup>
        <Input type={showPassword ? "text" : "password"} {...props} ref={ref} />

        <InputRightElement h={"full"}>
          <IconButton
            aria-label="show-password"
            onClick={onToggleShowPassword}
            variant={"ghost"}
            _hover={{ bgColor: "transparent" }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </IconButton>
        </InputRightElement>
      </InputGroup>
    );
  }
);
