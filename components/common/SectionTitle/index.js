import { spaceGrotesk } from "@/pages/_app";

export const SectionTitle = ({ title = "" }) => {
  return (
    <div
      className={`${spaceGrotesk.className} capitalize text-3xl lg:text-6xl text-black mb-8`}
    >
      {title}
    </div>
  );
};
