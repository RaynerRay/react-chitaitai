import React from 'react'
import { CloseIcon, Icon, SidebarContainer, 
    SidebarLink, SidebarMenu, SidebarRoute,
    SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>

        <SidebarMenu>
            <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
            <SidebarRoute to='/contact' onClick={toggle}>Contact</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar