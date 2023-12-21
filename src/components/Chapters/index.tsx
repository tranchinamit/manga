import { useState, useEffect, useContext } from "react";
import { Button, Typography, Card } from "antd";
import { BellOutlined, SortAscendingOutlined } from "@ant-design/icons";

import { IChapter } from "@/mocks/data";

import Chapter from "./Chapter";
import { DataContext } from "@/context/DataProvider";

const { Text } = Typography;

interface ILastChapter {
  chapter: IChapter;
  otherInfo: string;
}

export default function Chapters() {
  const [chapterLastRead, setChapterLastRead] = useState<
    ILastChapter | undefined
  >(undefined);

  const data = useContext(DataContext);

  useEffect(() => {
    if (
      data?.manga?.id &&
      data?.user?.[data?.manga?.id]?.lastReadId &&
      data?.manga?.chapters?.length
    ) {
      const _chapterLastRead =
        data?.manga?.chapters?.find(
          (chap: IChapter) => chap.id === data.user[data?.manga?.id].lastReadId
        ) ?? undefined;
      if (_chapterLastRead) {
        const daysDiff = Math.round(
          (data?.user[data?.manga?.id].lastReadDate - Date.now()) /
            (1000 * 3600 * 24)
        );
        const otherInfo =
          daysDiff > 1 ? `Last read ${daysDiff} days ago` : "Last read today";
        setChapterLastRead({ chapter: { ..._chapterLastRead }, otherInfo });
      }
    }
    return () => {
      setChapterLastRead(undefined);
    };
  }, [data]);

  if (!data) {
    return null;
  }

  const {
    manga: { id, chapters, publishDay, pricing },
    user,
  } = data;

  return (
    <Card className="block block__chapters">
      {!!chapterLastRead && (
        <>
          <div className="mh-24">
            <Text className="block__title">Last read</Text>
          </div>
          <Card className="block block--no-margin">
            <Chapter {...chapterLastRead} isActive />
          </Card>
        </>
      )}

      <div className="mh-24 flex justify-between items-center pv2">
        <div>
          <Text className="block__title margin-left-24">
            {chapters?.length || 0} chapters{" "}
          </Text>
          <br />
          {!!publishDay && (
            <Text className="fs-sm o-45 margin-left-24">
              New chapter every {publishDay}
            </Text>
          )}
        </div>
        <div>
          <Button
            className="btn__transparent--override mr2"
            icon={<BellOutlined rev={undefined} />}
          />
          <Button
            className="btn__transparent--override"
            icon={<SortAscendingOutlined rev={undefined} />}
          />
        </div>
      </div>
      {chapters?.map((chap: IChapter) => (
        <Chapter
          key={chap.id}
          chapter={chap}
          isActive={chapterLastRead?.chapter?.id === chap.id}
          isFree={
            chap?.chapNum && pricing?.freeChaps
              ? chap?.chapNum <= pricing?.freeChaps
              : false
          }
          pricePerChap={pricing?.pricePerChap}
        />
      ))}
    </Card>
  );
}
