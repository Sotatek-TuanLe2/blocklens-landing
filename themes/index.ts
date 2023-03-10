import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { appAccordionStyle } from 'components/AppAccordion';
import { appInputStyles } from 'components/AppInput';
import { appTextareaStyles } from 'components/AppTextArea';

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  components: {
    Accordion: appAccordionStyle,
    Input: appInputStyles,
    Textarea: appTextareaStyles,
  },
});
