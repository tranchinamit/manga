import { Typography, Card } from "antd";
import { useData } from "pages";
import Comment from './Comment';
import Reply from './Reply';

const { Text } = Typography;

export default function Comments() {
  const data = useData();

  if (!data) return null;

  const { manga: { comments } } = data;

  return <Card className="block">
    <Text className="block__title">{12} Comments</Text>

    <div className="flex justify-between items-center">
      {comments?.map(item => (
        <Comment key={item.id} {...item} />
      ))}
    </div>
    <Reply />

  </Card>
}
