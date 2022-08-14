import { IAbout, IIntro, IPricing } from "@mocks/data";
import { Button, Col, Image, Row, Tag, Typography, Divider, Card } from "antd";


const { Title, Text } = Typography;

export default function About({ genres, summary, thumbs, credits, facts }: IAbout) {
  return <Card className="block">
    <Text className="block__title">About This</Text>
    <div className="mt-12">
    <Text className="fs-normal">Genres</Text>
    </div>
    <div className="pv2">
      {genres?.map((tag: string) => <Tag key={tag} color="transparent" className="tag--override">
        <Text className="o-65">{tag}</Text>
      </Tag>)
      }
    </div>
    <div className="mt-12">
    <Text className="fs-normal">Summary</Text>
    </div>
    <p className="color-white mt-12 fs-sm o-45">
      {summary}
    </p>
  </Card>
}
