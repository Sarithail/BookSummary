function openSummarizer() {
  const section = document.getElementById("summarizer-section");
  section.style.display = "block";
  window.location.href = "#summarizer-section";
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('summarizer').scrollIntoView({ behavior: 'smooth' });
});


function generateSummary() {
  const textArea = document.getElementById("bookInput");
  const fileInput = document.getElementById("fileInput");
  const summaryOutput = document.getElementById("summaryOutput");

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      summaryOutput.innerText = summarizeText(text);
    };
    reader.readAsText(fileInput.files[0]);
  } else if (textArea.value.trim() !== "") {
    summaryOutput.innerText = summarizeText(textArea.value);
  } else {
    alert("Please input book text or upload a file.");
  }
}

function summarizeText(text) {
  const sentences = text.split(".").filter(Boolean);
  return sentences.slice(0, 3).join(". ") + (sentences.length > 3 ? "..." : "");
}
