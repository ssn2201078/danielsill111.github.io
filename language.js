function switchLanguage(lang) {
    // 存到 localStorage
    localStorage.setItem("language", lang);

    // 更新 HTML 的 lang 屬性
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");

    // 更新語言選單 active 樣式
    const options = document.querySelectorAll(".lang-option");
    options.forEach(opt => opt.classList.remove("active"));
    if (lang === "zh") {
        options[0].classList.add("active");
        options[0].innerText = "中文";
        options[1].innerText = "English";
    } else {
        options[1].classList.add("active");
        options[0].innerText = "中文";
        options[1].innerText = "English";
    }

    // 更新導覽列和頁面文字
    const title = document.title;

    if (lang === "zh") {
        document.getElementById("navHome").innerText = "首頁";
        document.getElementById("navAbout").innerText = "關於作者";
        document.getElementById("navPlay").innerText = "玩法說明";

        if (title.includes("首頁")) {
            document.getElementById("pageTitle").innerText = "首頁";
            document.getElementById("desc").innerText = "快節奏射擊遊戲，挑戰你的反應力！";
            document.getElementById("startBtn").innerText = "開始遊戲";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | 製作者：danielsill111";
        } else if (title.includes("關於作者")) {
            document.getElementById("pageTitle").innerText = "關於作者";
            document.getElementById("desc").innerText = "這個遊戲由 danielsill111 製作，並且分享在 Scratch 平台。";
            document.getElementById("scratchBtn").innerText = "前往我的 Scratch 個人檔案";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | 製作者：danielsill111";
        } else if (title.includes("玩法說明")) {
            document.getElementById("pageTitle").innerText = "玩法說明";
            document.getElementById("desc").innerText = "使用滑鼠點擊射擊殭屍，避免被攻擊，盡量獲得高分！";
            document.getElementById("scratchBtn").innerText = "前往我的 Scratch 個人檔案";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | 製作者：danielsill111";
        }
    } else {
        document.getElementById("navHome").innerText = "Home";
        document.getElementById("navAbout").innerText = "About";
        document.getElementById("navPlay").innerText = "How to Play";

        if (title.includes("首頁")) {
            document.getElementById("pageTitle").innerText = "Home";
            document.getElementById("desc").innerText = "Fast-paced shooting game, challenge your reflexes!";
            document.getElementById("startBtn").innerText = "Play Game";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | Creator: danielsill111";
        } else if (title.includes("關於作者")) {
            document.getElementById("pageTitle").innerText = "About";
            document.getElementById("desc").innerText = "This game was created by danielsill111 and shared on Scratch.";
            document.getElementById("scratchBtn").innerText = "Visit my Scratch profile";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | Creator: danielsill111";
        } else if (title.includes("玩法說明")) {
            document.getElementById("pageTitle").innerText = "How to Play";
            document.getElementById("desc").innerText = "Click with the mouse to shoot zombies, avoid attacks, and aim for a high score!";
            document.getElementById("scratchBtn").innerText = "Visit my Scratch profile";
            document.getElementById("footer").innerText = "© 2026 Zombie Shooter | Creator: danielsill111";
        }
    }
}

// 頁面載入時自動套用上次選擇的語言
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "zh"; // 預設中文
    switchLanguage(savedLang);
});
