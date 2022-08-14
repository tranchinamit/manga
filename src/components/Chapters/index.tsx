import { useState, useEffect } from 'react';
import { IChapter, IIntro, IPricing, IUserManga } from "@mocks/data";
import { Button, Col, Image, Row, Tag, Typography, Divider, Card } from "antd";
import Chapter from './Chapter';
import { BellOutlined, SortAscendingOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface IProps {
  chapters: IChapter[] | [],
  userManga?: IUserManga | undefined,
  publishDay?: string,
  pricing?: IPricing | undefined,
}

interface ILastChapter {
  chapter: IChapter,
  otherInfo: string,
}

export default function Chapters({ chapters, publishDay, userManga, pricing }: IProps) {

  const [chapterLastRead, setChapterLastRead] = useState<ILastChapter | undefined>(undefined);

  useEffect(() => {
    if (userManga?.lastReadId && chapters?.length) {
      const _chapterLastRead = chapters?.find((chap: IChapter) => chap.id === userManga.lastReadId) ?? undefined;
      if (_chapterLastRead) {
        const daysDiff = Math.round((userManga.lastReadDate - Date.now()) / (1000 * 3600 * 24));
        const otherInfo = daysDiff > 1 ? `Last read ${daysDiff} days ago` : 'Last read today';
        setChapterLastRead({ chapter: { ..._chapterLastRead }, otherInfo })
      }
    }
    return () => {
      setChapterLastRead(undefined);
    }
  }, [chapters, userManga])

  console.log('chapterLastRead', chapterLastRead);

  return <Card className="block block__chapters">
    {!!chapterLastRead && (
      <>
        <div className="mv-24">
          <Text className="block__title">Last read</Text>
        </div>
        <Card className="block block--no-margin">
          <Chapter {...chapterLastRead} isActive />
        </Card>
      </>)}

    <div className="mv-24 flex justify-between items-center pv2">
      <div>
        <Text className="block__title margin-left-24">{chapters?.length || 0} chapters </Text>
        <br />
        {!!publishDay && <Text className="fs-sm o-45 margin-left-24">New chapter every {publishDay}</Text>}
      </div>
      <div>
        <Button className="btn__transparent--override mr2" icon={<BellOutlined />} />
        <Button className="btn__transparent--override" icon={<SortAscendingOutlined />} />
      </div>
    </div>
    {chapters?.map((chap: IChapter) => (
      <Chapter
        key={chap.id}
        chapter={chap}
        isActive={chapterLastRead?.chapter?.id === chap.id}
        isFree={chap?.chapNum && pricing?.freeChaps ? chap?.chapNum <= pricing?.freeChaps : false}
        pricePerChap={pricing?.pricePerChap}
      />
    ))}

  </Card>
}
