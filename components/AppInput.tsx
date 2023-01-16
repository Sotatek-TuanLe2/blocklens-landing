import {
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { StyleProps, forwardRef } from '@chakra-ui/system';
import SimpleReactValidator from 'simple-react-validator';
import { useForceRender } from 'hooks/useForceRender';
import { ReactNode, useState } from 'react';
import React from 'react';

interface ValidatorProps {
  validator: SimpleReactValidator;
  name: string;
  rule: string | Array<string | { [key: string]: unknown }>;
  options?: { [key: string]: unknown };
}

interface AppInputProps extends InputProps {
  variant?: 'main' | 'auth' | 'authSecondary' | 'search';
  validate?: ValidatorProps;
  readOnly?: boolean;
  size?: string;
  type?: string;
  isSearch?: boolean;
  endAdornment?: ReactNode;
  hiddenErrorText?: boolean;
}

const AppInput = forwardRef(
  (
    {
      variant = 'main',
      size = 'lg',
      readOnly,
      type = 'text',
      isSearch = false,
      validate,
      endAdornment,
      hiddenErrorText = false,
      ...props
    }: AppInputProps,
    ref,
  ) => {
    const forceRender = useForceRender();

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const onBlur = () => {
      validate?.validator.showMessageFor(validate.name);
      forceRender();
    };

    return (
      <>
        <InputGroup size={size}>
          {isSearch && (
            <InputLeftElement top={'-8px'} left={'5px'}>
              {<Box className="icon-search" />}
            </InputLeftElement>
          )}
          <Input
            type={type === 'password' && isShowPassword ? 'text' : type}
            {...props}
            variant={variant}
            onBlur={onBlur}
            ref={ref}
            readOnly={readOnly}
          />

          {endAdornment && (
            <InputRightElement>{<>{endAdornment}</>}</InputRightElement>
          )}
          {type === 'password' && (
            <InputRightElement
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {
                <Box
                  cursor={'pointer'}
                  className={`${
                    isShowPassword ? 'icon-eye-close' : 'icon-eye'
                  }`}
                />
              }
            </InputRightElement>
          )}
        </InputGroup>

        <Box display={!hiddenErrorText ? 'block' : 'none'}>
          {validate &&
            !readOnly &&
            validate.validator.message(
              validate.name,
              props.value,
              validate.rule,
              validate.options,
            )}
        </Box>
      </>
    );
  },
);

export default AppInput;

export const appInputStyles = {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: '8px',
      '::-webkit-calendar-picker-indicator': {
        width: '20px',
        height: '20px',
      },
      backgroundColor: 'transparent',
    },
  },
  variants: {
    main: (props: StyleProps) => ({
      field: {
        backgroundColor: 'transparent',
        border: '1px solid #465065',
        color: mode('white', 'white')(props),
        borderRadius: '6px',
        fontSize: '16px',
        p: '20px',
        _focus: {
          borderColor: mode('pressed.100', 'pressed.100')(props),
        },
        _placeholder: {
          color: mode('secondaryGray.500', 'whiteAlpha.300')(props),
        },
        _disabled: {
          borderColor: mode('bg.200', 'bg.200')(props),
          color: mode('paragraph.100', 'paragraph.100')(props),
        },
      },
    }),
    auth: (props: StyleProps) => ({
      field: {
        fontWeight: '500',
        color: mode('navy.700', 'white')(props),
        bg: mode('transparent', 'transparent')(props),
        border: '1px solid',
        borderColor: mode(
          'secondaryGray.100',
          'rgba(135, 140, 189, 0.3)',
        )(props),
        borderRadius: '4px',
        _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
      },
    }),
    authSecondary: () => ({
      field: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'secondaryGray.100',
        borderRadius: '4px',
        _placeholder: { color: 'secondaryGray.600' },
      },
    }),
    search: (props: StyleProps) => ({
      field: {
        bg: mode('secondaryGray.300', 'navy.900')(props),
        border: 'none',
        py: '11px',
        borderRadius: '30px',
        _placeholder: { color: 'gray.400', fontSize: '14px' },
        color: mode('gray.700', 'gray.100')(props),
      },
    }),
  },
};
