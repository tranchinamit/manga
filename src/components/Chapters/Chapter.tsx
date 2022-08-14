import { IChapter } from "@mocks/data";
import { Button, Col, Image, Row, Tag, Typography, Divider, Card } from "antd";
import {
  ReadOutlined,
  LikeOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import IconText from "@components/Common/IconText";

const { Text } = Typography;

interface IProps {
  chapter: IChapter;
  otherInfo?: string;
  isActive?: boolean;
  isFree?: boolean;
  pricePerChap?: number;
}


export default function Chapters({ chapter, otherInfo, isActive, isFree, pricePerChap }: IProps) {
  return <Card className={`block block__chapter${!!otherInfo ? " block__chapter--last-read" : ""}${isActive ? " block__chapter--active" : ""}`}>
    <Row>
      <Col xs={24}>
        <div className="flex justify-between items-center w-100">

          <div className="flex">
            <Image
              width={80}
              src={chapter?.thumb}
              preview={false}
              alt="thumb"
            />
            <div className="flex items-center ml3">
              <div>
                <Text className="o-65">Chapter {chapter?.chapNum}</Text>
                <br />
                {!!otherInfo && (<Text className="o-45">{otherInfo}</Text>)}
              </div>
            </div>
          </div>

          {!otherInfo && (
            <div>
              {isFree ? <Text className="o-65">FREE</Text> : (
                <Text className="fs-sx">
                  <Image
                    width={12}
                    src="images/icon/coin.svg"
                    preview={false}
                    alt="thumb"
                  /><span className="ml1 o-45">{pricePerChap ?? 0}</span>
                </Text>
              )}
            </div>
          )}

        </div>
      </Col>
    </Row>

  </Card>
}
