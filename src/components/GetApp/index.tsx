import { Image, Typography, Card, Button } from "antd";

const { Text } = Typography;

const githubUrl = "https://github.com/tranchinamit";

export default function GetApp() {
  const handleOpenNewTab = async () => {
    const res = await (await fetch("https://dummyjson.com/todos")).json();
    console.log(res.todos[0].todo);
    const firstTodo = res.todos[0].todo;
    window.open(`${githubUrl}?todo=${firstTodo}`, "_blank");
  };

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
          <Button onClick={handleOpenNewTab} type="text" danger>
            Visit my Github!
          </Button>
        </div>
        <div>
          <Image width={116} src="images/icon/qr.png" preview={false} alt="qr" />
        </div>
      </div>
    </Card>
  );
}
