import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { token } from "./api";
import App from './App'
import GlobalStyles from "./styles/global";
import "./styles/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import "./lang/i18n";

export const axiosUserClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/client"
});

export const axiosAdminClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/admin",
  headers: {
    Authorization: token
  }
});

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
