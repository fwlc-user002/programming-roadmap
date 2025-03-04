function loadRoadmap(roadmap) {
  let filePath = `roadmaps/${roadmap}.html`;

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data;

      document.querySelector(".roadmap-categories").style.display = "none";

      setTimeout(() => {
        if (typeof mermaid !== "undefined") {
          console.log("♻️ Re-initializing Mermaid...");
          mermaid.init(undefined, document.querySelectorAll(".mermaid"));
        } else {
          console.log("⚠️ Reloading Mermaid.js...");
          loadMermaid();
        }
      }, 100);
    })
    .catch((error) => {
      document.getElementById("content").innerHTML =
        "<p>⚠️ Failed to load the roadmap.</p>";
      console.error("Error loading roadmap:", error);
    });
}

function loadMermaid() {
  let script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
  script.onload = () => {
    console.log("✅ Mermaid.js loaded dynamically.");
    mermaid.initialize({ startOnLoad: true });
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
  };
  document.body.appendChild(script);
}
