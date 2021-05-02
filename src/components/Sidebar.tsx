import { FC } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Anchor, Box, Text } from 'grommet';

import { Icon } from 'components/Icons/interface';
import { Dashboard, Order, Package } from 'components/Icons';

import {
  homePath,
  dashboardPath,
  ordersNewPath,
  ordersStatusPath,
} from 'routes/helpers';

const Separator = styled.div`
  width: 150px;
  height: 2px;
  background-color: #4a90e2;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  position: relative;
  height: 30px;
`;

const LeftBar = styled.div`
  height: 30px;
  width: 4px;
  background-color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 30px;
  width: 30px;
  background-image: linear-gradient(
    to right,
    rgba(255, 2555, 255, 0.3),
    rgba(255, 2555, 255, 0)
  );
`;

const ActiveIndicator = () => (
  <Wrapper>
    <LeftBar />
    <Shadow />
  </Wrapper>
);

const Item: FC<{
  active?: boolean;
  to: string;
  title: string;
  IconComponent: Icon;
}> = ({ active = false, to, title, IconComponent }) => (
  <Anchor
    as={({ hasLabel, hasIcon, colorProp, className, ...props }) => (
      <NavLink className={className} to={to}>
        <Box direction='row' align='center'>
          <Box width='15px'>{active && <ActiveIndicator />}</Box>
          <Box
            pad={{
              top: 'small',
              right: 'small',
              bottom: 'small',
              left: 'xsmall',
            }}
          >
            <IconComponent color={active ? 'white' : '#C7CAD0'} />
          </Box>
          <Box>
            <Text color={active ? 'white' : '#C7CAD0'} size='small'>
              {title}
            </Text>
          </Box>
        </Box>
      </NavLink>
    )}
  />
);

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box
      gridArea='sidebar'
      width='200px'
      pad={{
        top: '100px',
        right: '25px',
        bottom: '0px',
        left: '25px',
      }}
    >
      <Item
        active={currentPath === dashboardPath() || currentPath === homePath()}
        to={dashboardPath()}
        title='Dashboard'
        IconComponent={Dashboard}
      />

      <Item
        active={currentPath === ordersNewPath()}
        to={ordersNewPath()}
        title='New Order'
        IconComponent={Order}
      />

      <Item
        active={currentPath === ordersStatusPath()}
        to={ordersStatusPath()}
        title='Status'
        IconComponent={Package}
      />

      <Separator />
    </Box>
  );
};

export { Sidebar };
