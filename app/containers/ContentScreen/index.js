/**
 *
 * ContentScreen
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
import makeSelectContentScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { sampleAction } from "./actions";
import { Layout, Row, Col, Form, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../components/Layouts/LayoutDefault";
import Button from "../../components/Elements/Button";
import Jumborton from "../../components/Jumborton";
import Comments from "./Comments/";
import http from "../../utils/http";
import imgProfile from "../../images/Profiles/yulia.png";

// import { LoginPageWrapper, LoginFormStyle, ErrorAlert } from "./_style";
/* eslint-disable react/prefer-stateless-function */
export class ContentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: []
    };
    this.Golink = this.Golink.bind(this);
  }
  Golink() {
    this.props.history.push("/content/textnote");
    // this.props.sampleAction({
    //   name: 'sajid',
    //   _id: 'fasdfjasdks'
    // });
  }
  componentDidMount() {
    http
      .get(`/api/v1/tags?query=text`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({data: res.data.results})
      });
  }
  render() {
    const { menu,data} = this.state;
    console.log("tags", data.results)
    return <div style={{ height: "100%" }}>
        <Helmet>
          <title>Content Screen</title>
          <meta name="description" content="Description of ContentScreen" />
        </Helmet>
        <LayoutDefault menu={menu} comments={<Comments />}>
          <LayoutStyle>
            <Row type="flex" justify="center" align="middle" style={{ height: "100%" }} className="animated zoomIn slow-2s delay-0s">
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 9 }} xxl={{ span: 7 }}>
                <Jumborton stylePic={{ height: "80px", width: "80px", borderRadius: "28px", border: "solid 1px rgba(0, 0, 0, 0.05)", background: `url(${imgProfile})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} alt="Profile Image" mainTitle="Hey Yulia! Let's add some texts today!" primaryButtonName="Let's Go" primarybuttonClick={this.Golink} secondaryButtonName="Texts remaining 15/15" />
                <ul>
                  {this.state.data.map((item, i) => 
                      <li key={i}>{item.id}</li>
                    )}
                </ul>
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>;
  }
}

ContentScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  contentScreen: makeSelectContentScreen()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sampleAction: payload => dispatch(sampleAction(payload))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "contentScreen", reducer });
const withSaga = injectSaga({ key: "contentScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ContentScreen);
