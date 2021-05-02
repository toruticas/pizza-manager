import { Box, Text } from 'grommet';
import { Logo } from './Logo';

import { Chat } from 'components/Icons/Chat';
import { Bell } from 'components/Icons/Bell';
import { Question } from 'components/Icons/Question';

const Header = () => {
  return (
    <Box gridArea='header'>
      <Box direction='row' align='center' justify='between'>
        <Box>
          <Logo />
        </Box>
        <Box direction='row'>
          <Box pad={{ right: 'medium' }} height='20px'>
            <Chat />
          </Box>
          <Box pad={{ right: 'medium' }} height='20px'>
            <Bell />
          </Box>
          <Box direction='row' align='center' height='20px'>
            <Box pad={{ right: 'xsmall' }}>
              <Question />
            </Box>
            <Text color='white'>Help</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Header };
