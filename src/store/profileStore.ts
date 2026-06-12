import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProfileState {
  name: string;
  email: string;

  updateProfile: (
    name: string,
    email: string
  ) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      name: "Jahnavi",
      email: "student@example.com",

      updateProfile: (name, email) =>
        set({
          name,
          email,
        }),
    }),
    {
      name: "profile-storage",
    }
  )
);