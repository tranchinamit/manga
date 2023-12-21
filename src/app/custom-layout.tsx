import { ReactNode, useContext } from "react";
import { Col, Row, Spin } from "antd";

import { DataContext } from "@/context/DataProvider";

import GetApp from "@/components/GetApp";
import Intro from "@/components/Intro";
import Pricing from "@/components/Pricing";
import Chapters from "@/components/Chapters";
import About from "@/components/About";
import Related from "@/components/Related";
import Comments from "@/components/Comments";

interface IProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

function Layout({ leftContent, rightContent }: IProps) {
  return (
    <main className="main-content">
      <Row gutter={{ xs: 24, sm: 24, md: 32, lg: 32, xxl: 24 }}>
        <Col xs={24} lg={15} xl={16}>
          {leftContent}
        </Col>
        <Col xs={24} lg={9} xl={8}>
          {rightContent}
          <GetApp />
        </Col>
      </Row>
    </main>
  );
}

export default function CustomLayout() {
  const data = useContext(DataContext);

  if (!data) {
    return null;
  }

  const { isFetch } = data;

  return isFetch ? (
    <Layout
      leftContent={
        <>
          <Intro />
          <Pricing />
          <Chapters />
        </>
      }
      rightContent={
        <>
          <About />
          <Related />
          <Comments />
        </>
      }
    />
  ) : (
    <div className="wrap-spin">
      <Spin />
    </div>
  );
}
