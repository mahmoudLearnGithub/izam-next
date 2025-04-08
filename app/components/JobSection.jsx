// <<<<<<< HEAD

// =======
// >>>>>>> 456b9c1 (second commit navbar edition)
"use client";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import Pagination from "./Pagination";

export default function JobSection() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <div className="left-side-container">
        <div className="left-content">
          <aside className="filter-section xs-hidden">
            <div className="custom-dropdown" id="sorting">
              <div className="dropdown-selected"> <label htmlFor="sorting">Sorting by :</label>Top
                match <span className="dropdown-caret">▼</span></div>
              <ul className="dropdown-options">
                <li data-value="top-match">Top match</li>
                <li data-value="newest">Newest</li>
                <li data-value="relevance">Relevance</li>
              </ul>
            </div>
          </aside>
          <div className="alert-box-container">
            <section className="alert-section xs-hidden">
              <div className="job-category">
                <h2>UI Designer in Egypt</h2>
                <p>70 job positions</p>
              </div>
              <div className="alter-box"><span>Set alert</span><label className="switch"><input htmlFor="set-alert" type="checkbox"
                id="et-alert" /><span className="slider"></span></label></div>
            </section>
            <div className="alert-section-container md-hidden">
              <section className="alert-section">
                <div className="job-category">
                  <h2>UI Designer in Egypt</h2>
                  <p>70 job positions</p>
                </div>
                <div className="alter-box"><span>Set alert</span><label className="switch"><input htmlFor="set-alert"
                  type="checkbox" id="set-alert" /><span className="slider"></span></label></div>
              </section>



              <div className="bars-container" onClick={toggleSidebar}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
              </div>

            </div>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-1.png" alt="job-1" title="job-1" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-2.png" alt="job-2" title="job-2" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-3.png" alt="job-3" title="job-3" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-1.png" alt="job-1" title="job-1" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-2.png" alt="job-2" title="job-2" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <section className="job-description-section">
              <article className="job-card">
                <div className="job-title">
                  <div className="company-logo"><img src="/job-3.png" alt="job-3" title="job-3" /></div>
                  <div className="company-vacancy">
                    <h3>Gaming UI Designer</h3>
                    <p className="company-name">Rockstar Games</p>
                  </div>
                </div>
                <div className="job-desc">
                  <p className="location"><i className="fas fa-map-marker-alt"></i>El
                    Mansoura, Egypt </p>
                  <p className="date-posted"><i className="fas fa-calendar"></i>10 days ago
                  </p>
                </div>
                <div className="job-tags"><span>0 - 3y of exp</span><span>Full
                  time</span><span>Remote</span></div>
                <hr />
                <p className="job-category">Creative / Design - IT / Software development
                  - Gaming</p>
              </article>
              <div className="favorite"><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                  rx="27.1333" fill="white" />
                <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                  strokeWidth="0.733333" />
                <g clipPath="url(#clip0_1_474)">
                  <path
                    d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                    fill="#C4C3C3" />
                </g>
                <defs>
                  <clippath id="clip0_1_474">
                    <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                  </clippath>
                </defs></svg><svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                  xmlns="http://www.w3.org/2000/svg"> <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667"
                    rx="27.1333" fill="white" />
                  <rect x="0.366667" y="0.366667" width="54.2667" height="54.2667" rx="27.1333" stroke="#C4C3C3"
                    strokeWidth="0.733333" />
                  <g clipPath="url(#clip0_1_474)">
                    <path
                      d="M32.9902 17.9825C32.4308 17.9825 31.8923 18.0874 31.3748 18.2974C30.8574 18.5073 30.3784 18.7871 29.9378 19.137C29.4973 19.4868 29.1022 19.8856 28.7525 20.3334C28.4029 20.7952 28.1162 21.264 27.8924 21.7398C27.6687 21.264 27.382 20.7952 27.0323 20.3334C26.6827 19.8856 26.2876 19.4868 25.847 19.137C25.4065 18.7871 24.9275 18.5073 24.41 18.2974C23.8925 18.0874 23.3541 17.9825 22.7947 17.9825C22.0115 17.9825 21.2772 18.1294 20.5919 18.4233C19.9066 18.7172 19.3088 19.1195 18.7983 19.6302C18.2878 20.141 17.8857 20.7392 17.592 21.4249C17.2983 22.1106 17.1515 22.8453 17.1515 23.6289C17.1515 25.2102 17.5081 26.5466 18.2214 27.6381C18.9346 28.7436 19.8262 29.7931 20.8961 30.7867C21.966 31.7802 23.1233 32.8228 24.3681 33.9143C25.6268 34.9918 26.8015 36.3142 27.8924 37.8815C28.9274 36.3282 30.0672 34.9988 31.3119 33.8933C32.5566 32.7878 33.7209 31.7313 34.8048 30.7237C35.8887 29.7162 36.8013 28.6666 37.5425 27.5751C38.2698 26.4696 38.6334 25.1542 38.6334 23.6289C38.6334 22.8453 38.4865 22.1106 38.1928 21.4249C37.8991 20.7392 37.497 20.141 36.9866 19.6302C36.4761 19.1195 35.8782 18.7172 35.1929 18.4233C34.5076 18.1294 33.7734 17.9825 32.9902 17.9825Z"
                      fill="#ff5353" />
                  </g>
                  <defs>
                    <clippath id="clip0_1_474">
                      <rect width="22" height="21.4943" fill="white" transform="matrix(1 0 0 -1 16.8923 38.1333)" />
                    </clippath>
                  </defs></svg>
              </div>
            </section>

            <br /><br /><br />
          </div>
          <Pagination />
        </div>
      </div>
    </>

  );
}
