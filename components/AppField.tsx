import { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import 'styles/components/AppField.module.scss';

interface IField {
  children: ReactNode;
  label: string;
  isRequired?: boolean;
  customWidth?: string;
  note?: string;
}

const AppField = ({
  children,
  label,
  isRequired,
  customWidth = '100%',
  note,
}: IField) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      alignItems={'flex-start'}
      w={['full', customWidth]}
      mb={'24px'}
      className={'field'}
      position={'relative'}
    >
      <Stack w={'full'} spacing={1}>
        <Flex alignItems={'center'}>
          <Text whiteSpace={'nowrap'} mr={2} color="#B4B7BD">
            {label}{' '}
            {isRequired && (
              <Text as={'span'} color={'red.500'}>
                *
              </Text>
            )}
          </Text>
          {note && (
            <Tooltip
              p={2}
              label={note}
              placement={'top'}
              hasArrow
              isOpen={isOpen}
            >
              <Box
                className="icon-info"
                ml={1}
                cursor={'pointer'}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                onClick={onOpen}
              />
            </Tooltip>
          )}
        </Flex>
        {children}
      </Stack>
    </Flex>
  );
};

export default AppField;
