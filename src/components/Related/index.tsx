import { Typography, Card } from "antd";
import Item from './Item';
import { useData } from "pages";

const { Text } = Typography;

export default function Related() {
  const data = useData();

  if (!data) return null;

  const { manga: { related } } = data;

  return <Card className="block block--no-spacing">
    <div className="mt-24">
      <Text className="block__title mh-24">Related Titles</Text>
    </div>

    {related?.map(item => (
      <Item key={item.id} {...item} />
    ))}

  </Card>
}
