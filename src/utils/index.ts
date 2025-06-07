export const generatePDF = async (): Promise<void> => {
    
  // Check if device is mobile
  if ("ontouchstart" in document.documentElement) {
    alert("PDF generation is not yet supported on mobile devices. Work in progress!");
    return;
  }

  try {
    const element = document.getElementById("resumeResult");
    if (!element) {
      throw new Error("Resume element not found");
    }

    const stylesheet = document.styleSheets[0];
    if (!stylesheet) {
      throw new Error("No stylesheet found");
    }

    const rule = `@page { size: ${element.offsetWidth}px ${element.offsetHeight + 1}px; }`;
    stylesheet.insertRule(rule, stylesheet.cssRules.length);

    window.print();
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Failed to generate PDF. Please try again.");
  }
}; 