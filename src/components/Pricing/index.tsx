import { useContext } from "react";
import { Button, Col, Image, Row, Typography, Divider, Card } from "antd";
import { DataContext } from "@/app/page";

const { Text } = Typography;

export default function Pricing() {

  const data = useContext(DataContext);

  if (!data) {return null;}

  const { manga: { pricing: { freeChaps = 0, lockedChaps = 0, pricePerChap = 0, discount = 0 } } } = data;

  return <Card className="block">
    <Text className="block__title">Pricing & Promotion</Text>
    <Card className="block block__content bg-content">
      <Row gutter={32} className="relative">
        <Col xs={12} className="bg-content pv2 border-right">
          <Text className="o-45">FREE</Text>
          <br />
          <Text className="o-85 fs-normal">{freeChaps}{freeChaps > 0 ? " chapters" : " chapter"}</Text>
        </Col>
        <Col xs={12} className="bg-content pv2">
          <Text className="o-45">LOCKED</Text>
          <div className="flex">
            <Text className="o-85 fs-normal">
              {lockedChaps}{lockedChaps > 0 ? " chapters" : " chapter"}
            </Text>
            &nbsp;
            <Text className="o-45 fs-sx">
              (<Image
                width={12}
                src="images/icon/coin.svg"
                preview={false}
                alt="coin"
              />{pricePerChap}{" "}/{" "}chapter)
            </Text>
          </div>
        </Col>
      </Row>

      <Divider className="border-black mv2 absolute-divider" />

      <Row className="mt-24">
        <Col xs={24} className="pv2">
          <div className="flex justify-between items-center">
            <div>
              <Text className="o-85 fs-normal">Total Price</Text>
              <br />
              <Text className="o-45 fs-sm">Instant access to all chapters • No Ad</Text>
            </div>
            <div>
              <Button className="btn__secondary--override fs-normal flex items-center">
                <Image
                  width={16}
                  src="images/icon/coin.svg"
                  preview={false}
                  className="flex"
                  alt="coin"
                /><span className="ml2 o-85">35</span></Button>
            </div>
          </div>
        </Col>
      </Row>

      <Divider className="border-black mv2" />

      <Row>
        <Col xs={24} className="pv2">
          <div className="flex justify-between items-center">
            <div>
              <Text className="o-85 fs-normal color-purple">Save money with INKR Extra {" "}
                <Image
                  width={14}
                  src="images/icon/crown.svg"
                  preview={false}
                  className="flex"
                  alt="coin"
                />
              </Text>
              <br />
              <Text className="o-45 fs-sm">Instant access to all chapters • No Ad •  Extra saving</Text>
            </div>
            <div>
              <Button className="btn__secondary--override fs-normal flex items-center btn__discount">
                {!!discount && <span className="bg-purple">-{discount}%</span>}
                <span className="mh3 flex items-center">
                  <Image
                    width={16}
                    src="images/icon/coin.svg"
                    preview={false}
                    className="flex"
                    alt="coin"
                  />
                  <span className="ml2 fs-xs line-through o-45">35</span>
                  <span className="ml2 o-85">18</span>
                </span>
              </Button>
            </div>
          </div>

        </Col>
      </Row>
    </Card>

    <div className="text-center">
      <Text className="o-45 fs-sm">Want to read for free? Learn more </Text>
    </div>

  </Card>
}
