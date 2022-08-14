import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layouts from '../src/layouts';
import About from '@components/About';
import Chapters from '@components/Chapters';
import Comments from '@components/Comments';
import Intro from '@components/Intro';
import Pricing from '@components/Pricing';
import Related from '@components/Related';
import { IUserData, IManga, MANGA_MOCK_DATA, USER_MOCK_DATA } from '@mocks/data';

const mangaId = "kasane";

export default function Home() {
  const [user, setUser] = useState<IUserData | undefined>(undefined);
  const [manga, setManga] = useState<IManga | undefined>(undefined);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log(USER_MOCK_DATA);
      console.log(MANGA_MOCK_DATA);
      setUser(USER_MOCK_DATA ?? undefined);
      setManga(MANGA_MOCK_DATA?.[mangaId] ?? undefined);
    }, 250);
    return () => {
      clearTimeout(timer)
    };
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Kasane - Inkr NamTran</title>
        <meta name="description" content="Dev by NamTran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layouts
        leftContent={<>
          <Intro {...manga?.intro} />
          <Pricing {...manga?.pricing} />
          <Chapters
            chapters={manga?.chapters ?? []}
            userManga={user?.[mangaId] ?? undefined}
            publishDay={manga?.publishDay}
            pricing={manga?.pricing}
          />
        </>}
        rightContent={<>
          <About  {...manga?.about} />
          <Related />
          <Comments />
        </>}
      />

      <footer />
    </div>
  );
}
