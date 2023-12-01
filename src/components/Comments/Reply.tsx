import { Image, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

export default function Comment() {
  return <div className="flex mt-12">
    <Image
      width={32}
      src="images/avatar/comment-avatar.png"
      preview={false}
      style={{ minWidth: 32 }}
      alt="ava"
    />
    <div className="ml3">
      <Input className="input--transparent" placeholder="Add your comment" />

      <Button className="btn__primary--override fs-sm mt-24"><SendOutlined rev={undefined} className="color-black" /> Add Comment</Button>
    </div>
  </div>
}
