import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Link from "next/link";

export const OverviewSection = () => {
  return (
    <section id="overview" className="-my-[32px] py-[32px]">
      <LayoutSection className="bg-white-50">
        <ContentSection
          badgeContent="Tổng Quan"
          title={
            <p data-aos="zoom-in">
              LÝ DO LỰA CHỌN
              <br />
              <span className="text-primary"> EATON PARK</span>
            </p>
          }
          content={
            <ul className="grid md:grid-cols-2 gap-6" data-aos="zoom-in">
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#009688">
                    <rect x="22" y="35" width="4" height="11"></rect>
                    <polygon points="24,29.6 31,38 17,38"></polygon>
                  </g>
                  <g fill="#009688">
                    <rect x="22" y="2" width="4" height="11"></rect>
                    <polygon points="24,18.4 17,10 31,10"></polygon>
                  </g>
                  <g fill="#009688">
                    <rect x="2" y="22" width="11" height="4"></rect>
                    <polygon points="18.4,24 10,31 10,17"></polygon>
                  </g>
                  <g fill="#009688">
                    <rect x="35" y="22" width="11" height="4"></rect>
                    <polygon points="29.6,24 38,17 38,31"></polygon>
                  </g>
                  <circle fill="#F44336" cx="24" cy="24" r="3"></circle>
                </svg>

                <p>
                  <b className="lg:text-lg">VỊ TRÍ TRUNG TÂM CỦA TRUNG TÂM</b>
                  <br />
                  Sở hữu vị trí vàng mặt tiền đường Mai Chí Thọ, TP.Thủ Đức. Nằm
                  trong quy hoạch tổng thể
                  <b>&nbsp;khu liên hợp thể thao Quốc Gia Rạch Chiếc.&nbsp;</b>
                  Mang lại nhiều lợi ích và tiềm năng quan trọng.
                </p>
              </li>
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle fill="#FFA726" cx="12" cy="21" r="5"></circle>
                  <g fill="#455A64">
                    <path d="M2,34.7c0,0,2.8-6.3,10-6.3s10,6.3,10,6.3V38H2V34.7z"></path>
                    <path d="M46,34.7c0,0-2.8-6.3-10-6.3s-10,6.3-10,6.3V38h20V34.7z"></path>
                  </g>
                  <circle fill="#FFB74D" cx="24" cy="17" r="6"></circle>
                  <path
                    fill="#607D8B"
                    d="M36,34.1c0,0-3.3-7.5-12-7.5s-12,7.5-12,7.5V38h24V34.1z"
                  ></path>
                  <circle fill="#FFA726" cx="36" cy="21" r="5"></circle>
                  <circle fill="#FFA726" cx="12" cy="21" r="5"></circle>
                  <circle fill="#FFA726" cx="36" cy="21" r="5"></circle>
                </svg>
                <p>
                  <b className="lg:text-lg">
                    CỘNG ĐỒNG CƯ DÂN QUỐC TẾ THỊNH VƯỢNG
                  </b>
                  <br />
                  Căn hộ cao cấp chuẩn Quốc Tế đầu tiên tại Khu Đông TP.HCM của
                  Gamuda Land, góp phần hình thành một cộng đồng cư dân với lối
                  sống đẳng cấp và sang trọng, môi trường sống văn minh, thịnh
                  vượng.
                </p>
              </li>
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#E8EAF6"
                    points="42,39 6,39 6,23 24,6 42,23"
                  ></polygon>
                  <g fill="#C5CAE9">
                    <polygon points="39,21 34,16 34,9 39,9"></polygon>
                    <rect x="6" y="39" width="36" height="5"></rect>
                  </g>
                  <polygon
                    fill="#B71C1C"
                    points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
                  ></polygon>
                  <rect
                    x="18"
                    y="28"
                    fill="#D84315"
                    width="12"
                    height="16"
                  ></rect>
                  <rect
                    x="21"
                    y="17"
                    fill="#01579B"
                    width="6"
                    height="6"
                  ></rect>
                  <path
                    fill="#FF8A65"
                    d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                  ></path>
                </svg>
                <p>
                  <b className="lg:text-lg">
                    HOÀN THIỆN CAO CẤP, HIỆN ĐẠI SANG TRỌNG
                  </b>
                  <br />
                  Tiêu chuẩn bàn giao căn hộ hoàn thiện đầy đủ cao cấp, tạo ra
                  một không gian sống không chỉ bắt mắt mà còn thể hiện được sự
                  đẳng cấp và hiệu quả cao.
                </p>
              </li>
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#FF9800">
                    <rect
                      x="36.1"
                      y="8.1"
                      transform="matrix(.707 .707 -.707 .707 21.201 -25.184)"
                      width="9.9"
                      height="9.9"
                    ></rect>
                    <rect x="36" y="8" width="10" height="10"></rect>
                  </g>
                  <circle fill="#FFEB3B" cx="41" cy="13" r="3"></circle>
                  <polygon fill="#2E7D32" points="16.5,18 0,42 33,42"></polygon>
                  <polygon
                    fill="#4CAF50"
                    points="33.6,24 19.2,42 48,42"
                  ></polygon>
                </svg>
                <p>
                  <b className="lg:text-lg">
                    HƠN 100 TIỆN ÍCH VÀ CẢNH QUAN, ĐẲNG CẤP SỐNG SANG
                  </b>
                  <br />
                  <b>Eaton Park</b> được bao bọc bởi cảnh quan sông nước, môi
                  trường sống xanh thư giãn. Căn hộ <b>Eaton Park</b> khoác lên
                  mình hàng loạt tiện ích nghỉ dưỡng cao cấp.
                </p>
              </li>
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#7CB342"
                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                  ></path>
                  <path
                    fill="#0277BD"
                    d="M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"
                  ></path>
                </svg>
                <p>
                  <b className="lg:text-lg">
                    THIÊN ĐƯỜNG CHO THÚ CƯNG VÀ TRẺ EM
                  </b>
                  <br />
                  Dự án <b>Eaton Park</b> được chủ đầu tư xây dựng tiện ích khu
                  vui chơi dành riêng cho thú cưng, và nhiều tiện ích dành cho
                  trẻ em như khu vui chơi, hồ bơi cho trẻ em, công viên nội
                  khu... và nhiều tiện ích khác dành cho con yêu của bạn.
                </p>
              </li>
              <li className="flex gap-4 lg:gap-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="w-20 h-20"
                  style={{
                    filter:
                      "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#4CAF50">
                    <rect x="40" y="21" width="4" height="23"></rect>
                    <rect x="34" y="28" width="4" height="16"></rect>
                    <rect x="28" y="23" width="4" height="21"></rect>
                    <rect x="22" y="29" width="4" height="15"></rect>
                    <rect x="16" y="32" width="4" height="12"></rect>
                    <rect x="10" y="30" width="4" height="14"></rect>
                    <rect x="4" y="34" width="4" height="10"></rect>
                  </g>
                  <g fill="#388E3C">
                    <polygon points="40.1,9.1 34,15.2 30,11.2 20,21.2 15,16.2 4.6,26.6 7.4,29.4 15,21.8 20,26.8 30,16.8 34,20.8 42.9,11.9"></polygon>
                    <polygon points="44,8 35,8 44,17"></polygon>
                  </g>
                </svg>
                <p>
                  <b className="lg:text-lg">ĐẦU TƯ SINH LỜI VƯỢT TRỘI</b>
                  <br />
                  Nằm tại vị trí có tốc độ phát triển thuộc top nhanh của cả
                  nước, với nhiều cơ sở hạ tầng đang dần hoàn thiện, đặc biệt là
                  <b>&nbsp;khu liên hợp thể thao Quốc Gia Rạch Chiếc.&nbsp;</b>
                  Dự án <b>Eaton Park</b> chắc chắn sẽ gia tăng giá trị mạnh mẽ.
                </p>
              </li>
            </ul>
          }
        />
        <div className="pt-6 md:container mx-auto">
          <table
            border={0}
            cellPadding={1}
            cellSpacing={1}
            className="w-full text-sm md:text-base lg:text-lg"
          >
            <tbody>
              <tr data-aos="fade-down">
                <td>
                  <b>Tên dự án</b>
                </td>
                <td>
                  <Link
                    className="text-primary"
                    href="/"
                    rel="dofollow"
                    title="Eaton Park"
                  >
                    <b>EATON PARK</b>
                  </Link>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Vị trí</b>
                </td>
                <td>
                  Mặt tiền Đường Mai Chí Thọ, Phường An Phú, TP.Thủ Đức, TP. Hồ
                  Chí Minh
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Chủ đầu tư</b>
                </td>
                <td>Công Ty CP BĐS Tâm Lực</td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Đơn vị phát triển</b>
                </td>
                <td>
                  <Link
                    href="https://gamudaland.com.vn/"
                    rel="dofollow"
                    title="Gamuda Land"
                    target="_blank"
                  >
                    <b>Gamuda Land</b>
                  </Link>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Quy mô</b>
                </td>
                <td>
                  <p>
                    Quy mô dự án: 3.7ha
                    <br />
                    Dự án gồm: 02 khu khác nhau, cao 29-39 tầng, có 02 tầng hầm,
                    02 tầng khối đế và 06 tháp nhà ở (Tháp: A1, A2, A3, A4, A5,
                    A6) cao 27-37 tầng.
                    <br />
                    Số lượng căn hộ trên 1 tầng điển hình của tòa tháp: 10 căn
                    hộ.
                  </p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Tổng sản phẩm</b>
                </td>
                <td>
                  <p>
                    <b>Eaton Park </b>bao gồm:
                  </p>
                  <ul className="list-disc list-inside pl-2">
                    <li>
                      <b className="text-lg md:text-xl">1980 căn hộ, </b>
                      20 căn Shophouse, 52 căn shop.
                    </li>
                    <li>
                      Căn hộ 1 phòng ngủ diện tích: 46m<sup>2</sup>
                    </li>
                    <li>
                      Căn hộ 2 phòng ngủ diện tích: 69-70m<sup>2</sup>
                    </li>
                    <li>
                      Căn hộ 3 phòng ngủ diện tích: 97m<sup>2</sup>
                    </li>
                    <li>
                      Dupplex và duel key diện tích: 105m<sup>2</sup>
                    </li>
                    <li>
                      Penhouse diện tích: 196m<sup>2</sup>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <p>
                    <b>Triển khai</b>
                    <br />
                    <b>Giai đoạn 1</b>
                    <br />
                    <b>Tháp A5 &amp; Tháp A6</b>
                  </p>
                </td>
                <td>
                  <p>
                    Cao 37-39 tầng bao gồm khối đế, có 15 căn shop tại khối đế,
                    05 căn shophouse và 02 Tòa Tháp (Tháp A5, A6) với 673 căn
                    hộ:
                  </p>
                  <p>
                    <b>Khối đế: 2 tầng</b>
                  </p>
                  <p>- 15 căn shop tại khối đế</p>
                  <p>- 05 căn shophouse (tổ hợp 05 căn hộ &amp; 05 shops)</p>
                  <p>
                    <b>Tòa Tháp: 35-37 tầng</b>
                  </p>
                  <p>- Tháp A5: cao 37 tầng gồm 351 căn hộ</p>
                  <p>- Tháp A6: cao 35 tầng gồm 322 căn hộ</p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <p>
                    <b>Triển khai</b>
                    <br />
                    <b>Giai đoạn 2</b>
                    <br />
                    <b>Tháp A1 - A2 - A3 - A4</b>
                  </p>
                </td>
                <td>
                  <p>
                    Cao đến 29-39 tầng bao gồm khối đế, gồm 37 căn shop tại khối
                    đế, 15 căn shophouse và 04 Tòa Tháp (Tháp A1, A2, A3, A4)
                    với 1307 căn hộ:
                  </p>
                  <p>
                    <b>Khối đế: 2 tầng</b>
                  </p>
                  <p>- 37 căn shop tại khối đế</p>
                  <p>- 15 căn shophouse (tổ hợp 15 căn hộ &amp; 15 shops)</p>
                  <p>
                    <b>Tòa Tháp: 27-37 tầng</b>
                  </p>
                  <p>- Tháp A1: cao 36 tầng gồm 342 căn hộ</p>
                  <p>- Tháp A2: cao 27 tầng gồm 280 căn hộ</p>
                  <p>- Tháp A3: cao 37 tầng gồm 343 căn hộ</p>
                  <p>- Tháp A4: cao 37 tầng gồm 342 căn hộ</p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b className="lg:whitespace-nowrap">
                    Tiêu chuẩn bàn giao căn hộ Eaton Park
                  </b>
                </td>
                <td>
                  <p>
                    Tiêu chuẩn bàn giao căn hộ: Hoàn thiện Full nội thất cao cấp
                    <Link
                      href="https://canhoeatonpark.com.vn/tieu-chuan-ban-giao-can-ho-eaton-park-dang-cap-va-tien-nghi.html"
                      rel="dofollow"
                      title="Tiêu chuẩn bàn giao căn hộ Eaton Park"
                      className="inline-block w-6 h-6"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="28"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </Link>
                  </p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Các bên tư vấn</b>
                </td>
                <td>
                  <p>- Kiến trúc: Công ty TNHH AG INGO (Việt Nam)</p>
                  <p>
                    - Tư vấn thiết kế Dân dụng &amp; Kết cấu (C&amp;S): TWAsia
                    Consultants Co., Ltd
                  </p>
                  <p>
                    - Tư vấn thiết kế M&amp;E: Công ty TNHH Tư vấn thiết kế ASP
                  </p>
                  <p>- Kiến trúc sư cảnh quan: Công ty TNHH LJ-Group</p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Mật độ xây dựng</b>
                </td>
                <td>
                  <p>
                    - Mật độ xây dựng phần tòa nhà: <b>20.74%</b>
                  </p>
                  <p>
                    - Mật độ cảnh quan: <b>21.02%</b>
                  </p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Tiện ích</b>
                </td>
                <td>
                  Nhà hàng, cafe, Hồ bơi, công viên, nhà trẻ, sân chơi trẻ em,
                  sân thể thao, nhà cộng đồng...
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Hình thức sở hữu</b>
                </td>
                <td>
                  <p>
                    - Người Việt Nam: Sổ hồng lâu dài
                    <br />- Người nước ngoài: Sở hữu 50 năm theo luật pháp hiện
                    hành
                  </p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <p>
                    <b>Pháp lý dự án</b>
                  </p>
                </td>
                <td>
                  <p>Hoàn chỉnh - Sổ hồng lâu dài</p>
                  <p className="space-x-1">
                    <u>
                      <i>Thông Tin Pháp Lý Của Eaton Park:</i>
                    </u>
                    <Link
                      href="https://canhoeatonpark.com.vn/can-ho-eaton-park-hanh-trinh-phap-ly-chat-luong-va-dang-tin-cay.html"
                      rel="dofollow"
                      title="Pháp Lý Của Eaton Park"
                      className="inline-block w-6 h-6"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="28"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </Link>
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      20/09/2016 - Giấy Chứng Nhận Đăng Ký Doanh Nghiệp: Đây là
                      bước quan trọng cho việc thiết lập và đăng ký pháp lý của
                      dự án.
                    </li>
                    <li>
                      25/01/2021 - Quyết Định Chủ Trương Đầu Tư: Quyết định này
                      chứng tỏ sự chấp thuận và cam kết đầu tư vào dự án từ các
                      cơ quan có thẩm quyền.
                    </li>
                    <li>
                      14/12/2021 - Phê Duyệt Quy Hoạch 1/500: Việc phê duyệt quy
                      hoạch này là bước quan trọng trong quá trình xác nhận kế
                      hoạch phát triển dự án.
                    </li>
                    <li>
                      04/2022 - Báo Cáo Tác Động Môi Trường: Báo cáo này thường
                      được yêu cầu để đánh giá và quản lý các tác động tiềm ẩn
                      đối với môi trường từ việc phát triển dự án.
                    </li>
                    <li>
                      17/02/2023 - Giấy phép xây dựng: Đây là giấy phép quan
                      trọng nhất đánh dấu dự án được phép triển khai xây dựng
                      theo đúng quy định của pháp luật.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Dự kiến bàn giao</b>
                </td>
                <td>
                  <p>Quý 1/2027</p>
                </td>
              </tr>
              <tr data-aos="fade-down">
                <td>
                  <b>Liên hệ</b>
                </td>
                <td>
                  <p>
                    <b className="flex items-center gap-1">
                      <span className="flex items-center text-yellow-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          version="1"
                          viewBox="0 0 48 48"
                          enableBackground="new 0 0 48 48"
                          height="28"
                          width="28"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block w-6 h-6"
                        >
                          <path
                            fill="#546E7A"
                            d="M12,40V10h20c2.2,0,4,1.8,4,4v26c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"
                          ></path>
                          <path
                            fill="#4FC3F7"
                            d="M32,13H16c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-8C33,13.4,32.6,13,32,13z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M19,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,29.6,19.6,30,19,30z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M25,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,29.6,25.6,30,25,30z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M31,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,29.6,31.6,30,31,30z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M19,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,34.6,19.6,35,19,35z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M25,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,34.6,25.6,35,25,35z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M31,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,34.6,31.6,35,31,35z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M19,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,39.6,19.6,40,19,40z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M25,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,39.6,25.6,40,25,40z"
                          ></path>
                          <path
                            fill="#B3E5FC"
                            d="M31,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,39.6,31.6,40,31,40z"
                          ></path>
                          <path
                            fill="#37474F"
                            d="M16,10h-4V4c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V10z"
                          ></path>
                        </svg>
                        HOTLINE:{" "}
                      </span>
                      <Link
                        href="tel:+84766079191"
                        className="inline-block text-red-500"
                      >
                        0766079191
                      </Link>
                    </b>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </LayoutSection>
    </section>
  );
};
