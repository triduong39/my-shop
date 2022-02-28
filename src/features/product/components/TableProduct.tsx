import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const AppTypography = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const AppImg = styled('img')`
    width: 50px;
    height: 50px;
    object-fit: cover;
`;

const rows = [
    {
        id: 28369984,
        name: 'Ao Sơ Mi Nữ Lụa Hong Kong ',
        shortDescription:
            'Sơ mi nữ lụa hàng nhập hong kong mịn mát,\nCác chị công sở sẻ thoải mái với chiếc áo mang đến sự mát mẻ và thoải mái',
        description:
            '<div><div class="attrs-block">\n                                     <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">THÔNG TIN CƠ BẢN</h4>\n                                     <ul style="font-size: 13px; list-style: none; padding: 0; margin: 0 0 10px; line-height: 1.4;"><li style="padding: 5px 12px;background-color: #ebebeb";> <strong>Chất vải:</strong> <span>Lụa.</span> </li><li style="padding: 5px 12px;";> <strong>Chiều dài tay áo:</strong> <span>Tay dài.</span> </li><li style="padding: 5px 12px;background-color: #ebebeb";> <strong>Họa tiết:</strong> <span>Họa tiết lạ.</span> </li><li style="padding: 5px 12px;";> <strong>Phong cách:</strong> <span>Công sở.</span> </li></ul>\n                                    </div><div class="details-block">\n                              <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">CHI TIẾT SẢN PHẨM</h4>\n                              <div id="editor-content">Sơ mi nữ lụa hàng nhập hong kong mịn mát,<br/>\nCác chị công sở sẻ thoải mái với chiếc áo mang đến sự mát mẻ và thoải mái</div>\n                            </div>\n                        </div>',
        originalPrice: 340000,
        salePrice: 333200,
        isPromotion: 0,
        promotionPercent: 0,
        images: [
            'https://media3.scdn.vn/img4/2020/04_06/jf6xSzFL3sCg4QfznVkD.jpg',
            'https://media3.scdn.vn/img4/2020/04_06/SNQO7ooER6FuM0kWHBEB.jpg',
            'https://media3.scdn.vn/img4/2020/04_06/W8v12t5kaij7R4nuUhS2.jpg',
            'https://media3.scdn.vn/img4/2020/04_06/yJVwm4ssguaSrx87YRYQ.jpg',
            'https://media3.scdn.vn/img4/2020/04_06/dlruzbeMowsAFdEBGU5Y.jpg',
        ],
        isFreeShip: false,
        createdAt: 1633700487419,
        updatedAt: 1633700487419,
        categoryId: 'sktwi1cgkkuif36ex',
    },
    {
        id: 8563536,
        name: 'ao so mi nu',
        shortDescription:
            'XẢ KHO ÁO SƠ MI UNI NỮXẢ KHO ÁO SƠ MI UNI NỮXẢ KHO ÁO SƠ MI UNI NỮĐủ 3 size. S. M, L, lIÊN HỆ E 0963114660/ 0988354389 ĐỂ ĐƯỢC TƯ VẤN VÀ HỖ TRỢ ĐẶT HÀNGS từ 40kg đên 48kgM từ 47kg đên 56kgL từ 55kg đên 65kgE nhờ cả nhà ủn mông cho e mã này nhe. Nhập...',
        description:
            '<div><div class="attrs-block">\n                                     <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">THÔNG TIN CƠ BẢN</h4>\n                                     <ul style="font-size: 13px; list-style: none; padding: 0; margin: 0 0 10px; line-height: 1.4;"><li style="padding: 5px 12px;background-color: #ebebeb";> <strong>Chất liệu:</strong> <span>LỤA.</span> </li><li style="padding: 5px 12px;";> <strong>Kiểu dáng:</strong> <span>Dài tay.</span> </li></ul>\n                                    </div><div class="details-block">\n                              <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">CHI TIẾT SẢN PHẨM</h4>\n                              <div id="editor-content"><p><span style="color: rgb(29, 33, 41); font-size: 18pt;" data-mce-style="color: #1d2129; font-size: 18pt;">XẢ KHO ÁO SƠ MI UNI NỮ</span></p><p><span style="color: rgb(29, 33, 41); font-size: 18pt;" data-mce-style="color: #1d2129; font-size: 18pt;">XẢ KHO ÁO SƠ MI UNI NỮ</span></p><p><span style="color: rgb(29, 33, 41); font-size: 18pt;" data-mce-style="color: #1d2129; font-size: 18pt;">XẢ KHO ÁO SƠ MI UNI NỮ</span></p><p><span style="color: rgb(29, 33, 41); font-size: 18pt;" data-mce-style="color: #1d2129; font-size: 18pt;"><br data-mce-bogus="1"></span></p><p><span color="#1d2129" data-mce-style="color: #1d2129; font-size: 14pt;" style="color: rgb(29, 33, 41); font-size: 14pt;">Đủ 3 size. S. M, L, lIÊN HỆ E 0963114660/ 0988354389 ĐỂ ĐƯỢC TƯ VẤN VÀ HỖ TRỢ ĐẶT HÀNG</span></p><p><span color="#1d2129" data-mce-style="color: #1d2129; font-size: 14pt;" style="color: rgb(29, 33, 41); font-size: 14pt;">S từ 40kg đên 48kg</span></p><p><span style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;">M từ 47kg đên 56kg</span></p><p><span style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;">L từ 55kg đên 65kg</span></p><p><span style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;">E nhờ cả nhà ủn mông cho e mã này nhe. Nhập 500 áo Sơ Mi trắng tinh khôi như hình cong đít có đủ hàng loại hịn để trả khách nhưng hàng về hơi muộn so với lời hứa nên khách ko kịp trả đơn cho khách lẻ. Lỗi cũng tại số mình hơi đen nên ko ep khách nhận nữa.</span><br style="color: #1d2129; font-size: 14px;" data-mce-style="color: #1d2129; font-size: 14px;"><span style="font-size: 14pt;" data-mce-style="font-size: 14pt;"><span style="color: rgb(29, 33, 41);" data-mce-style="color: #1d2129;">Em nhờ các chị trong hội mua lại cho em với giá&nbsp;</span><a  "_58cn" style="color: rgb(54, 88, 153);" href="" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}" data-mce-href="https://www.facebook.com/hashtag/120k?source=feed_text&amp;story_ 2108844866006148" data-mce-style="color: #365899;"><span  "_5afx"><span  "_58cl _5afz" style="color: #4267b2;" aria-label="hashtag" data-mce-style="color: #4267b2;">#</span><span  "_58cm">199k</span></span></a><span style="color: rgb(29, 33, 41);" data-mce-style="color: #1d2129;">&nbsp;nhé (Gia thị trường&nbsp;</span><a  "_58cn" style="color: rgb(54, 88, 153);" href="" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}" data-mce-href="https://www.facebook.com/hashtag/220k?source=feed_text&amp;story_ 2108844866006148" data-mce-style="color: #365899;"><span  "_5afx"><span  "_58cl _5afz" style="color: #4267b2;" aria-label="hashtag" data-mce-style="color: #4267b2;">#</span><span  "_58cm">399k</span></span></a><span style="color: rgb(29, 33, 41);" data-mce-style="color: #1d2129;">&nbsp;ạ) Em thấy thị trường có nhiều loại lắm, nhưng các chị cứ tin tưởng ở em đây là hàng loại 1 ạ.</span></span><br style="color: #1d2129; font-size: 14px;" data-mce-style="color: #1d2129; font-size: 14px;"><span style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;">Sơ mi trắng không nhăn Uniqlo!!! TRẮNG TINH KHÔI.</span><br style="color: #1d2129; font-size: 14px;" data-mce-style="color: #1d2129; font-size: 14px;"><span  "text_exposed_show" style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;">Form áo suông vừa phải sơ vin rất đẹp. Ưu điểm mềm mại , giặt xong mặc luôn chả cần ủi lại, hoạt động thoải mãi không nhăn tẹo nào<br>Size : S, M,L (40-65kg) các chị kết hợp kiểu váy hay quần đều đẹp hết.<br>Em xưa nay bán hàng chưa treo dê bán chó bao h, ship đến xấu các chị trả lại em nhé.<br>Mong các chị đừng ác miệng bảo lại bài ca bom hàng để động lòng trắc ẩn của các chị- em còn chụp luôn bằng chứng đây ạ. Mà tội gì e phải bán hàng hịn như này&nbsp;<a  "_58cn" style="color: #365899;" href="" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}" data-mce-href="https://www.facebook.com/hashtag/130k?source=feed_text&amp;story_ 2108844866006148" data-mce-style="color: #365899;"><span  "_5afx"><span  "_58cl _5afz" style="color: #4267b2;" aria-label="hashtag" data-mce-style="color: #4267b2;">#</span><span  "_58cm">199k</span></span></a>&nbsp;chứ trong khi ngày thường e bán #399k mà hàng tuôn ầm ầm.<br>Giờ bị vía mà tết sắp đến rồi nên e mới nhờ mn ủng hộ ạ.<br>Hàng em có sẵn&nbsp;<br>Giá này e ko phờ ri ship, ko mặc cả nữa nha.<br>Các chị ở tỉnh mua hàng qua shopee nhà em.<br>CAM KẾT HÀNG NHƯ HÌNH NHÉ CHỊ EM!!!</span></p><p><span  "text_exposed_show" style="color: rgb(29, 33, 41); font-size: 14pt;" data-mce-style="color: #1d2129; font-size: 14pt;"><img src="http://media3.scdn.vn/img2/2018/1_18/wcapkP_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><img src="http://media3.scdn.vn/img2/2018/1_18/wcapkP_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/nZectg_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/lOCzWX_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/daMqfH_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/Ovcc4G_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/nUAJnd_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/29VW5k_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/YMokaY_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/XfHeVb_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><img src="http://media3.scdn.vn/img2/2018/1_18/GliIHJ_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><br><br><br><br><br data-mce-bogus="1"></span></p><p><span  "text_exposed_show" style="color: #1d2129; font-size: 14px;" data-mce-style="color: #1d2129; font-size: 14px;"><br data-mce-bogus="1"></span></p></div>\n                            </div>\n                        </div>',
        originalPrice: 390000,
        salePrice: 390000,
        isPromotion: 0,
        promotionPercent: 0,
        images: [
            'https://media3.scdn.vn/img2/2018/1_18/wcapkP.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/nZectg.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/lOCzWX.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/daMqfH.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/Ovcc4G.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/nUAJnd.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/29VW5k.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/YMokaY.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/XfHeVb.jpg',
            'https://media3.scdn.vn/img2/2018/1_18/GliIHJ.jpg',
        ],
        isFreeShip: false,
        createdAt: 1633700488456,
        updatedAt: 1633700488456,
        categoryId: 'sktwi1cgkkuif36ex',
    },
    {
        id: 5407941,
        name: 'ao so mi nu',
        shortDescription:
            'Áo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co giãn nhẹ. Hàng có size xl.xxl.xxxl. từ 40kg-65kg\nÁo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co giãn nhẹ. Hàng có size xl.xxl.xxxl. từ 40kg-65kg\nÁo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co gi...',
        description:
            '<div><div class="details-block">\n                              <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">CHI TIẾT SẢN PHẨM</h4>\n                              <div id="editor-content">Áo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co giãn nhẹ. Hàng có size xl.xxl.xxxl. từ 40kg-65kg<br/>\nÁo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co giãn nhẹ. Hàng có size xl.xxl.xxxl. từ 40kg-65kg<br/>\nÁo sơ mi nữ form dáng đẹp 😍😍😍😍. Chất kaki mỏng co giãn nhẹ. Hàng có size xl.xxl.xxxl. từ 40kg-65kg</div>\n                            </div>\n                        </div>',
        originalPrice: 120000,
        salePrice: 120000,
        isPromotion: 0,
        promotionPercent: 0,
        images: [
            'https://media3.scdn.vn/img2/2017/4_13/gO5MKE.jpg',
            'https://media3.scdn.vn/img2/2017/4_13/a5PEvv.jpg',
        ],
        isFreeShip: false,
        createdAt: 1633700489498,
        updatedAt: 1633700489498,
        categoryId: 'sktwi1cgkkuif36ex',
    },
    {
        id: 35854239,
        name: 'Áo sơ mi nữ dài tay chất vải lụa nến mềm mịn',
        shortDescription:
            'ÁO SƠ MI NỮ CHẤT VẢI COTTON LỤA GIÁ SĨ BUÔN&lt;&lt; Quý khách được kiểm tra hàng trước khi thanh toán !  &gt;&gt;GIỚI THIỆU SẢN PHẨMÁo sơ mi nữ basic chính là gợi ý tuyệt vời cho nữ giới mỗi khi lựa chọn trang phục mỗi ngày. Với những mẫu áo sơ mi na...',
        description:
            '<div><div class="details-block">\n                              <h4 style="font-size: 13px; line-height: 40px; font-weight: 400; margin: 0; border-bottom: 1px solid #a2a2a2; margin-bottom: 10px;">CHI TIẾT SẢN PHẨM</h4>\n                              <div id="editor-content"><h1 style="text-align: center;"><span style="font-size: 24pt; color: rgb(0, 0, 255);"><strong><span style="color: #ff0000;">ÁO SƠ MI NỮ CHẤT VẢI COTTON LỤA GIÁ SĨ BUÔN</span></strong></span></h1><p style="text-align: center;"><span style="font-size: 18pt; color: rgb(0, 0, 128);"><em><span style="color: #ff0000;">&lt;&lt; Quý khách được kiểm tra hàng trước khi thanh toán !  &gt;&gt;</span></em></span></p><p style="text-align: center;"><span style="font-size: 18pt; color: rgb(0, 0, 128);"><em><span style="color: #ff0000;"><img src="http://media3.scdn.vn/img4/2021/05_18/W3PbpYaqSxvvffKedcC9_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br></span></em></span></p><p><span style="font-size: 14pt;"><strong>GIỚI THIỆU SẢN PHẨM</strong></span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">Áo sơ mi nữ basic chính là gợi ý tuyệt vời cho nữ giới mỗi khi lựa chọn trang phục mỗi ngày. Với những mẫu áo sơ mi nam thiết kế đơn giản và toát lên vẻ lịch lãm tinh tế, mang đến phong cách thời trang trẻ trung, năng động chắc chắn sẽ là lựa chọn hoàn hảo cho cô nàng hiện đại, nữ tính. Những chiếc áo sơ mi trơn dù kết hợp với quần âu, quần jeans khi đi làm hay diện cùng quần ngố, quần short đi chơi đều NỔI BẬT, THOẢI MÁI và PHONG CÁCH. Với form dáng vừa vặn các cô nàng  có thể tự tin khoe body cực chuẩn của mình. Hãy bổ sung ngay vào tủ đồ item này để diện thật chất nhé!</span><span style="font-size: 14pt;"><br><br></span></p><ol style="color: #212529; font-size: 14px;"><li><span style="font-size: 14pt;"><strong>THÔNG TIN CHI TIẾT:</strong></span></li></ol><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Chất liệu: 100% chất cotton lụa, thấm hút mồ hôi</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Quy cách, tiêu chuẩn đường may tinh tế, tỉ mỉ trong từng chi tiết</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Kiểu dáng: Thiết kế đơn giản, dễ mặc, dễ phối đồ</span></p><p><span style="font-size: 14pt;">- Form body Hàn Quốc mang lại phong cách trẻ trung, công sở</span></p><p><span style="font-size: 14pt;">- Chất lượng sản phẩm tốt, giá cả hợp lý</span></p><p><span style="font-size: 14pt;"><strong><img src="http://media3.scdn.vn/img4/2020/12_10/CpK7f8d8ishKoeftGqJv_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><br></strong></span></p><ol style="color: #212529; font-size: 14px;"><li><span style="font-size: 14pt;"><strong>CHÍNH SÁCH BÁN HÀNG:</strong></span></li></ol><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- FREESHIP hoặc hỗ trợ 40K cho đơn hàng từ 99K</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Ngoài ra, URANO tặng voucher hoặc hoàn xu cho các đơn hàng tương ứng đủ điều kiện.</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Hoàn tiền nếu sản phẩm không giống với mô tả.</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Cam kết được đổi trả hàng trong vòng 2 ngày.</span></p><p><span style="font-size: 14pt;"><strong><img src="http://media3.scdn.vn/img4/2020/12_10/YmrifeaFvW1L1zlwmWoI_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><br></strong></span></p><ol style="color: #212529; font-size: 14px;"><li><span style="font-size: 14pt;"><strong>HƯỚNG DẪN CÁCH ĐẶT HÀNG</strong></span></li></ol><p><span style="font-size: 14pt;">-Bước 1: Cách chọn size, shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Bước 2: Cách đặt hàng: Nếu bạn muốn mua 2 sản phẩm khác nhau hoặc 2 size khác nhau, để được freeship</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">+ Bạn chọn từng sản phẩm rồi thêm vào giỏ hàng</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">+ Khi giỏ hàng đã có đầy đủ các sản phẩm cần mua, bạn mới tiến hành ấn nút “ Thanh toán”</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">- Shop luôn sẵn sàng trả lời inbox để tư vấn.</span></p><p><span style="font-size: 14pt;"><img src="http://media3.scdn.vn/img4/2020/12_10/4tQ6oC6SAwu7bftm0bhf_simg_d0daf0_800x1200_max.jpg" style="margin: 0 auto;display:block;"><br><br><br></span></p><p><span style="font-size: 14pt;">HƯỚNG DẪN CHỌN SIZE ÁO SƠ MI NỮ :</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;"></span></p><p style="color: #212529; font-size: 14px;"><span style="color: rgba(0, 0, 0, 0.8);">HƯỚNG DẪN CHỌN SIZE: (Size áo chia theo cân nặng vì chiều dài áo chênh lệch không nhiều, khách hàng còn phân vân có thể đặt câu hỏi phía dưới để bộ phận CSKH tư vấn tận tình nha) S {38 đến 42 kg} M {43 đến 47 kg} L {48 đến 52 kg} XL { 53 đến 57 kg}</span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;"></span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;"></span></p><p style="color: #212529; font-size: 14px;"><span style="font-size: 14pt;">🔔🔔🔔 Tham khảo thêm các sản phẩm khác tại: #BIS SHOP</span></p><p style="color: #212529; font-size: 14px;"><br></p></div>\n                            </div>\n                        </div>',
        originalPrice: 300000,
        salePrice: 89000,
        isPromotion: 1,
        promotionPercent: 71,
        images: [
            'https://media3.scdn.vn/img4/2021/06_17/C7lPyt2Tn8EkChacCJZW.jpg',
            'https://media3.scdn.vn/img4/2020/12_10/4tQ6oC6SAwu7bftm0bhf.jpg',
            'https://media3.scdn.vn/img4/2020/12_10/q2VtiPn3ailatD7ITIzI.jpg',
            'https://media3.scdn.vn/img4/2020/12_10/CpK7f8d8ishKoeftGqJv.jpg',
            'https://media3.scdn.vn/img4/2020/12_10/YmrifeaFvW1L1zlwmWoI.jpg',
            'https://media3.scdn.vn/img4/2021/03_17/V848N1EmztiUnxhCGVrS.jpg',
            'https://media3.scdn.vn/img4/2021/03_17/x27vMEWOSOWug8WB8rLL.jpg',
        ],
        isFreeShip: false,
        createdAt: 1633700490708,
        updatedAt: 1633700490708,
        categoryId: 'sktwi1cgkkuif36ex',
    },
];

export default function TableProduct() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" width={200}>
                            Product name
                        </TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="left">Short Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">
                                <AppImg src={row.images[0]} alt={row.name} />
                            </TableCell>
                            <TableCell align="left">
                                <AppTypography variant="body2">{row.shortDescription}</AppTypography>
                            </TableCell>
                            <TableCell align="right">{row.salePrice}</TableCell>
                            <TableCell align="left">
                                <Stack direction="row" spacing={2}>
                                    <IconButton aria-label="create" color="success">
                                        <CreateIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
