import React from "react";
import Panner from '../images/banner2.jpg'
import './News.css';

export function Banner() {
    return (


        <div className="w-full relative pt-12">



            <div id="mid" className="relative">
                <section className="bg-black py-24 px-4 ">
                    <div className="z-20 relative text-white container mx-auto">
                        <div class="grid grid-cols-6 gap-4">
                            <div class="col-start-2 col-span-4 ..."> <h1 class="font-medium leading-tight text-3xl text-center pt-3">HỢP TÁC ĐỐI NGOẠI</h1>
                                <p className="text-center">Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</p></div>
                            <div class="col-start-1 col-end-3 ">
                                <div className="flex justify-center ">
                                    <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                                        <img className="  h- md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg p-4 " src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" alt="" />
                                        <div className=" flex flex-col justify-start p-4">
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">CÁC TRƯỜNG ĐỐI TÁC</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                            Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song bằng (double degree), một hình thức “du học” kinh tế và hiệu quả… (xem tiếp)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-end-7 col-span-2 ...">
                                <div className="flex justify-center">
                                    <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                                        <img className="  h- md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg  " src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" alt="" />
                                        <div className=" flex flex-col justify-start p-4">
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">DOANH NGHIỆP ĐỐI TÁC
                                            </h5>
                                            <p className="text-gray-700 text-base mb-4">
                                            Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế… (xem tiếp)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="absolute inset-0 h-auto z-10">
                        <img src={Panner} alt="" className="h-full w-full object-fit-cover" />
                    </div>
                </section>

            </div>




        </div>

    )
}