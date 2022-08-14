import { IIntro } from "@mocks/data";
import { Button, Col, Image, Row, Tag, Typography, Card } from "antd";
import {
  ReadOutlined,
  LikeOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import IconText from "@components/Common/IconText";

const { Title, Text } = Typography;

export default function ({ thumb, title, author, category, totalChaps = 0, views = 0, like = 0, hashTags = [] }: IIntro) {
  return <Card className="block">
    <div className="flex relative">

      <div className="mr2">
        <Image
          width={180}
          src="images/thumb/kasane.png"
          preview={false}
        />
      </div>
      <div className="flex flex-col justify-between ph2 mh2 relative">
        <div>
          <Title level={2} className="o-85 mv1 white-color">{title ?? ""}</Title>
          <div className="mv2">
            <Text className="o-65">By{" "}{author}</Text>
          </div>
          <div className="mv2">
            <Text className="o-65">{category}{" "}•{" "}{totalChaps}{" "}{totalChaps > 1 ? 'chapters' : 'chapter'}</Text>
          </div>
          <div className="flex mv2">
            <IconText icon={<ReadOutlined />} text={<Text className="o-65">{views.toLocaleString()}</Text>} />
            <IconText icon={<LikeOutlined />} text={<Text className="o-65">{like.toLocaleString()}</Text>} />
          </div>
          <div className="pv2">
            {hashTags?.map((tag: string) => <Tag key={tag} color="transparent" className="tag--override">
              <Text className="o-65">{tag}</Text>
            </Tag>)
            }
          </div>
        </div>
        <div>
          <Button className="btn__primary--override fs-sm">Read First Chapter for FREE</Button>
        </div>
      </div>

      <div className="absolute top-0 right-0">
        <Button className="btn__transparent--override mr2" icon={<ShareAltOutlined />} />
        <Button className="btn__transparent--override" icon={<MoreOutlined />} />
      </div>
    </div>
  </Card>
}