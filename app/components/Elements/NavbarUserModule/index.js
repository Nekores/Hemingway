/**
 *
 * NavbarUserModule
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Badge, Icon, Avatar,Dropdown } from "antd";
import {NavbarUserModuleStyle} from "./_style";


/* eslint-disable react/prefer-stateless-function */
class NavbarUserModule extends React.Component {
  render() {
    return <NavbarUserModuleStyle>
        <li>
          <Badge color="#ff4c43" title="You have notifications" offset={[1, 12]} count={false} dot={true}>
            <Icon type="bell" />
          </Badge>
        </li>
        <li>
          <Avatar icon="user" className="_avatar" />
          <Dropdown overlay={this.props.menu} placement="bottomRight">
            <a className="ant-dropdown-link" href="#">
              yulia@mail.ru <Icon type="down" />
            </a>
          </Dropdown>
        </li>
      </NavbarUserModuleStyle>;
  }
}

NavbarUserModule.propTypes = {};

export default NavbarUserModule;
