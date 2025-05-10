const API_BASE_URL = import.meta.env.VITE_API_URL;

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

export const sendBookingEmail = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-booking-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
