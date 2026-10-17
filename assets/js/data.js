/**
 * NGUYỄN VĨNH CHIẾN - BLOG DỮ LIỆU CHÍNH THỨC
 * Domain: https://nguyenvinhchien.biz/
 * Dữ liệu nhật ký chạy bộ, bài viết truyền cảm hứng và thông điệp sống
 */

const BLOG_DATA = {
  profile: {
    name: "Nguyễn Vĩnh Chiến",
    birthYear: "1964",
    age: "60+",
    title: "Người Đàn Ông U60+ Vững Vàng Từng Bước Chạy",
    tagline: "Mỗi bước chạy - Một niềm vui | Sống tử tế, tràn đầy năng lượng & lan tỏa yêu thương",
    motto: "Kính chúc thầy cùng đại gia đình mỗi ngày mới: Ngập Tràn Năng Lượng!",
    avatar: "assets/images/chien-avatar.jpg",
    heroImage: "assets/images/chien-run-white-816km.jpg",
    portraitRed: "assets/images/chien-portrait-red.jpg",
    portraitBlue: "assets/images/chien-portrait-blue.jpg",
    portraitWhite: "assets/images/chien-portrait.jpg",
    location: "Việt Nam (Cung đường biển)",
    stats: {
      totalDistance: "4,286 km",
      totalDays: "485 ngày",
      totalCalories: "318,500 kcal",
      weeklyAvg: "42.5 km/tuần",
      ageVitality: "U60+ Phong độ U40",
      morningRoutine: "5:30 AM mỗi sáng"
    },
    bio: [
      "Chào bạn! Tôi là Nguyễn Vĩnh Chiến. Ở độ tuổi ngoài 60, rất nhiều người nghĩ rằng chúng ta nên ngồi yên, nghỉ ngơi và chấp nhận sự già đi của cơ thể. Nhưng đối với tôi, mỗi buổi sáng thức dậy là một món quà vô giá của tạo hóa, và đôi chân này vẫn khao khát được chạm mặt đất, hít thở gió sớm trong lành.",
      "Tôi không chạy để lập kỷ lục hay so đo hơn thua với bất kỳ ai. Tôi chạy để lắng nghe nhịp đập trái tim mình, để rèn luyện sự kiên nhẫn, giữ gìn một thân thể khỏe mạnh làm điểm tựa cho gia đình, và trên hết là để gửi gắm năng lượng tích cực, sự tử tế đến mọi người xung quanh.",
      "Mỗi bước chạy của tôi là một lời chúc lành, là niềm tự hào về đất nước Việt Nam tươi đẹp, và là lời nhắn nhủ rằng: 'Tuổi tác chỉ là con số, khi tâm hồn bạn còn chan chứa yêu thương và ý chí không ngừng tiến bước!'"
    ],
    pillars: [
      {
        icon: "heart-pulse",
        title: "Thân Khỏe (Sức Bền)",
        desc: "Chạy bộ đều đặn vùng nhịp tim Zone 2, giữ khớp gối linh hoạt, cơ bắp dẻo dai và hơi thở nhẹ nhàng suốt 7 - 8km mỗi sáng."
      },
      {
        icon: "sun",
        title: "Tâm An (Chánh Niệm)",
        desc: "Đón bình minh, mỉm cười chào người qua đường. Chạy bộ như một hình thức thiền động để trút bỏ mọi muộn phiền lo toan."
      },
      {
        icon: "compass",
        title: "Kỷ Luật (Tự Giác)",
        desc: "5:30 sáng không cần đồng hồ báo thức reo lần hai. Thói quen xỏ giày đã trở thành một phần tự nhiên như hơi thở."
      },
      {
        icon: "users",
        title: "Tử Tế & Yêu Thương",
        desc: "Luôn mang tấm lòng biết ơn thầy cô, bạn bè, gia đình. Chia sẻ năng lượng tích cực để tiếp lửa cho mọi thế hệ."
      }
    ]
  },

  runs: [
    {
      id: "run-2026-10-15",
      date: "15/10/2026",
      dayOfWeek: "Thứ Năm",
      title: "Mỗi Bước Chạy Một Niềm Vui - 7.47 km",
      distance: 7.47,
      duration: "01:07:41",
      totalTime: "01:07:50",
      pace: "9:04 /km",
      calories: 526,
      cadence: "130 spm",
      timeStart: "06:35:06 (GMT+7)",
      route: "Võ Nguyên Giáp • Quang Trung • Khổng Tử • Ngô Quyền",
      shirtColor: "blue",
      shirtLabel: "Áo Xanh Dương - 'Tôi yêu Việt Nam!'",
      posterImage: "assets/images/chien-run-blue-747km.jpg",
      quote: "Kỷ luật và kiên định - Nhịp thở êm, guồng chân thanh thoát, nụ cười trên môi.",
      story: "Buổi sáng thứ Năm mát lành, xuất phát lúc 6h35. Cung đường dọc Võ Nguyên Giáp và rẽ vào khu phố Quang Trung thật yên bình. Tốc độ hôm nay đạt pace 9:04/km rất ổn định, tim đập nhẹ nhàng, cảm giác cơ thể tràn đầy sinh khí mới.",
      highlights: [
        "Pace cải thiện tốt: 9:04 /km",
        "Đốt cháy 526 kcal năng lượng sạch",
        "Cadence 130 spm nhịp nhàng bảo vệ khớp"
      ]
    },
    {
      id: "run-2026-10-14",
      date: "14/10/2026",
      dayOfWeek: "Thứ Tư",
      title: "Rực Rỡ Màu Cờ Sắc Áo - 7.61 km",
      distance: 7.61,
      duration: "01:11:38",
      totalTime: "01:12:09",
      pace: "9:25 /km",
      calories: 557,
      cadence: "134 spm",
      timeStart: "06:13:25 (GMT+7)",
      route: "Võ Nguyên Giáp • Quang Trung • Ngô Quyền • Trường Văn Hải",
      shirtColor: "red",
      shirtLabel: "Áo Đỏ Sao Vàng - 'Tôi yêu Việt Nam!'",
      posterImage: "assets/images/chien-run-red-761km.jpg",
      quote: "Mỗi bước chạy một niềm vui - Yêu màu cờ sắc áo, yêu từng nhịp thở buổi bình minh.",
      story: "Khoác lên mình chiếc áo cờ đỏ sao vàng 'Tôi yêu Việt Nam!', cảm giác tự hào và khí thế ngập tràn trong từng sải bước. Cung đường sáng nay 7.61km qua Ngô Quyền và Trường Văn Hải rợp bóng cây. Nụ cười rạng rỡ chào những người bạn chạy cùng tuyến đường.",
      highlights: [
        "Hoàn thành 7.61 km với tinh thần phấn chấn",
        "Guồng chân đều đặn 134 spm",
        "Tiêu hao 557 kcal, tim mạch khỏe mạnh"
      ]
    },
    {
      id: "run-2026-10-12",
      date: "12/10/2026",
      dayOfWeek: "Thứ Hai",
      title: "Bước Chạy Đầu Tuần Tràn Đầy Năng Lượng - 8.16 km",
      distance: 8.16,
      duration: "01:17:01",
      totalTime: "01:17:40",
      pace: "9:26 /km",
      calories: 598,
      cadence: "132 spm",
      timeStart: "06:10:46 (GMT+7)",
      route: "Võ Nguyên Giáp • Quang Trung • Ngô Quyền • Trường Văn Hải",
      shirtColor: "white",
      shirtLabel: "Áo Trắng Tinh Khôi - 'Tôi yêu Việt Nam!'",
      posterImage: "assets/images/chien-run-white-816km.jpg",
      quote: "Kính chúc thầy cùng đại gia đình đầu tuần mới: Ngập Tràn Năng Lượng!",
      story: "Sáng thứ Hai đầu tuần, 6h10 sáng bắt đầu với cung đường dài 8.16 km. Trời se lạnh nhẹ, bước chạy thanh thoát như lướt trên mặt đường. Khởi động tuần mới bằng hơn 8 cây số giúp cả tâm trí lẫn cơ thể bừng sáng, tràn đầy nhiệt huyết yêu thương.",
      highlights: [
        "Cự ly ấn tượng: 8.16 km mở đầu tuần mới",
        "Duy trì bền bỉ suốt 1 giờ 17 phút",
        "Năng lượng bùng nổ, tinh thần sảng khoái"
      ]
    },
    {
      id: "run-2026-10-10",
      date: "10/10/2026",
      dayOfWeek: "Thứ Bảy",
      title: "Chạy Bộ Cuối Tuần Hòa Mình Cùng Thiên Nhiên - 7.50 km",
      distance: 7.50,
      duration: "01:09:12",
      totalTime: "01:09:45",
      pace: "9:13 /km",
      calories: 535,
      cadence: "131 spm",
      timeStart: "06:05:00 (GMT+7)",
      route: "Đại lộ biển Võ Nguyên Giáp • Vòng cung gió lộng",
      shirtColor: "blue",
      shirtLabel: "Áo Xanh Hy Vọng - Tôi yêu Việt Nam!",
      posterImage: "assets/images/chien-run-blue-747km.jpg",
      quote: "Cuối tuần chạy dài hơn một chút để ngắm trọn vẹn mặt trời nhô lên từ phía chân trời biển.",
      story: "Một buổi sáng thứ Bảy tuyệt vời cùng tiếng sóng vỗ. Khi chạm mốc 7.5km, cơ thể toát mồ hôi sảng khoái, uống từng ngụm nước ấm và cảm nhận dòng máu lưu thông ấm áp khắp cơ thể.",
      highlights: [
        "Pace 9:13/km nhịp nhàng thư thái",
        "Hít thở không khí biển trong lành",
        "Nạp đầy năng lượng cho ngày cuối tuần bên gia đình"
      ]
    },
    {
      id: "run-2026-10-08",
      date: "08/10/2026",
      dayOfWeek: "Thứ Năm",
      title: "Vượt Qua Cơn Lười - Chiến Thắng Chính Mình - 7.20 km",
      distance: 7.20,
      duration: "01:06:40",
      totalTime: "01:07:00",
      pace: "9:15 /km",
      calories: 512,
      cadence: "130 spm",
      timeStart: "06:15:00 (GMT+7)",
      route: "Tuyến đường nội đô rợp bóng cây xanh",
      shirtColor: "red",
      shirtLabel: "Áo Đỏ Tự Hào",
      posterImage: "assets/images/chien-run-red-761km.jpg",
      quote: "Chiến thắng vĩ đại nhất ở tuổi 60 là chiến thắng chiếc chăn ấm để xỏ giày ra đường.",
      story: "Có những sáng thức dậy người hơi uể oải, nhưng chỉ cần bước ra khỏi cửa, hít một hơi sâu và sải bước 500m đầu tiên, mọi cảm giác lười biếng đều tan biến nhường chỗ cho sự hưng phấn.",
      highlights: [
        "Kiên định với mục tiêu mỗi ngày",
        "Không bỏ cuộc dù thời tiết có se lạnh",
        "Sự dẻo dai của đôi chân sau hơn 400 ngày rèn luyện"
      ]
    }
  ],

  articles: [
    {
      id: "post-1",
      title: "Chạy Bộ Tuổi 60+: Hãy Lắng Nghe Đôi Chân, Đừng Để Cái Tôi Dẫn Đường",
      category: "Kinh Nghiệm Chạy",
      readTime: "4 phút đọc",
      date: "16/10/2026",
      thumbnail: "assets/images/chien-run-white-816km.jpg",
      excerpt: "Nhiều người trẻ chạy để thi thố pace 4, pace 5. Nhưng ở tuổi ngoài 60, pace 9 hay pace 10 mới chính là cung bậc diệu kỳ của sự dưỡng sinh và bền vững.",
      content: `
        <p>Bước qua tuổi 60, cơ thể chúng ta không còn trẻ khỏe như thuở đôi mươi, nhưng điều đó hoàn toàn không có nghĩa là chúng ta phải chấp nhận sự thụ động. Trái lại, việc vận động đúng cách chính là chìa khóa vàng giúp kéo dài tuổi thanh xuân cho cả hệ tim mạch, xương khớp và trí não.</p>
        
        <h3>1. Đừng chạy đua với bất kỳ ai</h3>
        <p>Khi ra đường vào mỗi 5:30 sáng, tôi thấy có những bạn trẻ chạy lướt qua mình với vận tốc rất nhanh. Tôi luôn mỉm cười và vẫy tay chào họ. Tôi không hề có ý định tăng tốc đuổi theo, bởi vì đối thủ duy nhất của tôi là sự trì trệ trong tâm trí chính mình.</p>
        <p>Chạy ở pace 9:00 - 9:30/km (tương đương 6.5 km/h) là vùng nhịp tim Zone 2 tuyệt vời. Ở vùng này, bạn hoàn toàn có thể vừa chạy vừa nói chuyện bình thường, mỡ thừa được đốt cháy làm năng lượng chính và axit lactic không bị ứ đọng gây đau mỏi cơ bắp.</p>

        <h3>2. Đầu tư vào một đôi giày êm ái</h3>
        <p>Khớp gối và cổ chân của người lớn tuổi rất cần sự nâng đỡ. Hãy chọn những đôi giày có độ đệm (cushion) tốt, nhẹ và thoáng khí. Đừng bao giờ tiếc tiền cho một đôi giày chạy bộ đạt chuẩn, vì nó đang bảo vệ tài sản quý giá nhất của bạn: đôi chân đi lại tự do mỗi ngày.</p>

        <h3>3. Lắng nghe từng tín hiệu của cơ thể</h3>
        <p>Hôm nào cảm thấy cơ thể nhẹ nhõm, tôi sẽ chạy 8km. Hôm nào người hơi căng cơ, tôi giảm xuống 6km hoặc xen kẽ đi bộ nhanh. Tôn trọng cơ thể là biểu hiện cao nhất của sự yêu thương bản thân.</p>
      `
    },
    {
      id: "post-2",
      title: "Tại Sao Tôi Luôn Mặc Áo 'Tôi Yêu Việt Nam!' Mỗi Khi Xỏ Giày?",
      category: "Câu Chuyện & Cảm Hứng",
      readTime: "3 phút đọc",
      date: "14/10/2026",
      thumbnail: "assets/images/chien-run-red-761km.jpg",
      excerpt: "Màu cờ đỏ sao vàng trên ngực áo không chỉ là trang phục thể thao, đó là nguồn năng lượng thiêng liêng nhắc nhở tôi sống có ích và tự hào từng phút giây.",
      content: `
        <p>Mỗi lần tôi chia sẻ tấm ảnh chạy bộ của mình lên mạng xã hội, bạn bè hay hỏi: <em>'Sao hôm nào anh Chiến cũng mặc áo Tôi yêu Việt Nam vậy?'</em></p>
        <p>Câu trả lời giản dị lắm: Tôi sinh ra và lớn lên trên mảnh đất này, trải qua bao năm tháng thăng trầm của cuộc đời. Đến tuổi ngoài 60, khi nhìn thấy đất nước thanh bình, con cháu được sống trong tự do, những con đường ven biển thênh thang rợp bóng cờ hoa, lòng tôi luôn dâng trào niềm biết ơn vô hạn.</p>
        <p>Khi mặc chiếc áo mang dòng chữ <strong>'Tôi yêu Việt Nam!'</strong>, tôi tự nhủ mình phải chạy thật đẹp, chạy thật tử tế. Chạy với nụ cười thân thiện để du khách và mọi người nhìn vào thấy được hình ảnh của một người con đất Việt khỏe khoắn, phong độ và tràn đầy lòng hiếu khách.</p>
        <p>Mỗi bước chân chạm đất là một lời tri ân gửi đến quê hương yêu dấu!</p>
      `
    },
    {
      id: "post-3",
      title: "Năng Lượng Đầu Tuần Gửi Đến Thầy Và Đại Gia Đình: Sự Lựa Chọn Của Trái Tim",
      category: "Triết Lý Sống",
      readTime: "5 phút đọc",
      date: "12/10/2026",
      thumbnail: "assets/images/chien-run-blue-747km.jpg",
      excerpt: "Năng lượng tích cực không tự nhiên sinh ra, nó là kết quả của một chuỗi những lựa chọn có ý thức: chọn dậy sớm, chọn mỉm cười, chọn bao dung và chọn tử tế.",
      content: `
        <p>Mỗi sáng thứ Hai, tôi có thói quen gửi lời chúc: <strong>'Kính chúc thầy cùng đại gia đình đầu tuần mới: Ngập Tràn Năng Lượng!'</strong></p>
        <p>Tại sao lại là 'Ngập Tràn Năng Lượng'? Bởi vì trong cuộc sống bộn bề này, ai trong chúng ta cũng phải đối diện với những áp lực: công việc, gia đình, sức khỏe, những biến cố bất ngờ. Nếu tâm trí ta cạn kiệt năng lượng, một cơn gió nhẹ cũng có thể làm ta chao đảo.</p>
        <p>Nhưng khi bạn có đủ năng lượng trong thân và tâm, bạn sẽ nhìn nghịch cảnh như một cơ hội để rèn giũa bản thân. Bạn sẽ nở nụ cười trước những lời chê bai, và dành sự nâng đỡ cho những người yếu thế hơn mình.</p>
        <p>8km chạy bộ sáng đầu tuần chính là nguồn pin năng lượng mà tôi tự nạp đầy cho mình để có thể sẻ chia và lan tỏa đến đại gia đình suốt cả tuần!</p>
      `
    },
    {
      id: "post-4",
      title: "Thời Khóa Biểu 5:30 Sáng Và Bí Quyết Dinh Dưỡng Giữ Phong Độ Tuổi Lục Tuần",
      category: "Dinh Dưỡng Sống Khỏe",
      readTime: "4 phút đọc",
      date: "09/10/2026",
      thumbnail: "assets/images/coastal-sunrise-run.jpg",
      excerpt: "Một ly nước ấm mật ong gừng, 10 phút giãn cơ khớp, và giấc ngủ sâu lúc 22h00 tối. Những bí quyết giản đơn tạo nên một thể chất dẻo dai khó tin.",
      content: `
        <p>Nhiều người hỏi tôi: 'Làm sao để ở tuổi trên 60 mà đôi chân vẫn săn chắc, cơ bắp cuồn cuộn và tinh thần phấn chấn như vậy?' Tôi xin chia sẻ những thói quen đã duy trì suốt nhiều năm qua:</p>
        
        <h3>1. Giấc ngủ là liều thuốc tiên</h3>
        <p>Tôi luôn lên giường trước 22h15. Giấc ngủ từ 22h đến 5h sáng giúp tuyến thượng thận và gan tái tạo tế bào, làm lành các vi tổn thương cơ bắp sau mỗi bài chạy.</p>

        <h3>2. Thức dậy lúc 5h30 sáng</h3>
        <p>Không vội bật dậy ngay. Nằm hít thở sâu 3 phút, xoay nhẹ các khớp cổ tay, cổ chân, xoa ấm hai lòng bàn tay rồi mới ngồi dậy. Uống ngay 300ml nước ấm có pha chút xíu muối khoáng hoặc mật ong chanh để kích hoạt hệ tiêu hóa.</p>

        <h3>3. Khởi động 15 phút không bao giờ bớt xén</h3>
        <p>Xoay khớp hông, gối, ép dọc, ép ngang. Hãy nhớ: Người trẻ có thể ẩu vài phút khởi động, nhưng người tuổi 60+ phải xem việc khởi động là nghi thức tôn trọng cơ thể.</p>

        <h3>4. Bữa ăn sau chạy giàu đạm sạch và rau xanh</h3>
        <p>Sau khi chạy về và nghỉ 30 phút, tôi dùng bữa sáng với trứng gà luộc, yến mạch hoặc khoai lang, kèm theo một ly sữa hạt và nhiều rau xanh. Tránh xa đồ ăn chế biến sẵn nhiều dầu mỡ.</p>
      `
    }
  ],

  gallery: [
    {
      title: "Cung Đường Võ Nguyên Giáp - 7.47 km",
      subtitle: "Áo xanh hy vọng, nụ cười rạng rỡ",
      image: "assets/images/chien-run-blue-747km.jpg",
      badge: "15/10/2026 • 7.47 km"
    },
    {
      title: "Tự Hào Màu Cờ Tổ Quốc - 7.61 km",
      subtitle: "Tôi yêu Việt Nam! Bước chạy đam mê",
      image: "assets/images/chien-run-red-761km.jpg",
      badge: "14/10/2026 • 7.61 km"
    },
    {
      title: "Bước Chạy Đầu Tuần Năng Lượng - 8.16 km",
      subtitle: "Sải bước vững chãi trên đường biển",
      image: "assets/images/chien-run-white-816km.jpg",
      badge: "12/10/2026 • 8.16 km"
    },
    {
      title: "Bình Minh Trên Cung Đường Chạy",
      subtitle: "Gió biển sớm mai và năng lượng ngập tràn",
      image: "assets/images/coastal-sunrise-run.jpg",
      badge: "Bình Minh 5:30 AM"
    }
  ],

  communityWishes: [
    {
      name: "Nguyễn Minh Tuấn",
      relationship: "Người em, người bạn đồng hành",
      avatarBg: "#1d4ed8",
      message: "Ngưỡng mộ anh Chiến vô cùng! Tuổi trên 60 mà mỗi sớm mai bước chạy vẫn thanh thoát, cơ bắp săn chắc và nụ cười ấm áp ngập tràn yêu thương. Anh là tấm gương sáng cho tất cả chúng em học tập!",
      date: "17/10/2026",
      heartCount: 28
    },
    {
      name: "Trần Hoàng Nam",
      relationship: "Thành viên CLB Chạy Bộ",
      avatarBg: "#dc2626",
      message: "Nhìn anh Chiến chạy 7 - 8km mỗi sáng với pace đều tăm tắp mà tụi thanh niên bọn em phải nể phục. Chúc anh luôn dồi dào sức khỏe và mãi giữ vững ngọn lửa nhiệt huyết này ạ!",
      date: "16/10/2026",
      heartCount: 35
    },
    {
      name: "Lê Thị Thu Hà",
      relationship: "Độc giả theo dõi blog",
      avatarBg: "#059669",
      message: "Cảm ơn chú Chiến đã truyền động lực cho cháu. Nhờ những lời chúc đầu tuần và hình ảnh chạy bộ của chú mà một người lười vận động như cháu đã bắt đầu xỏ giày đi bộ mỗi sáng!",
      date: "15/10/2026",
      heartCount: 42
    },
    {
      name: "Vũ Đình Phong",
      relationship: "Bạn hữu thân tình",
      avatarBg: "#d97706",
      message: "Chiến luôn là một người đàn ông tử tế, ấm áp và phong độ hiếm có. Chúc người anh em mỗi ngày đều tràn đầy sinh khí, mỗi bước chạy là một niềm vui viên mãn!",
      date: "14/10/2026",
      heartCount: 19
    }
  ],

  faqs: [
    {
      question: "60 tuổi mới bắt đầu chạy bộ thì có muộn hay nguy hiểm không?",
      answer: "Hoàn toàn không muộn! Rất nhiều vận động viên phong trào trên thế giới chỉ bắt đầu xỏ giày sau tuổi 50 hay 60. Điều cốt lõi là bạn phải bắt đầu từ việc đi bộ nhanh, xen kẽ chạy chậm từng 100m, lắng nghe nhịp tim và không bao giờ nóng vội so kè tốc độ với người khác."
    },
    {
      question: "Chạy ở pace 9:00 - 9:30/km có bị xem là chậm quá không?",
      answer: "Trong khoa học thể thao, đây chính là 'Zone 2' - vùng nhịp tim vàng cho sức khỏe tim mạch và đốt mỡ. Nó giúp tim bơm máu hiệu quả mà không làm dày cơ tim bệnh lý, bảo vệ khớp gối tối đa và cho phép bạn duy trì sự bền bỉ qua hàng chục năm mà không bị chấn thương."
    },
    {
      question: "Làm thế nào để duy trì thói quen dậy lúc 5:30 sáng suốt hơn 400 ngày liên tục?",
      answer: "Bí quyết nằm ở buổi tối hôm trước: hãy đi ngủ trước 22h15 và chuẩn bị sẵn quần áo, tất, giày chạy ngay ngắn cạnh giường. Khi đồng hồ reo, đừng suy nghĩ, hãy đặt chân xuống sàn và khoác áo vào. Sau 21 ngày, bạn sẽ không cần phải nỗ lực nữa vì nó đã trở thành nhịp sinh học tự nhiên."
    },
    {
      question: "Người lớn tuổi chạy bộ cần lưu ý những điều gì về khớp gối?",
      answer: "Khởi động kỹ ít nhất 12 - 15 phút, đáp chân bằng cả bàn hoặc nửa trước bàn chân nhẹ nhàng (tránh dộng gót chân mạnh xuống đường), bước sải ngắn với guồng chân nhanh (130 - 160 spm), và bổ sung đủ nước khoáng ấm trước và sau buổi chạy."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.BLOG_DATA = BLOG_DATA;
}
