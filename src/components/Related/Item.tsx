import { Image, Typography, Divider } from "antd";
import IconText from '@components/Common/IconText'
import { IRelated } from "@mocks/data";
import { kFormatter } from "@utils/helpers";

const { Text } = Typography;

export default function Item({ id, thumb, title, type, type2, views }: IRelated) {

  return <>
    <div className="flex mh-12 mv-24">
      <Image
        width={110}
        src={thumb}
        preview={false}
        alt={title}
      />
      <div className="ml3 flex items-center">
        <div>
          <Text className="fs-normal o-85">{title}</Text>
          <br />
          <IconText icon={<Image
            width={14}
            src="images/icon/crown.svg"
            preview={false}
            alt={title}
            className="flex "
          />} text={<Text className="color-purple">{type}</Text>}
          />
          <Text className="fs-sm o-45">{type2}</Text>
          <br />
          <Text className="fs-sm o-45">{kFormatter(views)} reads</Text>
        </div>
      </div>

    </div>
    <Divider className="border-lightgray mv3" />
  </>
}
