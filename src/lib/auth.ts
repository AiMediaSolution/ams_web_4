"use client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function refreshToken(): Promise<string | null> {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    redirectToLogin();
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) throw new Error("Refresh token failed");

    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data.accessToken;
  } catch (err) {
    console.error("Error refreshing token:", err);
    redirectToLogin();
    return null;
  }
}

function redirectToLogin() {
  if (typeof window !== "undefined") {
    if (window.location.pathname !== "/admin/login") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/admin/login";
    }
  }
}

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  let token = localStorage.getItem("accessToken");

  if (!token) {
    redirectToLogin();
    return new Response(null, { status: 401 });
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  let res = await fetch(url, options);

  if (res.status === 401) {
    token = await refreshToken();
    if (!token) return new Response(null, { status: 401 });

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
    res = await fetch(url, options);
  }

  return res;
}
