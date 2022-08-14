import { Image, Typography, Card } from "antd";

const { Text } = Typography;

export default function GetApp() {
  return <Card className="block">
    <div className="flex justify-between items-center">
      <div className="mh2">
        <Text className="fs-normal">Get The App</Text>
        <div>
          <Text className="fs-sm o-45">Love this title? Scan the QR code to continue reading right on your mobile devices.</Text>
        </div>
      </div>
      <div>
        <Image
          width={116}
          src="images/icon/qr.png"
          preview={false}
          alt="qr"
        />
      </div>
    </div>
  </Card>
}
