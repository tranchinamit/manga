import { ReactNode } from 'react';

interface IProps {
  icon: ReactNode;
  text: ReactNode;
}

export default function IconText({ icon, text }: IProps) {
  return <div className="flex items-center pv1 mr3">
    <span className="mr1">
      {icon}
    </span>
    {text}
  </div>
}