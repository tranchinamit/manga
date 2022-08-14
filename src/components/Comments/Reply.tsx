import { Image, Typography, Card, Input } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import IconText from '@components/Common/IconText'

const { Text } = Typography;

export default function Comment() {
  return <div className="flex mt-12">
    <Image
      width={32}
      src="images/avatar/comment-avatar.png"
      preview={false}
      style={{ minWidth: 32 }}
    />
    <div className="ml3">
      <Input className="input--transparent" placeholder="Add your comment" />
    </div>
  </div>
}
