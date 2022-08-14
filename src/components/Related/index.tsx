import { Image, Typography, Card,Divider } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import IconText from '@components/Common/IconText'
import Item from './Item';

const { Text } = Typography;

export default function Related() {
  return <Card className="block block--no-margin">
    <div className="mt-12">
    <Text className="block__title mv-12">Related Titles</Text>
    </div>

    <Item />
    <Item />
    <Item />

  </Card>
}
