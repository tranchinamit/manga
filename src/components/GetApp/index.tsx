import { Image, Typography, Card, Button } from "antd";

const { Text } = Typography;

const githubUrl  ="https://github.com/tranchinamit";

export default function GetApp() {
  const handleOpenNewTab = () => {
    window.open(githubUrl, "_blank");
  }

  return (
    <Card className="block">
      <div className="flex justify-between items-center">
        <div className="mh2">
          <Text className="fs-normal">Get The App</Text>
          <div>
            <Text className="fs-sm o-45">
              Love this title? Scan the QR code to continue reading right on your mobile
              devices.
            </Text>
          </div>
          <a href={githubUrl} target="_blank">Visit my Github!</a>
          <Button onClick={handleOpenNewTab} type="text" danger>Visit my Github!</Button>
        </div>
        <div>
          <Image width={116} src="images/icon/qr.png" preview={false} alt="qr" />
        </div>
      </div>
    </Card>
  );
}
