import { ReactNode, createContext, useEffect, useState } from "react";
import {
  IUserData,
  IManga,
  MANGA_MOCK_DATA,
  USER_MOCK_DATA,
} from "@/mocks/data";

export const DataContext = createContext<{
  manga: IManga;
  user: IUserData;
  isFetch: boolean;
} | null>(null);

const mangaId = "kasane";

export default function DataProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUserData | null>(null);
  const [manga, setManga] = useState<IManga | null>(null);

  const [isFetch, setIsFetch] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(USER_MOCK_DATA ?? null);
      setManga(MANGA_MOCK_DATA?.[mangaId] ?? null);
      setIsFetch(true);
    }, 250);

    return () => {
      clearTimeout(timer);
      setUser(null);
      setManga(null);
      setIsFetch(false);
    };
  }, []);

  return (
    <DataContext.Provider
      value={manga && user ? { manga, user, isFetch } : null}
    >
      {children}
    </DataContext.Provider>
  );
}
