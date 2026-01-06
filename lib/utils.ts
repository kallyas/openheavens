// Utility functions

// Format date for display
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

// Generate calendar file for download
export function generateCalendarFile(
  title: string,
  description: string,
  location: string,
  startDate: Date,
  endDate: Date
): string {
  const formatCalendarDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Open Heavens Toronto//NONSGML v1.0//EN",
    "BEGIN:VEVENT",
    `DTSTART:${formatCalendarDate(startDate)}`,
    `DTEND:${formatCalendarDate(endDate)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
}

// Download calendar file
export function downloadCalendar(
  title: string,
  description: string,
  location: string,
  startDate: Date,
  endDate: Date
): void {
  const icsContent = generateCalendarFile(
    title,
    description,
    location,
    startDate,
    endDate
  );
  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "open-heavens-2025.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Share to social media
export function shareToSocial(
  platform: "facebook" | "twitter" | "whatsapp",
  url: string,
  text: string
): void {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
      break;
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, "_blank", "width=600,height=400");
  }
}
