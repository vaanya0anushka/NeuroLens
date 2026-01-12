function analyzeTranscript() {
  const transcript = document.getElementById("transcript").value;
  const resultsList = document.getElementById("results");
  const outputBox = document.getElementById("output");

  resultsList.innerHTML = "";

  if (transcript.trim() === "") {
    alert("Please paste a meeting transcript first.");
    return;
  }

  // Mock AI Analysis (Demo Purpose)
  const insights = [
    "Speaker A dominated the discussion.",
    "Some participants had limited participation.",
    "Overall engagement level was moderate.",
    "Recommendation: Encourage quieter members to share ideas."
  ];

  insights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    resultsList.appendChild(li);
  });

  outputBox.style.display = "block";
}


