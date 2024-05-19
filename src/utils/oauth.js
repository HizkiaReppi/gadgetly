export const generateGoogleOAuthUrl = () => {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_PUBLIC_GOOGLE_REDIRECT_URI,
    response_type: import.meta.env.VITE_PUBLIC_GOOGLE_RESPONSE_TYPE,
    scope: import.meta.env.VITE_PUBLIC_GOOGLE_SCOPE,
    access_type: import.meta.env.VITE_PUBLIC_GOOGLE_ACCESS_TYPE,
    prompt: import.meta.env.VITE_PUBLIC_GOOGLE_PROMPT,
  });

  return `${baseUrl}?${params.toString()}`;
};
