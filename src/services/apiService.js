const API_BASE_URL = "http://localhost:3000/api";

export const createBooking = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return {
      status: response.status,
      ok: response.ok,
      data: responseData,
    };
  } catch (error) {
    console.error("Error when booking:", error);
    throw error;
  }
};
