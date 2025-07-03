export type Link = {
  text: string;
  link?: string;
  external?: boolean;
  to?: string;
  onClick?: () => void,
};
export type Response = Array<string | Link>;
