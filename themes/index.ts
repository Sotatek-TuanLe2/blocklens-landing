import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { appAccordionStyle } from 'components/AppAccordion';

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  components: {
    Accordion: appAccordionStyle,
  },
});
