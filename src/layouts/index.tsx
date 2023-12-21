import { Col, Row } from 'antd';
import GetApp from '@/components/GetApp';
import { ReactNode } from 'react';

interface IProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function Layouts({ leftContent, rightContent }: IProps) {
  return <main className="main-content">
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
}