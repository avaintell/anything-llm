import { API_BASE } from "./constants";

export default {
  home: () => {
    return "/";
  },
  github: () => {
    return "https://github.com/avaintell";
  },
  discord: () => {
    return "https://discord.com/";
  },
  docs: () => {
    return "https://avaintell.com";
  },
  mailToMintplex: () => {
    return "mailto:info@avaintell.com";
  },
  hosting: () => {
    return "https://avaintell.com";
  },
  feedback: () => {
    return "https://avaintell.com";
  },
  appearance: () => {
    return "/system/appearance";
  },
  workspace: {
    chat: (slug) => {
      return `/workspace/${slug}`;
    },
  },
  exports: () => {
    return `${API_BASE.replace("/api", "")}/system/data-exports`;
  },
  admin: {
    system: () => {
      return `/admin/system-preferences`;
    },
    users: () => {
      return `/admin/users`;
    },
    invites: () => {
      return `/admin/invites`;
    },
    workspaces: () => {
      return `/admin/workspaces`;
    },
    chats: () => {
      return "/admin/workspace-chats";
    },
    appearance: () => {
      return "/admin/appearance";
    },
  },
};
