import { writable } from "svelte/store";

export const formData = writable({
  workspaceName: "",
  country: "",
  state: "",
  city: "",
  numberOfUsers: "",
  hearAboutUs: "",
  industry: "",
});
