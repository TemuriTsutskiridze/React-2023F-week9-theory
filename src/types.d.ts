type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TPosts = TPost[] | null;

type TTodo = {
  id: number;
  todo: string;
  completed: boolean;
};

type TTodos = TTodo[] | null;
