import { Image, Typography, Card } from "antd";
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
      src="images/avatar/user1.png"
      preview={false}
      style={{ minWidth: 32 }}
    />
    <div className="ml3">
      <div className="flex items-center">
        <Text className="fs-xs o-45 nowrap mr2">Han Solo</Text>
        <Text className="fs-xxs color-darkgray truncate">Commented on Chapter 35 • 24 min. ago</Text>
      </div>
      <div className="fs-sm o-85 color-white">
        I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.
      </div>
      <div className="flex items-center">
        <IconText icon={<LikeOutlined />} text={<Text className="o-65">{(0).toLocaleString()}</Text>} />
        <IconText icon={<MessageOutlined />} text={<Text className="o-65">{(0).toLocaleString()}</Text>} />
        <div className="fs-sm o-45 color-white">Reply</div>
      </div>
    </div>
  </div>
}
