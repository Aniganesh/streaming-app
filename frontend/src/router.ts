import { createBrowserRouter, defer } from "react-router-dom";
import RootLayout from "./RootLayout";
import { useStore } from "./Store";
import Fetch from "@/FetchWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    loader: async () => {
      const { token, fetchMe } = useStore.getState();
      Fetch.setCommonHeaders({ Authorization: `Bearer ${token}` });
      return defer({
        loader: Promise.all([fetchMe()]),
      });
    },
    children: [
      {
        path: "",
        lazy: async () => {
          const { default: Component } = await import("./Screens/Home");
          return { Component };
        },
      },
      {
        path: "/signup",
        lazy: async () => {
          const { default: Component } = await import("./Screens/SignUp");
          return { Component };
        },
      },
      {
        path: "/host",
        lazy: async () => {
          const { default: Component } = await import("./Screens/Host");
          return { Component };
        },
      },
      {
        path: "/participant",
        lazy: async () => {
          const { default: Component } = await import("./Screens/Participant");
          return { Component };
        },
      },
    ],
  },
]);

export default router;
