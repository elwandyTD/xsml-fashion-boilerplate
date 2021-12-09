import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import breakpoints from './foundations/breakpoints';
import  { container } from './foundations/sizes';

import Button from './components/Button';
import IconButton from './components/IconButton';
import Input from './components/Input';

const overrides = {
  styles,
  breakpoints,
  sizes: {
    container
  },
  components: {
    Button,
    Input,
    IconButton
  },
}

export default extendTheme(overrides);