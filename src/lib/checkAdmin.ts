// lib/checkAdmin.ts
export async function checkAdmin() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Unauthorized");

    const user = await res.json();

    if (user.account_type !== "admin") {
      throw new Error("Not admin");
    }

    return user;
  } catch (err) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    throw err;
  }
}
