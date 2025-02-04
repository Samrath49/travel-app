export const loadGooglePlacesScript = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window?.google?.maps?.places?.AutocompleteService) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com/maps/api/js"]'
    );
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
