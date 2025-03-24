const profileToggle = document.querySelector(".profile-toggle");
profileToggle.addEventListener("click", (_) => {
  _.preventDefault();
  let e = document.getElementById("dropdown-menu");
  e.classList.contains("active")
    ? ((e.style.opacity = 0),
      setTimeout(() => {
        e.classList.remove("active"), (e.style.visibility = "hidden");
      }, 300))
    : (e.classList.add("active"),
      (e.style.visibility = "visible"),
      setTimeout(() => {
        e.style.opacity = 1;
      }, 10));
}),
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
var moveIcon = `<svg></svg>
  `,
  editIcon = `<svg></svg>
  `,
  seenIcon = `<svg></svg>
  `,
  seenLine = `<svg></svg>
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
function toggleSidebar() {
  let _ = document.getElementById("sidebar"),
    e = document.getElementById("white");
  _.classList.contains("active")
    ? ((_.style.animation = "slideOutIn 0.4s ease-in-out forwards"),
      setTimeout(() => {
        _.classList.remove("active"),
          (_.style.animation = ""),
          e.classList.remove("active");
      }, 400))
    : (_.classList.add("active"),
      (_.style.animation = "slideIn 0.4s ease-in-out forwards"),
      e.classList.add("active"));
}
settingsIcon.addEventListener("click", () => {
  spans.classList.toggle("open"),
    lis1.classList.toggle("open"),
    lis2.classList.toggle("open");
}),
  document.addEventListener("DOMContentLoaded", () => {
    let _ = document.getElementById("app_tab"),
      e = document.getElementById("caret-icon"),
      t = document.querySelectorAll(
        ".menu-item.toggle-icons.one, .menu-item.toggle-icons.two"
      );
    _.addEventListener("click", () => {
      t.forEach((_) => {
        _.classList.toggle("open");
      });
      let _ = "rotate(180deg)" === e.style.transform;
      (e.style.transform = _ ? "rotate(0deg)" : "rotate(180deg)"),
        (e.style.transition = "transform 0.3s ease");
    });
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
