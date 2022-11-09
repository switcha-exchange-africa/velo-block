declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    registration: any;
  }
}

self.addEventListener("push", (e: any) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
});

export {};
