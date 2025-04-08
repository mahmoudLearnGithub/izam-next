"use client";

import { useEffect, useRef } from "react";
import { svgContent_1, svgContent_2, svgContent_3, svgContent_4 } from "../../public/svg";

export default function Navbar() {
//works fine 
useEffect(() => {
  function toggleDropdown(e) {
      e.preventDefault();
      const profileToggle = document.querySelector(".profile-toggle");
      const dropdownMenu = document.getElementById("dropdown-menu");
      const caret = profileToggle.querySelector(".caret");

      if (!dropdownMenu) return;

      const isOpen = dropdownMenu.classList.contains("active");

      dropdownMenu.style.opacity = isOpen ? "0" : "1";
      dropdownMenu.style.visibility = isOpen ? "hidden" : "visible";
      dropdownMenu.classList.toggle("active");
      caret.classList.toggle("open");
  }

  const profileToggle = document.querySelector(".profile-toggle a");
  if (profileToggle) {
      profileToggle.addEventListener("click", toggleDropdown);
  }

  return () => {
      if (profileToggle) {
          profileToggle.removeEventListener("click", toggleDropdown);
      }
  };
}, []);
//works fine
  const navbarLinksRef = useRef(null);
  const overlayRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const caretRef = useRef(null);

  function closeListWithAnimation() {
    if (!navbarLinksRef.current || !overlayRef.current) return;

    navbarLinksRef.current.style.animation = "slideOutIn 0.4s ease-in-out forwards";
    setTimeout(() => {
      navbarLinksRef.current.classList.remove("active");
      navbarLinksRef.current.style.animation = "";
      overlayRef.current.classList.remove("active");
    }, 400);
  }

  function toggleNavbar() {
    if (!navbarLinksRef.current || !overlayRef.current) return;

    if (navbarLinksRef.current.classList.contains("active")) {
      closeListWithAnimation();
    } else {
      navbarLinksRef.current.classList.add("active");
      overlayRef.current.classList.add("active");
    }
  }

  useEffect(() => {
    navbarLinksRef.current = document.querySelector(".navbar-links");
    overlayRef.current = document.getElementById("white");
    toggleButtonRef.current = document.querySelector(".toggle-button");
    caretRef.current = document.querySelector(".toggle-caret");

    if (toggleButtonRef.current) toggleButtonRef.current.addEventListener("click", toggleNavbar);
    if (caretRef.current) caretRef.current.addEventListener("click", closeListWithAnimation);

    return () => {
      if (toggleButtonRef.current) toggleButtonRef.current.removeEventListener("click", toggleNavbar);
      if (caretRef.current) caretRef.current.removeEventListener("click", closeListWithAnimation);
    };
  }, []);






















return (
    <nav className="navbar">
        <div className="brand-title">
            <a href="#">i<b>Z</b>AM</a>
            <form className="xs-hidden form-inline">
                <div className="search-container">
                    <span className="search-icon">
                        <img src="/search-icon.png" alt="Search Icon" />
                    </span>
                    <input className="form-control " type="search " placeholder="Search by name, job title, ..." aria-label="Search " />              </div>
            </form>
        </div>
        <a href="#" aria-label="toggle-button" title="toggle-button" className="toggle-button xs-hidden">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <a href="#" aria-label="toggle-button" title="Profile Menu" className="toggle-button dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">

            <div dangerouslySetInnerHTML={{ __html: svgContent_1 }} />

            <br />
            <div className="bars">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </a>
        <div className="navbar-links">
            <ul>
                <li className="first-block">
                    <div dangerouslySetInnerHTML={{ __html: svgContent_2 }} />
                    <ul><b>Ahmed Ali</b>
                        <br />
                        <b>Student</b></ul>



                    <span
                        className="toggle-caret caret"
                        aria-label="Close Sidebar"
                        onClick={closeListWithAnimation}
                    >
                        <svg className="svg-sm" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.67572e-06 1.07499L1.06101 0.014986L6.84001 5.79199C6.93316 5.88455 7.00709 5.99463 7.05754 6.11588C7.10799 6.23713 7.13396 6.36716 7.13396 6.49849C7.13396 6.62981 7.10799 6.75984 7.05754 6.88109C7.00709 7.00234 6.93316 7.11242 6.84001 7.20499L1.06101 12.985L0.0010066 11.925L5.42501 6.49999L6.67572e-06 1.07499Z"
                                fill="#C4C3C3" />
                        </svg>
                    </span>



                </li>
                <li className="border-sm"><a title="coming-soon Page" href="#"> </a> </li>
                <li className="active"><svg width="31" height="36" viewBox="0 0 31 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_81_315)">
                        <path
                            d="M13.0001 30.3165C12.6683 31.387 11.6653 32.1578 10.4907 32.1578H7.96947C4.9125 32.1578 2.42188 29.6957 2.42188 26.6433V15.1932V15.1814L2.42215 15.1697C2.45231 13.8875 3.06106 12.6891 4.07634 11.904L12.6331 5.05468C14.4783 3.47894 17.192 3.4338 19.0894 4.94894C19.0899 4.94934 19.0904 4.94975 19.0909 4.95015L27.865 11.9067L27.8739 11.9137L27.8826 11.9209C28.8568 12.7299 29.4219 13.9279 29.4219 15.1932V26.655C29.4219 28.1193 28.8349 29.5219 27.7928 30.5537C26.7514 31.5849 25.341 32.1612 23.8733 32.1578M13.0001 30.3165L23.8743 31.1578M13.0001 30.3165L13.1518 30.2663V29.5438V25.5205C13.1518 25.0526 13.5359 24.6609 14.0251 24.6609H17.8069C18.0408 24.6609 18.2637 24.7532 18.4269 24.9152C18.5899 25.077 18.6801 25.2949 18.6801 25.5205V29.5405L13.0001 30.3165ZM23.8733 32.1578C23.8728 32.1578 23.8722 32.1578 23.8717 32.1578L23.8743 31.1578M23.8733 32.1578H23.8743V31.1578M23.8733 32.1578H21.2942C20.5999 32.1578 19.9329 31.8828 19.4416 31.3915L20.1487 30.6844C20.4517 30.9874 20.864 31.1578 21.2942 31.1578H23.8743"
                            stroke="#E6E6E6" strokeWidth="2" />
                    </g>
                    <defs>
                        <clippath id="clip0_81_315">
                            <rect width="30" height="36" fill="white" transform="translate(0.921875)" />
                        </clippath>
                    </defs>
                </svg><svg className="svg-sm" width="31" height="36" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                            d="M13.4524 17.0761C14.3025 17.0781 15.1194 16.7444 15.7228 16.1469C16.3265 15.5492 16.6667 14.7364 16.6667 13.8879V7.46924C16.6667 6.72882 16.336 6.02791 15.7661 5.55472L15.7603 5.54991L15.7544 5.54523L10.8413 1.64982C10.8409 1.64954 10.8406 1.64927 10.8402 1.64899C9.73817 0.769095 8.16242 0.79497 7.09031 1.70946L2.30053 5.54348C1.70712 6.00269 1.35116 6.70355 1.33352 7.45357L1.33333 7.4614V7.46924V13.8813C1.33333 15.6503 2.77658 17.0761 4.54665 17.0761H5.95853C6.64427 17.0761 7.23305 16.6384 7.44834 16.0227L11.1046 15.5056L10.438 15.5007C10.438 15.5016 10.438 15.5026 10.438 15.5035C10.4356 15.9208 10.6009 16.321 10.8956 16.6157C11.1908 16.911 11.5915 17.0761 12.0085 17.0761H13.4524ZM13.4524 17.0761C13.4522 17.0761 13.4519 17.0761 13.4516 17.0761L13.4533 16.4095V17.0761H13.4524Z"
                            stroke="#7D7D7D" strokeWidth="1.33333" /></svg><a title="Auction Page" href="#">Home</a></li>
                <li><svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g
                    clipPath="url(#clip0_81_321)">
                    <path
                        d="M33.2107 10.5129V15.5328C33.0205 16.3361 32.5989 17.0739 31.9763 17.6723C31.1005 18.5129 29.9333 18.9762 28.6913 18.9762H20.8828V17.4479C20.8828 16.802 20.3543 16.2737 19.7084 16.2737H17.7128C17.0673 16.2737 16.5389 16.8022 16.5389 17.4479V18.9762H8.72991C7.48798 18.9762 6.32102 18.5129 5.44493 17.6723C4.82172 17.0748 4.40093 16.3364 4.21069 15.5334V10.5129C4.21069 9.43081 5.09664 8.54486 6.17892 8.54486H31.2428C32.3249 8.54486 33.2107 9.43081 33.2107 10.5129ZM19.7086 21.6785C19.7587 21.6781 19.8067 21.6579 19.8422 21.6225C19.8777 21.587 19.8978 21.539 19.8982 21.4889V17.4479C19.8982 17.3446 19.812 17.2576 19.7086 17.2576H17.7128C17.6099 17.2576 17.5226 17.3446 17.5226 17.4479V21.4889C17.5226 21.5921 17.6099 21.6785 17.7128 21.6785H19.7086ZM32.6582 18.3821C31.5974 19.3996 30.1895 19.9604 28.6913 19.9604H20.8828V21.489C20.8828 22.134 20.3543 22.6628 19.7084 22.6628H17.7128C17.0673 22.6628 16.5389 22.1341 16.5389 21.489V19.9604H8.72991C7.23206 19.9604 5.82382 19.3996 4.76314 18.3821C4.56406 18.1911 4.37941 17.9857 4.21069 17.7674L4.21069 28.4233C4.21069 29.5063 5.09664 30.3916 6.17892 30.3916H31.2428C32.3249 30.3916 33.2107 29.5063 33.2107 28.4233V17.7674C33.042 17.9857 32.8574 18.1912 32.6582 18.3821ZM23.2486 5.18507C23.066 5.002 22.8491 4.85681 22.6102 4.75784C22.3714 4.65888 22.1153 4.60809 21.8568 4.6084H15.5652C15.3066 4.60804 15.0505 4.6588 14.8116 4.75777C14.5727 4.85673 14.3557 5.00195 14.1731 5.18507C13.9901 5.36766 13.8451 5.58458 13.7462 5.82338C13.6473 6.06219 13.5965 6.31816 13.5968 6.57663V7.56075H15.2694V6.57663C15.2694 6.52081 15.2846 6.43917 15.3564 6.36783C15.3836 6.34009 15.4161 6.31811 15.452 6.30319C15.4879 6.28827 15.5264 6.28071 15.5652 6.28098H21.8569C21.9123 6.28098 21.9941 6.29649 22.0653 6.36783C22.1369 6.43917 22.1521 6.52081 22.1521 6.57663V7.56075H23.8247V6.57663C23.825 6.31818 23.7742 6.06222 23.6754 5.82342C23.5765 5.58463 23.4315 5.3677 23.2486 5.18507Z"
                        fill="white" />
                </g>
                    <defs>
                        <clippath id="clip0_81_321">
                            <rect width="29" height="29" fill="white" transform="translate(4.42188 3.5)" />
                        </clippath>
                    </defs>
                </svg><svg className="svg-sm" width="31" height="36" viewBox="0 0 19 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                            d="M11.4228 0.76709C11.5922 0.76689 11.76 0.800165 11.9165 0.865003C12.073 0.929841 12.2151 1.02496 12.3348 1.14491C12.4546 1.26456 12.5496 1.40669 12.6143 1.56314C12.6657 1.68709 12.6972 1.8181 12.708 1.95139H12.3604C12.3516 1.87389 12.3322 1.78598 12.2949 1.69541C12.2528 1.59322 12.188 1.48766 12.0901 1.38984C12.09 1.38968 12.0898 1.38951 12.0896 1.38935L11.4228 0.76709ZM11.4228 0.76709H7.3008C7.13137 0.766855 6.96357 0.800112 6.80704 0.864952C6.65051 0.929791 6.50834 1.02493 6.3887 1.14491C6.26885 1.26454 6.17381 1.40666 6.10902 1.56311C6.05769 1.68707 6.02616 1.81809 6.01537 1.95139H6.363C6.37175 1.87389 6.3912 1.78598 6.42852 1.69542C6.47043 1.59367 6.53489 1.48858 6.63202 1.39113C6.63243 1.39072 6.63284 1.39031 6.63325 1.3899C6.63344 1.38971 6.63363 1.38952 6.63382 1.38933C6.72097 1.30187 6.82452 1.23243 6.93857 1.18499C6.93886 1.18487 6.93916 1.18474 6.93945 1.18462C7.05386 1.13717 7.1765 1.11281 7.30032 1.11291C7.30048 1.11291 7.30064 1.11292 7.3008 1.11292L11.4228 0.76709ZM12.7122 2.59615V2.05662V2.59615ZM12.7122 2.59615H12.3664H12.7122ZM11.952 1.95139H11.6164V2.05662V2.59615H11.9622V2.05662V2.05583C11.9622 2.02068 11.9588 1.9857 11.952 1.95139ZM11.952 1.95139C11.9452 1.91675 11.935 1.88279 11.9214 1.85002C11.8944 1.78476 11.8547 1.72549 11.8048 1.67559L11.8045 1.67529M11.952 1.95139L11.8045 1.67529M11.8045 1.67529L11.5595 1.91981M11.8045 1.67529L11.8037 1.67455M11.8037 1.67455L11.5595 1.91981M11.8037 1.67455L11.8037 1.67452C11.7539 1.62454 11.6946 1.5849 11.6294 1.55789C11.5642 1.53087 11.4943 1.51701 11.4237 1.51709L11.4229 1.51709L11.4228 1.51709L7.30313 1.51709L11.8037 1.67455ZM11.5595 1.91981L11.5595 1.91982L11.5595 1.91981ZM1.18934 8.78485C0.904372 8.51162 0.71024 8.18357 0.611633 7.8303V4.63559C0.611633 4.34085 0.856261 4.09615 1.15116 4.09615H17.5723C17.867 4.09615 18.1116 4.34074 18.1116 4.63559V7.82993C18.0131 8.18272 17.8189 8.51077 17.5336 8.78511C17.103 9.19836 16.5258 9.43045 15.9007 9.43045H11.5347V9.17915C11.5347 8.34168 10.8525 7.65984 10.0153 7.65984H8.70784C7.87051 7.65984 7.18872 8.34208 7.18872 9.17915V9.43045H2.8225C2.19749 9.43045 1.62038 9.19841 1.18952 8.78502L1.18934 8.78485ZM7.107 3.34615H7.857V3.45139H7.107H6.01117H5.26117V3.34615H6.01117H7.107ZM7.107 2.59615H6.76117L7.107 1.95139V2.05662V2.59615ZM6.357 2.59615H6.01117V2.05662C6.01117 2.05565 6.01117 2.05467 6.01117 2.0537L6.357 2.59615ZM0.611633 16.37V11.0044C1.27845 11.3773 2.03668 11.5753 2.8225 11.5753H7.18872V11.8268C7.18872 12.6636 7.87063 13.3458 8.70784 13.3458H10.0153C10.8525 13.3458 11.5347 12.6637 11.5347 11.8268V11.5753H15.9007C16.6867 11.5753 17.4448 11.3773 18.1116 11.0044V16.37C18.1116 16.6653 17.8671 16.9095 17.5723 16.9095H1.15116C0.856118 16.9095 0.611633 16.6651 0.611633 16.37ZM9.38968 9.80451V11.201H9.3332V9.80451H9.38968Z"
                            stroke="#7D7D7D" strokeWidth="1.5" /></svg><a title="coming-soon Page"
                                href="#">Jobs </a> </li>

                <li><svg width="37" height="36" viewBox="0 0 37 36"
                    fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_81_326)">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M18.5407 21.121L18.7101 21.1211L19.089 21.1223C21.9848 21.1414 28.6027 21.4339 28.6027 25.9195C28.6027 30.3756 22.2155 30.6662 19.1341 30.6852L17.9924 30.6852C15.0964 30.6661 8.47722 30.374 8.47722 25.894C8.47722 21.4323 15.0964 21.1413 17.9924 21.1223L18.3713 21.1211C18.4301 21.121 18.4866 21.121 18.5407 21.121ZM18.5407 23.371C14.9767 23.371 10.7272 23.809 10.7272 25.894C10.7272 27.9318 14.7231 28.4083 18.215 28.4353L18.5407 28.4365C22.1047 28.4365 26.3527 28 26.3527 25.9195C26.3527 23.8135 22.1047 23.371 18.5407 23.371ZM30.4711 20.5123C34.1056 21.0568 34.8691 22.7638 34.8691 24.1003C34.8691 24.9163 34.5481 26.4058 32.4031 27.2233C32.2711 27.2728 32.1361 27.2968 32.0026 27.2968C31.5496 27.2968 31.1221 27.0208 30.9511 26.5723C30.7291 25.9918 31.0216 25.3408 31.6021 25.1203C32.6191 24.7333 32.6191 24.3058 32.6191 24.1003C32.6191 23.4433 31.7836 22.9843 30.1366 22.7383C29.5231 22.6453 29.0986 22.0738 29.1901 21.4573C29.2816 20.8423 29.8516 20.4328 30.4711 20.5123ZM7.88982 21.4573C7.98132 22.0738 7.55682 22.6453 6.94332 22.7383C5.29632 22.9843 4.46082 23.4433 4.46082 24.1003C4.46082 24.3058 4.46082 24.7318 5.47932 25.1203C6.05982 25.3408 6.35232 25.9918 6.13032 26.5723C5.95932 27.0208 5.53182 27.2968 5.07882 27.2968C4.94532 27.2968 4.81032 27.2728 4.67832 27.2233C2.53182 26.4043 2.21082 24.9148 2.21082 24.1003C2.21082 22.7653 2.97432 21.0568 6.61032 20.5123C7.22982 20.4343 7.79682 20.8423 7.88982 21.4573ZM18.5407 5.5C22.3207 5.5 25.3942 8.575 25.3942 12.3535C25.3942 16.132 22.3207 19.207 18.5407 19.207H18.5002C16.6702 19.201 14.9557 18.484 13.6717 17.188C12.3847 15.8935 11.6812 14.1745 11.6887 12.349C11.6887 8.575 14.7622 5.5 18.5407 5.5ZM18.5407 7.75C16.0027 7.75 13.9387 9.8155 13.9387 12.3535C13.9342 13.5835 14.4052 14.734 15.2677 15.6025C16.1302 16.471 17.2792 16.9525 18.5032 16.957L18.5407 18.082V16.957C21.0787 16.957 23.1442 14.893 23.1442 12.3535C23.1442 9.8155 21.0787 7.75 18.5407 7.75ZM27.8242 6.96925C30.4612 7.40275 32.3767 9.65875 32.3767 12.3333C32.3707 15.0258 30.3592 17.3358 27.6967 17.7093C27.6442 17.7168 27.5917 17.7198 27.5407 17.7198C26.9887 17.7198 26.5072 17.3133 26.4277 16.7508C26.3422 16.1343 26.7697 15.5658 27.3862 15.4803C28.9462 15.2613 30.1237 13.9083 30.1267 12.3303C30.1267 10.7658 29.0047 9.44275 27.4582 9.18925C26.8462 9.08875 26.4307 8.50975 26.5312 7.89625C26.6332 7.28275 27.2077 6.87175 27.8242 6.96925ZM10.5502 7.89625C10.6507 8.50975 10.2352 9.08875 9.62322 9.18925C8.07671 9.44275 6.95472 10.7658 6.95472 12.3333C6.95772 13.9083 8.13521 15.2628 9.69372 15.4803C10.3102 15.5658 10.7377 16.1343 10.6522 16.7508C10.5727 17.3133 10.0912 17.7198 9.53922 17.7198C9.48822 17.7198 9.43572 17.7168 9.38322 17.7093C6.72072 17.3358 4.71072 15.0258 4.70472 12.3363C4.70472 9.65875 6.62022 7.40275 9.25722 6.96925C9.88872 6.87025 10.4482 7.28575 10.5502 7.89625Z"
                            fill="#E6E6E6" />
                    </g>
                    <defs>
                        <clippath id="clip0_81_326">
                            <rect width="36" height="36" fill="white" transform="translate(0.921875)" />
                        </clippath>
                    </defs>
                </svg><svg className="svg-sm" width="31" height="36" viewBox="0 0 22 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.2411 10.1748L11.3491 10.1748L11.5908 10.1756C13.4385 10.1878 17.6608 10.3744 17.6608 13.2363C17.6608 16.0794 13.5857 16.2648 11.6196 16.2769L10.8912 16.2769C9.0435 16.2647 4.82034 16.0783 4.82034 13.22C4.82034 10.3734 9.0435 10.1877 10.8912 10.1756L11.133 10.1748C11.1705 10.1748 11.2065 10.1748 11.2411 10.1748ZM11.2411 11.6103C8.96715 11.6103 6.25588 11.8898 6.25588 13.22C6.25588 14.5202 8.80532 14.8242 11.0332 14.8414L11.2411 14.8422C13.515 14.8422 16.2253 14.5637 16.2253 13.2363C16.2253 11.8926 13.515 11.6103 11.2411 11.6103ZM18.8529 9.7864C21.1718 10.1338 21.6589 11.2229 21.6589 12.0756C21.6589 12.5962 21.4541 13.5466 20.0855 14.0681C20.0013 14.0997 19.9152 14.115 19.83 14.115C19.541 14.115 19.2682 13.939 19.1591 13.6528C19.0175 13.2824 19.2041 12.8671 19.5745 12.7264C20.2234 12.4795 20.2234 12.2067 20.2234 12.0756C20.2234 11.6564 19.6903 11.3636 18.6395 11.2066C18.248 11.1473 17.9772 10.7827 18.0356 10.3893C18.094 9.99694 18.4576 9.73568 18.8529 9.7864ZM4.44557 10.3893C4.50394 10.7827 4.23311 11.1473 3.84168 11.2066C2.79086 11.3636 2.2578 11.6564 2.2578 12.0756C2.2578 12.2067 2.2578 12.4785 2.90762 12.7264C3.27799 12.8671 3.46461 13.2824 3.32297 13.6528C3.21387 13.939 2.94111 14.115 2.65209 14.115C2.56692 14.115 2.48078 14.0997 2.39656 14.0681C1.02705 13.5456 0.82225 12.5953 0.82225 12.0756C0.82225 11.2239 1.30938 10.1338 3.62922 9.7864C4.02447 9.73663 4.38623 9.99694 4.44557 10.3893ZM11.2411 0.208252C13.6528 0.208252 15.6137 2.17016 15.6137 4.58092C15.6137 6.99168 13.6528 8.95359 11.2411 8.95359H11.2152C10.0476 8.94976 8.95375 8.4923 8.13453 7.66543C7.3134 6.83951 6.86455 5.74276 6.8693 4.57805C6.8693 2.17016 8.83029 0.208252 11.2411 0.208252ZM11.2411 1.6438C9.62176 1.6438 8.30486 2.96163 8.30486 4.58092C8.30201 5.36569 8.60252 6.09973 9.15281 6.65385C9.7031 7.20797 10.4362 7.51517 11.2171 7.51805L11.2411 8.23582V7.51805C12.8603 7.51805 14.1782 6.20117 14.1782 4.58092C14.1782 2.96163 12.8603 1.6438 11.2411 1.6438ZM17.1641 1.14566C18.8466 1.42224 20.0687 2.86162 20.0687 4.568C20.0649 6.28587 18.7815 7.7597 17.0828 7.998C17.0493 8.00278 17.0158 8.0047 16.9832 8.0047C16.631 8.0047 16.3238 7.74534 16.2731 7.38645C16.2186 6.99312 16.4913 6.6304 16.8847 6.57585C17.88 6.43612 18.6312 5.57288 18.6332 4.56609C18.6332 3.56791 17.9173 2.7238 16.9306 2.56207C16.5401 2.49795 16.275 2.12853 16.3392 1.73711C16.4042 1.34568 16.7708 1.08346 17.1641 1.14566ZM6.14295 1.73711C6.20707 2.12853 5.94198 2.49795 5.55151 2.56207C4.56481 2.7238 3.84895 3.56791 3.84895 4.568C3.85087 5.57288 4.60214 6.43708 5.59649 6.57585C5.98983 6.6304 6.26258 6.99312 6.20803 7.38645C6.15731 7.74534 5.8501 8.0047 5.49792 8.0047C5.46538 8.0047 5.43188 8.00278 5.39838 7.998C3.69966 7.7597 2.41724 6.28587 2.41341 4.56992C2.41341 2.86162 3.63554 1.42224 5.31799 1.14566C5.7209 1.0825 6.07788 1.3476 6.14295 1.73711Z"
                        fill="#7D7D7D" /></svg><a title="coming-soon Page" href="html/employers.html">Employers </a>
                </li> <li className="border"><a title="coming-soon Page" href="./html/coming-soon.html"> </a> </li>
                <li><svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                        d="M26.9607 11.6667C26.9607 9.3461 26.0388 7.12051 24.3979 5.47956C22.7569 3.83862 20.5313 2.91675 18.2107 2.91675C15.89 2.91675 13.6645 3.83862 12.0235 5.47956C10.3826 7.12051 9.46069 9.3461 9.46069 11.6667C9.46069 21.8751 5.08569 24.7917 5.08569 24.7917H31.3357C31.3357 24.7917 26.9607 21.8751 26.9607 11.6667Z"
                        stroke="#E6E6E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M20.7336 30.625C20.4772 31.067 20.1092 31.4339 19.6664 31.6889C19.2236 31.9439 18.7216 32.0782 18.2107 32.0782C17.6997 32.0782 17.1977 31.9439 16.7549 31.6889C16.3121 31.4339 15.9441 31.067 15.6877 30.625"
                        stroke="#E6E6E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg><svg className="svg-sm" width="31" height="36" viewBox="0 0 19 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                            d="M14.0066 6.47841C14.0066 5.25362 13.52 4.079 12.654 3.21295C11.7879 2.3469 10.6133 1.86035 9.38851 1.86035C8.16372 1.86035 6.9891 2.3469 6.12305 3.21295C5.257 4.079 4.77045 5.25362 4.77045 6.47841C4.77045 11.8661 2.46143 13.4055 2.46143 13.4055H16.3156C16.3156 13.4055 14.0066 11.8661 14.0066 6.47841Z"
                            stroke="#7D7D7D" strokeWidth="1.31944" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M10.72 16.4841C10.5847 16.7174 10.3905 16.911 10.1568 17.0456C9.92312 17.1802 9.65818 17.2511 9.3885 17.2511C9.11882 17.2511 8.85388 17.1802 8.62019 17.0456C8.3865 16.911 8.19228 16.7174 8.05696 16.4841"
                            stroke="#7D7D7D" strokeWidth="1.31944" strokeLinecap="round" strokeLinejoin="round" />
                    </svg><a title="coming-soon Page" href="./html/coming-soon.html">Notifications </a> </li>
                <li><svg width="32" height="36" viewBox="0 0 32 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                        d="M26.2107 23.75C26.2107 24.413 25.9473 25.0489 25.4785 25.5178C25.0096 25.9866 24.3737 26.25 23.7107 26.25H8.71069L3.71069 31.25V11.25C3.71069 10.587 3.97409 9.95107 4.44293 9.48223C4.91177 9.01339 5.54765 8.75 6.21069 8.75H23.7107C24.3737 8.75 25.0096 9.01339 25.4785 9.48223C25.9473 9.95107 26.2107 10.587 26.2107 11.25V23.75Z"
                        stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="15.6719" y="0.5" width="16" height="16" rx="8" fill="url(#paint0_linear_81_341)" />
                    <path
                        d="M23.2739 11.5V6.559L22.1759 6.829L21.8879 5.695L23.6969 5.155H24.6419V11.5H23.2739Z"
                        fill="white" />
                    <defs>
                        <lineargradient id="paint0_linear_81_341" x1="29.5978" y1="0.5" x2="18.1904" y2="16.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF5E5E" />
                            <stop offset="1" stopColor="#ED1F03" />
                        </lineargradient>
                    </defs></svg><svg className="svg-sm" width="31" height="36" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_2096)">
                            <path
                                d="M15.4173 13.2653C15.4173 13.6267 15.2737 13.9732 15.0182 14.2288C14.7627 14.4843 14.4161 14.6278 14.0548 14.6278H5.87978L3.15479 17.3528V6.45283C3.15479 6.09147 3.29833 5.74492 3.55385 5.4894C3.80937 5.23388 4.15593 5.09033 4.51728 5.09033H14.0548C14.4161 5.09033 14.7627 5.23388 15.0182 5.4894C15.2737 5.74492 15.4173 6.09147 15.4173 6.45283V13.2653Z"
                                stroke="#7D7D7D" strokeWidth="1.09" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <rect x="9.67393" y="0.593262" width="8.72" height="8.72" rx="4.36"
                                fill="url(#paint0_linear_1_2096)" />
                            <path
                                d="M13.8171 6.77271V4.07986L13.2187 4.22701L13.0618 3.60898L14.0477 3.31468H14.5627V6.77271H13.8171Z"
                                fill="white" />
                        </g>
                        <defs>
                            <lineargradient id="paint0_linear_1_2096" x1="17.2636" y1="0.593262" x2="11.0465"
                                y2="9.31326" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5E5E" />
                                <stop offset="1" stopColor="#ED1F03" />
                            </lineargradient>
                            <clippath id="clip0_1_2096">
                                <rect width="19.62" height="19.62" fill="white"
                                    transform="translate(0 0.321045)" />
                            </clippath>
                        </defs>
                    </svg><a title="coming-soon Page" href="#">Messaging </a> </li>








                <li className="profile-toggle dropdown">
                    <a
                        title="Profile Menu"
                        href="#"
                        className="dropdown-toggle svg"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={(e) => toggleDropdown(e)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: svgContent_3 }} />
                        <label>
                            Profile
                            <svg className="svg caret" width="12" height="7" viewBox="0 0 12 7" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33984 0.5H10.375C11.0078 0.5 11.3242 1.27344 10.8672 1.73047L6.36719 6.23047C6.08594 6.51172 5.62891 6.51172 5.34766 6.23047L0.847656 1.73047C0.390625 1.27344 0.707031 0.5 1.33984 0.5Z"
                                    fill="#E6E6E6" />
                            </svg>
                        </label>
                    </a>
                </li>










                <li className="border-sm">
                    <a title="coming-soon Page" href="./html/coming-soon.html"> </a>
                </li>
                <li className="settings -sm">
                    <a title="coming-soon Page" href="./html/privacy and settings.html">Setting and privacy</a>
                </li>
                <li className="settings -sm"><a title="coming-soon Page" href="./html/coming-soon.html">Languages </a> </li>
                <li className="settings -sm"><a title="coming-soon Page" href="./html/coming-soon.html">Help </a>
                </li>
                <li className="border-sm"><a title="coming-soon Page" href="./html/coming-soon.html"> </a></li>
                <li className="logout -sm"><a title="coming-soon Page"
                    href="./html/coming-soon.html">Logout </a>
                </li>
                <ul className="dropdown-menu"
                    id="dropdown-menu">
                    <li className="first-list">
                        <div dangerouslySetInnerHTML={{ __html: svgContent_4 }} />
                        <ul className="svg-ul"><b>Ahmed Ali</b><br /><b>Student</b></ul>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a title="coming-soon Page" href="html/profile.html"> <i className="fa fa-star"></i>Profile</a></li>
                    <li className="settings"><a title="coming-soon Page" href="html/privacy and settings.html">Setting and
                        privacy</a></li>
                    <li className="settings"><a title="coming-soon Page" href="./html/coming-soon.html">Languages </a> </li>
                    <li role="separator" className="divider"></li>
                    <li className="logout"><a title="coming-soon Page" href="./html/coming-soon.html">Logout </a> </li>
                </ul>
            </ul>
        </div>
    </nav>
);
}
