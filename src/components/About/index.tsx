import { ICredit } from "@mocks/data";
import { Button, Col, Image, Row, Tag, Typography, Card, Collapse } from "antd";
import { useData } from "pages";

const { Text } = Typography;
const { Panel } = Collapse;

export default function About() {
  const data = useData();

  if (!data) return null;

  const { manga: { about: { genres, summary, thumbs, credits, facts } } } = data;

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

    <Collapse accordion>
      <Panel header={
        <div className="text-center">
          <Button type="text">
            <Text className="fs-normal o-65">Show More</Text>
          </Button>
        </div>
      } key="1"
        showArrow={false}>
        <>

          <div className="flex items-center justify-between">
            {thumbs?.map((_url: string) => (
              <Image
                width={"auto"}
                src={_url}
                preview={false}
                className="ph1"
              />
            ))}
          </div>

          <div className="mt-12">
            <Text className="fs-normal">Credits</Text>
          </div>
          {credits?.map(({ avatar, author, role }: ICredit) => (
            <div className="flex mv3">
              <Image
                width={40}
                src={avatar}
                preview={false}
              />
              <div className="flex items-center ml3">
                <div>
                  <Text className="o-85">{author}</Text>
                  <br />
                  <Text className="o-45 fs-xs">{role}</Text>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12">
            <Text className="fs-normal">Other Facts</Text>
          </div>
          {facts?.map(({ title, info }: { title: string, info: string }) => (
            <Row className="mv1">
              <Col style={{ minWidth: 94 }} className="color-white fs-sm o-45">{title}</Col>
              <Col className="color-white fs-sm o-85">:&nbsp;{info}</Col>
            </Row>
          ))}

        </>
      </Panel>

    </Collapse>

  </Card>
}
