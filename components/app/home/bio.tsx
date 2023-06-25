import { Socials } from "components/global/socials";

export const Bio = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">이현재</h1>
      <p className="text-gray-500">
        안녕하세요, 프론트엔드 개발자 이현재입니다.
        <br />
        기술이 동작하는 원리를 알아가는 것을 좋아합니다.
      </p>
      <Socials iconSize="16px" />
    </section>
  );
};
