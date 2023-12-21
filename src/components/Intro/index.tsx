import { useContext } from "react";
import { Button, Image, Tag, Typography, Card } from "antd";
import {
  ReadOutlined,
  LikeOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import IconText from "@/components/Common/IconText";
import { DataContext } from "@/context/DataProvider";

const { Title, Text } = Typography;

export default function Intro() {
  const data = useContext(DataContext);

  if (!data) {
    return null;
  }

  const {
    manga: {
      intro: {
        thumb,
        title,
        author,
        category,
        totalChaps = 0,
        views = 0,
        like = 0,
        hashTags = [],
      },
    },
  } = data;

  return (
    <Card className="block">
      <div className="flex relative">
        <div className="mr2">
          <Image width={180} src={thumb} preview={false} alt="thumb" />
        </div>
        <div className="flex flex-col justify-between ph2 mh2 relative">
          <div>
            <Title level={2} className="o-85 mv1 color-white">
              {title ?? ""}
            </Title>
            <div className="mv2">
              <Text className="o-65">By {author}</Text>
            </div>
            <div className="mv2">
              <Text className="o-65">
                {category} • {totalChaps}{" "}
                {totalChaps > 1 ? "chapters" : "chapter"}
              </Text>
            </div>
            <div className="flex mv2">
              <IconText
                icon={<ReadOutlined rev={undefined} />}
                text={<Text className="o-65">{views.toLocaleString()}</Text>}
              />
              <IconText
                icon={<LikeOutlined rev={undefined} />}
                text={<Text className="o-65">{like.toLocaleString()}</Text>}
              />
            </div>
            <div className="pv2">
              {hashTags?.map((tag: string) => (
                <Tag key={tag} color="transparent" className="tag--override">
                  <Text className="o-65">{tag}</Text>
                </Tag>
              ))}
            </div>
          </div>
          <div>
            <Button className="btn__primary--override fs-sm whitespace-normal h-auto">
              Read First Chapter for FREE
            </Button>
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <Button
            className="btn__transparent--override mr2"
            icon={<ShareAltOutlined rev={undefined} />}
          />
          <Button
            className="btn__transparent--override"
            icon={<MoreOutlined rev={undefined} />}
          />
        </div>
      </div>
    </Card>
  );
}
