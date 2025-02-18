document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const brasiliaTime = new Date(utc - 3 * 3600000);

  const day = brasiliaTime.getDay(); 
  const hour = brasiliaTime.getHours(); 


  if (day === 0 || hour < 7 || hour >= 18) {
    const indicatorContainer = document.querySelector(".intro div");
    if (indicatorContainer) {
      indicatorContainer.classList.add("closed");
    }
  }
});
