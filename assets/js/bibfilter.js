document.addEventListener("DOMContentLoaded", function () {
    window.showTab = function (tabName) {
      document.querySelectorAll(".bibliography > li").forEach((element) => {
        const text = element.innerText.toLowerCase();
        const isInternational = text.includes("ieee") || text.includes("acm") || text.includes("springer") || text.includes("elsevier") || text.includes("american journal");
        const isDomestic = text.includes("korea") || text.includes("한국") || text.includes("정보보호") || text.includes("전자공학") || text.includes("학회");
  
        if (tabName === "all" || (tabName === "international" && isInternational) || (tabName === "domestic" && isDomestic)) {
          element.style.display = "list-item"; // 보이기
        } else {
          element.style.display = "none"; // 숨기기
        }
      });
  
      // 탭 UI 상태 업데이트
      document.querySelectorAll(".nav-tabs li").forEach(tab => tab.classList.remove("active"));
      document.querySelector(`.nav-tabs li[onclick="showTab('${tabName}')"]`).classList.add("active");
    };
  
    // 페이지 로드 시 모든 논문 표시
    showTab("all");
  });