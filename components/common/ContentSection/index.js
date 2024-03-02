import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button/Button";
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
      {vertical && (
        <div className="flex flex-col items-center">
          {content && <div className="pl-4 order-1 text-left">{content}</div>}
          {buttonContent && buttonContent}
        </div>
      )}
    </div>
  );
};
