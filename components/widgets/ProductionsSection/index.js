import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";
import { useRef } from "react";

export const ProductionsSection = () => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  return (
    <section id="products" className="-my-[32px] py-[32px]">
      <LayoutSection className="bg-white-50">
        <ContentSection
          badgeContent="Thông Tin Sản Phẩm"
          title={
            <div>
              MẶT BẰNG CĂN HỘ
              <span className="text-primary">&nbsp;Eaton Park</span>
              <table className="text-base">
                <tbody>
                  <tr>
                    <th>Lòaï</th>
                    <th>Tiêu lè (%)</th>
                    <th>GFA (sqm)</th>
                    <th>Thành A6</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>314 PN</td>
                    <td>59.0</td>
                    <td>8.5</td>
                    <td>351 Can 322</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>304 PN</td>
                    <td>65.0</td>
                    <td>10.7</td>
                    <td>304 Can 35 Can</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>284 PN</td>
                    <td>116.3</td>
                    <td>13.8</td>
                    <td>304 Can 35 Can</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>265.5 - 254.3</td>
                    <td>207.5 - 254.3</td>
                    <td>153.8 - 176.8</td>
                    <td>351 Can 35 Can</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>11 PN - Thành Mông</td>
                    <td>11.6 - 13.1</td>
                    <td>85.6 - 173.8</td>
                    <td>304 Can 35 Can</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>299 PN - Thành Mông</td>
                    <td>44.6 - 48.7</td>
                    <td>98.1 - 139.1</td>
                    <td>351 Can 35 Can</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Công Nhà Bêng Làn (Lê)</td>
                    <td>8.1 - 16.9</td>
                    <td>99.1 - 136.7</td>
                    <td>555 Can 5 Can</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
          buttonContent="get started free"
          content="Our agents will guide you through the entire buying process, from property"
        />

        <div class="container">
          <h1>Thông Tin Sản Phẩm Eaton Park</h1>
        </div>
        <div className="relative">
          {/* <html>
<style>
body {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
   background-color: #e9e9e9;
   color: #333;
}

.container {
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;
   text-align: center;
}

h1 {
   font-size: 2.5em;
   color: #b38666;
   text-transform: uppercase;
}

table {
   width: 100%;
   border-collapse: collapse;
}

th {
   background-color: #339966;
   color: #fff;
   padding: 10px;
}

td {
   padding: 10px;
   border: 1px solid #ddd;
}

tr:nth-child(even) {
   background-color: #f2f2f2;
}

tr:nth-child(odd) {
   background-color: #ddd;
}

.property {
   margin-bottom: 20px;
   padding: 20px;
   background-color: #f2f2f2;
   color: #333;
   border-radius: 5px;
}
</style>
<body>

</body>
</html> */}
        </div>

        <div className="grid grid-cols-2 ">
          <Image
            width={100}
            height={100}
            src={"/best_home_2.png"}
            alt="img-home"
            className="w-full"
          />
          <Image
            width={100}
            height={100}
            src={"/best_home_3.png"}
            alt="img-home"
            className="w-full"
          />
        </div>
      </LayoutSection>
    </section>
  );
};
