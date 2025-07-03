export type Response = Array<
  string |
  {
    text: string;
    link?: string;
    external?: boolean;
    onClick?: () => void,
  }
>;
