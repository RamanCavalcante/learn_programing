export type question = {
  query: string;
  options: option[];
  selected_index: number;
};

export type option = {
  answer: string;
  value: boolean;
  obs: string;
};
