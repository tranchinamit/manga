import { Image, Typography } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import IconText from '@components/Common/IconText';
import { IComment } from '@mocks/data';
import { handleCommentTime, kFormatter } from '@utils/helpers';

const { Text } = Typography;

export default function Comment({
  avatar,
  name,
  commentChap,
  datetime,
  comment,
  like,
  threads,
}: IComment) {
  return (
    <div className="flex mt-12">
      <Image
        width={32}
        src={avatar}
        preview={false}
        style={{ minWidth: 32 }}
        alt="thumb"
      />
      <div className="ml3">
        <div className="flex items-center">
          <Text className="fs-xs o-45 nowrap mr2">{name}</Text>
          <Text className="fs-xxs color-darkgray truncate">
            Commented on Chapter {commentChap} • {handleCommentTime(datetime)}
          </Text>
        </div>
        <div className="fs-sm o-85 color-white">{comment}</div>
        <div className="flex items-center">
          <IconText
            icon={<LikeOutlined rev={undefined} />}
            text={<Text className="o-65">{kFormatter(like)}</Text>}
          />
          <IconText
            icon={<MessageOutlined rev={undefined} />}
            text={<Text className="o-65">{kFormatter(threads)}</Text>}
          />
          <div className="fs-sm o-45 color-white">Reply</div>
        </div>
      </div>
    </div>
  );
}
