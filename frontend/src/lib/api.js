/**
 * API service for AI Study Buddy
 */

/**
 * Generates a study guide from the backend.
 * @param {string} topic 
 * @param {string} difficulty 
 * @returns {Promise<any>}
 */
export async function generateStudyGuide(topic, difficulty) {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  const endpoint = `${apiUrl}/generate`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, difficulty }),
    });

    if (!response.ok) {
      // Try to parse the error message if the backend sends one
      let errorMessage = `Server error: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.detail) {
          errorMessage = typeof errorData.detail === 'string' ? errorData.detail : JSON.stringify(errorData.detail);
        } else if (errorData && errorData.error) {
          errorMessage = errorData.error;
        }
      } catch (e) {
        // Ignore JSON parse error on non-json response
      }
      throw new Error(errorMessage);
    }

    try {
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error('Received an invalid response from the server.');
    }
  } catch (error) {
    // Handle network errors (e.g., backend not running)
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the study service. Please make sure the backend is running.');
    }
    // Re-throw other caught errors
    throw error;
  }
}
