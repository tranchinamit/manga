import { Image, Typography, Card,Divider } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import IconText from '@components/Common/IconText'

const { Text } = Typography;

export default function Item() {
  return  <>
    <div className="flex mv-12 mt-24">
    <Image
      width={80}
      // height={120}
      src="images/thumb/kasane.png"
      preview={false}
    />
    <div className="ml3 flex items-center">
      <div>
      <Text className="fs-normal o-85">Title Name</Text>
      <br />
      <IconText icon={<Image
              width={14}
              src="images/icon/crown.svg"
              preview={false}
              className="flex "
              />} text={ <Text className="color-purple">EXCLUSIVE</Text>} 
              />
      <Text className="fs-sm o-45">PREQUEL</Text>
      <br />
      <Text className="fs-sm o-45">45.6k reads</Text>
      </div>
    </div>

    </div>
  <Divider className="border-lightgray mv3" />
  </>
}
