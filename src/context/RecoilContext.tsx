import { RecoilRoot } from 'recoil';

type Props = { children: React.ReactNode };

const RecoilContext = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContext;
