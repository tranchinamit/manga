"use client";
import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import CustomLayout from "@/app/custom-layout";
import About from "@/components/About";
import Chapters from "@/components/Chapters";
import Comments from "@/components/Comments";
import Intro from "@/components/Intro";
import Pricing from "@/components/Pricing";
import Related from "@/components/Related";
import {
  IUserData,
  IManga,
  MANGA_MOCK_DATA,
  USER_MOCK_DATA,
} from "@/mocks/data";
import { Spin } from "antd";

export const DataContext = createContext<
  { manga: IManga; user: IUserData } | undefined
>(undefined);

const mangaId = "kasane";

export default function Home() {
  const [user, setUser] = useState<IUserData | undefined>(undefined);
  const [manga, setManga] = useState<IManga | undefined>(undefined);

  const [isFetch, setIsFetch] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(USER_MOCK_DATA ?? undefined);
      setManga(MANGA_MOCK_DATA?.[mangaId] ?? undefined);
      setIsFetch(true);
    }, 250);

    return () => {
      clearTimeout(timer);
      setUser(undefined);
      setManga(undefined);
      setIsFetch(false);
    };
  }, []);

  return (
    <DataContext.Provider value={manga && user ? { manga, user } : undefined}>
      <div className="container">
        <Head>
          <title>Kasane - Inkr NamTran</title>
          <meta name="description" content="Dev by NamTran" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {isFetch ? (
          <CustomLayout
            leftContent={
              <>
                <Intro />
                <Pricing />
                <Chapters />
              </>
            }
            rightContent={
              <>
                <About />
                <Related />
                <Comments />
              </>
            }
          />
        ) : (
          <div className="wrap-spin">
            <Spin />
          </div>
        )}

        <footer />
      </div>
    </DataContext.Provider>
  );
}
