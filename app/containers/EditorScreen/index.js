/**
 *
 * EditorScreen
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectEditorScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { Layout, Row, Col, Form, Menu } from "antd";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../components/Layouts/LayoutDefault";
import Button from "../../components/Elements/Button";
import Jumborton from "../../components/Jumborton";
import { NavLink } from "react-router-dom";
import imgProfile from "../../images/Profiles/alex.png";
import Comments from "./Comments/"

// import { LoginPageWrapper, LoginFormStyle, ErrorAlert } from "./_style";
/* eslint-disable react/prefer-stateless-function */
export class EditorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      comments: (
        <div>

        </div>
      ),
      menu: (
        <Menu>
          <Menu.Item>
            <NavLink
              to="/editor"
              className="navigation-item"
              activeClassName="navigation-item--active"
            >
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/login"
              className="navigation-item"
              activeClassName="navigation-item--active"
            >
              <span>Logout</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      ),
    };
    this.Golink = this.Golink.bind(this);
  }
  Golink() {
    this.props.history.push("/editor/textnote");
  }
  render() {
    const {menu} = this.state;
    return <div style={{ height: "100%" }}>
        <Helmet>
          <title>Editor Screen</title>
          <meta name="description" content="Description of Editor Screen" />
        </Helmet>
        <LayoutDefault isCommentSidebar={true} commentSideBarContent={this.state.comments} menu={menu} comments={<Comments />}>
          <LayoutStyle>
            <Row type="flex" justify="center" align="middle" style={{ height: "100%" }} className="animated zoomIn slow-2s delay-0s">
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 9 }} xxl={{ span: 7 }}>
                <Jumborton stylePic={{ height: "80px", width: "80px", borderRadius: "28px", border: "solid 1px rgba(0, 0, 0, 0.05)", background: `url(${imgProfile})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} alt="Profile Image" mainTitle="Hey Alex! Let's edit some texts today!" primaryButtonName="Let's Go" primarybuttonClick={this.Golink} secondaryButtonName="Texts remaining 15/15" />
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>;
  }
}

EditorScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  editorScreen: makeSelectEditorScreen()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "editorScreen", reducer });
const withSaga = injectSaga({ key: "editorScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(EditorScreen);
