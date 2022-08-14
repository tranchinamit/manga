import { Image, Typography, Card } from "antd";
import Comment  from './Comment';
import Reply  from './Reply';

const { Text } = Typography;

export default function Comments() {
  return <Card className="block">
    <Text className="block__title">{12} Comments</Text>

    <div className="flex justify-between items-center">
     <Comment />
    </div>
     <Reply />
  </Card>
}
