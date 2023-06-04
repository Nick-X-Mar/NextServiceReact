import { useState, useEffect } from "react";
import axios from "axios";
import { validateJSON } from '../utils/utilities';

const useFetch = (url, method, body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: method,
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
        };

        // validate body
        if (body) {
          if (!validateJSON(body)) {
            throw new Error("Invalid JSON in request body");
          }
          config.data = body;
        }

        const response = await axios(config);

        // handle different HTTP status codes here
        if (response.status === 400) {
          throw new Error("Bad Request");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        if (response.status === 403) {
          throw new Error("Forbidden");
        }
        if (response.status === 500) {
          throw new Error("Server Error");
        }

        // validate response data
        if (!validateJSON(response.data)) {
          throw new Error("Invalid JSON in response");
        }

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, error, isLoading };
};

export default useFetch;
