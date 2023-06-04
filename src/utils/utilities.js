export const validateJSON = (jsonString) => {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (e) {
      return false;
    }
  };
  