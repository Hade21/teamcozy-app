export interface IPost {
  caption?: string;
  creator?: string;
  _id?: string;
  tags?: string[];
  selectedFile?: string;
  likeCount?: number;
  createdAt?: Date;
}
export interface IUser {
  user?: string;
  username?: string;
  password: string;
  email?: string;
  gender?: string;
  dateofbirth?: Date;
  phone?: string;
}
export interface ILogin {
  uid: string;
  username: string;
  token: string;
}
export interface IRegister {
  username: string;
  password: string;
}
