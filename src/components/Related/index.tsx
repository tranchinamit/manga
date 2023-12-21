import { useContext } from "react";

import { Typography, Card } from "antd";

import { DataContext } from "@/context/DataProvider";

import Item from "./Item";

const { Text } = Typography;

export default function Related() {
  const data = useContext(DataContext);

  if (!data) {
    return null;
  }

  const {
    manga: { related },
  } = data;

  return (
    <Card className="block block--no-spacing">
      <div className="mt-24">
        <Text className="block__title mh-24">Related Titles</Text>
      </div>

      {related?.map((item) => <Item key={item.id} {...item} />)}
    </Card>
  );
}
