document.addEventListener("DOMContentLoaded", () => {
    
    // --- TRANSLATIONS (i18n) DICTIONARY ---
    const i18n = {
        en: {
            nav_cert: "Certifications ▾", nav_top_cert: "Top Certifications", nav_train_pkg: "Training Packages", 
            nav_self: "Self-Paced Training", nav_inst: "Online Instructor-Led", nav_ent: "Enterprise Teams",
            nav_train: "Training", nav_mem: "Membership", nav_ins: "Insights",
            btn_signup: "Sign Up", btn_signin: "Sign In", drop_profile: "My Profile", drop_history: "Purchase History", drop_logout: "Log Out",
            hero_title: "Advance Your Cybersecurity Career", hero_desc: "Join millions of professionals worldwide. Validate your expertise, build your network, and protect the digital world with our globally recognized certifications.",
            hero_btn_mem: "Become a Member", hero_btn_cert: "Find a Certification",
            home_cert_title: "Our Top Certifications", home_cert_sub: "Find the right path for your career stage and goals.",
            tag_lead: "Leadership", tag_cloud: "Cloud", tag_entry: "Entry-Level", tag_op: "Operational", tag_comm: "Community", tag_res: "Resources", tag_sav: "Savings", tag_threat: "Threat Intelligence", tag_career: "Career Advice",
            desc_cissp: "The gold standard in cybersecurity. Prove you have what it takes to design, implement, and manage a best-in-class cybersecurity program.",
            desc_ccsp: "Showcase your advanced technical skills and knowledge to design, manage, and secure data, applications, and infrastructure in the cloud.",
            desc_cc: "Start your career with confidence. This certification proves you have the foundational knowledge to secure modern networks.",
            btn_learn: "Learn more →", btn_view: "View Details →", btn_read: "Read Article →", btn_back_home: "← Back to Home", btn_back_details: "← Back to Details",
            train_title: "Training & Certification Catalog", train_sub: "Explore our comprehensive list of industry-leading certifications and flexible training packages designed to elevate your cybersecurity career.",
            desc_cissp_short: "Validate your expertise in designing best-in-class programs.", desc_ccsp_short: "Demonstrate your advanced technical skills for the cloud.", desc_sscp_short: "Confirm your ability to implement and administer IT infrastructure.", desc_cc_short: "Prove you have the foundational knowledge for an entry-level role.",
            mem_title: "CyberCert Pro Membership", mem_sub: "Connect with a global network of cybersecurity professionals, access exclusive resources, and accelerate your career.",
            mem_net: "Global Networking", desc_net: "Connect with peers, mentors, and industry leaders through our private forums and local chapter events around the world.",
            mem_res: "Exclusive Content", desc_res: "Gain free access to premium webinars, deep-dive research reports, and technical whitepapers.",
            mem_disc: "Discounts", desc_disc: "Enjoy up to 20% off all training packages, exam vouchers, and conference tickets.",
            ins_title: "Cybersecurity Insights & News", ins_sub: "Stay ahead of the curve with the latest threat research, career advice, and industry trends from our expert contributors.",
            ins_phish: "The Rise of AI-Powered Phishing", desc_phish: "Discover how threat actors are leveraging generative AI to craft highly convincing campaigns.",
            ins_career: "Transitioning from IT to Cybersecurity", desc_career: "A practical guide for IT professionals looking to make the leap into security roles.",
            reg_date: "Registration Period: March 21st to March 30th, 2026", 
            det_overview: "Overview", det_why: "Why Choose Us?", det_why_desc: "We are the world's leading cybersecurity professional organization. Join millions of experts and elevate your career today.",
            chk_summary: "Order Summary", chk_pkg: "Package Includes:", chk_total: "Total Due:", btn_proceed: "Proceed to Secure Payment",
            hist_title: "Purchase History", hist_empty: "No purchases yet!", hist_empty_sub: "Explore our certifications to get started.",
            prof_title: "My Profile", prof_fname: "Full Name:", prof_country: "Country:", prof_email: "Email:", prof_phone: "Phone:", prof_status: "Status:", prof_active: "Active", prof_address: "Address:", prof_postal: "Postal Code:",
            mod_login_title: "Sign In", mod_user: "Username", mod_pass: "Password", mod_show: "Show", mod_user_ph: "Enter username...", mod_pass_ph: "Enter password...",
            mod_signup_title: "Create an Account", mod_fname: "Full Name", mod_email: "Email Address", mod_conf_pass: "Confirm Password",
            pay_title: "Select Payment Method", pay_name: "Name on Card", pay_num: "Card Number", pay_exp: "Expiry (MM/YY)", pay_pp_email: "PayPal Email Address", pay_pp_desc: "You will be required to scan a QR code to authorize the payment after clicking Next.", pay_qr_title: "Scan QR Code to Authorize", pay_qr_desc: "Once scanned and authorized on your mobile device, click Submit Payment to complete your order.", btn_submit_pay: "Submit Payment", btn_next: "Next ->",
            proc_title: "Please wait a moment...", proc_desc: "It will take time to verify your information.",
            succ_reg: "Registration Successful!", succ_email: "Your payment will be completed in less than one day. Please be patient and wait for our confirmation email.", succ_redir: "Redirecting to your Purchase History in", succ_sec: "seconds...", succ_signup: "Sign Up Successfully!", succ_redir_home: "Redirecting to homepage...",
            alert_login: "Please Sign In or Sign Up before proceeding.", alert_member: "You are already a registered member!", alert_copy: "Article link copied to your clipboard!", alert_card: "Please correctly fill out your card details and wait for verification (Green Tick) before submitting.", alert_pp: "Please enter a valid PayPal email address and wait for verification (Green Tick).", alert_timeout: "Payment session expired. Please try again.",
            history_date: "Date", history_pkg: "Package", history_method: "Payment Method"
        },
        vi: {
            nav_cert: "Chứng chỉ ▾", nav_top_cert: "Chứng chỉ Hàng đầu", nav_train_pkg: "Gói Đào tạo", 
            nav_self: "Đào tạo Tự học", nav_inst: "Lớp học Trực tuyến", nav_ent: "Đào tạo Doanh nghiệp",
            nav_train: "Đào tạo", nav_mem: "Thành viên", nav_ins: "Tin tức",
            btn_signup: "Đăng ký", btn_signin: "Đăng nhập", drop_profile: "Hồ sơ của tôi", drop_history: "Lịch sử Mua hàng", drop_logout: "Đăng xuất",
            hero_title: "Phát triển Sự nghiệp An ninh mạng của bạn", hero_desc: "Tham gia cùng hàng triệu chuyên gia. Chứng nhận chuyên môn, xây dựng mạng lưới và bảo vệ thế giới kỹ thuật số với các chứng chỉ toàn cầu.",
            hero_btn_mem: "Trở thành Thành viên", hero_btn_cert: "Tìm Chứng chỉ",
            home_cert_title: "Chứng chỉ Hàng đầu", home_cert_sub: "Tìm con đường phù hợp cho mục tiêu sự nghiệp của bạn.",
            tag_lead: "Lãnh đạo", tag_cloud: "Đám mây", tag_entry: "Mới bắt đầu", tag_op: "Vận hành", tag_comm: "Cộng đồng", tag_res: "Tài nguyên", tag_sav: "Tiết kiệm", tag_threat: "Mối đe dọa", tag_career: "Nghề nghiệp",
            desc_cissp: "Tiêu chuẩn vàng trong an ninh mạng. Chứng minh bạn có khả năng thiết kế và quản lý một chương trình bảo mật hàng đầu.",
            desc_ccsp: "Thể hiện kỹ năng kỹ thuật tiên tiến để thiết kế, quản lý và bảo mật dữ liệu, ứng dụng và cơ sở hạ tầng trên đám mây.",
            desc_cc: "Bắt đầu sự nghiệp của bạn với sự tự tin. Chứng chỉ này chứng minh bạn có kiến thức nền tảng để bảo mật các mạng hiện đại.",
            btn_learn: "Tìm hiểu thêm →", btn_view: "Xem chi tiết →", btn_read: "Đọc bài viết →", btn_back_home: "← Về Trang chủ", btn_back_details: "← Trở lại Chi tiết",
            train_title: "Danh mục Đào tạo & Chứng chỉ", train_sub: "Khám phá danh sách các chứng chỉ hàng đầu và các gói đào tạo linh hoạt được thiết kế để nâng cao sự nghiệp của bạn.",
            desc_cissp_short: "Xác nhận chuyên môn trong việc thiết kế các chương trình bảo mật.", desc_ccsp_short: "Thể hiện kỹ năng kỹ thuật đám mây tiên tiến của bạn.", desc_sscp_short: "Xác nhận khả năng triển khai và quản trị cơ sở hạ tầng CNTT.", desc_cc_short: "Chứng minh bạn có kiến thức nền tảng cho vai trò an ninh mạng.",
            mem_title: "Thành viên CyberCert Pro", mem_sub: "Kết nối với mạng lưới chuyên gia toàn cầu, truy cập tài nguyên độc quyền và thúc đẩy sự nghiệp của bạn.",
            mem_net: "Mạng lưới Toàn cầu", desc_net: "Kết nối với đồng nghiệp, người hướng dẫn qua các diễn đàn và sự kiện toàn cầu.",
            mem_res: "Nội dung Độc quyền", desc_res: "Truy cập miễn phí các hội thảo trên web, báo cáo nghiên cứu và tài liệu kỹ thuật.",
            mem_disc: "Giảm giá", desc_disc: "Giảm tới 20% cho tất cả các gói đào tạo, voucher thi và vé hội nghị.",
            ins_title: "Tin tức & Thông tin chi tiết", ins_sub: "Nắm bắt các xu hướng mới nhất về mối đe dọa, lời khuyên nghề nghiệp từ các chuyên gia.",
            ins_phish: "Sự gia tăng của Phishing bằng AI", desc_phish: "Khám phá cách tin tặc đang sử dụng AI để tạo ra các chiến dịch lừa đảo.",
            ins_career: "Chuyển từ CNTT sang An ninh mạng", desc_career: "Hướng dẫn thực tế cho chuyên gia CNTT muốn chuyển sang vai trò bảo mật.",
            reg_date: "Thời gian đăng ký: 21 tháng 3 đến 30 tháng 3, 2026", 
            det_overview: "Tổng quan", det_why: "Tại sao chọn chúng tôi?", det_why_desc: "Chúng tôi là tổ chức chuyên gia an ninh mạng hàng đầu thế giới. Hãy tham gia và nâng tầm sự nghiệp của bạn ngay hôm nay.",
            chk_summary: "Tóm tắt Đơn hàng", chk_pkg: "Gói bao gồm:", chk_total: "Tổng cộng:", btn_proceed: "Tiến hành Thanh toán Bảo mật",
            hist_title: "Lịch sử Mua hàng", hist_empty: "Chưa có đơn hàng nào!", hist_empty_sub: "Khám phá các chứng chỉ của chúng tôi để bắt đầu.",
            prof_title: "Hồ sơ của tôi", prof_fname: "Họ và Tên:", prof_country: "Quốc gia:", prof_email: "Email:", prof_phone: "Điện thoại:", prof_status: "Trạng thái:", prof_active: "Hoạt động", prof_address: "Địa chỉ:", prof_postal: "Mã bưu điện:",
            mod_login_title: "Đăng nhập", mod_user: "Tên đăng nhập", mod_pass: "Mật khẩu", mod_show: "Hiện", mod_user_ph: "Nhập tên đăng nhập...", mod_pass_ph: "Nhập mật khẩu...",
            mod_signup_title: "Tạo tài khoản", mod_fname: "Họ và Tên", mod_email: "Địa chỉ Email", mod_conf_pass: "Xác nhận Mật khẩu",
            pay_title: "Chọn Phương thức Thanh toán", pay_name: "Tên trên Thẻ", pay_num: "Số Thẻ", pay_exp: "Hết hạn (MM/YY)", pay_pp_email: "Địa chỉ Email PayPal", pay_pp_desc: "Bạn sẽ cần quét mã QR để ủy quyền thanh toán sau khi nhấp vào Tiếp theo.", pay_qr_title: "Quét mã QR để Ủy quyền", pay_qr_desc: "Sau khi quét và ủy quyền trên thiết bị di động của bạn, nhấp vào Xác nhận Thanh toán để hoàn tất.", btn_submit_pay: "Xác nhận Thanh toán", btn_next: "Tiếp theo ->",
            proc_title: "Vui lòng đợi một lát...", proc_desc: "Hệ thống cần thời gian để xác minh thông tin của bạn.",
            succ_reg: "Đăng ký Thành công!", succ_email: "Thanh toán của bạn sẽ hoàn tất trong chưa đầy 24 giờ. Vui lòng kiên nhẫn chờ email xác nhận từ chúng tôi.", succ_redir: "Chuyển hướng đến Lịch sử mua hàng trong", succ_sec: "giây...", succ_signup: "Đăng ký Thành công!", succ_redir_home: "Chuyển hướng về trang chủ...",
            alert_login: "Vui lòng Đăng nhập hoặc Đăng ký trước khi thanh toán.", alert_member: "Bạn đã là thành viên đăng ký!", alert_copy: "Đã sao chép liên kết bài viết vào khay nhớ tạm!", alert_card: "Vui lòng điền đúng thông tin thẻ và đợi xác minh (Dấu tích xanh) trước khi gửi.", alert_pp: "Vui lòng nhập email PayPal hợp lệ và đợi xác minh (Dấu tích xanh).", alert_timeout: "Phiên thanh toán đã hết hạn. Vui lòng thử lại.",
            history_date: "Ngày", history_pkg: "Gói", history_method: "Phương thức"
        }
    };

    let currentLang = localStorage.getItem("cyberCertLang") || "en";

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("cyberCertLang", lang);
        
        document.getElementById("lang-en").classList.toggle("active", lang === "en");
        document.getElementById("lang-vi").classList.toggle("active", lang === "vi");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (i18n[lang] && i18n[lang][key]) {
                if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                    el.setAttribute("placeholder", i18n[lang][key]);
                } else {
                    el.innerHTML = i18n[lang][key];
                }
            }
        });

        if (currentSelectionId && document.getElementById("details-view").style.display === "block") loadPage(currentSelectionId);
        if (document.getElementById("history-view").style.display === "block") showPurchaseHistory();
    }

    document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("lang-vi").addEventListener("click", () => setLanguage("vi"));

    // --- INLINE LOTTIE JSON DATA ---
    const successAnimationData = {"nm":"HDFC Success","mn":"","layers":[{"ty":4,"nm":"check","mn":"","sr":1,"st":0,"op":240,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,256,0],"ix":2},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-82.5,4.5],[-31,55],[73,-52.5]]},"ix":2}},{"ty":"tm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":1,"y":0.076},"i":{"x":0.667,"y":1},"s":[0],"t":60},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":85}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":0,"k":0,"ix":1},"m":1},{"ty":"st","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"d":[],"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 2","mn":"","sr":1,"st":0,"op":240,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.656,"y":0.872},"i":{"x":0,"y":0.98},"s":[0,0,100],"t":20},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[150,150,100],"t":60}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,257.86,0],"ix":2},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[236,236],"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.2863,0.7176,0.4353],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,-3],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 1","mn":"","sr":1,"st":0,"op":240,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.477,"y":0.587},"i":{"x":0,"y":0.999},"s":[0,0,100],"t":10},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[150,150,100],"t":50},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[150,150,100],"t":76},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[210,210,100],"t":123}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,257.86,0],"ix":2},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.912,"y":0.073},"i":{"x":0.626,"y":0.729},"s":[100],"t":76},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":119}],"ix":11},"r":{"a":0,"k":0,"ix":10}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[236,236],"ix":2}},{"ty":"st","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"d":[],"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7569,0.9216,0.8157],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,-3],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"BG","mn":"","sr":1,"st":0,"op":240,"ip":240,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256,256,0],"ix":2},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[554,556],"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-1,6],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4}],"ddd":0,"h":512,"w":512,"meta":{"a":"","k":"","d":"","g":"LottieFiles AE 1.0.0","tc":"#000000"},"v":"4.8.0","fr":60,"op":130,"ip":0,"assets":[]};

    const paymentSuccessAnim = lottie.loadAnimation({ container: document.getElementById('lottie-payment-success'), renderer: 'svg', loop: false, autoplay: false, animationData: successAnimationData });
    const signupSuccessAnim = lottie.loadAnimation({ container: document.getElementById('lottie-signup-success'), renderer: 'svg', loop: false, autoplay: false, animationData: successAnimationData });

    // --- BILINGUAL DATA DICTIONARY ---
    const pageData = {
        "cissp": { 
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "CISSP", subtitle: "Certified Information Systems Security Professional", description: "Accelerate your cybersecurity career with the CISSP certification.", bullets: ["Ideal for experienced security practitioners.", "Covers 8 domains including Security and Risk Management.", "Requires 5 years of experience."], price: "$720", packageDetails: "Includes Exam Voucher & Self-Paced Training" },
            vi: { title: "CISSP", subtitle: "Chuyên gia Bảo mật Hệ thống Thông tin", description: "Đẩy nhanh sự nghiệp an ninh mạng với chứng chỉ CISSP.", bullets: ["Lý tưởng cho chuyên gia bảo mật có kinh nghiệm.", "Bao gồm 8 lĩnh vực quản lý rủi ro.", "Yêu cầu 5 năm kinh nghiệm."], price: "$720", packageDetails: "Bao gồm Voucher thi & Đào tạo tự học" }
        },
        "ccsp": { 
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "CCSP", subtitle: "Certified Cloud Security Professional", description: "Earning the globally recognized CCSP cloud security certification is a proven way to build your career.", bullets: ["Ideal for enterprise architects.", "Covers 6 domains.", "Requires 5 years experience."], price: "$599", packageDetails: "Includes Exam Voucher & Official Study Guide" },
            vi: { title: "CCSP", subtitle: "Chuyên gia Bảo mật Đám mây", description: "Đạt chứng chỉ CCSP được công nhận toàn cầu để thăng tiến sự nghiệp.", bullets: ["Lý tưởng cho kiến trúc sư doanh nghiệp.", "Bao gồm 6 lĩnh vực.", "Yêu cầu 5 năm kinh nghiệm."], price: "$599", packageDetails: "Bao gồm Voucher thi & Hướng dẫn học chính thức" }
        },
        "sscp": { 
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "SSCP", subtitle: "Systems Security Certified Practitioner", description: "The SSCP is the ideal certification for those with proven technical skills.", bullets: ["Ideal for Network Security Engineers.", "Covers 7 domains.", "Requires 1 year experience."], price: "$249", packageDetails: "Includes Exam Voucher" },
            vi: { title: "SSCP", subtitle: "Chuyên gia Thực hành Bảo mật Hệ thống", description: "SSCP là chứng chỉ lý tưởng cho những người có kỹ năng kỹ thuật thực tế.", bullets: ["Lý tưởng cho Kỹ sư Bảo mật Mạng.", "Bao gồm 7 lĩnh vực.", "Yêu cầu 1 năm kinh nghiệm."], price: "$249", packageDetails: "Bao gồm Voucher thi" }
        },
        "cc": { 
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Certified in Cybersecurity (CC)", subtitle: "Your First Step to a Rewarding Career", description: "You don't need experience — just the passion and drive.", bullets: ["Perfect for students.", "No prior experience required.", "Covers Security Principles."], price: "Free", packageDetails: "Includes Free Exam Voucher & Online Training" },
            vi: { title: "Chứng nhận An ninh mạng (CC)", subtitle: "Bước đầu tiên cho sự nghiệp", description: "Bạn không cần kinh nghiệm — chỉ cần đam mê.", bullets: ["Hoàn hảo cho sinh viên.", "Không yêu cầu kinh nghiệm trước.", "Bao gồm Nguyên tắc Bảo mật."], price: "Miễn phí", packageDetails: "Bao gồm Voucher thi miễn phí & Đào tạo trực tuyến" }
        },
        "self-paced": { 
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Self-Paced Training", subtitle: "Learn at your own speed", description: "180-day access to comprehensive learning materials.", bullets: ["180-day access.", "Includes flashcards.", "Available for all major certs."], price: "$895", packageDetails: "Full Online Access" },
            vi: { title: "Đào tạo Tự học", subtitle: "Học theo tốc độ của bạn", description: "Truy cập 180 ngày vào tài liệu học tập toàn diện.", bullets: ["Truy cập 180 ngày.", "Bao gồm thẻ ghi nhớ.", "Có sẵn cho tất cả chứng chỉ."], price: "$895", packageDetails: "Truy cập trực tuyến đầy đủ" }
        },
        "instructor-led": { 
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Online Instructor-Led Training", subtitle: "Learn from industry experts", description: "Live interaction with authorized instructors.", bullets: ["Live virtual classroom.", "Taught by authorized experts.", "Includes official courseware."], price: "$2,495", packageDetails: "Live Classes + Materials" },
            vi: { title: "Lớp học Trực tuyến", subtitle: "Học từ các chuyên gia trong ngành", description: "Tương tác trực tiếp với các giảng viên được ủy quyền.", bullets: ["Lớp học ảo trực tiếp.", "Được giảng dạy bởi chuyên gia.", "Bao gồm tài liệu chính thức."], price: "$2,495", packageDetails: "Lớp học trực tiếp + Tài liệu" }
        },
        "enterprise": { 
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Enterprise Teams", subtitle: "Customized training", description: "Empower your entire team.", bullets: ["Private group training.", "Volume discounts.", "Dedicated account manager."], price: "Custom Quote", packageDetails: "Contact Sales for Pricing" },
            vi: { title: "Đội ngũ Doanh nghiệp", subtitle: "Đào tạo tùy chỉnh", description: "Trao quyền cho toàn bộ đội ngũ của bạn.", bullets: ["Đào tạo nhóm riêng.", "Giảm giá số lượng lớn.", "Quản lý tài khoản chuyên trách."], price: "Báo giá tùy chỉnh", packageDetails: "Liên hệ Bộ phận Bán hàng" }
        },
        "networking": { 
            img: "https://w0.peakpx.com/wallpaper/758/549/HD-wallpaper-network-technology-concepts-global-networks-ball-of-lines-blue-technology-background-internet-networking-communication-concepts.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Global Networking", subtitle: "Connect with cybersecurity professionals worldwide.", description: "Join a thriving community of experts. Our private forums and local chapters provide opportunities.", bullets: ["Access to private member-only forums.", "Invitations to exclusive local chapter meetups.", "Mentorship programs for career growth."], buttonText: "Become a Member" },
            vi: { title: "Mạng lưới Toàn cầu", subtitle: "Kết nối với chuyên gia an ninh mạng trên toàn thế giới.", description: "Tham gia cộng đồng phát triển mạnh mẽ. Diễn đàn và hội thảo cung cấp nhiều cơ hội.", bullets: ["Truy cập diễn đàn nội bộ.", "Lời mời tham gia sự kiện độc quyền.", "Chương trình cố vấn nghề nghiệp."], buttonText: "Trở thành Thành viên" }
        },
        "resources": { 
            img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Exclusive Content", subtitle: "Stay ahead with premium resources.", description: "Gain free access to our extensive library of cybersecurity resources.", bullets: ["Monthly premium webinars.", "Deep-dive research reports.", "Technical whitepapers and templates."], buttonText: "Become a Member" },
            vi: { title: "Nội dung Độc quyền", subtitle: "Đi trước với tài nguyên cao cấp.", description: "Truy cập miễn phí thư viện tài nguyên an ninh mạng phong phú.", bullets: ["Hội thảo trên web hàng tháng.", "Báo cáo nghiên cứu chuyên sâu.", "Tài liệu kỹ thuật và mẫu."], buttonText: "Trở thành Thành viên" }
        },
        "discounts": { 
            img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Member Discounts", subtitle: "Save on your professional development.", description: "Enjoy substantial savings on training, exams, and events.", bullets: ["Up to 20% off training packages.", "Discounted exam vouchers.", "Reduced rates for global conferences."], buttonText: "Become a Member" },
            vi: { title: "Giảm giá", subtitle: "Tiết kiệm chi phí phát triển chuyên môn.", description: "Tiết kiệm đáng kể cho các khóa học, kỳ thi và sự kiện.", bullets: ["Giảm đến 20% cho gói đào tạo.", "Giảm giá voucher thi.", "Giá ưu đãi cho hội nghị toàn cầu."], buttonText: "Trở thành Thành viên" }
        },
        "ai-phishing": { 
            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "The Rise of AI-Powered Phishing", subtitle: "Threat Intelligence Report", description: "Threat actors are increasingly using generative AI to craft highly convincing phishing emails.", bullets: ["AI generates convincing, error-free lures.", "Traditional filters struggle to detect context-aware attacks.", "Defense requires continuous employee training."], buttonText: "Share Article" },
            vi: { title: "Sự gia tăng của Phishing bằng AI", subtitle: "Báo cáo Mối đe dọa", description: "Tin tặc đang sử dụng AI để tạo ra các email lừa đảo cực kỳ tinh vi.", bullets: ["AI tạo ra email lừa đảo không có lỗi chính tả.", "Bộ lọc truyền thống khó phát hiện tấn công theo ngữ cảnh.", "Phòng thủ yêu cầu đào tạo nhân viên liên tục."], buttonText: "Chia sẻ bài viết" }
        },
        "career-transition": { 
            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            en: { title: "Transitioning from IT to Cybersecurity", subtitle: "Career Advice Guide", description: "Making the leap from a general IT role to a specialized cybersecurity position requires a strategic approach.", bullets: ["Master networking and OS fundamentals first.", "Earn foundational certifications (CC, SSCP).", "Build practical experience with homelabs."], buttonText: "Share Article" },
            vi: { title: "Chuyển từ CNTT sang An ninh mạng", subtitle: "Hướng dẫn Nghề nghiệp", description: "Việc chuyển từ vai trò CNTT chung sang an ninh mạng đòi hỏi chiến lược cụ thể.", bullets: ["Làm chủ nền tảng mạng và hệ điều hành.", "Đạt chứng chỉ cơ bản (CC, SSCP).", "Xây dựng kinh nghiệm thực tế qua homelab."], buttonText: "Chia sẻ bài viết" }
        }
    };

    // --- STATE MANAGEMENT ---
    let currentUserProfile = null;
    let currentSelectionId = null; 

    const defaultProfile = {
        username: "DemoUser", fullName: "NGUYEN MINH QUANG", country: "Viet Nam", 
        email: "24022718@vnu.edu.vn", phone: "+84967668507", address: "Huong Canh, Vinh Phuc", postal: "280000", purchaseHistory: [],
        avatar: "https://googleusercontent.com/profile/picture/0" 
    };

    // --- DOM ELEMENTS ---
    const homeView = document.getElementById("home-view");
    const detailsView = document.getElementById("details-view");
    const checkoutView = document.getElementById("checkout-view");
    const historyView = document.getElementById("history-view"); 
    const profileView = document.getElementById("profile-view");
    const trainingView = document.getElementById("training-view");
    const membershipView = document.getElementById("membership-view");
    const insightsView = document.getElementById("insights-view");
    const certMenu = document.getElementById("cert-mega-menu");
    const certLink = document.getElementById("cert-link");
    const backBtns = document.querySelectorAll(".back-to-home");
    const pageLoader = document.getElementById("page-loader"); 

    const detailsTitle = document.getElementById("details-title");
    const detailsSubtitle = document.getElementById("details-subtitle");
    const detailsDesc = document.getElementById("details-description");
    const detailsList = document.getElementById("details-list");
    const detailsRegisterBtn = document.getElementById("details-register-btn"); 
    const detailsImage = document.getElementById("details-image"); 
    const detailsRegDate = document.getElementById("details-registration-date"); 
    const checkoutTitle = document.getElementById("checkout-title");
    const checkoutDesc = document.getElementById("checkout-desc");
    const checkoutPrice = document.getElementById("checkout-price");

    const authButtons = document.getElementById("auth-buttons");
    const userMenu = document.getElementById("user-menu");
    const usernameBtn = document.getElementById("username-btn");

    setLanguage(currentLang);

    const savedUser = localStorage.getItem("cyberCertUser");
    if (savedUser) {
        currentUserProfile = JSON.parse(savedUser);
        if (!currentUserProfile.purchaseHistory) currentUserProfile.purchaseHistory = [];
        usernameBtn.textContent = currentUserProfile.username;
        authButtons.style.display = "none";
        userMenu.style.display = "block";
    }

    // --- NAVIGATION LOGIC WITH SIMULATED ONLINE DELAY ---
    function hideAllViews() {
        homeView.style.display = "none";
        detailsView.style.display = "none";
        checkoutView.style.display = "none";
        historyView.style.display = "none"; 
        profileView.style.display = "none";
        trainingView.style.display = "none";
        membershipView.style.display = "none";
        insightsView.style.display = "none";
        certMenu.style.display = "none";
    }

    function navigateTo(showViewCallback) {
        pageLoader.style.display = "flex";
        const delay = Math.floor(Math.random() * 400) + 300; 
        setTimeout(() => {
            hideAllViews();
            showViewCallback();
            pageLoader.style.display = "none";
            window.scrollTo(0, 0);
        }, delay);
    }

    function loadPage(pageId) {
        currentSelectionId = pageId; 
        const rootData = pageData[pageId];
        if (rootData) {
            navigateTo(() => {
                const data = rootData[currentLang]; 
                
                detailsImage.src = rootData.img; 
                detailsTitle.textContent = data.title;
                detailsSubtitle.textContent = data.subtitle;
                detailsRegDate.textContent = i18n[currentLang].reg_date; 
                detailsDesc.textContent = data.description;
                
                detailsList.innerHTML = "";
                data.bullets.forEach(b => { const li = document.createElement("li"); li.textContent = b; detailsList.appendChild(li); });
                
                if (data.price) {
                    detailsRegisterBtn.style.display = "block";
                    detailsRegisterBtn.textContent = i18n[currentLang].btn_signup !== "Đăng ký" ? "Register Now" : "Đăng ký Ngay"; 
                } else if (data.buttonText) {
                    detailsRegisterBtn.style.display = "block";
                    detailsRegisterBtn.textContent = data.buttonText;
                } else {
                    detailsRegisterBtn.style.display = "none";
                }
                detailsView.style.display = "block";
            });
        }
    }

    function showPurchaseHistory() {
        if (!currentUserProfile) { alert(i18n[currentLang].alert_login); return; }
        
        navigateTo(() => {
            const container = document.getElementById("history-container");
            container.innerHTML = ""; 

            if (currentUserProfile.purchaseHistory.length === 0) {
                container.innerHTML = `<div class="empty-history"><h3>${i18n[currentLang].hist_empty}</h3><p>${i18n[currentLang].hist_empty_sub}</p></div>`;
            } else {
                const sortedHistory = [...currentUserProfile.purchaseHistory].reverse();
                sortedHistory.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "history-card";
                    card.innerHTML = `
                        <div class="history-header"><span class="history-title">${item.title}</span><span class="history-price">${item.price}</span></div>
                        <div style="color: #555; font-size: 15px; margin-bottom: 5px;"><strong>${i18n[currentLang].history_date}:</strong> ${item.date}</div>
                        <div style="color: #555; font-size: 15px; margin-bottom: 5px;"><strong>${i18n[currentLang].history_pkg}:</strong> ${item.packageDetails}</div>
                        <div style="color: #555; font-size: 15px;"><strong>${i18n[currentLang].history_method}:</strong> ${item.method.toUpperCase()}</div>
                    `;
                    container.appendChild(card);
                });
            }
            historyView.style.display = "block";
            document.getElementById("user-dropdown").style.display = "none";
        });
    }

    detailsRegisterBtn.addEventListener("click", () => {
        const rootData = pageData[currentSelectionId];
        const data = rootData[currentLang];

        if (data && data.price) {
            navigateTo(() => {
                checkoutTitle.textContent = data.title + (currentLang === 'en' ? " Registration" : " Đăng ký");
                checkoutDesc.textContent = data.packageDetails;
                checkoutPrice.textContent = data.price;
                checkoutView.style.display = "block";
            });
        } else if (data && (data.buttonText === "Become a Member" || data.buttonText === "Trở thành Thành viên")) {
            if (!currentUserProfile) document.getElementById("signup-modal").style.display = "flex";
            else alert(i18n[currentLang].alert_member);
        } else if (data && (data.buttonText === "Share Article" || data.buttonText === "Chia sẻ bài viết")) {
            alert(i18n[currentLang].alert_copy);
        }
    });

    document.getElementById("back-to-details").addEventListener("click", () => currentSelectionId ? loadPage(currentSelectionId) : goHome());
    document.getElementById("history-action-btn").addEventListener("click", showPurchaseHistory);

    function showProfile() {
        if (!currentUserProfile) return;
        navigateTo(() => {
            document.getElementById("prof-avatar").src = currentUserProfile.avatar || "https://via.placeholder.com/100?text=Avatar";
            document.getElementById("prof-name").textContent = currentUserProfile.fullName;
            document.getElementById("prof-country").textContent = currentUserProfile.country;
            document.getElementById("prof-email").textContent = currentUserProfile.email;
            document.getElementById("prof-phone").textContent = currentUserProfile.phone;
            document.getElementById("prof-address").textContent = currentUserProfile.address;
            document.getElementById("prof-postal").textContent = currentUserProfile.postal;
            profileView.style.display = "block";
            document.getElementById("user-dropdown").style.display = "none";
        });
    }

    function showTraining() { navigateTo(() => { trainingView.style.display = "block"; }); }
    function showMembership() { navigateTo(() => { membershipView.style.display = "block"; }); }
    function showInsights() { navigateTo(() => { insightsView.style.display = "block"; }); }
    function goHome() { navigateTo(() => { homeView.style.display = "block"; }); }
    
    document.querySelectorAll(".mega-link").forEach(link => link.addEventListener("click", (e) => { e.preventDefault(); loadPage(link.getAttribute("data-id")); }));
    backBtns.forEach(btn => btn.addEventListener("click", goHome));
    document.getElementById("logo-home").addEventListener("click", goHome);
    document.getElementById("training-link").addEventListener("click", (e) => { e.preventDefault(); showTraining(); });
    document.getElementById("membership-link").addEventListener("click", (e) => { e.preventDefault(); showMembership(); });
    document.getElementById("insights-link").addEventListener("click", (e) => { e.preventDefault(); showInsights(); });

    const heroMembershipBtn = document.getElementById("hero-membership-btn");
    const heroCertBtn = document.getElementById("hero-cert-btn");
    if(heroMembershipBtn) heroMembershipBtn.addEventListener("click", (e) => { e.preventDefault(); showMembership(); });
    if(heroCertBtn) heroCertBtn.addEventListener("click", (e) => { e.preventDefault(); showTraining(); });

    const certNavItem = certLink.parentElement;
    certNavItem.addEventListener("mouseenter", () => { if (window.innerWidth > 768) certMenu.style.display = "block"; });
    certNavItem.addEventListener("mouseleave", () => { if (window.innerWidth > 768) certMenu.style.display = "none"; });
    certLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.innerWidth <= 768) certMenu.style.display = (certMenu.style.display === "none" || certMenu.style.display === "") ? "block" : "none";
    });

    document.getElementById("hamburger").addEventListener("click", () => document.querySelector(".nav-links").classList.toggle("active"));

    // --- LIVE CARD FORMATTING & VALIDATION ---
    const cardNameInput = document.getElementById("card-name");
    const iconCardName = document.getElementById("icon-card-name");
    const cardNumInput = document.getElementById("card-number");
    const iconCardNum = document.getElementById("icon-card-number");
    const cardExpInput = document.getElementById("card-expiry");
    const iconCardExp = document.getElementById("icon-card-expiry");
    const cardCvvInput = document.getElementById("card-cvv");
    const iconCardCvv = document.getElementById("icon-card-cvv");
    const paypalEmailInput = document.getElementById("paypal-email");
    const iconPaypalEmail = document.getElementById("icon-paypal-email");

    if(cardNumInput) {
        cardNumInput.addEventListener("input", function() {
            let val = this.value.replace(/\D/g, ""); 
            let formatted = val.match(/.{1,4}/g)?.join(" ") || ""; 
            this.value = formatted.substring(0, 23); 
        });
    }
    if(cardExpInput) {
        cardExpInput.addEventListener("input", function() {
            let val = this.value.replace(/\D/g, "");
            if (val.length >= 2) val = val.substring(0, 2) + "/" + val.substring(2, 4);
            this.value = val;
        });
    }
    if(cardCvvInput) {
        cardCvvInput.addEventListener("input", function() {
            this.value = this.value.replace(/\D/g, "").substring(0, 4);
        });
    }

    function validateInput(input, icon, isValid) {
        if(!input) return;
        icon.innerHTML = '<div class="val-spinner"></div>';
        input.dataset.valid = "false";
        const delay = Math.floor(Math.random() * 1000) + 2000; 
        setTimeout(() => {
            if (isValid) {
                icon.innerHTML = '✔️'; icon.style.color = "#28a745"; input.dataset.valid = "true";
            } else {
                icon.innerHTML = '✖️'; icon.style.color = "#dc3545"; input.dataset.valid = "false";
            }
        }, delay);
    }

    if(cardNameInput) cardNameInput.addEventListener("blur", function() {
        if(!this.value.trim()) { iconCardName.innerHTML = ""; this.dataset.valid = "false"; return; }
        const expectedName = currentUserProfile ? currentUserProfile.fullName.toUpperCase() : "NGUYEN MINH QUANG";
        validateInput(this, iconCardName, this.value.trim().toUpperCase() === expectedName.toUpperCase());
    });
    if(cardNumInput) cardNumInput.addEventListener("blur", function() {
        if(!this.value.trim()) { iconCardNum.innerHTML = ""; this.dataset.valid = "false"; return; }
        const stripped = this.value.replace(/\s/g, "");
        validateInput(this, iconCardNum, stripped.length === 16 || stripped.length === 19);
    });
    if(cardExpInput) cardExpInput.addEventListener("blur", function() {
        if(!this.value.trim()) { iconCardExp.innerHTML = ""; this.dataset.valid = "false"; return; }
        validateInput(this, iconCardExp, /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.value));
    });
    if(cardCvvInput) cardCvvInput.addEventListener("blur", function() {
        if(!this.value.trim()) { iconCardCvv.innerHTML = ""; this.dataset.valid = "false"; return; }
        validateInput(this, iconCardCvv, this.value.length === 3 || this.value.length === 4);
    });
    if(paypalEmailInput) paypalEmailInput.addEventListener("blur", function() {
        if(!this.value.trim()) { iconPaypalEmail.innerHTML = ""; this.dataset.valid = "false"; return; }
        validateInput(this, iconPaypalEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim()));
    });

    const resetValidation = () => {
        ["card-name", "card-number", "card-expiry", "card-cvv", "paypal-email"].forEach(id => {
            const input = document.getElementById(id);
            const icon = document.getElementById("icon-" + id);
            if (input) input.dataset.valid = "false";
            if (icon) icon.innerHTML = "";
        });
    };

    // --- PAYMENT SYSTEM LOGIC WITH 5 MIN TIMER ---
    let paypalStep = 1;
    let paymentTimerInterval = null;

    const paymentModal = document.getElementById("payment-modal");
    const processingModal = document.getElementById("processing-modal");
    const paymentSuccessModal = document.getElementById("payment-success-modal");
    const submitPaymentBtn = document.getElementById("submit-payment-btn");
    const openPaymentBtn = document.getElementById("open-payment-btn");
    const closePaymentModal = document.getElementById("close-payment-modal");
    const paymentForm = document.getElementById("payment-form");
    const paymentRadios = document.querySelectorAll('input[name="pay-method"]');
    const paymentSections = document.querySelectorAll('.payment-section');
    const paypalStep1 = document.getElementById("paypal-step-1");
    const paypalStep2 = document.getElementById("paypal-step-2");

    function startPaymentTimer() {
        clearInterval(paymentTimerInterval);
        let timeLeft = 300; // 5 mins (300 secs)
        const timerText = document.getElementById("payment-timer-text");
        const timerCircle = document.querySelector(".timer-circle");
        timerText.textContent = "05:00";
        timerCircle.classList.remove("warning");

        paymentTimerInterval = setInterval(() => {
            timeLeft--;
            let m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            let s = (timeLeft % 60).toString().padStart(2, '0');
            timerText.textContent = `${m}:${s}`;

            if(timeLeft <= 60) {
                timerCircle.classList.add("warning"); 
            }

            if(timeLeft <= 0) {
                clearInterval(paymentTimerInterval);
                alert(i18n[currentLang].alert_timeout);
                resetPaymentModal();
            }
        }, 1000);
    }

    openPaymentBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!currentUserProfile) {
            alert(i18n[currentLang].alert_login);
            document.getElementById("login-modal").style.display = "flex";
            return;
        }
        toggleRequiredFields('card'); 
        paymentModal.style.display = "flex";
        startPaymentTimer(); 
    });

    function resetPaymentModal() {
        paymentModal.style.display = "none";
        clearInterval(paymentTimerInterval); 
        paymentForm.reset();
        resetValidation();
        paypalStep = 1;
        paypalStep1.style.display = "block";
        paypalStep2.style.display = "none";
        document.querySelector('input[value="card"]').checked = true;
        paymentSections.forEach(sec => sec.classList.remove("active"));
        document.getElementById("card-info").classList.add("active");
        submitPaymentBtn.textContent = i18n[currentLang].btn_submit_pay;
        toggleRequiredFields('card');
    }

    closePaymentModal.addEventListener("click", resetPaymentModal);

    paymentRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            const method = e.target.value;
            paymentSections.forEach(sec => sec.classList.remove("active"));
            document.getElementById(method + "-info").classList.add("active");
            toggleRequiredFields(method);
            if (method === "paypal" && paypalStep === 1) submitPaymentBtn.textContent = i18n[currentLang].btn_next;
            else submitPaymentBtn.textContent = i18n[currentLang].btn_submit_pay;
        });
    });

    function toggleRequiredFields(activeMethod) {
        paymentSections.forEach(sec => {
            const inputs = sec.querySelectorAll("input");
            if (sec.id === activeMethod + "-info") {
                if (activeMethod === "paypal" && paypalStep === 2) inputs.forEach(i => i.removeAttribute("required"));
                else inputs.forEach(i => i.setAttribute("required", "true"));
            } else inputs.forEach(i => i.removeAttribute("required"));
        });
    }

    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let selectedMethod = "card"; 
        paymentRadios.forEach(r => { if(r.checked) selectedMethod = r.value; });

        if (selectedMethod === "card") {
            const isNameValid = document.getElementById("card-name").dataset.valid === "true";
            const isNumValid = document.getElementById("card-number").dataset.valid === "true";
            const isExpValid = document.getElementById("card-expiry").dataset.valid === "true";
            const isCvvValid = document.getElementById("card-cvv").dataset.valid === "true";
            if (!isNameValid || !isNumValid || !isExpValid || !isCvvValid) {
                alert(i18n[currentLang].alert_card); return; 
            }
        }

        if (selectedMethod === "paypal" && paypalStep === 1) {
            const isEmailValid = document.getElementById("paypal-email").dataset.valid === "true";
            if (!isEmailValid) { alert(i18n[currentLang].alert_pp); return; }
            paypalStep = 2;
            paypalStep1.style.display = "none";
            paypalStep2.style.display = "block";
            submitPaymentBtn.textContent = i18n[currentLang].btn_submit_pay;
            toggleRequiredFields('paypal'); 
            return; 
        }

        const itemData = pageData[currentSelectionId][currentLang];
        const today = new Date().toLocaleDateString();

        const purchaseRecord = {
            title: itemData.title, price: itemData.price,
            packageDetails: itemData.packageDetails, date: today, method: selectedMethod
        };

        clearInterval(paymentTimerInterval); 
        paymentModal.style.display = "none";
        processingModal.style.display = "flex";

        const randomDelay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
        setTimeout(() => {
            currentUserProfile.purchaseHistory.push(purchaseRecord);
            localStorage.setItem("cyberCertUser", JSON.stringify(currentUserProfile)); 

            processingModal.style.display = "none";
            paymentSuccessModal.style.display = "flex";
            paymentSuccessAnim.goToAndPlay(0, true);

            let count = 5;
            const countdownTimerEl = document.getElementById("countdown-timer");
            countdownTimerEl.innerText = count;

            const timer = setInterval(() => {
                count--;
                countdownTimerEl.innerText = count;
                if (count <= 0) {
                    clearInterval(timer);
                    paymentSuccessModal.style.display = "none";
                    resetPaymentModal(); 
                    showPurchaseHistory(); 
                }
            }, 1000);
        }, randomDelay);
    });

    // --- AUTH LOGIC ---
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const userDropdown = document.getElementById("user-dropdown");
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");

    loginBtn.addEventListener("click", (e) => { e.preventDefault(); loginModal.style.display = "flex"; });
    signupBtn.addEventListener("click", (e) => { e.preventDefault(); signupModal.style.display = "flex"; });
    document.getElementById("close-modal").addEventListener("click", () => loginModal.style.display = "none");
    document.getElementById("close-signup-modal").addEventListener("click", () => signupModal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) loginModal.style.display = "none";
        if (e.target === signupModal) signupModal.style.display = "none";
        if (e.target === paymentModal) resetPaymentModal();
    });

    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault(); 
        const enteredUsername = document.getElementById("username").value.trim();
        if (enteredUsername !== "") {
            currentUserProfile = { ...defaultProfile, username: enteredUsername }; 
            localStorage.setItem("cyberCertUser", JSON.stringify(currentUserProfile));
            usernameBtn.textContent = enteredUsername; 
            authButtons.style.display = "none";
            userMenu.style.display = "block";
            loginModal.style.display = "none";
            e.target.reset();
        }
    });

    document.getElementById("signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const regUsername = document.getElementById("reg-username").value.trim();
        const pass1 = document.getElementById("reg-password").value;
        const pass2 = document.getElementById("reg-confirm-password").value;

        if (pass1 !== pass2) { alert("Passwords do not match!"); return; }

        currentUserProfile = {
            username: regUsername, fullName: document.getElementById("reg-fullname").value.trim(),
            email: document.getElementById("reg-email").value.trim(),
            country: "Viet Nam", phone: "+84", address: "Address", postal: "00000",
            purchaseHistory: [],
            avatar: "https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-6/578275623_837105788695621_3685044230068004993_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeH4CpgGkH6GShxape2aERZcFlRzy0HZPX8WVHPLQdk9fyXA5gcEDOSLnK_p7g0TgQ6X7uBbzhLa_wzuLbvdUqFn&_nc_ohc=IF3XRsqFbWEQ7kNvwEItDjC&_nc_oc=Adq4Ve1dzK0tnk3Z6E2z6lbFvHzt2XtWtv7mQl9tylA-BTCQ5xmOXvnpxfUXYJ-ql2xHUsfam9q5DY9uEpDv1wJm&_nc_zt=23&_nc_ht=scontent.fhan5-5.fna&_nc_gid=KgQq-qcbGkmwPYOuhnizwg&_nc_ss=7a3a8&oh=00_Afykm0zTqGKabjwY9LYJuEi2mxerUxgZidgffCujWghtNw&oe=69CC6CF2" + regUsername.charAt(0).toUpperCase()
        };

        localStorage.setItem("cyberCertUser", JSON.stringify(currentUserProfile));
        signupModal.style.display = "none";
        const successModal = document.getElementById("success-modal");
        successModal.style.display = "flex";
        
        signupSuccessAnim.goToAndPlay(0, true);

        setTimeout(() => {
            successModal.style.display = "none";
            e.target.reset();
            usernameBtn.textContent = regUsername;
            authButtons.style.display = "none";
            userMenu.style.display = "block";
            goHome();
        }, 2000); 
    });

    usernameBtn.addEventListener("click", () => userDropdown.style.display = (userDropdown.style.display === "none" || userDropdown.style.display === "") ? "block" : "none");
    document.getElementById("profile-action-btn").addEventListener("click", showProfile);
    
    document.getElementById("logout-action-btn").addEventListener("click", () => {
        currentUserProfile = null;
        localStorage.removeItem("cyberCertUser"); 
        userMenu.style.display = "none";
        userDropdown.style.display = "none";
        authButtons.style.display = "flex"; 
        goHome();
    });

    document.querySelectorAll(".toggle-password").forEach(btn => {
        btn.addEventListener("click", function() {
            const input = this.previousElementSibling;
            if (input.type === "password") { input.type = "text"; this.textContent = i18n[currentLang].mod_show === "Show" ? "Hide" : "Ẩn"; } 
            else { input.type = "password"; this.textContent = i18n[currentLang].mod_show; }
        });
    });
});