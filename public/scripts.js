  document.addEventListener("DOMContentLoaded", function () {
    let _ = document.querySelector(".col-md-9");
    setTimeout(() => {
      _.style.opacity = 1;
    }, 100);
  });
const profileDropdown = document.querySelector(".profile-toggle"),
  caret = profileDropdown.querySelector(".caret");
profileDropdown.addEventListener("click", (_) => {
  _.preventDefault(), caret.classList.toggle("open");
}),
  document.getElementById("set-alert").addEventListener("change", function () {
    this.checked;
  });
const settingsIcon = document.getElementById("settings-icon"),
  booleanIcons = document.getElementById("boolean-icons"),
  caretIcon = document.getElementById("caret-icon"),
  falseIcon = document.getElementById("false-icon"),
  trueIcon = document.getElementById("true-icon");
function toggleSettings() {
  booleanIcons.classList.contains("show")
    ? resetToDefault()
    : ((settingsIcon.style.display = "none"),
      booleanIcons.classList.remove("hidden"),
      booleanIcons.classList.add("show"),
      caretIcon.classList.add("caret-deleted"),
      document.querySelectorAll(".toggle-icons").forEach((_) => {
        addIconsToMenuItem(_);
      }));
}
function resetToDefault() {
  booleanIcons.classList.remove("show"),
    booleanIcons.classList.add("hidden"),
    (settingsIcon.style.display = "block"),
    caretIcon.classList.remove("caret-deleted"),
    document
      .querySelectorAll(".move-icon, .seen-icon, .edit-icon")
      .forEach((_) => {
        _.remove();
      }),
    document.querySelectorAll(".toggle-line").forEach((_) => _.remove()),
    lis1.classList.toggle("open"),
    lis2.classList.toggle("open");
}
function addIconsToMenuItem(_) {}
var moveIcon = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8821 6.75C11.8821 7.41304 11.6187 8.04893 11.1498 8.51777C10.681 8.98661 10.0451 9.25 9.38208 9.25C8.71904 9.25 8.08315 8.98661 7.61431 8.51777C7.14547 8.04893 6.88208 7.41304 6.88208 6.75C6.88208 6.08696 7.14547 5.45107 7.61431 4.98223C8.08315 4.51339 8.71904 4.25 9.38208 4.25C10.0451 4.25 10.681 4.51339 11.1498 4.98223C11.6187 5.45107 11.8821 6.08696 11.8821 6.75ZM9.38208 18C10.0451 18 10.681 17.7366 11.1498 17.2678C11.6187 16.7989 11.8821 16.163 11.8821 15.5C11.8821 14.837 11.6187 14.2011 11.1498 13.7322C10.681 13.2634 10.0451 13 9.38208 13C8.71904 13 8.08315 13.2634 7.61431 13.7322C7.14547 14.2011 6.88208 14.837 6.88208 15.5C6.88208 16.163 7.14547 16.7989 7.61431 17.2678C8.08315 17.7366 8.71904 18 9.38208 18ZM9.38208 26.75C10.0451 26.75 10.681 26.4866 11.1498 26.0178C11.6187 25.5489 11.8821 24.913 11.8821 24.25C11.8821 23.587 11.6187 22.9511 11.1498 22.4822C10.681 22.0134 10.0451 21.75 9.38208 21.75C8.71904 21.75 8.08315 22.0134 7.61431 22.4822C7.14547 22.9511 6.88208 23.587 6.88208 24.25C6.88208 24.913 7.14547 25.5489 7.61431 26.0178C8.08315 26.4866 8.71904 26.75 9.38208 26.75ZM23.1321 6.75C23.1321 7.41304 22.8687 8.04893 22.3998 8.51777C21.931 8.98661 21.2951 9.25 20.6321 9.25C19.969 9.25 19.3332 8.98661 18.8643 8.51777C18.3955 8.04893 18.1321 7.41304 18.1321 6.75C18.1321 6.08696 18.3955 5.45107 18.8643 4.98223C19.3332 4.51339 19.969 4.25 20.6321 4.25C21.2951 4.25 21.931 4.51339 22.3998 4.98223C22.8687 5.45107 23.1321 6.08696 23.1321 6.75ZM20.6321 18C21.2951 18 21.931 17.7366 22.3998 17.2678C22.8687 16.7989 23.1321 16.163 23.1321 15.5C23.1321 14.837 22.8687 14.2011 22.3998 13.7322C21.931 13.2634 21.2951 13 20.6321 13C19.969 13 19.3332 13.2634 18.8643 13.7322C18.3955 14.2011 18.1321 14.837 18.1321 15.5C18.1321 16.163 18.3955 16.7989 18.8643 17.2678C19.3332 17.7366 19.969 18 20.6321 18ZM20.6321 26.75C21.2951 26.75 21.931 26.4866 22.3998 26.0178C22.8687 25.5489 23.1321 24.913 23.1321 24.25C23.1321 23.587 22.8687 22.9511 22.3998 22.4822C21.931 22.0134 21.2951 21.75 20.6321 21.75C19.969 21.75 19.3332 22.0134 18.8643 22.4822C18.3955 22.9511 18.1321 23.587 18.1321 24.25C18.1321 24.913 18.3955 25.5489 18.8643 26.0178C19.3332 26.4866 19.969 26.75 20.6321 26.75Z" fill="#404040"/>
  </svg>
  `,
  editIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.3235 2.68283C21.6071 1.96651 20.6355 1.56409 19.6224 1.56409C18.6093 1.56409 17.6376 1.96651 16.9212 2.68283L3.41104 16.1953C3.01705 16.5891 2.74522 17.0883 2.62823 17.6328L1.58682 22.4922C1.55936 22.6198 1.56431 22.7523 1.60123 22.8775C1.63815 23.0027 1.70585 23.1167 1.79816 23.209C1.89047 23.3013 2.00443 23.369 2.12964 23.4059C2.25486 23.4428 2.38733 23.4478 2.51495 23.4203L7.37432 22.3789C7.9189 22.2619 8.41808 21.9901 8.81182 21.5961L22.3235 8.0844C23.0396 7.368 23.4419 6.39654 23.4419 5.38361C23.4419 4.37069 23.0396 3.39923 22.3235 2.68283ZM18.0267 3.78752C18.4538 3.38354 19.0218 3.16213 19.6097 3.17037C20.1975 3.17861 20.759 3.41585 21.1747 3.83164C21.5904 4.24743 21.8275 4.80898 21.8356 5.39687C21.8437 5.98476 21.6222 6.55263 21.2181 6.97971L20.5149 7.68283L17.3228 4.49143L18.0267 3.78752ZM16.2173 5.59611L19.4095 8.7883L7.70791 20.4922C7.52684 20.6732 7.29732 20.798 7.04698 20.8516L3.36651 21.6406L4.15557 17.961C4.20916 17.7106 4.33396 17.4811 4.51495 17.3L16.2173 5.59611Z" fill="#848484"/>
  </svg>
  `,
  seenIcon = `<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_68_2131)">
  <path d="M23.2214 10.3929C21.8077 8.19795 20.0359 6.5564 17.9061 5.46823C18.4734 6.43549 18.7571 7.48181 18.7571 8.60718C18.7571 10.3278 18.1456 11.7996 16.9225 13.0226C15.6995 14.2457 14.2277 14.8572 12.5071 14.8572C10.7865 14.8572 9.31465 14.2457 8.09162 13.0226C6.86859 11.7996 6.25708 10.3278 6.25708 8.60718C6.25708 7.48181 6.54075 6.43549 7.10808 5.46823C4.97825 6.5564 3.20648 8.19795 1.79279 10.3929C3.02977 12.2995 4.58065 13.8178 6.44542 14.9479C8.31019 16.0779 10.3307 16.6429 12.5071 16.6429C14.6834 16.6429 16.704 16.0779 18.5687 14.9479C20.4335 13.8178 21.9844 12.2995 23.2214 10.3929ZM13.1767 5.03575C13.1767 4.84974 13.1116 4.69163 12.9814 4.56142C12.8512 4.43121 12.6931 4.36611 12.5071 4.36611C11.3445 4.36611 10.347 4.78231 9.51461 5.61471C8.68221 6.44711 8.26601 7.4446 8.26601 8.60718C8.26601 8.79319 8.33111 8.9513 8.46132 9.08151C8.59153 9.21172 8.74964 9.27682 8.93565 9.27682C9.12166 9.27682 9.27977 9.21172 9.40998 9.08151C9.54019 8.9513 9.60529 8.79319 9.60529 8.60718C9.60529 7.80733 9.88896 7.12373 10.4563 6.5564C11.0236 5.98906 11.7072 5.70539 12.5071 5.70539C12.6931 5.70539 12.8512 5.64029 12.9814 5.51008C13.1116 5.37987 13.1767 5.22176 13.1767 5.03575ZM25.0071 10.3929C25.0071 10.7091 24.9141 11.03 24.7281 11.3555C23.426 13.4946 21.6751 15.2083 19.4756 16.4964C17.276 17.7845 14.9531 18.4286 12.5071 18.4286C10.061 18.4286 7.7382 17.7822 5.53861 16.4894C3.33902 15.1966 1.58818 13.4853 0.286098 11.3555C0.100086 11.03 0.00708008 10.7091 0.00708008 10.3929C0.00708008 10.0767 0.100086 9.7558 0.286098 9.43028C1.58818 7.30044 3.33902 5.58913 5.53861 4.29635C7.7382 3.00357 10.061 2.35718 12.5071 2.35718C14.9531 2.35718 17.276 3.00357 19.4756 4.29635C21.6751 5.58913 23.426 7.30044 24.7281 9.43028C24.9141 9.7558 25.0071 10.0767 25.0071 10.3929Z" fill="#848484"/>
  </g>
  <defs>
  <clipPath id="clip0_68_2131">
  <rect width="25" height="17.8571" fill="white" transform="translate(0.00708008 0.571411)"/>
  </clipPath>
  </defs>
  </svg>
  `,
  seenLine = `<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_68_2131)">
  <path d="M23.2214 10.3929C21.8077 8.19795 20.0359 6.5564 17.9061 5.46823C18.4734 6.43549 18.7571 7.48181 18.7571 8.60718C18.7571 10.3278 18.1456 11.7996 16.9225 13.0226C15.6995 14.2457 14.2277 14.8572 12.5071 14.8572C10.7865 14.8572 9.31465 14.2457 8.09162 13.0226C6.86859 11.7996 6.25708 10.3278 6.25708 8.60718C6.25708 7.48181 6.54075 6.43549 7.10808 5.46823C4.97825 6.5564 3.20648 8.19795 1.79279 10.3929C3.02977 12.2995 4.58065 13.8178 6.44542 14.9479C8.31019 16.0779 10.3307 16.6429 12.5071 16.6429C14.6834 16.6429 16.704 16.0779 18.5687 14.9479C20.4335 13.8178 21.9844 12.2995 23.2214 10.3929ZM13.1767 5.03575C13.1767 4.84974 13.1116 4.69163 12.9814 4.56142C12.8512 4.43121 12.6931 4.36611 12.5071 4.36611C11.3445 4.36611 10.347 4.78231 9.51461 5.61471C8.68221 6.44711 8.26601 7.4446 8.26601 8.60718C8.26601 8.79319 8.33111 8.9513 8.46132 9.08151C8.59153 9.21172 8.74964 9.27682 8.93565 9.27682C9.12166 9.27682 9.27977 9.21172 9.40998 9.08151C9.54019 8.9513 9.60529 8.79319 9.60529 8.60718C9.60529 7.80733 9.88896 7.12373 10.4563 6.5564C11.0236 5.98906 11.7072 5.70539 12.5071 5.70539C12.6931 5.70539 12.8512 5.64029 12.9814 5.51008C13.1116 5.37987 13.1767 5.22176 13.1767 5.03575ZM25.0071 10.3929C25.0071 10.7091 24.9141 11.03 24.7281 11.3555C23.426 13.4946 21.6751 15.2083 19.4756 16.4964C17.276 17.7845 14.9531 18.4286 12.5071 18.4286C10.061 18.4286 7.7382 17.7822 5.53861 16.4894C3.33902 15.1966 1.58818 13.4853 0.286098 11.3555C0.100086 11.03 0.00708008 10.7091 0.00708008 10.3929C0.00708008 10.0767 0.100086 9.7558 0.286098 9.43028C1.58818 7.30044 3.33902 5.58913 5.53861 4.29635C7.7382 3.00357 10.061 2.35718 12.5071 2.35718C14.9531 2.35718 17.276 3.00357 19.4756 4.29635C21.6751 5.58913 23.426 7.30044 24.7281 9.43028C24.9141 9.7558 25.0071 10.0767 25.0071 10.3929Z" fill="#848484"/>
  </g>
  <defs>
  <clipPath id="clip0_68_2131">
  <rect width="25" height="17.8571" fill="white" transform="translate(0.00708008 0.571411)"/>
  </clipPath>
  </defs>
  </svg>
  `;
function addIconsToMenuItem(_) {
  if (!_.querySelector(".move-icon")) {
    let e = document.createElement("span");
    e.classList.add("move-icon", "icon"),
      (e.innerHTML = moveIcon),
      _.insertBefore(e, _.firstChild);
  }
  if (!_.querySelector(".seen-icon")) {
    let t = document.createElement("span");
    t.classList.add("seen-icon", "icon"),
      (t.innerHTML = seenIcon),
      t.addEventListener("click", toggleSeen),
      _.appendChild(t);
  }
  if (!_.querySelector(".edit-icon")) {
    let $ = document.createElement("span");
    $.classList.add("edit-icon", "icon"),
      ($.innerHTML = editIcon),
      _.appendChild($);
  }
}
const submenu = document.querySelector(".submenu-hidden");
function toggleSeen(_) {
  let e = _.currentTarget;
  e.classList.contains("seen")
    ? (e.classList.remove("seen"),
      (e.innerHTML = seenLine),
      e.classList.remove("line-through"))
    : (e.classList.add("seen"), e.classList.add("line-through"));
}
settingsIcon.addEventListener("click", function (_) {
  _.preventDefault(),
    "flex" === submenu.style.display
      ? (submenu.style.display = "none")
      : (submenu.style.display = "flex");
}),
  settingsIcon.addEventListener("click", toggleSettings),
  falseIcon.addEventListener("click", resetToDefault),
  trueIcon.addEventListener("click", resetToDefault);
const dropdowns = document.querySelectorAll(".dropdown"),
  lis1 = document.querySelector(".menu-item.one"),
  lis2 = document.querySelector(".menu-item.two");
dropdowns.forEach((_) => {
  _.querySelector(".dropdown-toggle").addEventListener("click", () => {
    _.classList.toggle("open");
  });
});
const spans = document.getElementById("spans");
settingsIcon.addEventListener("click", () => {
  spans.classList.toggle("open"),
    lis1.classList.toggle("open"),
    lis2.classList.toggle("open");
}),
 
  document.addEventListener("DOMContentLoaded", function () {
    let _ = document.querySelector(".custom-dropdown"),
      e = _.querySelector(".dropdown-selected"),
      t = _.querySelector(".dropdown-options");
    e.addEventListener("click", function () {
      _.classList.toggle("active");
    }),
      t.querySelectorAll("li").forEach((t) => {
        t.addEventListener("click", function () {
          (e.textContent = t.textContent), _.classList.remove("active");
        });
      }),
      document.addEventListener("click", function (e) {
        _.contains(e.target) || _.classList.remove("active");
      });
  });
const jobDescriptionSections = document.querySelectorAll(
  ".job-description-section"
);
function addIconsToMenuItem(_) {
  if (!_.closest(".submenu")) {
    if (!_.querySelector(".move-icon")) {
      let e = document.createElement("span");
      e.classList.add("move-icon", "icon"),
        (e.innerHTML = moveIcon),
        _.insertBefore(e, _.firstChild);
    }
    if (!_.querySelector(".seen-icon")) {
      let t = document.createElement("span");
      t.classList.add("seen-icon", "icon"),
        (t.innerHTML = seenIcon),
        t.addEventListener("click", toggleSeen),
        _.appendChild(t);
    }
    if (!_.querySelector(".edit-icon")) {
      let $ = document.createElement("span");
      $.classList.add("edit-icon", "icon"),
        ($.innerHTML = editIcon),
        _.appendChild($);
    }
  }
}
function toggleSeen(_) {
  let e = _.currentTarget;
  e.classList.contains("seen")
    ? (e.classList.remove("seen"),
      (e.innerHTML = seenLine),
      e.classList.remove("line-through"))
    : (e.classList.add("seen"), e.classList.add("line-through"));
}
jobDescriptionSections.forEach((_) => {
  let e = _.querySelector(".favorite"),
    t = e.querySelector("svg:first-of-type"),
    $ = e.querySelector("svg:last-of-type");
  _.addEventListener("mouseenter", () => {
    (t.style.display = "none"), ($.style.display = "block");
  }),
    _.addEventListener("mouseleave", () => {
      (t.style.display = "block"), ($.style.display = "none");
    });
}),
  settingsIcon.addEventListener("click", function (_) {
    _.preventDefault(),
      (submenu.style.display =
        "flex" === submenu.style.display ? "none" : "flex");
  });
