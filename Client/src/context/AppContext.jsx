import { useState, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate()
  const loadCredits = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: {
          token,
        },
      });

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate",
        {
          prompt,
        },
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        loadCredits();
        return data.resultImage;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      loadCredits();
      if(data.creditBalace === 0){
        navigate('/buy')
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      loadCredits();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCredits,
    logout,
    generateImage
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
