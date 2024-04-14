export type comment = {
    user: string;
    message: string;
  };
  
export type Lover = {
    name: string;
    password: string;
    age: number;
    sex: string;
    description: string;
    hobbies: string[];
    photo: string;
    comments: comment[];
  };