import { Badge } from "@/components/common/Badge";
import { SectionTitle } from "@/components/common/SectionTitle";

export const ContentSection = ({
  title = "",
  badgeContent = "",
  buttonContent,
  content = "",
  vertical = false
}) => {
  return (
    <div
      className={`${!vertical ? "lg:text-center" : "lg:text-left"} text-center`}
    >
      <div>
        {badgeContent && <Badge content={badgeContent} vertical={vertical} />}
      </div>
      <SectionTitle title={title} />
      <div className="flex flex-col items-center">
        {content && <div className="order-1 text-left">{content}</div>}
        {buttonContent && buttonContent}
      </div>
    </div>
  );
};
